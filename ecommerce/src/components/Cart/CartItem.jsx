import React, { useState } from "react";
import DummyImage from "./../../../dist/assets/DummyProduct-zcKuMWvU.png";
import Container from "../common/Container";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

function CartItem() {
  const [count, setCount] = useState(1);
  return (
    <>
      <div className="bg-lightbg text-white mb-4 py-2 px-4 rounded-lg lg:container lg:mx-auto ">
        <div className="py-2">
          <div className="md:flex md:justify-between">
            <div className="flex gap-4 ">
              <div className="">
                <img
                  src="https://placehold.co/150"
                  alt=""
                  className="max-w-[100px]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="line-clamp-2 ">
                  SAMSUNG Galaxy S24 Ultra 5G
                </span>
                <p className="text-xl">
                  <span className="text-primary">$59 </span>
                  <s className="text-secondary-text text-sm">$99</s>
                  <span className="text-sm"> 20% off</span>
                </p>
                <span className="text-secondary-text">
                  Seller:Flashstar Commerce
                </span>
              </div>
            </div>
            <div className="flex text-secondary-text items-center md:flex-col gap-3 my-3 md:my-0 text-base">
              <span>Delivery by Sat Feb 3</span>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <div className="flex my-1 items-center border-2 border-primary-border w-fit rounded-md">
              <span
                className="py-1 px-2"
                onClick={() => setCount((prev) => prev + 1)}
              >
                <IoMdAdd />
              </span>
              <span className="py-1 px-3 border-x border-primary-border">
                {count}
              </span>
              <span
                className="py-1 px-2"
                onClick={() => setCount((prev) => prev - 1)}
              >
                <IoMdRemove />
              </span>
            </div>
            <div className="flex my-1 items-center border-2 border-primary-border w-fit rounded-md">
              <p className="py-1 px-2">Remove</p>
            </div>
            <div className="flex my-1 items-center border-2 border-primary-border w-fit rounded-md">
              <p className="py-1 px-2">Buy this now</p>
            </div>
            <div className="flex my-1 items-center border-2 border-primary-border w-fit rounded-md">
              <p className="py-1 px-2"> Save it for later</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
