"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {  Phone} from "lucide-react";
import { RiWhatsappFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

import HeroAstro from "./HeroAstro";

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

const HeroContent = () => {
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
          <div className="flex-1">
            {/* Hero Tag */}
            <motion.div
              ref={heroRef}
              className="mb-6"
              variants={fadeInUp}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
            ></motion.div>

            {/* Main Headline & Content */}
            <motion.div
              ref={mainTextRef}
              variants={staggerContainer}
              initial="hidden"
              animate={mainTextInView ? "visible" : "hidden"}
              className="cursor-default"
            >
              <h1 className="text-black md:text-6xl text-3xl font-bold mb-3">
                <strong  className="text-nexblue cursor-default">NEXWAVE</strong> DIGITAL MARKETING
              </h1>

              {/* Highlight */}
              <p className="text-nexblue font-semibold mb-6 md:text-3xl text-xl uppercase">
                Stay ahead of the curve with forward-thinking strategies.
              </p>

              {/* About Description */}
              <section className="max-w-4xl mx-auto rounded-xl text-black mb-8 leading-relaxed">
                Tirur’s Premier Digital Marketing Agency

                <br />
               We use tech, psychology, and creativity to deliver marketing that grows your business through SEO, branding, and ads
              </section>

              {/* Buttons */}
              <div className="flex gap-4 mb-8">
                <a href="tel:6282349415">
                  <button  className="bg-black flex gap-4 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
                    Contact Us
                    <Phone width={15}/>
                  </button>
                </a>
                <button className="  text-black px-8 py-2 rounded-md font-semibold hover:bg-black hover:text-white transition-all  duration-50 ">
                  About us
                </button>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-6 text-black">
                <a
                  href="https://www.instagram.com/nexwave_digital_media?igsh=MTF3c21vNTBrajA0Nw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"

                >
                  <PiInstagramLogoFill size={24} />
                </a>

                <a
                  href="https://wa.me/qr/334GOMNMGVQKF1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"

                >
                 <RiWhatsappFill size={24}/>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"

                >
                  <FaYoutube size={24} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Orbit Graphic Section */}
          <div className="flex-1 w-full lg:w-2/4">
            <HeroAstro />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
