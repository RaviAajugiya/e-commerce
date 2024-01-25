import React from "react";
import CartItem from "../components/Cart/CartItem";
import Container from "../components/common/Container";

function Cart() {
  return (
    <Container className="py-10">
      <div className="bg-violate lg:flex lg:gap-5">
        <div className="basis-9/12">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className=" w-full text-white basis-3/12 rounded-lg bg-lightbg p-3 h-fit ">
          <h4 className="text-2xl mb-5">Price Detail</h4>
          <p className="flex justify-between mb-2">
            <span>Subtotal</span> <span>$108</span>
          </p>
          <p className="flex justify-between mb-2">
            <span>Delivery charges</span> <span>+$8</span>
          </p>
          <p className="flex justify-between mb-4">
            <span>Discount</span> <span>-$18</span>
          </p>
          <p className="flex justify-between mb-2 text-xl pt-4 border-t border-dashed ">
            <span>Total payable</span> <span>$100</span>
          </p>

          {/* <div>
            <h4 className="text-2xl">Coupon code</h4>
            <p className="text-secondary-text">
              Enter code to get discount instantly
            </p>
          </div> */}
        </div>
      </div>
    </Container>
  );
}

export default Cart;
