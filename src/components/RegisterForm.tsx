"use client";

import { register } from "@/hooks/register";
import { useState } from "react";

function RegisterForm() {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await register(value.email, value.password);
    console.log(data);
  };

  return (
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
        Registrarse
      </button>
    </form>
  );
}

export default RegisterForm;
