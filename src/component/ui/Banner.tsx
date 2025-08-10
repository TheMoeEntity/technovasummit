"use client";
import { div } from "framer-motion/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Banner = () => {
  const [displayText, setDisplayText] = useState<string[]>([
    ...Array(12).fill("TECHNOVA"),
  ]);
  useEffect(() => {
    setDisplayText([...displayText, ...displayText]);
  }, []);
  return (
    <div className="w-full bg-[#852DFF] h-auto">
      <Marquee
        gradientColor="#521aa1"
        className="w-full"
        speed={110}
        gradient={true}
      >
        <div className="flex bg-[#852DFF] flex-wrap md:flex-nowrap justify-center items-center gap-5 py-3">
          {displayText.map((text, index) => (
            <div key={index} className="px-5 text-white">
              <span className="text-2xl font-bold">{text}</span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Banner;
