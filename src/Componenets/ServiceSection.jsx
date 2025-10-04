'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { MessageCircle, Mic, Users, ArrowRight, Sparkles, Send, Play, Network } from 'lucide-react';
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
    </motion.div>
  );
};

export default ServicesSection;