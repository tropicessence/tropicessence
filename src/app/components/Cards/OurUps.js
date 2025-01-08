import React from "react";
import IconButton from "../buttons.js/iconButton";

export default function OurUps() {
  return (
    <div className="pb-7 sm:block hidden">
      <div className="sm:px-16 mx-auto max-w-screen-lg">
        <div
          className="py-2 mb-4
        block relative bg-[url('/bg.jpg')] bg-no-repeat 
        bg-center bg-cover  bg-fixed"
        >
          <div className="bg-[rgba(32,56,37,0.7)] m-2 md:p-4">
            <h1 className="uppercase font-semibold text-3xl text-[#D1B87A] mb-10 m-2 text-center font-cormorant">
              Benefits of Tropicessence coconut oil
            </h1>
            <div
              className="m-2 flex flex-wrap justify-between 
             items-center gap-3 gap-y-8 font-medium font-cormorant text-lg py-2"
            >
              <BenefitContentContainer>
                <img
                  className="max-w-24 w-[20%] max-h-24 h-[20%] md:w-[40%] ml-2 border border-[#F3EEE1] p-1 rounded-full  drop-shadow-xl"
                  src="/icons/iconskincare1.png"
                  alt=""
                />
                <p className=" flex text-nowrap md:text-center sm:items-center text-[#D1B87A]">
                  Moisturizes Skin
                </p>
              </BenefitContentContainer>
              <div>
                <Line />
              </div>
              <BenefitContentContainer>
                <img
                  className=" ml-2 max-w-24 w-[20%] max-h-24  md:w-[40%] h-[20%] border border-[#F3EEE1] p-1 rounded-full  drop-shadow-xl "
                  src="/icons/iconhealthy1.png"
                  alt=""
                />
                <p className=" flex md:items-center  text-[#D1B87A]">
                  {" "}
                  Nourishes Hair{" "}
                </p>
              </BenefitContentContainer>
              <div className="hidden md:block">
                <Line />
              </div>
              <BenefitContentContainer>
                <img
                  className="max-w-24 w-[20%] max-h-24 h-[20%] md:w-[40%] ml-2 border border-[#F3EEE1] p-1 rounded-full  drop-shadow-xl"
                  src="/icons/iconimmunity1.png"
                  alt=""
                />
                <p className="text-nowrap flex md:items-center  text-[#D1B87A]">
                  Boosts Immunity{" "}
                </p>
              </BenefitContentContainer>
              <div className="block md:hidden">
                <Line />
              </div>
              <BenefitContentContainer>
                <img
                  className="max-w-24 w-[20%] max-h-24 h-[20%] md:w-[40%] ml-2  border border-[#F3EEE1] p-1 rounded-full b drop-shadow-xl"
                  src="/icons/iconstamina1.png"
                  alt=""
                />
                <p className=" flex md:items-center  text-[#D1B87A]">
                  Boosts Energy{" "}
                </p>
              </BenefitContentContainer>
              <div className="hidden md:block">
                <Line />
              </div>
              <BenefitContentContainer>
                <img
                  className="max-w-24 w-[20%] max-h-24 h-[20%] md:w-[40%] ml-2 border border-[#F3EEE1] p-1 rounded-full  drop-shadow-xl"
                  src="/icons/icondigestion1.png"
                  alt=""
                />
                <p className=" flex text-start md:text-center  text-[#D1B87A]">
                  Improves Metabolism
                </p>
              </BenefitContentContainer>
              <div>
                <Line />
              </div>
              <BenefitContentContainer>
                <img
                  className=" ml-2 max-w-20 w-[20%] max-h-20 h-[20%] md:w-[40%] border border-[#F3EEE1] p-1 rounded-full  drop-shadow-xl"
                  src="/icons/iconsaturated1.png"
                  alt=""
                />
                <p className=" flex text-start md:text-center items-center  text-[#D1B87A]">
                  Reduces Bad Cholesterol{" "}
                </p>
              </BenefitContentContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function BenefitContentContainer({ children }) {
  return (
    <div className="flex gap-6 basis-1/3 md:basis-1/5 md:flex-col md:items-center">
      {children}
    </div>
  );
}
function Line() {
  return (
    <img
      src="/line.svg"
      alt="line"
      className="w-[80px] md:w-[90px] lg:w-[100px]"
    />
  );
}
