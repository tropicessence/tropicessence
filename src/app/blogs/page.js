"use client";
import React from "react";
import { usePathname } from "next/navigation";

const page = () => {
  const pathname = usePathname();

  console.log("pathname", pathname);

  return (
    <div>
      <div className="relative">
        <div className="sm:block hidden">
          <img
            className="h-full w-full"
            src="/image/banner/blogsl.jpg"
            alt=""
          />
        </div>
        <div className="sm:hidden block">
          <img
            className="h-full w-full"
            src="/image/banner/blogsm.jpg"
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
              <a href="/blogs" className="mx-1 whitespace-nowrap">
                Blogs
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-3 my-3">
        <div className="my-2">
          <div className="flex sm:flex-row  flex-col sm:justify-center items-start max-w-screen-lg sm:mx-auto font-cormorant sm:space-x-7 ">
            <div className="relative sm:block hidden  ">
              <img
                className=" sm:w-72 h-full rounded-sm mt-3"
                src="/image/blogs/blog2.jpg"
                alt="sdddddddd"
              />
              <span className="flex flex-row absolute bottom-3 bg-[#D1B87A] sm:w-[280px] sm:mx-1 items-center text-[#593B1F] bg-opacity-85 sm:h-10   w-40">
                <p className="ml-2 ">21/10/2023</p>
                <img
                  className="h-6  mt-[1px] ml-3 rounded-sm"
                  src="/image/blogs/blogline.png "
                  alt=""
                />
                <p className="ml-3">Sunday</p>
              </span>
            </div>
            <div className="sm:w-1/2 sm:text-start text-center">
              <p className="text-[#593B1F] font-medium text-2xl sm:text-3xl italic">
                Benefits of Edible Coconut Oil: A Nutritional Powerhouse for
                Health & Wellness
              </p>
              <p className="text-[#1B2F1F] text-3xl sm:text-4xl font-cormorant font-bold my-2 text-shadow">
                Introduction
              </p>
              <p className="text-[#593B1F] mt-2 ">
                Edible coconut oil has been a staple in traditional diets for
                centuries, praised for its health benefits, rich nutrients, and
                versatility in cooking. Whether used for cooking, oil pulling,
                Hair Care or skin nourishment, this natural superfood offers a
                range of advantages. In this blog, we will explore the top
                benefits of edible coconut oil and why it should be a part of
                your daily routine.
              </p>
              <p className="text-[#1B2F1F] text-3xl sm:text-4xl font-cormorant font-bold my-2 text-shadow">
                1. Strengthens Immunity
              </p>
              <p className="text-[#593B1F] mt-2 ">
                Coconut oil is rich in antimicrobial and antiviral properties,
                helping the body fight infections. Lauric acid, a key component,
                has been shown to combat harmful bacteria, viruses, and fungi,
                boosting the immune system naturally.
              </p>
              <p className="text-[#1B2F1F] text-3xl sm:text-4xl font-cormorant font-bold my-2 text-shadow">
                2. Promotes Oral Health
              </p>
              <p className="text-[#593B1F] mt-2 ">
                Oil pulling with coconut oil is an ancient Ayurvedic practice
                that involves swishing a tablespoon of coconut oil in your mouth
                for 10-20 minutes. This helps draw out toxins, reduce plaque
                buildup, and prevent bad breath by eliminating harmful bacteria.
                The antimicrobial properties of lauric acid in coconut oil
                contribute to improved gum health and overall oral hygiene.
                Regular oil pulling may also help whiten teeth and reduce
                inflammation in the gums, promoting a healthier mouth naturally.
              </p>
              <p className="text-[#1B2F1F] text-3xl sm:text-4xl font-cormorant font-bold my-2 text-shadow">
                3. Promotes Healthy Hair Growth and Scalp Health
              </p>
              <p className="text-[#593B1F] mt-2 ">
                Edible coconut oil has properties that support healthy hair
                growth. Its nourishing compounds penetrate the scalp and hair
                follicles, improving blood circulation and stimulating hair
                growth. The fatty acids in coconut oil help to maintain a
                healthy scalp by preventing dryness, flakiness, and dandruff.
                Regular use of coconut oil as a hair treatment can promote
                thicker, stronger, and healthier hair, making it a must-have
                ingredient for anyone looking to boost their hair health.
              </p>
              <p className="text-[#1B2F1F] text-3xl sm:text-4xl font-cormorant font-bold my-2 text-shadow">
                4. Improves Digestion & Gut Health
              </p>
              <p className="text-[#593B1F] mt-2 ">
                Coconut oil promotes a healthy gut by reducing inflammation and
                supporting good bacteria growth. Its antibacterial properties
                aid digestion, help prevent bloating, and enhance the absorption
                of essential nutrients from food.
              </p>
              <p className="text-[#1B2F1F] text-3xl sm:text-4xl font-cormorant font-bold my-2 text-shadow">
                5. Natural Antimicrobial Properties for Skin Care
              </p>
              <p className="text-[#593B1F] mt-2 ">
                Coconut oil is well-known for its antimicrobial properties due
                to the presence of lauric acid. This makes it effective in
                fighting acne-causing bacteria and fungi. Regular use of coconut
                oil on the skin can help reduce the risk of breakouts, balance
                oil production, and soothe inflammation. For those with
                acne-prone or sensitive skin, coconut oil provides a natural way
                to fight blemishes and achieve clearer skin without harsh
                chemicals.
              </p>
              <p className="text-[#1B2F1F] text-3xl sm:text-4xl font-cormorant font-bold my-2 text-shadow">
                Conclusion
              </p>
              <p className="text-[#593B1F] mt-2 ">
                From heart Immunity and Oral Care to improved digestion and
                glowing skin, edible coconut oil provides multiple health
                benefits. Choosing cold-pressed, organic coconut oil ensures you
                get the best quality and results. Add it to your diet and daily
                routine for a healthier lifestyle.
              </p>
            </div>

            <div className="relative sm:hidden block  ">
              <img
                className=" sm:w-72 h-full rounded-sm"
                src="/image/blogs/blog2.jpg"
                alt="sdddddddd"
              />
              <span className="flex flex-row absolute bottom-3 bg-[#D1B87A] sm:w-[280px] sm:mx-1 items-center text-[#593B1F] bg-opacity-85 sm:h-10   w-40">
                <p className="ml-2 ">21/10/2023</p>
                <img
                  className="h-6  mt-[1px] ml-3 rounded-sm"
                  src="/image/blogs/blogline.png "
                  alt=""
                />
                <p className="ml-3">Sunday</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
