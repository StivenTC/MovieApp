import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useFirebaseAuth from "../../hooks/auth/useFirebaseAuth";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { authUser, loading } = useFirebaseAuth();

  console.log('===========================')
  console.log(authUser)
  console.log('===========================')

  useEffect(() => {
    if (!authUser.uid && !loading) {
      router.push("/auth/login");
    }
  }, [router, authUser, loading]);
  return (
    loading ? <h1>Cargando...</h1> :
      <>{authUser.uid ? children : null}</>
  );
};

export default ProtectedRoute;