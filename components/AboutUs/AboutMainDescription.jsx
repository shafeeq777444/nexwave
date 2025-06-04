"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Main from "../Hero/HeroAstro";

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.25, 0.25, 0.75],
        },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.02,
            duration: 0.6,
            ease: [0.25, 0.25, 0.25, 0.75],
        },
    }),
};

const AboutMainDescription = () => {
    const heroRef = useRef(null);
    const mainTextRef = useRef(null);
    const heroInView = useInView(heroRef, { once: true, threshold: 0.1 });
    const mainTextInView = useInView(mainTextRef, { once: true, threshold: 0.1 });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Main Content */}
            <div className="pt-20 lg:pt-24">
                <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row justify-between items-center px-6 lg:px-12 gap-12">
                    {/* Text Section */}
                    
                    <div className="flex-1 relative">

                        {/* Hero Tag */}
                        <motion.div
                            ref={heroRef}
                            className="mb-6"
                            variants={fadeInUp}
                            initial="hidden"
                            animate={heroInView ? "visible" : "hidden"}
                        ></motion.div>
                        
                        {/* Main Headline */}
                        <motion.div
                            ref={mainTextRef}
                            variants={staggerContainer}
                            initial="hidden"
                            animate={mainTextInView ? "visible" : "hidden"}
                        >
                           
                            <motion.h1
                                className="text-3xl xl:text-7xl font-bold text-black tracking-tight text-justify leading-snug"
                                style={{ lineHeight: "1.2" }}
                            >
                                {"WE BELIEVE IN THE POWER OF DESIGN TO TRANSFORM BUSINESSES. OUR TEAM OF TALENTED DESIGNERS, STRATEGISTS, AND CREATIVE THINKERS WORK."
                                    .split(" ")
                                    .map((word, index) => (
                                        <motion.span
                                            key={index}
                                            variants={letterAnimation}
                                            custom={index}
                                            className="inline-block mr-2"
                                            whileHover={{
                                                scale: 1.05,
                                                color: "#4724c8",
                                                transition: { duration: 0.2 },
                                            }}
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                            </motion.h1>
                        </motion.div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutMainDescription;
