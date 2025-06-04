"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Eye, ExternalLink } from 'lucide-react';

const OurService = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "BRAND IDENTITY & DESIGN",
      subtitle: "COMPLETE BRANDING SOLUTIONS",
      category: "Branding",
      description: "Create powerful brand identities with custom logos, visual systems, and brand guidelines that make lasting impressions.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
      image:"/service/brand.png"
    },
    {
      id: 2,
      title: "SOCIAL MEDIA MARKETING",
      subtitle: "ENGAGEMENT & GROWTH STRATEGY",
      category: "Social Media",
      description: "Build engaged communities and drive conversions with strategic social media campaigns across all platforms.",
      features: ["Content Strategy", "Community Management", "Paid Advertising", "Analytics & Reporting"],
      image:"/service/social.png"
    },
    {
      id: 3,
      title: "WEB DEVELOPMENT",
      subtitle: "CUSTOM DIGITAL SOLUTIONS",
      category: "Development",
      description: "Modern, responsive websites and applications built with cutting-edge technologies for optimal performance.",
      features: ["Responsive Design", "E-commerce Solutions", "Custom Development", "Performance Optimization"],
      image:"/service/wrbProgrammer.jpg"
    },
    {
      id: 4,
      title: "CONTENT CREATION",
      subtitle: "STORYTELLING & VISUAL CONTENT",
      category: "Content",
      description: "Compelling content that tells your brand story through engaging visuals, copy, and multimedia experiences.",
      features: ["Copywriting", "Photography", "Video Production", "Graphic Design"],
      image:"/service/contentCreation.jpg"
    },
    {
      id: 5,
      title: "SEO & PPC MANAGEMENT",
      subtitle: "SEARCH ENGINE OPTIMIZATION",
      category: "Digital Marketing",
      description: "Maximize your online visibility with comprehensive SEO strategies and targeted PPC campaigns.",
      features: ["Keyword Research", "On-Page SEO", "Google Ads", "Performance Tracking"],
      image:"/service/seo.jpg"
    },
    {
      id: 6,
      title: "STRATEGIC PLANNING",
      subtitle: "BUSINESS GROWTH STRATEGY",
      category: "Strategy",
      description: "Data-driven strategic planning that aligns your business objectives with market opportunities for growth.",
      features: ["Market Analysis", "Growth Strategy", "Competitor Research", "ROI Optimization"],
      image:"/service/strategic.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            OUR SERVICES
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            COMPREHENSIVE DIGITAL SOLUTIONS TO ELEVATE YOUR BRAND AND DRIVE BUSINESS GROWTH
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 gap-6 sm:gap-8 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={service.id}
                className="group relative bg-white flex flex-col lg:flex-row rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer min-h-[400px] sm:min-h-[450px] lg:h-[50vh]"
                variants={cardVariants}
                whileHover="hover"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Mobile Image (always on top) */}
                <div className="w-full h-48 sm:h-56 lg:hidden overflow-hidden">
                  <motion.img 
                    className="w-full h-full object-cover" 
                    src={service.image} 
                    alt={service.title}
                    variants={imageVariants}
                    whileHover="hover"
                  />
                </div>

                {/* Desktop Image - Left side for odd indices */}
                {!isEven && (
                  <div className="hidden lg:block lg:w-1/2 overflow-hidden order-first">
                    <motion.img 
                      className="w-full h-full object-cover" 
                      src={service.image} 
                      alt={service.title}
                      variants={imageVariants}
                      whileHover="hover"
                    />
                  </div>
                )}
                
                {/* Content */}
                <div className="flex-1 lg:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
                  <div className="mb-3 sm:mb-4">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium uppercase tracking-wide rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-xs sm:text-sm font-medium uppercase tracking-wide mb-3 sm:mb-4">
                    {service.subtitle}
                  </p>
                  
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {service.features.map(feature => (
                      <div key={feature} className="flex items-center text-xs sm:text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                        <span className="leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Desktop Image - Right side for even indices */}
                {isEven && (
                  <div className="hidden lg:block lg:w-1/2 overflow-hidden order-last">
                    <motion.img 
                      className="w-full h-full object-cover" 
                      src={service.image} 
                      alt={service.title}
                      variants={imageVariants}
                      whileHover="hover"
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a href="tel:6282349415">
            <motion.button
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default OurService;