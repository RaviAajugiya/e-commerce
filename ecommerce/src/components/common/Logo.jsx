import React from "react";
import { FaShoppingBag } from "react-icons/fa";

function Logo({className}) {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <FaShoppingBag className='text-blue-600 size-6' />
      <span className="text-2xl font-medium">Shopper</span>
    </div>
  );
}

export default Logo;
