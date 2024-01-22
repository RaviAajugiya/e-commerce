import React from "react";

function Button({ text, className = "" }) {
  return (
    <div
      className={`bg-primary hover:bg-blue-700 cursor-pointer w-fit py-2 px-6 text-white border rounded-lg ${className}`}>
      {text}
    </div>
  );
}

export default Button;
