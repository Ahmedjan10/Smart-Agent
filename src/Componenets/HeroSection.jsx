
'use client';

import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import Silk from './Silk'; // Import the Silk component

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden ">
      {/* Silk Shader Background */}
      <div className="absolute inset-0 z-0">
        <Silk
          speed={5}
          scale={1}
          color="#1e40af"
          noiseIntensity={1.1}
          rotation={0}
        />
      </div>

      {/* Content Overlay - Left Aligned */}
      <div className="relative z-10 min-h-screen flex items-center justify-center 
        px-4 sm:px-6 lg:px-8 
        py-12 mt-20 mb-20">
        <div className="max-w-3xl text-center w-full">

          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="mb-4 sm:mb-6"
          >
            <h1 className="text-5xl sm:text-6xl md:text-9xl lg:text-7xl font-extrabold mb-2 sm:mb-4 tracking-tight leading-tight">
              <span className="bg-white bg-clip-text text-transparent drop-shadow-lg">
                Next-Gen AI
              </span>
              <br />
              <span className="text-gray-100 drop-shadow-md">Assistant Hub</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.1 }}
            className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light drop-shadow-sm"
          >
            Deploy powerful AI agents with our enterprise platform.
            Advanced ChatBots, VoiceBots, and Multi-Agent Systems that
            transform your business operations with intelligence and efficiency.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16 justify-center"
          >
            <Button
              className="bg-white hover:bg-blue-600 text-black hover:text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg 
              font-semibold rounded-2xl shadow-lg group w-full sm:w-auto"
                 onClick={() => {
                    onNavigateToAuth();
                  }}
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
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.9 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
          >

          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;