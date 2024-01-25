import React, { useState } from "react";
import Container from "../components/common/Container";
import Product from "../components/product-container/Product";
import DummyProduct from "./../assets/DummyProduct.png";
import { GoSortDesc } from "react-icons/go";
import { BsFilterLeft } from "react-icons/bs";
import Filter from "../components/common/Filter";
import productService from "../Firebase/productService";

function Products() {
  const [products, setProducts] = useState([]);

  productService.getProducts().then((res) => {
    setProducts(res);
  });

  return (
    <>
      <Container className="bg-lightbg text-white border-b border-[#333d4c] lg:hidden">
        <div className="flex w-full  flex justify-between">
          <div className="flex gap-3 p-4 border-r border-[#333d4c] w-1/2">
            <GoSortDesc className="size-6" />
            <span>Sort by</span>
          </div>
          <div className="flex gap-3 p-4">
            <BsFilterLeft className="size-6" />
            <span>Filter</span>
          </div>
        </div>
      </Container>

      <Container className="bg-lightbg text-white ">
        <div className="flex gap-5 py-10">
          <div className="hidden lg:block min-w-56 bg-violate h-fit">
            <Filter
              title="Category"
              items={[
                "Electronics",
                "Men",
                "Women",
                "Home & Furniture",
                "Books",
              ]}
            />
            <Filter
              title="Category"
              items={[
                "Electronics",
                "Men",
                "Women",
                "Home & Furniture",
                "Books",
              ]}
            />
            <Filter
              title="Category"
              items={[
                "Electronics",
                "Men",
                "Women",
                "Home & Furniture",
                "Books",
              ]}
            />
            <Filter
              title="Category"
              items={[
                "Electronics",
                "Men",
                "Women",
                "Home & Furniture",
                "Books",
              ]}
            />
            <Filter
              title="Category"
              items={[
                "Electronics",
                "Men",
                "Women",
                "Home & Furniture",
                "Books",
              ]}
            />
            <Filter
              title="Category"
              items={[
                "Electronics",
                "Men",
                "Women",
                "Home & Furniture",
                "Books",
              ]}
            />
          </div>
          <div className="flex flex-wrap gap-y-10">
            {products.map((product) => (
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
    </>
  );
}

export default Products;
