import React from "react";
import DummyProduct from "./../../assets/DummyProduct.png";
import StarRatings from "react-star-ratings";

function TrendingProduct({ img, title, text, price, className, rating }) {
  return (
    <div className="w-full px-6 border-[#323d4c] border-b md:border-r  md:w-1/2 lg:w-1/3">
      <div className="my-6">
        <div className="mb-5 rounded-md">
          <img src={DummyProduct} alt="product" className="w-full" />
        </div>
        <div>
          <span className="mb-2 block text-lg font-semibold text-left">
            {price}
          </span>
          <h3 className="mb-2 text-lg hover:text-primary text-left">{title}</h3>
          <p className="flex items-center text-base gap-3">
            <StarRatings
              rating={Number(rating)}
              starRatedColor="orange"
              numberOfStars={5}
              name="rating"
              starDimension="17px"
              starSpacing="2px"
            />
            <span> 115 Reviews</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TrendingProduct;
