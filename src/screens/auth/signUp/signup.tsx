'use client'
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import useFirebaseAuth from "@/hooks/auth/useFirebaseAuth";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent } from "@/utils/types";
import { defaultFormUserFields } from "@/utils/const";
import { db } from "../../../../firebase";

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
      const userData = {
        'name': data.name,
        'email': userRef.user.email,
        'uid': userRef.user.uid,
      }
      console.log(userData);
      const docRef = await addDoc(collection(db, "users"), userData);
      console.log("Document written with ID: ", docRef.id);
      router.push('/');
    } catch (error: any) {
      console.log('Error: ', error.message);
    }
  };

  return (
    <>
      <h1>Registro</h1>
      <h3>lolo</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore necessitatibus et repellat ut? Dolor id quos alias repellendus! Dolores provident natus iure debitis tenetur sint molestias aliquid eaque id culpa?</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nombre completo"
            value={data.name}
            onChange={handleChange}
            required
          />
        </label>

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

        <button type="submit" className="btn btn-primary">Registrar</button>
      </form>
    </>
  )
}
