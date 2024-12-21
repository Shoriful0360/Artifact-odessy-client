/* eslint-disable no-undef */
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";

export const AuthContext=createContext('')

const AuthProvider = ({children}) => {
    const {loading,setLoading}=useState(true)
    const [user,setUser]=useState('')

    // user create
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // logout user
    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,async (currentUser)=>{
           setUser(currentUser)
           setLoading(false)
        })
        return()=>{
            unSubscribe()
        }
    },[])

    const info={
        createUser,user,setUser,logOut
    }
    return (
        <div>
           <AuthContext.Provider value={info}>
            {children}
            </AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;