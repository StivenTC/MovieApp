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
    }
  }, [router, authUser, loading]);
  return (
    loading ? <h1>Cargando...</h1> :
      <>{authUser ? children : null}</>
  );
};

export default ProtectedRoute;