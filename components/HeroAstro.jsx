"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroAstro = () => {
    const floatingAnimation = {
        animate: {
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };
    return (
        <div className="relative">
            <img className="w-screen h-screen" src="/Untitled design.svg"></img>
            {/* <img className="absolute top-0" src="/astronet.svg"></img> */}
            {/* <motion.div
                className="w-400 h-400 bg-amber-400  rounded-full shadow-2xl flex items-center justify-start absolute top-0 "
                {...floatingAnimation}
            >
                <img className=" w-400 h-400" src="/astronet.svg"></img>
            </motion.div> */}
        </div>
    );
};

export default HeroAstro;
