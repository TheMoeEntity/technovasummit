"use client";

export default function WavyBanner() {
  return (
    <div className="min-h-[450px] w-full relative overflow-hidden">
      {/* Wavy Banner */}
      <div className="absolute w-full inset-0">
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
    </div>
  );
}
