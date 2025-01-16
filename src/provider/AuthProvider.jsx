/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext= createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] =useState(true);
    const googleProvider = new GoogleAuthProvider();
    const FacebookProvider = new FacebookAuthProvider();

    const createSignUp = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const createLogin = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }

    const userProfile = (displayName, photoURL) =>{
        // setLoading(true);
        return updateProfile(auth.currentUser,{displayName, photoURL})
    }

    const googleSignUp = () =>{
        // setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const facebookSignUp = () =>{
        setLoading(true);
        return signInWithPopup(auth, FacebookProvider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
            console.log(currentUser);
        })
        return () =>{
            return unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        createSignUp,
        createLogin,
        logOut,
        userProfile,
        googleSignUp,
        facebookSignUp
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;