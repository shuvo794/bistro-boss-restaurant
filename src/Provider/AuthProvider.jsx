import { useState } from "react";
import { createContext } from "react"
import { getAuth } from "firebase/auth";
import {app} from "../Firebase/firebase.config"

const AuthContext=createContext(null);

const auth = getAuth(app);

function AuthProvider({children}) {
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true);
    const appInfo ={
         user,
         loading
    }

  return (
    <AuthContext.Provider value={appInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider