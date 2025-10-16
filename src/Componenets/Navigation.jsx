'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '#services',
      submenu: {
        Products: ['ChatBot', 'VoiceBot'],
        Solutions: ['Enterprise', 'Startup'],
      },
    },
    {
      name: 'About',
      href: '#about',
      submenu: {
        Company: ['Team', 'Our Story'],
      },
    },
    {
      name: 'Contact',
      href: '#contact',
      submenu: {
        Connect: ['Email', 'Twitter', 'LinkedIn'],
      },
    },
  ];

  const getSubmenuData = (itemName) => {
    const item = menuItems.find((m) => m.name === itemName);
    return item?.submenu || null;
  };

  return (
    <>
      <motion.nav
        className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="backdrop-blur-md bg-gray-300 rounded-full border border-black/10 px-6 shadow-2xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center neon-glow">
                <div className="w-4 h-4 bg-white rounded-sm opacity-90"></div>
              </div>
              <Link to="/" className="text-xl font-bold gradient-text text-black">
                SmartAgent Hub
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 relative">
              {menuItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.div
                    className="relative text-black hover:text-blue-500 transition-colors duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.href.startsWith('/') ? (
                      <Link to={item.href}>{item.name}</Link>
                    ) : (
                      item.name
                    )}
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === item.name && getSubmenuData(item.name) && (
                      <motion.div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 pt-4"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                          <div className="grid grid-cols-2 gap-8 min-w-max">
                            {Object.entries(getSubmenuData(item.name)).map(([category, links]) => (
                              <div key={category}>
                                <h3 className="text-white font-semibold mb-4 text-lg">{category}</h3>
                                <ul className="space-y-3">
                                  {links.map((link) => (
                                    <li key={link}>
                                      <Link
                                        to={
                                          link === 'ChatBot'
                                            ? '/chatbot'
                                            : link === 'VoiceBot'
                                            ? '/voicebot'
                                            : '#'
                                        }
                                        className="text-white/70 hover:text-white transition-colors duration-200 flex items-center group"
                                      >
                                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Auth Buttons */}
              <div className="flex items-center space-x-4 ml-8">
                <Link to="/auth">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-400/50 text-blue-400 hover:border-blue-300 hover:bg-blue-500/10 transition-all duration-300 rounded-full"
                  >
                    Sign In
                  </Button>
                </Link>

                <Link to="/auth">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white transition-all duration-300 transform hover:scale-105 rounded-full"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black/80 hover:text-black transition-colors duration-300 z-[60]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-start justify-center h-full px-8 space-y-6 overflow-y-auto pt-24">
              {/* Logo in Mobile Menu */}
              <div className="flex items-center space-x-2 mb-8">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm opacity-90"></div>
                </div>
                <span className="text-xl font-bold gradient-text">SmartAgent Hub</span>
              </div>

              {/* Mobile Menu Items */}
              {menuItems.map((item, index) => (
                <div key={item.name} className="w-full">
                  <motion.button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === item.name ? null : item.name)
                    }
                    className="text-2xl font-semibold text-white/90 hover:text-white transition-colors duration-300 block w-full text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {item.name}
                  </motion.button>

                  {/* Mobile Submenu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && getSubmenuData(item.name) && (
                      <motion.div
                        className="mt-4 ml-4 space-y-4 bg-white backdrop-blur-sm rounded-xl p-4 mb-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {Object.entries(getSubmenuData(item.name)).map(([category, links]) => (
                          <div key={category}>
                            <h4 className="text-black font-semibold mb-3">{category}</h4>
                            <ul className="space-y-2">
                              {links.map((link) => (
                                <li key={link}>
                                  <Link
                                    to={
                                      link === 'ChatBot'
                                        ? '/chatbot'
                                        : link === 'VoiceBot'
                                        ? '/voicebot'
                                        : '#'
                                    }
                                    className="text-black/80 hover:text-black transition-colors text-sm flex items-center"
                                    onClick={() => {
                                      setIsMenuOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                  >
                                    <ArrowRight className="w-3 h-3 mr-2" />
                                    {link}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="flex flex-col space-y-4 w-full max-w-sm pt-8">
                <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-blue-400/50 text-blue-400 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 rounded-full text-lg"
                  >
                    Sign In
                  </Button>
                </Link>

                <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white transition-all duration-300 rounded-full text-lg"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
