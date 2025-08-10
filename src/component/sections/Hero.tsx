"use client";
import React from "react";
import background from "../../../public/Technova_hero_.png";
import leftEllipse from "../../../public/Left_Ellipse.svg";
import rightEllipse from "../../../public/Right_Ellipse.svg";
import Image from "next/image";
import dynamic from "next/dynamic";
const CountdownTimer = dynamic(() => import("../ui/CountDownTimer"), {
  ssr: false,
});
const Hero = () => {
  const backgroundImage = `url(${background.src})`;
  const eventDate = "2025-08-20 12:00:00";
  return (
    <section
      className="relative overflow-hidden w-full flex-col flex justify-center items-center md:min-h-screen py-32 sm:py-42"
      style={{
        backgroundImage,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      <div
        className="absolute hidden md:block z-[10] -left-10 top-1/2 -translate-y-1/2 opacity-65"
        style={{
          backgroundImage: "url('Left_Ellipse.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        <Image
          src={leftEllipse}
          alt="Left Ellipse"
          width={300}
          height={150}
          className="w-full h-auto rounded-lg"
          quality={100}
        />
      </div>
      <div
        className="absolute hidden md:block z-[10] -right-10 top-1/2 -translate-y-1/2  opacity-65"
        style={{
          backgroundImage: "url('Right_Ellipse.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        <Image
          src={rightEllipse}
          alt="Right Ellipse"
          width={300}
          height={150}
          className="w-full h-auto rounded-lg"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c06185b] to-[#2b145995] z-0" />

      <div className="flex flex-col max-w-4xl gap-10 z-20">
        <h1 className="capitalize mt-8 text-white text-center text-5xl md:text-7xl lg:text-8xl font-bold">
          EMPOWERING <br />
          INNOVATION
        </h1>
        <p className="text-white p-4 text-base text-center mx-auto max-w-2xl">
          TechNova, under <span className="text-[#D09BFF]">DTCSI Academy</span>,
          is a dynamic platform for tech enthusiasts to connect, learn, and
          innovate. We empower individuals to unlock their potential, spark
          creativity, and shape the future of technology in Africa.
        </p>
        <CountdownTimer eventDate={eventDate} />
        {/* {searchBar} */}
      </div>
    </section>
  );
};

export default Hero;
