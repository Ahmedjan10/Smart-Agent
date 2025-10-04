'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

const Navigation = ({ onNavigateToAuth }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <motion.nav 
        className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="backdrop-blur-md bg-black/100 rounded-full border border-white/15 px-6 shadow-2xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center neon-glow">
                <div className="w-4 h-4 bg-white rounded-sm opacity-90"></div>
              </div>
              <span className="text-xl font-bold gradient-text">SmartAgent Hub</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative text-white/80 hover:text-white transition-colors duration-300 group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
              
              {/* Auth Buttons */}
              <div className="flex items-center space-x-4 ml-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onNavigateToAuth}
                  className="border-blue-400/50 text-blue-400 hover:border-blue-300 hover:bg-blue-500/10 transition-all duration-300 rounded-full"
                >
                  Sign In
                </Button>
                <Button
                  size="sm"
                  onClick={onNavigateToAuth}
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white transition-all duration-300 transform hover:scale-105 rounded-full"
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white/80 hover:text-white transition-colors duration-300 z-[60]"
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
            <div className="flex flex-col items-start justify-center h-full px-8 space-y-6">
              {/* Logo in Mobile Menu */}
              <div className="flex items-center space-x-2 mb-8">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm opacity-90"></div>
                </div>
                <span className="text-xl font-bold gradient-text">SmartAgent Hub</span>
              </div>

              {/* Menu Items */}
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-3xl font-semibold text-white/90 hover:text-white transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Mobile Auth Buttons */}
              <div className="flex flex-col space-y-4 w-full max-w-sm pt-8">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    onNavigateToAuth();
                    setIsMenuOpen(false);
                  }}
                  className="w-full border-blue-400/50 text-blue-400 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 rounded-full text-lg"
                >
                  Sign In
                </Button>
                <Button
                  size="lg"
                  onClick={() => {
                    onNavigateToAuth();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white transition-all duration-300 rounded-full text-lg"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;