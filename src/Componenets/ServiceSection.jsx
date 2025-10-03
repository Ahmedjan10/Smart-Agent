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
      transition={{ duration: 0.3, ease: "easeOut" }}
      viewport={{ once: true, amount: 0 }}
    >
      
     <LogoShowcase />
    </motion.div>
  ); 
   
};

export default ServicesSection