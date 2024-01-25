import React from "react";
import StarRatings from "react-star-ratings";

function Product({ img, title, text, price, className, rating }) {
  return (
    <div
      className={`text-start m-auto bg-violate rounded-xl w-[350px] ${className}`}
    >
      <div>
        <img src={img} alt="" className="rounded-t-lg h-56" />
      </div>
      <div className="">
        <div className="mb-3 p-6">
          <h3 className="mb-3 text-lg">{title}</h3>
          <p className="text-[#9CA3AF]"> {text}</p>
        </div>
        <div className="flex justify-between  border-t-2 border-t-[#2b3444]">
          <p className="p-4 flex items-center gap-3">
            <StarRatings
              rating={Number(rating)}
              starRatedColor="orange"
              numberOfStars={5}
              name="rating"
              starDimension="17px"
              starSpacing="2px"
            />
            <span>(55) Reviews</span>
          </p>
          <span className="p-4 border-l-2 border-l-[#2b3444]">{price}</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
