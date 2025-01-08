import React from "react";

const HomePageIcon = () => {
  return (
    <div className="sm:hidden block my-3 mx-2">
      <div
        className="py-2 mb-4
        block relative bg-[url('/bg.jpg')] bg-no-repeat 
        bg-center bg-cover  bg-fixed"
      >
        <div className="m-2 grid bg-[rgba(32,56,37,0.7)] place-content-center items-center gap-3 font-medium font-cormorant text-lg py-2">
          <BenefitContentContainer>
            <img
              className="max-w-16 w-[15%] max-h-16 h-[15%] ml-2 border border-[#F3EEE1] p-1 rounded-full  drop-shadow-xl"
              src="/icons/iconskincare1.png"
              alt=""
            />
            <p className=" flex items-center text-[#D1B87A]">
              Moisturizes Skin
            </p>
          </BenefitContentContainer>
          <BenefitContentContainer>
            <img
              className=" ml-2 max-w-16 w-[15%] max-h-16 h-[15%] border border-[#F3EEE1] p-1 rounded-full  drop-shadow-xl "
              src="/icons/iconhealthy1.png"
              alt=""
            />
            <p className=" flex items-center  text-[#D1B87A]">
              {" "}
              Nourishes Hair{" "}
            </p>
          </BenefitContentContainer>
          <BenefitContentContainer>
            <img
              className="max-w-16 w-[15%] max-h-16 h-[15%] ml-2 border border-[#F3EEE1] p-1 rounded-full  drop-shadow-xl"
              src="/icons/iconimmunity1.png"
              alt=""
            />
            <p className=" flex items-center  text-[#D1B87A]">
              Boosts Immunity{" "}
            </p>
          </BenefitContentContainer>
          <BenefitContentContainer>
            <img
              className="max-w-16 w-[15%] max-h-16 h-[15%] ml-2  border border-[#F3EEE1] p-1 rounded-full b drop-shadow-xl"
              src="/icons/iconstamina1.png"
              alt=""
            />
            <p className=" flex items-center  text-[#D1B87A]">Boosts Energy </p>
          </BenefitContentContainer>
          <BenefitContentContainer>
            <img
              className="max-w-16 w-[15%] max-h-16 h-[15%] ml-2 border border-[#F3EEE1] p-1 rounded-full  drop-shadow-xl"
              src="/icons/icondigestion1.png"
              alt=""
            />
            <p className=" flex items-center  text-[#D1B87A]">
              Improves Metabolism
            </p>
          </BenefitContentContainer>
          <BenefitContentContainer>
            <img
              className=" ml-2 max-w-16 w-[15%] max-h-16 h-[15%] border border-[#F3EEE1] p-1 rounded-full  drop-shadow-xl"
              src="/icons/iconsaturated1.png"
              alt=""
            />
            <p className=" flex items-center  text-[#D1B87A]">
              Reduces Bad Cholesterol{" "}
            </p>
          </BenefitContentContainer>
        </div>
      </div>
    </div>
  );
};

function BenefitContentContainer({ children }) {
  return <div className="flex gap-6">{children}</div>;
}

export default HomePageIcon;
