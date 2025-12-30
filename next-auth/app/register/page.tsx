"use client";

import { useState } from "react";
import InputField from "../../components/InputField";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
  }>({});

  const validate = () => {
    const newErrors: {
      name?: string;
      email?: string;
      password?: string;
    } = {};

    // Name
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Password
    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert("Registration success (demo)");
    setErrors({});
  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <InputField
                  label="Name"
                  type="text"
                  value={form.name}
                  onChange={(e: { target: { value: any; }; }) => setForm({ ...form, name: e.target.value })} name={undefined}        />
        {errors.name && (
          <p style={{ color: "red" }}>{errors.name}</p>
        )}

        <InputField
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(e: { target: { value: any; }; }) => setForm({ ...form, email: e.target.value })} name={undefined}        />
        {errors.email && (
          <p style={{ color: "red" }}>{errors.email}</p>
        )}

        <InputField
                  label="Password"
                  type="password"
                  value={form.password}
                  onChange={(e: { target: { value: any; }; }) => setForm({ ...form, password: e.target.value })} name={undefined}        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password}</p>
        )}

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}
