import React from "react";

const Input = ({ id, label, value, onChange, placeholder }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      }}
    >
      <label htmlFor={id} style={{
        fontWeight:"600",
        fontSize:"14px"
      }}>{label}</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          padding: "14px 16px 14px 16px",
          borderRadius: " 12px",
          border: "1px solid #E0E0E0",
          gap: "12px",
        }}
      />
    </div>
  );
};

export default Input;
