"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { label: 'HOME', number: '01' },
    { label: 'ABOUT US', number: '02' },
    // { label: 'CASE STUDIES', number: '03' },
    // { label: 'PRICING', number: '04' },
    { label: 'SERVICE', number: '03' },
    // { label: 'CAREER', number: '06' },
    { label: 'CONTACT US', number: '04' }
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
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  const logoVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? ' backdrop-blur-md shadow-sm' : 'bg-transparent text-black'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div 
              className="flex   justify-center items-center"
              variants={logoVariants}
              initial="initial"
              animate="animate"
            >
              <img className='w-20' src='/logo.svg'></img>
            </motion.div>

            {/* Desktop Menu */}
            <motion.div 
              className="hidden lg:flex items-center space-x-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href="#"
                  className={`group relative text-sm font-semibold tracking-wider ${
          scrolled ? 'backdrop-blur-md  text-black' : 'bg-transparent text-black'} hover:text-gray-600 transition-colors duration-300`}
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                      {item.number}
                    </span>
                    <Link to={item.label} smooth={true} duration={500} >
                    {item.label}
                    </Link>
                  </span>
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-black origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Button */}


            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMenu}
              className={`lg:hidden p-2  hover:text-gray-600 transition-colors duration-300 ${isOpen? "text-black":"text-white"}`}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col h-full">
                <div className="flex-1 pt-24 px-8">
                  <nav className="space-y-8">
                    {menuItems.map((item, index) => (
                      <motion.a
                        key={item.label}
                        href="#"
                        className="block group"
                        variants={itemVariants}
                        initial="closed"
                        animate="open"
                        custom={index}
                        onClick={toggleMenu}
                      >
                        <div className="flex items-center space-x-4 py-2">
                          <span className="text-xs text-gray-400 font-medium w-6">
                            {item.number}
                          </span>
                          <span className="text-lg font-medium tracking-wider text-black group-hover:text-gray-600 transition-colors duration-300">
                            {item.label}
                          </span>
                        </div>
                        <motion.div
                          className="h-px bg-gray-200 ml-10 origin-left"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.a>
                    ))}
                  </nav>
                </div>

                <div className="p-8 border-t border-gray-100">
                  

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-xs text-gray-400 font-medium mb-4">SOCIAL:</p>
                    <div className="flex space-x-4">
                      {['Facebook', 'Dribbble', 'Instagram'].map((social) => (
                        <motion.a
                          key={social}
                          href="#"
                          className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-sm text-gray-600 hover:bg-black hover:text-white transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {social[0]}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Demo Content */}
      
    </>
  );
};

export default Navbar;