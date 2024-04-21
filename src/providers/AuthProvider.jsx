import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../_firebase/firebase.init';

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const signInWithGoogle = (email,password) => signInWithEmailAndPassword(auth,email,password);
    const signUpWithGoogle = (email,password) => createUserWithEmailAndPassword(auth,email,password);
    const logout = () => signOut(auth);
    const authInfo = {
      user,
      loading,
      signInWithGoogle,
      signUpWithGoogle,
      logout,
    };
    useEffect(() =>{
      const unsubscribe = onAuthStateChanged(auth,currentUser => {
          setUser(currentUser);
          console.log("Auth state changed",currentUser?.email);
          setLoading(false);
      })
      //stop observing while unmounting
      return () => unsubscribe(); 
      
  },[]);
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
