"use client";

export default function InputField({ label, type = "text", name, value, onChange}){
    return (
        <div style={{marginBottom: "10px"}}>
            <label style={{color:"blue"}}>{label}</label>
            <input 
                type={type}
                value={value}
                onChange={onChange}
                style={{display: "block", padding: "6px", width: "260px"}}
            />
        </div>
    );
}