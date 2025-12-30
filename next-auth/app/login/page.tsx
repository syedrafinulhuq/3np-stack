"use client";

import { useState } from "react";
import InputField from "../../components/InputField";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};

    // Email Validation — basic format check
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Password Validation
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

    alert("Login success (demo)");
    setErrors({});
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
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

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
