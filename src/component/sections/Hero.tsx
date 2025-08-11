"use client";
import React, { useEffect, useState } from "react";
import background from "../../../public/Technova_hero_.png";
import leftEllipse from "../../../public/Left_Ellipse.svg";
import rightEllipse from "../../../public/Right_Ellipse.svg";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, Variants } from "framer-motion";

const CountdownTimer = dynamic(() => import("../ui/CountDownTimer"), {
  ssr: false,
});

interface Particle {
  id: string;
  width: number;
  height: number;
  left: number;
  top: number;
}

const Hero = () => {
  const backgroundImage = `url(${background.src})`;
  const eventDate = "2025-11-01 10:00:00";
  const [particles, setParticles] = useState<Particle[]>([]);

  // Initialize particles only on client side
  useEffect(() => {
    setParticles(
      Array.from({ length: 15 }, (_, i) => ({
        id: `particle-${i}-${Math.random().toString(36).substring(2, 9)}`,
        width: Math.random() * 10 + 5,
        height: Math.random() * 10 + 5,
        left: Math.random() * 100,
        top: Math.random() * 100,
      }))
    );
  }, []);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const floatingVariants: Variants = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const particleVariants: Variants = {
    animate: (i: number) => ({
      y: [0, (Math.random() - 0.5) * 50, 0],
      x: [0, (Math.random() - 0.5) * 50, 0],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: Math.random() * 5,
      },
    }),
  };

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
      {/* Animated floating elements */}
      <motion.div
        className="absolute hidden md:block z-[10] -left-10 top-1/2 -translate-y-1/2 opacity-65"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
      >
        <Image
          src={leftEllipse}
          alt="Left Ellipse"
          width={300}
          height={150}
          className="w-full h-auto rounded-lg"
          quality={100}
        />
      </motion.div>

      <motion.div
        className="absolute hidden md:block z-[10] -right-10 top-1/2 -translate-y-1/2 opacity-65"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        <Image
          src={rightEllipse}
          alt="Right Ellipse"
          width={300}
          height={150}
          className="w-full h-auto rounded-lg"
          quality={100}
        />
      </motion.div>

      {/* Gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#0c06185b] to-[#2b145995] z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Main content with staggered animations */}
      <motion.div
        className="flex flex-col max-w-4xl gap-10 z-20"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="capitalize mt-8 text-white text-center text-5xl md:text-7xl lg:text-8xl font-bold"
          variants={itemVariants}
        >
          <motion.span className="inline-block" whileHover={{ scale: 1.05 }}>
            EMPOWERING{" "}
          </motion.span>
          <br />
          <motion.span
            className="inline-block bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            INNOVATION
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-white p-4 text-base text-center mx-auto max-w-2xl"
          variants={itemVariants}
          transition={{ delay: 0.4 }}
        >
          TechNova, under{" "}
          <motion.span
            className="text-[#D09BFF] font-medium"
            whileHover={{ scale: 1.05 }}
          >
            DTCSI Academy
          </motion.span>
          , is a dynamic platform for tech enthusiasts to connect, learn, and
          innovate. We empower individuals to unlock their potential, spark
          creativity, and shape the future of technology in Africa.
        </motion.p>

        <motion.div
          variants={itemVariants}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <CountdownTimer eventDate={eventDate} />
        </motion.div>
        <motion.div className="flex justify-center items-center">
          <motion.button className="bg-gradient-to-b  from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-medium px-4 py-2 rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 border-0">
            Register Now
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Floating particles/dots in the background - now client-side only */}
      {particles.map((particle, i) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/10 backdrop-blur-sm"
          style={{
            width: `${particle.width}px`,
            height: `${particle.height}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          variants={particleVariants}
          custom={i}
          animate="animate"
        />
      ))}
    </section>
  );
};

export default Hero;
