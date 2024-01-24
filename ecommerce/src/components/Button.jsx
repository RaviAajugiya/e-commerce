import React from "react";

function Button({ children, text, className = "" }) {
  return (
    <div
      className={`bg-primary hover:bg-blue-700 cursor-pointer w-fit py-2 px-6 text-white border rounded-lg ${className}`}
    >
      {children}
      {text}
    </div>
  );
}

export default Button;

//fcgoogle icon not visible
