import { useEffect, useState } from "react";
import { createContext } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import {app} from "../firebase/firebase.config"

const AuthContext=createContext(null);

const auth = getAuth(app);

function AuthProvider({children}) {
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true);

const createUser=(email,passwod)=>{
  setLoading(true);
  return createUserWithEmailAndPassword(auth,email,passwod);
}

const signInUser=(email,passwod)=>{
  setLoading(true);

}

useEffect(()=>{
    const unSubcribe=onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser);
    console.log('current user',currentUser);
    setLoading(false);
  })
  return()=>{
    return unSubcribe;
  }
},[])

    const appInfo ={
         user,
         loading,
         createUser
    }

  return (
    <AuthContext.Provider value={appInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider