/* eslint-disable no-undef */
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";

export const AuthContext=createContext('')

const AuthProvider = ({children}) => {
    const provider=new GoogleAuthProvider()
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

    // login with email and passwore
 
const loginUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}


// login with google
const googleLogin=()=>{
return signInWithPopup(auth,provider)

}

// update user profile
const updateUserProfile=(name,photoUrl)=>{

    return updateProfile(auth.currentUser,{
        displayName:name,photoURL:photoUrl
    })
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
        createUser,user,setUser,logOut,loginUser,googleLogin,updateUserProfile
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