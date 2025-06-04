"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Search,
  Users,
  MousePointer,
  Mail,
  InstagramIcon,
} from "lucide-react";

const orbitItems = [
  {
    icon: <TrendingUp className="w-5 h-5 text-white" />,
    label: "Google SEO",
  },
  {
    icon: <Users className="w-5 h-5 text-white" />,
    label: "Leads: 12.5K",
  },
  {
    icon: <MousePointer className="w-5 h-5 text-white" />,
    label: "CTR: 8.9%",
  },
  {
    icon: <Search className="w-5 h-5 text-white" />,
    label: "Keywords: 2.3K",
  },
  {
    icon: <Mail className="w-5 h-5 text-white" />,
    label: "Email",
  },
  {
    icon: <InstagramIcon className="w-5 h-5 text-white" />,
    label: "Instagram",
  },
];

const HeroAstro = () => {
  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 0, 0, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative rounded-2xl h-[80vh] bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated background elements */}
       <motion.div
          className="absolute top-20 left-[20%] bg-gradient-to-r rounded-xl p-4 shadow-lg"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="flex items-center justify-center space-x-1">
            <div className="flex items-center space-x-2 text-white">
              <span className="font-bold text-lg text-center">
                "Taking your business to new heights"
              </span>
            </div>
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
        </motion.div>
      <div className="absolute inset-0">
        {/* Stars */}
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-60 right-20 w-40 h-40 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-30"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full justify-center min-h-screen px-6">
        {/* Central Astronaut/Robot Figure */}
        <div className="relative">
          {/* Central Robot/AI figure */}
          <motion.div
            className="w-200 h-200 bg-gradient-to-br rounded-full flex items-center justify-start relative overflow-hidden"
            {...floatingAnimation}
          >
            <img className="absolute w-400 h-400" src="/astronet.svg" alt="Astronaut" />
          </motion.div>

          {/* Orbit container */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Orbiting elements */}
            {orbitItems.map((item, i) => {
              const angle = (360 / orbitItems.length) * i;
              const radius = 220; // adjust for orbit size
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);

              return (
                <motion.div
                  key={i}
                  className="absolute bg-white/10 backdrop-blur-md rounded-xl p-3 shadow-lg text-white text-xs font-semibold flex flex-col items-center"
                  style={{
                top: `calc(48% + ${y}px)`,
                left: `calc(45% + ${x}px)`,
                transform: "translate(-60%, -50%)",
              }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                >
                  {item.icon}
                  <span className="mt-1">{item.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Main Heading */}
        <motion.div
          className="text-center mt-20 max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {/* Add your heading content here */}
          </motion.div>
        </motion.div>
      </div>

      {/* Additional Marketing Metrics */}
      <div className="absolute inset-0 pointer-events-none">
       
      </div>
    </div>
  );
};

export default HeroAstro;
