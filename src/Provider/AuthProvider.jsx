import { useEffect, useState } from "react";
import { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, passwod) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, passwod);
  };

  const signInUser = (email, passwod) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, passwod);
  };

  const googleSignInUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const userUpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      setLoading(false);
    });
    return () => {
      return unSubcribe;
    };
  }, []);

  const appInfo = {
    user,
    loading,
    createUser,
    signInUser,
    googleSignInUser,
    logOut,
    userUpdateProfile,
  };

  return (
    <AuthContext.Provider value={appInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
