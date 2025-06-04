"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AgencyLanding = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Sample team member images (using placeholders)
    const teamImages = [
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1566492031773-4f4e44671d37?w=400&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=600&fit=crop&crop=face",
    ];

    // Auto-scroll functionality
    useEffect(() => {
        setIsLoaded(true);

        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % teamImages.length);
                
                // Auto-scroll mobile container
                const mobileContainer = document.querySelector('.mobile-scroll-container');
                if (mobileContainer) {
                    const cardWidth = mobileContainer.querySelector('.team-card')?.offsetWidth || 0;
                    const gap = 24; // 6 * 4px (gap-6)
                    const scrollPosition = ((currentImageIndex + 1) % teamImages.length) * (cardWidth + gap);
                    mobileContainer.scrollTo({
                        left: scrollPosition,
                        behavior: 'smooth'
                    });
                }
            }, 4000); // 4 seconds interval

            return () => clearInterval(interval);
        }
    }, [isPaused, currentImageIndex, teamImages.length]);

    // Handle manual scroll pause/resume
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

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
                <section className="max-w-7xl mx-auto pb-20">
                    {/* Mobile: Horizontal scroll, Desktop: Grid */}
                    <div className="px-6 md:px-6">
                        {/* Mobile horizontal scroll container */}
                        <div 
                            className="md:hidden"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-2 mobile-scroll-container">
                                {teamImages.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex-shrink-0 w-[calc(100vw-5rem)] max-w-sm snap-center team-card"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        <div className="relative group overflow-hidden rounded-2xl aspect-[3/4] bg-gray-200 w-full">
                                            <img
                                                src={image}
                                                alt={`Team member ${index + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                            {/* Overlay text that appears on hover/touch */}
                                            <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                                <h3 className="text-white font-medium text-xl mb-2">Team Member {index + 1}</h3>
                                                <p className="text-white/80 text-base">Creative Director</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Desktop grid layout */}
                        <div 
                            className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {teamImages.map((image, index) => (
                                <motion.div
                                    key={index}
                                    className={`relative group transition-all duration-1000 ${
                                        index === currentImageIndex ? 'scale-105 z-10 shadow-2xl' : 'scale-100'
                                    }`}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-200">
                                        <img
                                            src={image}
                                            alt={`Team member ${index + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-500 ${
                                            index === currentImageIndex ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                        }`}></div>

                                        {/* Ring indicator for current active card */}
                                        {/* {index === currentImageIndex && (
                                            <div className="absolute inset-0 rounded-2xl ring-4 ring-purple-500 ring-opacity-70"></div>
                                        )} */}

                                        {/* Overlay text that appears on hover or when active */}
                                        <div className={`absolute bottom-6 left-6 right-6 transform transition-all duration-500 ${
                                            index === currentImageIndex 
                                                ? 'translate-y-0 opacity-100' 
                                                : 'translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
                                        }`}>
                                            <h3 className="text-white font-medium text-lg mb-1">Team Member {index + 1}</h3>
                                            <p className="text-white/80 text-sm">Creative Director</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Scroll indicator for mobile */}
                    <div className="md:hidden flex justify-center mt-6">
                        <div className="flex space-x-2">
                            {/* {teamImages.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === currentImageIndex ? 'bg-purple-500 scale-125' : 'bg-gray-400'
                                    }`}
                                ></div>
                            ))} */}
                        </div>
                    </div>
                </section>

                {/* Background Elements */}
                <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>
            </main>

            {/* Custom CSS for hiding scrollbar */}
            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};

export default AgencyLanding;