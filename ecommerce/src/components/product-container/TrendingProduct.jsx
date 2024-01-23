import React from "react";
import DummyProduct from "./../../assets/DummyProduct.png";

function TrendingProduct() {
  return (
    <div className="w-full px-6 border-[#323d4c] border-b md:border-r  md:w-1/2 lg:w-1/3">
      <div className="my-6">
        <div className="mb-5 rounded-md">
          <img src={DummyProduct} alt="product" className="w-full" />
        </div>
        <div>
          <span className="mb-2 block text-lg font-semibold text-left">
            $59.55
          </span>
          <h3 className="mb-2 text-lg hover:text-primary text-left">
            Table Top Showpiece
          </h3>
          <p className="flex items-center text-base">
            <span> 115 Reviews</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TrendingProduct;
