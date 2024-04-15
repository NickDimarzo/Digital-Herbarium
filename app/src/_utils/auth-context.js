"use client";
 
import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "./firebase";
import { createUserPlantsCollection } from "../_services/DbServices";

 
const AuthContext = createContext();

 
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
 
  const [loading, setLoading] = useState(false);

  const createUser = (email, password, setLoading) => {
    setLoading(true); // Start loading
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
    
        // Create the user's plant collection
        return createUserPlantsCollection(user.uid);
      })
      .then(() => {
        setLoading(false); // Stop loading
        alert('Data insertion complete!');
      })
      .catch((error) => {
        setLoading(false); // Stop loading
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
 
  const emailSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
 
  const firebaseSignOut = () => {
    return signOut(auth);
  };
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);
 
  return (
    <AuthContext.Provider value={{ user, emailSignIn, createUser, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};
 
export const useUserAuth = () => {
  return useContext(AuthContext);
};