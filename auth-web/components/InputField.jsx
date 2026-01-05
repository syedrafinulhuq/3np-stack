"use client";

export default function InputField({ label, type, value, onChange }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={{ display: "block", padding: 6, width: 260 }}
      />
    </div>
  );
}
