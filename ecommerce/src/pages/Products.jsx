import React from "react";
import Container from "../components/container";
import Product from "../components/product-container/Product";
import DummyProduct from "./../assets/DummyProduct.png";
import { GoSortDesc } from "react-icons/go";
import { BsFilterLeft } from "react-icons/bs";
import Filter from "../components/Filter";

function Products() {
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
          <div className="flex flex-wrap ">
            <Product
              img={DummyProduct}
              title="iPhone 13 Pro Max"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem."
              price="$299"
              className="mb-10"
            />
            <Product
              img={DummyProduct}
              title="iPhone 13 Pro Max"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem."
              price="$299"
              className="mb-10"
            />
            <Product
              img={DummyProduct}
              title="iPhone 13 Pro Max"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem."
              price="$299"
              className="mb-10"
            />
            <Product
              img={DummyProduct}
              title="iPhone 13 Pro Max"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem."
              price="$299"
              className="mb-10"
            />
            <Product
              img={DummyProduct}
              title="iPhone 13 Pro Max"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem."
              price="$299"
              className="mb-10"
            />
            <Product
              img={DummyProduct}
              title="iPhone 13 Pro Max"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem."
              price="$299"
              className="mb-10"
            />
            <Product
              img={DummyProduct}
              title="iPhone 13 Pro Max"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem."
              price="$299"
              className="mb-10"
            />
            <Product
              img={DummyProduct}
              title="iPhone 13 Pro Max"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem."
              price="$299"
              className="mb-10"
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Products;
