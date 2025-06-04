"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { label: 'HOME', href: '#' },
    { label: 'ABOUT US', href: '#' },
    { label: 'CASE STUDIES', href: '#' },
    { label: 'PRICING', href: '#' },
    { label: 'SERVICE', href: '#' },
    { label: 'CAREER', href: '#' },
    { label: 'CONTACT US', href: '#' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 10 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: 'easeOut'
      }
    })
  };

  return (
    <>

      {/* Footer Section Preview */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-30">
            
            {/* Brand Section */}
            <motion.div
            className='lg:col-span-2'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold tracking-wider mb-6">NEXWAVE</h3>
              <div>
                <h4 className="text-sm font-medium tracking-wider text-gray-400 mb-4">
                  SUBSCRIBE TO OUR NEWSLETTER
                </h4>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                  CREATIVE THINKERS WORK COLLABORATIVELY TO BRING
                </p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="name@email.com"
                    className="flex-1 bg-transparent border border-gray-600 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors duration-300"
                  />
                  <button className="bg-white text-black px-6 py-2.5 text-sm font-medium tracking-wide hover:bg-gray-200 transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-medium tracking-wider text-gray-400 mb-6">COMPANY</h4>
              <nav className="space-y-4">
                {['ABOUT', 'CASE STUDIES', 'PRICING', 'BLOG', 'CONTACT US'].map((item) => (
                  <a key={item} href="#" className="block text-sm text-gray-500 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                ))}
              </nav>
            </motion.div>

            {/* Support Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-medium tracking-wider text-gray-400 mb-6">SUPPORT</h4>
              <nav className="space-y-4">
                {['404', 'LICENSE', 'CHANGELOG'].map((item) => (
                  <a key={item} href="#" className="block text-sm text-gray-500 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                ))}
              </nav>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-medium tracking-wider text-gray-400 mb-6">SOCIAL LINKS</h4>
              <nav className="space-y-4">
                {['FACEBOOK', 'TWITTER'].map((item) => (
                  <a key={item} href="#" className="block text-sm text-gray-500 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                ))}
              </nav>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;