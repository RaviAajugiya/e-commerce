import React from "react";
import Container from "../components/common/Container";
import ProductContainer from "../components/product-container/ProductContainer";

function Home() {
  return (
    <>
      <ProductContainer
        heading="Our latest products"
        text="There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form."
      />
    </>
  );
}

export default Home;
