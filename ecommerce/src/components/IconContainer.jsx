import React from "react";

function IconContainer({ children }) {
  return (
    <div className="relative rounded-full border bg-lightbg border-primary-border size-10 flex items-center justify-center">
      {children}
      <div className="bg-primary rounded-full size-4 flex items-center justify-center absolute -right-1 -top-1 text-xs p-2 top-0">
        {4}
      </div>
    </div>
  );
}

export default IconContainer;
