"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  eventDate: string;
}

const calculateTimeLeft = (eventDate: string) => {
  const targetDate = new Date(eventDate).getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const formatTime = (num: number) => String(num).padStart(2, "0");

export default function CountdownTimer({ eventDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(eventDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(eventDate));
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, [eventDate]);

  const timerUnits = [
    { value: timeLeft.days, label: "DAYS" },
    { value: timeLeft.hours, label: "HOURS" },
    { value: timeLeft.minutes, label: "MINS" },
    { value: timeLeft.seconds, label: "SECS" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 px-12 md:px-0 gap-4 max-w-5xl w-full">
      {timerUnits.map((unit, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-4 bg-[#120925] rounded-3xl border-[0.5px] border-[#6F4E93] shadow-xl"
        >
          <div className="p-0 flex flex-col items-center">
            <div className="text-white text-5xl md:text-6xl font-bold tabular-nums">
              {formatTime(unit.value)}
            </div>
            <div className="bg-gradient-to-b from-[#9845FF] to-[#7B0FFF] text-white font-medium text-xs md:text-base px-4 py-2 mt-3 rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 border-0">
              {unit.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
