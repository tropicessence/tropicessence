import React, { useEffect, useState } from "react";
import IconButton from "../buttons.js/iconButton";

import { useRouter } from "next/navigation";

export default function Content() {
  const [screenWidth, setScreenWidth] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push("/plp");
    console.log("clicked");
  };
  return (
    <div className="pt-1 md:block hidden">
      <div className="flex justify-around items-center gap-6">
        <button
          className="text-xl subpixel-antialiased text-[rgb(186,129,75)] mr-3 hover:text-yellow-400"
          onClick={() => router.push("/about")}
        >
          About Us
        </button>
        <button
          className="text-xl subpixel-antialiased text-[rgb(186,129,75)] mr-3 hover:text-yellow-400"
          onClick={() => router.push("/plp")}
        >
          Products
        </button>
        <button
          className="text-xl subpixel-antialiased text-[rgb(186,129,75)] mr-3 hover:text-yellow-400"
          onClick={() => router.push("/blogs")}
        >
          Blogs
        </button>
        <button
          className="text-xl subpixel-antialiased text-[rgb(186,129,75)] hover:text-yellow-400"
          onClick={() => router.push("/contact")}
        >
          Contact
        </button>
      </div>
    </div>
  );
}
