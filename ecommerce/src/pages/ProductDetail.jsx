import React from "react";
import Container from "../components/common/Container";
import StarRatings from "react-star-ratings";
import Button from "../components/common/Button";

function ProductDetail() {
  return (
    <Container className="bg-violate py-10 text-white">
      <div className="md:flex justify-between gap-10 lg:flex">
        <div className="m-auto sm:w-[350px] lg:w-2/5">
          <img
            src="https://placehold.co/400"
            alt=""
            className="w-full m-auto "
          />
          <div className="hidden sm:flex justify-between mt-10">
            <img src="https://placehold.co/400" alt="" className="w-1/4" />
            <img src="https://placehold.co/400" alt="" className="w-1/4" />
            <img src="https://placehold.co/400" alt="" className="w-1/4" />
          </div>
        </div>
        <div className="pt-5 lg:w-3/5">
          <h1 className="text-2xl">Nike Phantom GX 2 Elite LV8 </h1>
          <h3 className="">FG Low-Top Football Boot</h3>
          <p className="text-secondary-text my-2 flex justify-between">
            <span>
              <strong className="text-white text-bold">$99</strong> MRP{" "}
              <s>$299</s>
            </span>
            <StarRatings
              rating={4.5}
              starRatedColor="orange"
              numberOfStars={5}
              name="rating"
              starDimension="17px"
              starSpacing="2px"
            />
          </p>

          <div>
            <p className="py-3 text-lg">Color</p>
            <div className="flex gap-2 justify-start flex-1">
              <div className="flex gap-2 p-2 rounded-lg border border-primary">
                <span className="size-6 rounded-full bg-[#f9e4be] block"></span>
                <span>Gold</span>
              </div>
              <div className="flex gap-2 p-2 rounded-lg border border-primary">
                <span className="size-6 rounded-full bg-[#f9e4be] block"></span>
                <span>Gold</span>
              </div>
              <div className="flex gap-2 p-2 rounded-lg border border-primary">
                <span className="size-6 rounded-full bg-[#f9e4be] block"></span>
                <span>Gold</span>
              </div>
            </div>
          </div>

          <ul className="flex flex-col gap-3 mt-5">
            <li>
              Offer on 4GB+128GB: Enjoy $5 Coupon | $5 Bank Offer
              <span className="text-primary"> Learn More</span>
            </li>
            <li>
              Offer On 6GB+128GB: Enjoy $10 Off{" "}
              <span className="text-primary"> Learn More</span>
            </li>
            <li>
              Save 18%: Get GST Invoice an save 18% on business purchase
              <span className="text-primary"> Learn More</span>
            </li>
            <li>
              MobiKwik offer: Get Upto $5 cashback
              <span className="text-primary"> Learn More</span>
            </li>
          </ul>

          <div className="flex gap-5 my-5">
            <Button text="Add to cart" className="border-0" />
            <Button text="Buy now" className="border-0" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProductDetail;
