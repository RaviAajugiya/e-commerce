import React from "react";
import bgImage1 from "./../../assets/bg-1.jpg";
import bgImage2 from "./../../assets/image-02.jpg";
import bgImage3 from "./../../assets/image-03.jpg";
import Container from "../common/Container";
import Button from "../common/Button";

function SecondaryHeader() {
  return (
    <Container className="bg-violate py-10">
      <div className="">
        <div className=" flex flex-col gap-10  m-auto lg:flex-row ">
          <div
            className="flex justify-center flex-col w-full px-8 py-10  bg-cover bg-center lg:w-8/12 h-[370px] md:h-[480px]"
            style={{ backgroundImage: `url(${bgImage1})` }}
          >
            <div className="md:w-">
              <p className="block mb-5 text-2xl font-bold hover:text-primary text-dark sm:text-4xl">
                Mega Sale Up To 50% Off For All
              </p>
              <p className="text-light-body-text mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ornare vestibulum mollis. Nam vitae augue purus.
                Integer ac accumsan nunc.
              </p>
              <Button text="Grab the offer" />
            </div>
          </div>
          <div className="flex flex-col gap-10 sm:flex-row lg:flex-col lg:w-4/12">
            <div
              className="flex items-end justify-end flex-col px-8 py-10 bg-cover bg-center w-full h-[223px]"
              style={{ backgroundImage: `url(${bgImage2})` }}
            >
              <div className="flex items-end justify-end flex-col gap-4">
                <p className="text-xl font-bold hover:text-primary">
                  <span className="block">Summer travel</span>{" "}
                  <span className="float-right">collection</span>
                </p>
                <p className="font-medium hover:text-primary">Discover now</p>
              </div>
            </div>
            <div
              className="flex items-end justify-end flex-col px-8 py-10 bg-cover bg-center w-full h-[223px]"
              style={{ backgroundImage: `url(${bgImage3})` }}
            >
              <div className="flex items-end justify-end flex-col gap-4">
                <p className="text-xl font-bold hover:text-primary">
                  <span className="block">Get 30% off on </span>{" "}
                  <span className="float-right">iphone</span>
                </p>
                <p className="font-medium hover:text-primary">Shop now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SecondaryHeader;
