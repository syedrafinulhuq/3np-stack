"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import InputField from "../../components/InputField";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:3000/api/login", form);

      localStorage.setItem("token", res.data.token);

      router.push("/dashboard");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <InputField label="Email" type="email"
          value={form.email}
          onChange={(e:any)=>setForm({...form,email:e.target.value})}/>

        <InputField label="Password" type="password"
          value={form.password}
          onChange={(e:any)=>setForm({...form,password:e.target.value})}/>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
