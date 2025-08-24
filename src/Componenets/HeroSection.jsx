'use client';

import { motion } from 'framer-motion'; // ✅ FIXED import
import { Button } from './ui/Button';
import { Zap, ArrowRight, Play } from 'lucide-react';
import { Suspense } from 'react';
import Robot3D from './Robot3D';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="absolute inset-0 holographic opacity-30"></div>

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Beam effects */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`beam-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{
              left: '10%',
              right: '10%',
              top: `${20 + i * 15}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          className="text-center lg:text-left order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-cyan-400/30 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-sm text-cyan-400">Powered by Advanced AI</span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <span className="gradient-text">Next-Gen AI</span>
            <br />
            <span className="text-white">Assistant Hub</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Deploy powerful AI agents with our cutting-edge platform. ChatBots, VoiceBots, and Multi-Agent Systems that transform your business operations with unprecedented intelligence.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 neon-glow pulse-glow group px-8 py-4"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 bg-transparent group px-8 py-4"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            {[
              { value: '50K+', label: 'Active Users' },
              { value: '99.9%', label: 'Uptime' },
              { value: '24/7', label: 'Support' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - 3D Robot */}
        <motion.div
          className="relative flex items-center justify-center order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <div className="absolute inset-0 glass-effect rounded-3xl neon-glow-purple">
            <div className="absolute inset-0 holographic rounded-3xl opacity-50"></div>
          </div>

          <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
            }>
              <Robot3D />
            </Suspense>

            {/* Floating UI Elements */}
            <motion.div
              className="absolute top-4 left-4 glass-effect rounded-lg p-3"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-white/80">Online</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-4 right-4 glass-effect rounded-lg p-3"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-white/80">AI Active</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-1/2 -left-8 glass-effect rounded-lg p-2"
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-xs text-cyan-400">Neural</div>
              <div className="text-xs text-cyan-400">Network</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;