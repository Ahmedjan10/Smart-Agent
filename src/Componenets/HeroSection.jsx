'use client';

import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

const HeroSection = () => {
  const skylineImage = '/c71702f017efc971dae7cb6e4cb09c5c.jpg';

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* City Skyline Background Image - Right Side */}
      <motion.div
        className="absolute right-0 top-10 w-auto h-auto opacity-80 lg:opacity-100 lg:right-18  lg:top-10 lg:w-1/2 lg:h-auto"
      >
        <img
          src={skylineImage}
          alt="City Skyline"
          className=" object-cover scale-120 sm:scale-120 md:scale-115 lg:scale-120 xl:scale-120"
          style={{ filter: "brightness(1.1) contrast(1.7)" }}
        />
      </motion.div>

      {/* Content Overlay - Left Aligned */}
      <div className=" relative z-10 min-h-screen flex items-center 
  px-4 sm:px-6 lg:px-30 
  py-12 lg:py-50 
  translate-y-40 sm:translate-y-5">
        <div className="max-w-3xl text-left w-full">

          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="mb-4 sm:mb-6"
          >
            <h1 className="text-5xl sm:text-6xl md:text-10xl lg:text-7xl font-extrabold mb-2 sm:mb-4 tracking-tight leading-tight">
              <span className="bg-blue-100 bg-clip-text text-transparent drop-shadow-lg">
                Next-Gen AI
              </span>
              <br />
              <span className="text-gray-100 drop-shadow-md">Assistant Hub</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 2.1 }}
            className="text-base sm:text-lg md:text-xl text-white max-w-2xl mb-8 sm:mb-10 leading-relaxed font-light drop-shadow-sm"
          >
            Deploy powerful AI agents with our enterprise platform.
            Advanced ChatBots, VoiceBots, and Multi-Agent Systems that
            transform your business operations with intelligence and efficiency.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 2.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16"
          >
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-lg group w-full sm:w-auto"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              className="border-blue-400/50 text-white hover:bg-blue-500/10 hover:border-blue-300 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl group w-full sm:w-auto"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span>Watch Demo</span>
            </Button>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.9 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl"
          >

          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;