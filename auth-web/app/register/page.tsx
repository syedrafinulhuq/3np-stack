"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import InputField from "../../components/InputField";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post("http://localhost:3000/api/register", form);
      router.push("/login");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <InputField label="Name" type="text"
          value={form.name}
          onChange={(e:any)=>setForm({...form,name:e.target.value})}/>

        <InputField label="Email" type="email"
          value={form.email}
          onChange={(e:any)=>setForm({...form,email:e.target.value})}/>

        <InputField label="Password" type="password"
          value={form.password}
          onChange={(e:any)=>setForm({...form,password:e.target.value})}/>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}
