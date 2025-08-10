import React from "react";
import Banner from "../ui/Banner";

const About = () => {
  return (
    <section className="bg-white min-h-screen">
      <Banner />
      <div className="text-black mt-10 md:mt-20 py-16 px-4 sm:px-8 lg:px-16 flex flex-col items-center">
        {/* Top Section: What is TechNova? & Vision/Mission */}
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          {/* What is TechNova? */}
          <div className="flex flex-col items-start">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8">
              What is <span className="text-[#D09BFF]">TechNova?</span>
            </h1>
            <div className="bg-[#362E46] text-white p-8 rounded-3xl shadow-lg max-w-sm lg:max-w-none">
              <p className="text-lg leading-relaxed">
                <span className="font-bold">TechNova</span> is a platform under{" "}
                <span className="font-bold">DTCSI Academy</span>, designed to
                bring together tech enthusiasts, innovators, and industry
                experts.
              </p>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="flex flex-col justify-between space-y-10">
            {/* Vision */}
            <div className="flex flex-col items-start">
              <h2 className="text-xl font-bold mb-2">Our Vision:</h2>
              <p className="text-gray-700 leading-relaxed">
                To be a leading platform for tech innovation and events in
                Africa, driving growth, creativity, and progress in the tech
                industry.
              </p>
              <div className="mt-4 w-full flex justify-end">
                <svg
                  width="150"
                  height="20"
                  viewBox="0 0 150 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-purple-500"
                >
                  <path
                    d="M0 10C20 0 40 20 60 10C80 0 100 20 120 10H140"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M140 10L135 5M140 10L135 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Mission */}
            <div className="flex flex-col items-start">
              <h2 className="text-xl font-bold mb-2">Our Mission:</h2>
              <p className="text-gray-700 leading-relaxed">
                To foster a community of tech innovators and thought leaders by
                providing a platform for connection, learning, and innovation.
              </p>
              <div className="mt-4 w-full flex justify-end">
                <svg
                  width="150"
                  height="20"
                  viewBox="0 0 150 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-purple-500"
                >
                  <path
                    d="M0 10C20 0 40 20 60 10C80 0 100 20 120 10H140"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M140 10L135 5M140 10L135 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Become A Sponsor */}
        <div className="max-w-3xl w-full flex flex-col items-center text-center">
          <div className="bg-gray-100 text-black text-sm font-semibold px-6 py-2 rounded-full mb-6 shadow-sm">
            TechNova 2025
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Become A <span className="text-purple-500">Sponsor</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-xl">
            Become part of the greatest revolution in Technology
            entrepreneurship through your contribution to the success of this
            event
          </p>
          <button className="bg-gradient-to-b from-[#9845FF] to-[#7B0FFF] text-white font-medium px-4 py-2 mt-3 rounded-2xl shadow-lg shadow-[#DFBCFF] hover:shadow-purple-500/40 transition-all duration-200 border-0">
            Become a Sponsor
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
