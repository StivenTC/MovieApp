'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import useFirebaseAuth from "@/hooks/auth/useFirebaseAuth";
import { ChangeEvent, FormEvent } from "@/utils/types";
import { defaultFormFields } from "@/utils/const";

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
      console.log(data)
      await logIn(data.email, data.password);
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <main>
      <h1>login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Correo electrónico"
            value={data.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="contraseña">Contraseña
          <input
            type="password"
            id="password"
            name="password"
            placeholder="***********"
            value={data.password}
            onChange={handleChange}
            required />
        </label>

        <button type="submit" className="btn btn-primary">Iniciar sesión</button>
      </form>
      <Link href="/auth/signup">registrar</Link>
    </main>
  )
}
