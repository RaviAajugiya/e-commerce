import React from "react";

function IconContainer({ children }) {
  return (
    <div className="relative rounded-full border bg-lightbg border-primary-border size-10 flex items-center justify-center">
      {children}      
    </div>
  );
}

export default IconContainer;
