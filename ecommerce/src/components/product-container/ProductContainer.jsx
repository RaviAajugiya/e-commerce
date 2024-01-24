import React from "react";
import Container from "../container";
import Product from "./Product";
import DummyProduct from "./../../assets/DummyProduct.png";
import TrendingProduct from "./TrendingProduct";



function ProductContainer({ heading, text }) {



  return (
    <>
      <Container className="bg-lightbg py-14 text-white">
        <div className=" text-center">
          <h2 className="text-4xl mb-4  ">{heading}</h2>
          <p className="text-light-body-text max-w-[510px] m-auto mb-12 text-[#9CA3AF]">
            {text}
          </p>
          <div className="flex gap-4 w-4/5 m-auto flex-wrap">
            <Product
              img={DummyProduct}
              title="iPhone 13 Pro Max"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem."
              price="$299"
            />
            <Product
              img={DummyProduct}
              title="iPhone 13 Pro Max"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem."
              price="$299"
            />
            <Product
              img={DummyProduct}
              title="iPhone 13 Pro Max"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem."
              price="$299"
            />
          </div>
        </div>
      </Container>

      <Container className="bg-violate py-14 text-white">
        <div className=" text-center">
          <h2 className="text-4xl mb-4  ">{heading}</h2>
          <p className="max-w-[510px] m-auto mb-12 text-[#9CA3AF]">{text}</p>
          <div className="flex w-4/5 m-auto flex-wrap rounded-lg border border-[#323d4c] overflow-hidden">
            <TrendingProduct />
            <TrendingProduct />
            <TrendingProduct />
            <TrendingProduct />
            <TrendingProduct />
            <TrendingProduct />
          </div>
        </div>
      </Container>
    </>
  );
}

export default ProductContainer;
