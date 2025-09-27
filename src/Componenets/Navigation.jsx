'use client';

import { motion } from 'framer-motion';
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
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 glass-effect bg-black"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br to-orange-500 to-orange-400 rounded-lg flex items-center justify-center neon-glow">
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
                className="border-orange-500/30 text-orange-400 hover:border-orange-300 hover:bg-orange-500/10 transition-all duration-300"
              >
                Sign In
              </Button>
              <Button
                size="sm"
                onClick={onNavigateToAuth}
                className="bg-gradient-to-r from-orange-800 to-yellow-700 hover:from-orange-500 hover:to-yellow-700 text-white neon-glow transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/80 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black rounded-lg mt-2">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-white/80 hover:text-white transition-colors duration-300 rounded-md hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {item.name}
              </motion.a>
            ))}
            
            {/* Mobile Auth Buttons */}
            <div className="flex flex-col space-y-2 px-3 pt-4 border-t border-cyan-500/20 mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  onNavigateToAuth();
                  setIsMenuOpen(false);
                }}
                className="w-full border-cyan-500/30 text-cyan-400 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300"
              >
                Sign In
              </Button>
              <Button
                size="sm"
                onClick={() => {
                  onNavigateToAuth();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white neon-glow transition-all duration-300"
              >
                Get Started
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;

