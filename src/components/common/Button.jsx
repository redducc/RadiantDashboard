import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick&&onClick}
      style={{
        padding: "10px 16px",
        borderRadius: "8px",
        background: " #18077F",
        color: "white",
        border: "none",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
