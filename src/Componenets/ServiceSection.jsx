'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { MessageCircle, Mic, Users, ArrowUp, Sparkles, Send, Play, Network, X } from 'lucide-react';
import LogoShowcase from './LogoShowcase';

const ServicesSection = () => {
  return (
    <motion.div
      className="min-h-screen bg-white rounded-t-[50px] md:rounded-t-[100px]"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0 }}
    >
      <LogoShowcase />

      {/* First Content Section */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left Side - Text Content + Image */}
          <div className="md:col-span-7 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-black ml-0 md:ml-12 lg:ml-20">
              Transform Your Business with AI Agents
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed ml-0 md:ml-12 lg:ml-20">
              Empower your team with intelligent AI agents that automate workflows,
              enhance customer experiences, and drive business growth. Our platform
              makes it easy to deploy and manage AI solutions tailored to your needs.
            </p>

            {/* Left Side Background Image */}
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl ml-auto md:w-[90%]">
              <img
                src="/path-to-your-left-image.jpg"
                alt="AI Dashboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>

          {/* Right Side - Background Image */}
          <div className="md:col-span-5 flex justify-end w-full">
            <div className="relative w-full md:w-[90%] h-[350px] md:h-[450px] rounded-2xl overflow-hidden ml-0 md:ml-auto">
              <img
                src="/erasebg-transformed.webp"
                alt="AI Technology"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - White Background with Border */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="bg-white rounded-[40px] border-2 border-gray-200 p-8 md:p-16 shadow-lg">
          {/* Top Badge/Tag */}
          <div className="flex justify-center mb-8">
            <span className="px-6 py-2 border border-gray-300 rounded-full text-sm text-gray-600 uppercase tracking-wide">
              INCREASE ONLINE SALES
            </span>
          </div>

          {/* Content Grid - Two Columns */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Automate support and sales with AI customer service chatbots
              </h2>
            </div>

            {/* Right Column - Description */}
            <div className="flex items-center">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                When your live chat agents deal with repetitive tasks or common questions, use chatbots to handle inquiries automatically. Let chatbots manage the routine and your team focus on delivering exceptional experience.
              </p>
            </div>
          </div>

          {/* Bottom Image - Full Width */}
          <div className="mt-12">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/path-to-chatbot-image.jpg"
                alt="AI Chatbot Interface"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Voice Feature Showcase Section */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-[40px] p-8 md:p-16 overflow-hidden">
          {/* Glowing orb effect at bottom */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-[120px] pointer-events-none"></div>
          
          {/* Top badges */}
          <div className="flex justify-between items-center mb-12 relative z-10">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Voice AI Feature
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white">
              Coming Soon
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left - Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Voice-Powered AI Conversations
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed">
                Experience seamless voice interactions with our advanced AI chatbot. 
                Simply speak your questions, and get instant, accurate text responses. 
                Perfect for hands-free communication and faster problem-solving.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <Mic className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Voice Input</h3>
                    <p className="text-blue-200 text-sm">Speak naturally and let AI understand your needs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Text Response</h3>
                    <p className="text-blue-200 text-sm">Get clear, professional text answers instantly</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Smart Understanding</h3>
                    <p className="text-blue-200 text-sm">AI comprehends context and intent perfectly</p>
                  </div>
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold mt-8">
                Try Voice Feature
              </Button>
            </div>

            {/* Right - Voice Interface Mockup */}
            <div className="relative flex justify-center items-center">
              {/* Phone mockup card */}
              <div className="relative w-full max-w-md">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 shadow-2xl">
                  {/* Close button */}
                

                  {/* Voice text display */}
                  <div className="mb-10 mt-4">
                    <p className="text-white/70 text-lg leading-relaxed">
                      Hey, <span className="text-white font-semibold">AI Assistant</span>, I need your help on one of my new projects that's about the{' '}
                      <span className="text-white font-semibold">organizing</span>...
                    </p>
                  </div>

                  {/* Animated waveform */}
                  <div className="relative mb-12">
                    <svg className="w-full h-24" viewBox="0 0 400 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 0.5 }} />
                          <stop offset="50%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#60a5fa', stopOpacity: 0.5 }} />
                        </linearGradient>
                      </defs>
                      
                      {/* Main wave */}
                      <motion.path
                        d="M0,50 Q50,20 100,50 T200,50 T300,50 T400,50"
                        stroke="url(#waveGradient)"
                        strokeWidth="3"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ 
                          pathLength: 1, 
                          opacity: [0.5, 1, 0.5],
                          d: [
                            "M0,50 Q50,20 100,50 T200,50 T300,50 T400,50",
                            "M0,50 Q50,80 100,50 T200,50 T300,50 T400,50",
                            "M0,50 Q50,20 100,50 T200,50 T300,50 T400,50"
                          ]
                        }}
                        transition={{ 
                          duration: 2.5, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Secondary wave */}
                      <motion.path
                        d="M0,50 Q50,35 100,50 T200,50 T300,50 T400,50"
                        stroke="#93c5fd"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.5"
                        initial={{ pathLength: 0 }}
                        animate={{ 
                          pathLength: 1,
                          d: [
                            "M0,50 Q50,35 100,50 T200,50 T300,50 T400,50",
                            "M0,50 Q50,65 100,50 T200,50 T300,50 T400,50",
                            "M0,50 Q50,35 100,50 T200,50 T300,50 T400,50"
                          ]
                        }}
                        transition={{ 
                          duration: 2.5, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </svg>
                  </div>

                  {/* Mic button */}
                  <div className="flex justify-center">
                    <motion.button 
                      className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl relative"
                      animate={{ 
                        scale: [0.8, 1, 0.8],
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {/* Pulse rings */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-blue-400"
                        animate={{
                          scale: [1, 1.8],
                          opacity: [0.5, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full bg-blue-300"
                        animate={{
                          scale: [1, 2.1],
                          opacity: [0.3, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                          delay: 0.5
                        }}
                      />
                      <Mic className="w-10 h-10 text-blue-600 relative z-10" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 md:px-8 py-16 max-w-7xl">
        <div className="bg-gray-200 md:bg-gray-200 rounded-[40px] border-2 border-gray-300 md:border-gray-200 p-8 md:p-20">
          <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-6">
            <h2 className="text-2xl md:text-4xl lg:text-3xl font-bold text-black md:text-black max-w-2xl text-center md:text-left">
              What problem are you up against?
            </h2>

            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 w-full md:w-auto">
              <input
                type="text"
                placeholder="How can I help you today?"
                className="w-full md:w-80 px-6 py-4 bg-white/50 md:bg-white/50 backdrop-blur-sm border border-gray-600 md:border-gray-300 rounded-full text-black md:text-gray-700 placeholder-gray-400 md:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <Button
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-lg group w-full sm:w-auto"
            >
              <span>Ask Syncon</span>
              <ArrowUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            </div>
          </div>
        </div>
      </div>
      
    </motion.div>
    
  );
};

export default ServicesSection;