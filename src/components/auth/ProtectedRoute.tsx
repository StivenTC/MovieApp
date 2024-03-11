'use client'
import useFirebaseAuth from "@/hooks/auth/useFirebaseAuth";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";

const ProtectedRoute = ({ children }: { children: JSX.Element; }) => {
  const router = useRouter();
  const { authUser, loading } = useFirebaseAuth();

  useEffect(() => {
    if (!authUser && !loading) {
      router.push("/auth/login");
    } else {
      router.push("/");
    }
  }, [router, authUser, loading]);
  return (
    loading ? <main id="loading"><h1>Loading...</h1> </main> :
      <>{authUser ? children : null}</>
  );
};

export default ProtectedRoute;