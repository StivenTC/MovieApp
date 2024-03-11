'use client'
import { useState } from "react";
import useFirebaseAuth from "@/hooks/auth/useFirebaseAuth";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent } from "@/utils/types";
import { defaultFormUserFields } from "@/utils/const";
import styles from "../login/Login.module.scss";
import Image from "next/image";
import logoApp from '@/assets/logo.png'
import Link from "next/link";

export default function SignUpPage() {

  const { signUp } = useFirebaseAuth();
  const router = useRouter();
  const [data, setData] = useState(defaultFormUserFields);

  const handleChange = (event: ChangeEvent) => {
    const newKey = event.target.name;
    const newValue = event.target.value;
    // Update the state of the form data
    setData({
      ...data,
      [newKey]: newValue,
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const userRef = await signUp(data.email, data.password);
      console.log("User registered", userRef.user);
      router.push('/');
    } catch (error: any) {
      console.log('Error: ', error.message);
    }
  };

  return (
    <main className={styles.login}>
      <h1>Create account</h1>
      <Image src={logoApp} alt="logo" width={48} height={48} />

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
        />

        <label htmlFor="contraseña">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="***********"
          value={data.password}
          onChange={handleChange}
          required />

        <button type="submit" className="btn btn-primary">Register</button>
      </form>

      <Link href="/auth/login">Have an account?, Login</Link>

    </main>
  )
}
