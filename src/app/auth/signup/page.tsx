import SignUpPage from "@/screens/auth/signUp/signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Create an account',
}

export default function SignUp() {
  return (
    <>
      <SignUpPage />
    </>
  );
}
