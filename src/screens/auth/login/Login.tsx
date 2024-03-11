'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import useFirebaseAuth from "@/hooks/auth/useFirebaseAuth";
import { ChangeEvent, FormEvent } from "@/utils/types";
import { defaultFormFields } from "@/utils/const";
import styles from "./Login.module.scss";
import logoApp from '@/assets/logo.png'
import Image from "next/image";


export default function LoginPage() {
  const { logIn } = useFirebaseAuth();
  const router = useRouter();

  const [data, setData] = useState(defaultFormFields);

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
      await logIn(data.email, data.password);
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <main className={styles.login}>
      <h1>Welcome to MovieApp</h1>
      <Image src={logoApp} alt="logo" width={48} height={48} />

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Correo electrónico"
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

        <button type="submit" className="btn btn-primary">Log In</button>
      </form>
      <Link href="/auth/signup">Don&apos;t have an account?, Create</Link>
    </main>
  )
}
