import React from "react";

function Container({ children, className }) {
  return (
    <>
      <div className={` ${className}`}>
        <div className="lg:container lg:mx-auto px-5">{children}</div>
      </div>
    </>
  );
}

export default Container;
