import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import Product from "./Product";
import DummyProduct from "./../../assets/DummyProduct.png";
import TrendingProduct from "./TrendingProduct";
import productService from "../../Firebase/productService";

function ProductContainer({ heading, text }) {
  const [latestproducts, setLatestProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    productService.getLatestProducts().then((res) => {
      setLatestProducts(res);
    });
    productService.getTrendingProducts().then((res) => {
      setTrendingProducts(res);
    });
  }, []);

  return (
    <>
      <Container className="bg-lightbg py-14 text-white">
        <div className=" text-center">
          <h2 className="text-4xl mb-4  ">{heading}</h2>
          <p className="text-light-body-text max-w-[510px] m-auto mb-12 text-secondary-text">
            {text}
          </p>
          <div className="flex gap-4 w-4/5 m-auto flex-wrap">
            {latestproducts.map((product) => (
              <Product
                img={DummyProduct}
                title={product.name}
                text={product.description}
                price={product.price}
                rating={product.rating}
              />
            ))}
          </div>
        </div>
      </Container>

      <Container className="bg-violate py-14 text-white">
        <div className=" text-center">
          <h2 className="text-4xl mb-4  ">Trending Products</h2>
          <p className="max-w-[510px] m-auto mb-12 text-[#9CA3AF]">{text}</p>
          <div className="flex w-4/5 m-auto flex-wrap rounded-lg border border-[#323d4c] overflow-hidden">
            {trendingProducts.map((product) => (
              <TrendingProduct
                img={DummyProduct}
                title={product.name}
                text={product.description}
                price={product.price}
                rating={product.rating}
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default ProductContainer;
