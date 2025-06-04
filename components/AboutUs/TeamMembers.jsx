"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AgencyLanding = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const scrollRefMobile = useRef(null);
    const scrollRefDesktop = useRef(null);
    const animationIdMobile = useRef(null);
    const animationIdDesktop = useRef(null);
    const startTimeMobile = useRef(0);
    const startTimeDesktop = useRef(0);

    // Sample team member images (using placeholders) - duplicated for infinite scroll
    const originalTeamImages = [
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1566492031773-4f4e44671d37?w=400&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop&crop=face",
    ];

    // Duplicate images for seamless infinite scroll
    const teamImages = [...originalTeamImages, ...originalTeamImages];

    // Animation function for mobile
    const animateMobile = (timestamp) => {
        if (!startTimeMobile.current) startTimeMobile.current = timestamp;
        
        const duration = 40000; // 40 seconds
        const cardWidth = 320 + 24; // card width + gap
        const totalWidth = originalTeamImages.length * cardWidth;
        
        const elapsed = timestamp - startTimeMobile.current;
        const progress = (elapsed % duration) / duration;
        const currentX = -progress * totalWidth;
        
        if (scrollRefMobile.current) {
            scrollRefMobile.current.style.transform = `translateX(${currentX}px)`;
        }
        
        animationIdMobile.current = requestAnimationFrame(animateMobile);
    };

    // Animation function for desktop
    const animateDesktop = (timestamp) => {
        if (!startTimeDesktop.current) startTimeDesktop.current = timestamp;
        
        const duration = 60000; // 60 seconds
        const cardWidth = 280 + 24; // card width + gap
        const totalWidth = originalTeamImages.length * cardWidth;
        
        const elapsed = timestamp - startTimeDesktop.current;
        const progress = (elapsed % duration) / duration;
        const currentX = -progress * totalWidth;
        
        if (scrollRefDesktop.current) {
            scrollRefDesktop.current.style.transform = `translateX(${currentX}px)`;
        }
        
        animationIdDesktop.current = requestAnimationFrame(animateDesktop);
    };

    useEffect(() => {
        setIsLoaded(true);
        
        // Start animations
        animationIdMobile.current = requestAnimationFrame(animateMobile);
        animationIdDesktop.current = requestAnimationFrame(animateDesktop);
        
        return () => {
            if (animationIdMobile.current) cancelAnimationFrame(animationIdMobile.current);
            if (animationIdDesktop.current) cancelAnimationFrame(animationIdDesktop.current);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden font-['Inter','-apple-system','BlinkMacSystemFont','Segoe_UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira_Sans','Droid_Sans','Helvetica_Neue',sans-serif]">
            {/* Header Section */}
            <motion.div 
                className="text-center mt-10 px-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <motion.h1 
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    OUR TEAMS
                </motion.h1>
                <motion.p 
                    className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    A DEDICATED GROUP OF INNOVATORS, DESIGNERS, AND DEVELOPERS COMMITTED TO TURNING IDEAS INTO IMPACTFUL DIGITAL EXPERIENCES
                </motion.p>
            </motion.div>

            {/* Main Content */}
            <main className="pt-20">
                {/* Team Section */}
                <section className="max-w-full pb-20 overflow-hidden">
                    {/* Mobile Continuous Scroll */}
                    <div className="md:hidden relative">
                        <div 
                            ref={scrollRefMobile}
                            className="flex gap-6 transition-transform ease-linear"
                            style={{
                                width: `${teamImages.length * (320 + 24)}px`, // card width + gap
                            }}
                        >
                            {teamImages.map((image, index) => (
                                <motion.div
                                    key={index}
                                    className="flex-shrink-0 w-80 px-2"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
                                    transition={{ duration: 0.6, delay: (index % originalTeamImages.length) * 0.1 }}
                                >
                                    <div className="relative group overflow-hidden rounded-md aspect-[3/4] bg-gray-200 w-full">
                                        <img
                                            src={image}
                                            alt={`Team member ${(index % originalTeamImages.length) + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Overlay text that appears on hover/touch */}
                                        <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                            <h3 className="text-white font-medium text-xl mb-2">Team Member {(index % originalTeamImages.length) + 1}</h3>
                                            <p className="text-white/80 text-base">Creative Director</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Continuous Scroll */}
                    <div className="hidden md:block relative px-6">
                        <div 
                            ref={scrollRefDesktop}
                            className="flex gap-6 transition-transform ease-linear"
                            style={{
                                width: `${teamImages.length * (280 + 24)}px`, // card width + gap
                            }}
                        >
                            {teamImages.map((image, index) => (
                                <motion.div
                                    key={index}
                                    className="flex-shrink-0 w-70"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
                                    transition={{ duration: 0.6, delay: (index % originalTeamImages.length) * 0.1 }}
                                >
                                    <div className="relative group overflow-hidden rounded-md aspect-[3/5] bg-gray-200 w-full hover:scale-105 transition-transform duration-500">
                                        <img
                                            src={image}
                                            alt={`Team member ${(index % originalTeamImages.length) + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Overlay text that appears on hover */}
                                        <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                            <h3 className="text-white font-medium text-lg mb-1">Team Member {(index % originalTeamImages.length) + 1}</h3>
                                            <p className="text-white/80 text-sm">Creative Director</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Background Elements */}
                <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>
            </main>

            {/* Custom CSS */}
            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }

                .w-70 {
                    width: 280px;
                }
            `}</style>
        </div>
    );
};

export default AgencyLanding;