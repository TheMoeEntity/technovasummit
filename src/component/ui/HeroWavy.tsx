"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-black text-white overflow-hidden">
      <div className="h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          EMPOWERING <br /> INNOVATION
        </h1>
        <p className="max-w-xl text-lg mb-6">
          TechNova, under{" "}
          <span className="font-semibold text-purple-400">DTCSI Academy</span>,
          is a dynamic platform for tech enthusiasts to connect, learn, and
          innovate. We empower individuals to unlock their potential, spark
          creativity, and shape the future of technology in Africa.
        </p>

        {/* Countdown */}
        <div className="flex gap-4 text-purple-400 font-semibold mb-6">
          {[
            { label: "Days", value: "05" },
            { label: "Hours", value: "22" },
            { label: "Mins", value: "40" },
            { label: "Secs", value: "32" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#1a1a40] px-4 py-2 rounded-md"
            >
              <span className="text-3xl font-bold">{item.value}</span>
              <span className="text-xs uppercase">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Register Button */}
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition">
          Register Now
        </button>
      </div>

      {/* Wavy SVG Separator */}
      <div className="absolute bottom-0 w-full leading-none">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#7c3aed"
            d="M0,30 C360,90 1080,-30 1440,30 L1440,100 L0,100 Z"
          />
        </svg>

        {/* Scrolling TECHNOVA Text */}
        <div className="absolute bottom-4 w-full overflow-hidden">
          <div className="whitespace-nowrap animate-marquee font-bold text-sm text-white tracking-widest">
            {Array.from({ length: 30 })
              .map(() => " TECHNOVA ")
              .join("")}
          </div>
        </div>
      </div>

      {/* Custom Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
