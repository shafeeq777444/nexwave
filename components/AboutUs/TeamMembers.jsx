"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
const AgencyLanding = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Sample team member images (using placeholders)
    const teamImages = [
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face",
    ];

    useEffect(() => {
        setIsLoaded(true);

        // Auto-rotate team images
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % teamImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden font-['Inter','-apple-system','BlinkMacSystemFont','Segoe_UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira_Sans','Droid_Sans','Helvetica_Neue',sans-serif]">
            {/* Navigation */}
           <motion.div 
  className="text-center mt-10"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <motion.h1 
    className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    OUR TEAMS
  </motion.h1>
  <motion.p 
    className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
  >
    A DEDICATED GROUP OF INNOVATORS, DESIGNERS, AND DEVELOPERS COMMITTED TO TURNING IDEAS INTO IMPACTFUL DIGITAL EXPERIENCES
  </motion.p>
</motion.div>


            {/* Main Content */}
            <main className="pt-20">
                {/* Hero Section */}

                {/* Team Section */}
                <section className="max-w-7xl mx-auto px-6 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamImages.map((image, index) => (
                            <div
                                key={index}
                                className={`relative group transition-all duration-1000 delay-${700 + index * 200} ${
                                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                                }`}
                            >
                                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-200">
                                    <img
                                        src={image}
                                        alt={`Team member ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Overlay text that appears on hover */}
                                    <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <h3 className="text-white font-medium text-lg mb-1">Team Member</h3>
                                        <p className="text-white/80 text-sm">Creative Director</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* The Team Title Overlay */}
                </section>

                {/* Background Elements */}
                <div className="fixed inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>
            </main>
        </div>
    );
};

export default AgencyLanding;
