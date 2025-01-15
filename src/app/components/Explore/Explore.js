import React from "react";
import { useRouter } from "next/navigation";

export default function Explore() {
  const router = useRouter();
  return (
    <div className="p-4 flex flex-col items-center justify-center my-3 font-cormorant sm:text-xl gap-2 md:mt-20 mt-4">
      <h1 className="font-cormorant sm:text-4xl text-2xl text-[#593B1F] text-center font-medium italic md:mb-4 mb-2 tracking-wide ">
        TROPICESSENCE TREASURES
      </h1>
      <h2 className=" sm:text-5xl text-3xl font-medium tracking-wide text-[#1B2F1F] text-center md:w-1/2 md:max-w-96 mb-5">
        Experience Purity In Every Drop
      </h2>
      <p className="sm:w-1/2 text-[#000000] text-center font-poppins sm:text-base text-sm capitalize">
        Tropicessence brings you the purest coconut products, carefully harvested and
        processed to retain their natural goodness.
      </p>
      <button
        onClick={() => router.push("/plp")}
        className="mt-10 bg-[#D1B87A] p-2 text-[#1B2F1F] rounded font-poppins text- sm:w-[30%] w-[60%] max-w-60  sm:justify-start sm:block "
      >
        Order Now
      </button>
    </div>
  );
}
