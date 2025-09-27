'use client';

import { motion } from 'framer-motion'; 
import { Button } from './ui/Button';
import { Play, ArrowRight, Bot } from 'lucide-react';
import skylineImage from '/Buildings.png'; 


const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* City Skyline Background Image */}
      <motion.div
  className="absolute inset-0"
  initial={{ opacity: 0, scale: 1.1 }}
  animate={{
    opacity: 0.5,
    scale: window.innerWidth < 768 ? 0.9 : 0.75, // mobile vs desktop
    y: window.innerWidth < 768 ? 60 : 110,
  }}
  transition={{ duration: 1.2, ease: "easeOut" }}
>
  <img
    src={skylineImage}
    alt="City Skyline"
    className="w-full h-full object-cover"
    style={{ filter: "brightness(0.57) contrast(2.7)" }}
  />
  <div className="absolute inset-0 bg-black/40" />
</motion.div>

  
      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/15 border border-amber-400/30 rounded-full text-amber-300 mb-8 font-medium tracking-wide"
          >
            <Bot className="w-4 h-4" />
            <span className="text-sm">Powered by Advanced AI</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="mb-6"
          >
            <h1 className="text-3xl  sm:text-3xl md:text-5xl lg:text-7xl font-extrabold mb-4 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
                Next-Gen AI
              </span>
              <br />
              <span className="text-gray-100 drop-shadow-md">Assistant Hub</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.1 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light drop-shadow-sm"
          >
            Deploy powerful AI agents with our enterprise platform. 
            Advanced ChatBots, VoiceBots, and Multi-Agent Systems that 
            transform your business operations with intelligence and efficiency.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button 
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg group"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-amber-400/50 text-amber-200 hover:bg-amber-500/10 hover:border-amber-300 px-8 py-4 text-lg font-semibold rounded-2xl group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span>Watch Demo</span>
            </Button>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.9 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">50K+</div>
              <div className="text-gray-400 text-sm font-medium tracking-wide uppercase">Active Users</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">99.9%</div>
              <div className="text-gray-400 text-sm font-medium tracking-wide uppercase">Uptime</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-gray-400 text-sm font-medium tracking-wide uppercase">Support</div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;

