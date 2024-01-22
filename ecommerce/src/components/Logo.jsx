import React from "react";
import { FaShoppingBag } from "react-icons/fa";

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <FaShoppingBag className="text-blue-600 w-6 h-6" />
      <span className="text-2xl font-medium">Shopper</span>
    </div>
  );
}

export default Logo;
