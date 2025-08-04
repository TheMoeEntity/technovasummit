"use client";

export default function Component() {
  return (
    <div className="min-h-screen w-full bg-gray-900 relative overflow-hidden">
      {/* Wavy Banner */}
      <div className="absolute w-full  inset-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 400"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Purple gradient */}
            <linearGradient
              id="purpleGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>

            {/* Define the wavy path */}
            <path
              id="wavyPath"
              d="M-200,150 Q200,50 600,150 T1400,150"
              fill="none"
            />
          </defs>

          {/* Create the wavy ribbon shape */}
          <path
            d="M-200,120 Q200,20 600,120 T1400,120 L1400,180 Q1000,280 600,180 Q200,80 -200,180 Z"
            fill="url(#purpleGradient)"
            className="drop-shadow-lg"
          />

          {/* Text following the path - multiple instances for repetition */}
          <text className="fill-white mt-10 font-bold text-2xl tracking-wider">
            <textPath href="#wavyPath" startOffset="0%">
              TECHNNOVA TECHNNOVA TECHNNOVA TECHNNOVA
            </textPath>
          </text>

          <text className="fill-white mt-10 font-bold text-2xl tracking-wider">
            <textPath href="#wavyPath" startOffset="50%">
              TECHNNOVA TECHNNOVA TECHNNOVA TECHNNOVA
            </textPath>
          </text>
        </svg>
      </div>

      {/* Additional wavy elements for more complex design */}
      {/* <div className="absolute top-32 right-0">
        <svg
          width="400"
          height="200"
          viewBox="0 0 400 200"
          className="opacity-80"
        >
          <defs>
            <path
              id="wavyPath2"
              d="M0,100 Q100,50 200,100 T400,100"
              fill="none"
            />
          </defs>

          <path
            d="M0,80 Q100,30 200,80 T400,80 L400,120 Q300,170 200,120 Q100,70 0,120 Z"
            fill="url(#purpleGradient)"
            className="drop-shadow-md"
          />

          <text className="fill-white font-bold text-lg tracking-wider">
            <textPath href="#wavyPath2" startOffset="0%">
              TECHNNOVA TECH
            </textPath>
          </text>
        </svg>
      </div> */}
    </div>
  );
}
