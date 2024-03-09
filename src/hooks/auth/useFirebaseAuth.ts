import { useState, useEffect } from 'react'
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, NextOrObserver, User } from "firebase/auth";
import { auth } from '../../../firebase';

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const logIn = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signUp = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const logOut = async () => {
    setLoading(true);
    setAuthUser(null);
    await signOut(auth);
  };

  const userStateListener = (callback: NextOrObserver<User>) => {
    return onAuthStateChanged(auth, callback)
  }

  useEffect(() => {
    const unsubscribe = userStateListener((user) => {
      if (user) {
        setAuthUser(user)
      }
    });
    setLoading(false);
    return unsubscribe
  }, [authUser]);

  return {
    authUser,
    loading,
    logIn,
    signUp,
    logOut
  };
}