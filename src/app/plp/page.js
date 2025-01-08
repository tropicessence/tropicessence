"use client";

import React, { useState } from "react";
import Header from "../components/Header/Header";

import { coconutData } from "@/coconut-oil";
import { useRouter } from "next/navigation";

export default function page() {
  const [product, setProduct] = useState("all");
  const router = useRouter();

  console.log("coconutData", coconutData);

  // Accessing Coconut Oil variants
  const coconutOilVariants = coconutData[0].coconut[0]?.variants?.map(
    (variant) => ({
      mrp: variant.mrp,
      id: variant.id,
      sellingPrice: variant?.sellingPrice,
      mainImage: variant?.mainImage,
      name: variant?.name,
      icon: variant.icon,
      benefits: variant?.benefits,
      sellingPrice: variant?.sellingPrice,
    }),
  );

  const DesssicatePowder = coconutData[0].DesssicatePowder[0]?.variants?.map(
    (variant) => ({
      id: variant.id,
      mainImage: variant?.image,
      name: variant?.name,
      icon: variant.icon,
      benefits: variant?.benefits,
      mrp: variant?.mrp,
      sellingPrice: variant?.sellingPrice,
    }),
  );

  const coconutOilImages = coconutData[0]?.coconut[0]?.variants?.map(
    (variant) => {
      if (typeof variant.image === "string") {
        return variant.image; // Handle the case where image is a string URL directly
      } else if (Array.isArray(variant.image)) {
        return variant.image[0]?.oil; // Extract the oil image URL from the image array
      } else {
        return null; // Handle other cases if necessary
      }
    },
  );

  const data =
    product === "all"
      ? [...coconutOilVariants]
      : product === "coconutOilVariants"
        ? coconutOilVariants
        : DesssicatePowder;

  console.log("data", data);

  return (
    <>
      <div className="relative">
        <div className="sm:block hidden">
          <img
            className="h-full w-full"
            src="/image/banner/products.jpg"
            alt=""
          />
        </div>
        <div className="sm:hidden block">
          <img
            className="h-full w-full"
            src="/image/banner/products-mobile.jpg"
            alt=""
          />
        </div>
        <div className="absolute inset-x-0 bottom-2 flex items-center justify-center">
          <div className="w-[70%] sm:w-[60%] md:w-[40%] lg:w-[30%] bg-[#263726] bg-opacity-50 border border-[#F3EEE1] border-opacity-30 drop-shadow-xl p-2 sm:p-4 flex flex-col justify-center items-center font-cormorant">
            <p className="text-xs sm:text-base md:text-lg lg:text-xl text-[#F3EEE1] whitespace-nowrap text-center">
              Experience The Natural Goodness
            </p>
            <div className="text-xs sm:text-base md:text-lg lg:text-xl text-[#D1B87A] flex flex-wrap justify-center items-center">
              <a href="/" className="mr-1 whitespace-nowrap">
                Home
              </a>
              <img
                className="h-3 sm:h-4 md:h-5 lg:h-6 mx-1"
                src="/image/blogs/blogline.png"
                alt=""
                width={3}
                height={24}
              />
              <a href="/plp" className="mx-1 whitespace-nowrap">
                Products
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-3 mt-20">
        <div className="flex flex-col justify-center text-center font-cormorant">
          <span className=" text-2xl sm:text-3xl font-medium text-[#593B1F]  italic pt-4 ">
            {" "}
            TROPICESSENCE TREASURES
          </span>
          <span className="text-3xl sm:text-5xl font-medium  text-[#1B2F1F] text-center  mt-4">
            {" "}
            Experience Purity in Every Drop
          </span>
        </div>
        <div className="font-poppins mb-16">
          <div
            className="grid grid-cols-1 sm:grid-cols-2  gap-6 sm:gap-10 drop-shadow-2xl my-10 
            w-[90%]
            sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg 
            mx-auto"
          >
            {data?.map((variant) => (
              <div
                className="relative"
                key={variant.id}
                onClick={() => router.push(`/productDetail/${variant.id}`)}
              >
                <div
                  className="border border-[#D1B87A] rounded-lg drop-shadow-sm shadow-xl 
                 border-opacity-25 pb-4 sm:pb-6"
                >
                  <img
                    src={variant.mainImage}
                    alt=""
                    className="rounded-t-lg"
                  />
                  <div className="bg-[#1B2F1F] h-[1px] "></div>

                  {/* <div */}
                  {/*   className="absolute bottom-6 md:bottom-10  */}
                  {/*   flex justify-between items-center p-4 py-3 bg-[#1B2F1F] text-[#D1B87A] w-[90%]" */}
                  {/* > */}
                  {/*   <div>{variant.name}</div> */}
                  {/*   <div className="text-2xl">{">"}</div> */}
                  {/* </div> */}

                  <p className="mx-4 font-medium text-base text-[#1B2F1F] mt-2">
                    {variant.name}
                  </p>
                  {/* <div className="flex"> */}
                  {/*   <img */}
                  {/*     className="w-4 h-4 mt-1 ml-3" */}
                  {/*     src="/image/pdp/currencylogo.png" */}
                  {/*     alt="" */}
                  {/*   /> */}
                  {/*   <div className="flex"> */}
                  {/*     <div className="line-through ml-[8%] mr-[8%]"> */}
                  {/*       {variant.mrp} */}
                  {/*     </div> */}
                  {/*     {variant.sellingPrice} */}
                  {/*   </div> */}
                  {/* </div> */}
                  <div className="mx-2 sm:block p-2">
                    <div className="flex flex-wrap gap-2 mt-2 mx-1 ">
                      {variant.benefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-start font-light text-xs text-[#1B2F1F]"
                        >
                          <img
                            src={variant.icon}
                            alt=""
                            className="w-2 h-2 mr-2"
                          />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mx-4 mt-4">
                    <button
                      className="w-full border-[#D1B87A] text-[#D1B87A] border-opacity-55 
                      bg-[#1B2F1F]   px-4 p-2 rounded-md items-center"
                    >
                      View Product
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
