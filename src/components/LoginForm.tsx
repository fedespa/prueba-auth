"use client";

import { login } from "@/hooks/login";
import { prueba } from "@/hooks/prueba";
import { useState } from "react";

function LoginForm() {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await login(value.email, value.password);
    console.log(data);
  };

  const handleOnClick = async () => {
    const data = await prueba()
  }

  return (
    <>
      <form className="flex flex-col gap-3 p-8" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name=""
            id=""
            onChange={(e) =>
              setValue((prevState) => ({ ...prevState, email: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name=""
            id=""
            onChange={(e) =>
              setValue((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
          />
        </div>
        <button
          type="submit"
          className="border px-6 py-1.5 rounded-xl cursor-pointer"
        >
          Iniciar sesión
        </button>
      </form>
      <button className="border rounded-2xl px-6 py-1.5 mt-5" onClick={handleOnClick}>Prueba</button>
    </>
  );
}

export default LoginForm;
