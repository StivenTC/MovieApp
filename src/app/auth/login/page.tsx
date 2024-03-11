import LoginPage from "@/screens/auth/login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Welcome',
}

export default function SignUp() {
  return (
    <>
      <LoginPage />
    </>
  );
}
