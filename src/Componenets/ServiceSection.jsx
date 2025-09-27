'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { MessageCircle, Mic, Users, ArrowRight, Sparkles, Send, Play, Network } from 'lucide-react';

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeDemo, setActiveDemo] = useState(null);
  const [chatMessages, setChatMessages] = useState([
    { text: "Hello! I'm your AI assistant. How can I help you today?", isBot: true }
  ]);
  const [voiceStatus, setVoiceStatus] = useState('idle');
  const [agentProgress, setAgentProgress] = useState(0);

  const services = [
    {
      icon: MessageCircle,
      title: 'ChatBot',
      description: 'Intelligent conversational AI that understands context and delivers personalized responses.',
      capabilities: ['Natural Language Processing', 'Context Awareness', 'Multi-language Support', '24/7 Availability'],
      demoType: 'chat',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mic,
      title: 'VoiceBot',
      description: 'Advanced voice interactions with crystal-clear speech recognition and natural synthesis.',
      capabilities: ['Speech Recognition', 'Voice Synthesis', 'Emotion Detection', 'Real-time Processing'],
      demoType: 'voice',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Multi-Agent',
      description: 'Collaborative AI ecosystems where specialized agents work together efficiently.',
      capabilities: ['Agent Collaboration', 'Task Distribution', 'Scalable Architecture', 'Intelligent Routing'],
      demoType: 'agents',
      gradient: 'from-emerald-500 to-teal-500'
    },
  ];

  // Auto-swipe every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= services.length) {
          setActiveDemo(null);
          return 0;
        }
        setActiveDemo(null);
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [services.length]);

  const handleSwipe = (event, info) => {
    const swipeThreshold = 50;

    if (info.offset.x > swipeThreshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setActiveDemo(null);
    } else if (info.offset.x < -swipeThreshold && currentIndex < services.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setActiveDemo(null);
    } else if (info.offset.x < -swipeThreshold && currentIndex === services.length - 1) {
      setCurrentIndex(0);
      setActiveDemo(null);
    }
  };

  const handleChatDemo = () => {
    setChatMessages(prev => [...prev,
      { text: "Can you help me with customer service automation?", isBot: false }
    ]);
    setTimeout(() => {
      setChatMessages(prev => [...prev,
        { text: "Absolutely! I can help you set up automated customer service with natural language understanding, ticket routing, and 24/7 support. Would you like to see specific use cases?", isBot: true }
      ]);
    }, 1500);
  };

  const handleVoiceDemo = () => {
    if (voiceStatus === 'idle') {
      setVoiceStatus('listening');
      setTimeout(() => {
        setVoiceStatus('speaking');
        setTimeout(() => {
          setVoiceStatus('idle');
        }, 3000);
      }, 2000);
    }
  };

  const handleAgentDemo = () => {
    setAgentProgress(0);
    const interval = setInterval(() => {
      setAgentProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 20;
      });
    }, 800);
  };

  // Calculate proper centering for carousel with peek effect
  const getTranslateX = () => {
    const cardWidth = 70; // 70% of container width to allow peek
    const gap = 5; // gap between cards in percentage
    return -(currentIndex * (cardWidth + gap)) + (50 - cardWidth / 2);
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden min-h-screen bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 50px'
        }}></div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-20"
            style={{
              background: 'linear-gradient(135deg, #ff8c00, #ff6b00)',
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i * 10)}%`
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 lg:mb-8"
            style={{
              background: 'linear-gradient(135deg, #ff8c00, #ff6b00)',
              color: '#000'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Try Our AI Live</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-tight text-white">
            Experience Our <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>AI Services</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just read about our AI - interact with it. Swipe through our ChatBot, VoiceBot, and Multi-Agent systems below.
          </p>
        </motion.div>

        {/* Service Cards Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Swipe hint text for mobile */}
          <div className="lg:hidden text-center mb-4">
            <p className="text-xs text-gray-500">← Swipe to explore services →</p>
          </div>
          
          <div className="relative">
            <div className="overflow-visible relative">
              {/* Left gradient mask */}
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
              
              {/* Right gradient mask */}
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />
              
              <motion.div
                className="flex gap-[5%]"
                animate={{ x: `${getTranslateX()}%` }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.6
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleSwipe}
                style={{ cursor: 'grab' }}
                whileDrag={{ cursor: 'grabbing' }}
              >
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  const isActive = activeDemo === index;
                  const isCurrent = currentIndex === index;
                  const isPrev = index === currentIndex - 1;
                  const isNext = index === currentIndex + 1;
                  const isVisible = isCurrent || isPrev || isNext;

                  return (
                    <motion.div
                      key={service.title}
                      className="flex-shrink-0 relative"
                      style={{ width: '70%' }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{
                        opacity: isCurrent ? 1 : isVisible ? 0.4 : 0,
                        scale: isCurrent ? 1 : isVisible ? 0.85 : 0.75,
                        filter: isCurrent ? 'blur(0px)' : isVisible ? 'blur(3px)' : 'blur(5px)',
                        zIndex: isCurrent ? 10 : isVisible ? 5 : 1
                      }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                    >
                      {/* Service Card */}
                      <div
                        className="relative rounded-2xl overflow-hidden transition-all duration-700 border"
                        style={{
                          backgroundColor: isActive ? 'rgba(255, 140, 0, 0.08)' : isCurrent ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.01)',
                          borderColor: isActive ? 'rgba(255, 140, 0, 0.4)' : isCurrent ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                          boxShadow: isActive ? '0 25px 80px rgba(255, 140, 0, 0.2)' : isCurrent ? '0 20px 60px rgba(0, 0, 0, 0.3)' : isVisible ? '0 10px 30px rgba(0, 0, 0, 0.1)' : 'none'
                        }}
                      >
                        {/* Animated Background Gradient */}
                        <motion.div
                          className="absolute inset-0 opacity-5"
                          style={{
                            background: `linear-gradient(135deg, #ff8c00, #ff6b00)`
                          }}
                          animate={{
                            opacity: isActive ? [0.05, 0.1, 0.05] : 0.05
                          }}
                          transition={{
                            duration: 2,
                            repeat: isActive ? Infinity : 0,
                            ease: "easeInOut"
                          }}
                        />

                        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6">
                          {/* Service Info */}
                          <motion.div
                            className="p-4 sm:p-6 lg:p-8 order-1"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                          >
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                              <motion.div
                                className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center relative overflow-hidden flex-shrink-0"
                                style={{
                                  background: 'linear-gradient(135deg, #ff8c00, #ff6b00)',
                                }}
                                whileHover={{
                                  scale: 1.05,
                                  rotate: [0, -5, 5, 0]
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white relative z-10" />
                                <motion.div
                                  className="absolute inset-0 rounded-xl"
                                  style={{
                                    background: 'linear-gradient(135deg, #ff8c00, #ff6b00)',
                                  }}
                                  animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0, 0.3, 0],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                />
                              </motion.div>
                              <div className="flex-1">
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">{service.title}</h3>
                                <motion.p
                                  className="text-sm sm:text-base text-gray-300 mb-2"
                                  animate={{
                                    color: isActive ? '#ff8c00' : '#9ca3af'
                                  }}
                                  transition={{ duration: 0.3 }}
                                >
                                  Interactive Demo Available
                                </motion.p>
                              </div>
                            </div>

                            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                              {service.description}
                            </p>

                            {/* Capabilities */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
                              {service.capabilities.map((capability, capIndex) => (
                                <motion.div
                                  key={capability}
                                  className="flex items-center gap-2 text-xs sm:text-sm text-gray-400"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: capIndex * 0.1 + 0.3 }}
                                >
                                  <motion.div
                                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                    style={{ background: 'linear-gradient(135deg, #ff8c00, #ff6b00)' }}
                                    animate={{
                                      scale: [1, 1.3, 1],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: capIndex * 0.2,
                                      ease: "easeInOut"
                                    }}
                                  />
                                  <span className="leading-tight">{capability}</span>
                                </motion.div>
                              ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3">
                              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 sm:flex-none">
                                <Button
                                  onClick={() => setActiveDemo(isActive ? null : index)}
                                  className="w-full sm:w-auto text-black font-medium transition-all duration-300 relative overflow-hidden"
                                  style={{
                                    background: 'linear-gradient(135deg, #ff8c00, #ff6b00)',
                                  }}
                                  size="lg"
                                >
                                  <motion.div
                                    className="absolute inset-0"
                                    style={{
                                      background: 'linear-gradient(135deg, #ff6b00, #ff8c00)',
                                    }}
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: '0%' }}
                                    transition={{ duration: 0.3 }}
                                  />
                                  <span className="relative z-10 flex items-center justify-center">
                                    {isActive ? 'Hide Demo' : 'Try Demo'}
                                    <Play className="w-4 h-4 ml-2" />
                                  </span>
                                </Button>
                              </motion.div>
                              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 sm:flex-none">
                                <Button
                                  variant="outline"
                                  size="lg"
                                  className="w-full sm:w-auto border-orange-500/50 text-orange-400 hover:bg-orange-500/10 bg-transparent relative overflow-hidden"
                                >
                                  <motion.div
                                    className="absolute inset-0 bg-orange-500/10"
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: '0%' }}
                                    transition={{ duration: 0.3 }}
                                  />
                                  <span className="relative z-10 flex items-center justify-center">
                                    Learn More
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                  </span>
                                </Button>
                              </motion.div>
                            </div>
                          </motion.div>

                          {/* Interactive Demo */}
                          <motion.div
                            className="bg-black/20 p-4 sm:p-6 lg:p-8 flex items-center justify-center min-h-[300px] sm:min-h-[400px] relative order-2 lg:order-2"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                          >
                            <AnimatePresence mode="wait">
                              {service.demoType === 'chat' && (
                                <motion.div
                                  key="chat-demo"
                                  className="w-full max-w-md mx-auto"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -20 }}
                                  transition={{ duration: 0.5 }}
                                >
                                  <div className="bg-black/40 rounded-lg p-3 sm:p-4 mb-4 h-48 sm:h-64 overflow-y-auto backdrop-blur-sm">
                                    {chatMessages.map((message, msgIndex) => (
                                      <motion.div
                                        key={msgIndex}
                                        className={`mb-3 ${message.isBot ? 'text-left' : 'text-right'}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: msgIndex * 0.1 }}
                                      >
                                        <div
                                          className={`inline-block p-2 sm:p-3 rounded-lg max-w-[80%] text-xs sm:text-sm ${message.isBot
                                            ? 'bg-gray-700 text-white'
                                            : 'text-black'
                                            }`}
                                          style={!message.isBot ? { background: 'linear-gradient(135deg, #ff8c00, #ff6b00)' } : {}}
                                        >
                                          {message.text}
                                        </div>
                                      </motion.div>
                                    ))}
                                  </div>
                                  <Button
                                    onClick={handleChatDemo}
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base"
                                  >
                                    <Send className="w-4 h-4 mr-2" />
                                    Send Test Message
                                  </Button>
                                </motion.div>
                              )}

                              {service.demoType === 'voice' && (
                                <motion.div
                                  key="voice-demo"
                                  className="text-center w-full"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.8 }}
                                  transition={{ duration: 0.5 }}
                                >
                                  <motion.div
                                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center cursor-pointer relative"
                                    style={{
                                      background: voiceStatus === 'idle'
                                        ? 'linear-gradient(135deg, #ff8c00, #ff6b00)'
                                        : voiceStatus === 'listening'
                                          ? 'linear-gradient(135deg, #00ff88, #00cc66)'
                                          : 'linear-gradient(135deg, #ff4444, #cc2222)'
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleVoiceDemo}
                                    animate={voiceStatus !== 'idle' ? { scale: [1, 1.1, 1] } : {}}
                                    transition={{ duration: 1, repeat: voiceStatus !== 'idle' ? Infinity : 0 }}
                                  >
                                    <Mic className="w-8 h-8 sm:w-12 sm:h-12 text-white relative z-10" />
                                    {voiceStatus !== 'idle' && (
                                      <motion.div
                                        className="absolute inset-0 rounded-full"
                                        style={{
                                          background: voiceStatus === 'listening'
                                            ? 'linear-gradient(135deg, #00ff88, #00cc66)'
                                            : 'linear-gradient(135deg, #ff4444, #cc2222)'
                                        }}
                                        animate={{
                                          scale: [1, 1.4, 1],
                                          opacity: [0.3, 0, 0.3]
                                        }}
                                        transition={{
                                          duration: 1.5,
                                          repeat: Infinity,
                                          ease: "easeInOut"
                                        }}
                                      />
                                    )}
                                  </motion.div>
                                  <p className="text-white mb-2 text-sm sm:text-base">
                                    {voiceStatus === 'idle' && 'Click to start voice interaction'}
                                    {voiceStatus === 'listening' && 'Listening...'}
                                    {voiceStatus === 'speaking' && 'AI is responding...'}
                                  </p>
                                  <p className="text-gray-400 text-xs sm:text-sm">Try saying: "How can AI help my business?"</p>
                                </motion.div>
                              )}

                              {service.demoType === 'agents' && (
                                <motion.div
                                  key="agents-demo"
                                  className="w-full max-w-md mx-auto"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -20 }}
                                  transition={{ duration: 0.5 }}
                                >
                                  <div className="text-center mb-4 sm:mb-6">
                                    <h4 className="text-white mb-4 text-sm sm:text-base">Multi-Agent Task Processing</h4>
                                    <div className="space-y-2 sm:space-y-3">
                                      {['Data Agent', 'Analysis Agent', 'Report Agent'].map((agent, agentIndex) => (
                                        <motion.div
                                          key={agent}
                                          className="flex items-center justify-between p-2 sm:p-3 bg-black/40 rounded-lg backdrop-blur-sm"
                                          initial={{ opacity: 0, x: -20 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ delay: agentIndex * 0.1 }}
                                        >
                                          <span className="text-gray-300 text-xs sm:text-sm">{agent}</span>
                                          <div className="flex items-center gap-2">
                                            <motion.div
                                              className={`w-2 h-2 rounded-full ${agentProgress > agentIndex * 33 ? 'bg-green-400' : 'bg-gray-600'
                                                }`}
                                              animate={agentProgress > agentIndex * 33 ? {
                                                scale: [1, 1.3, 1],
                                                opacity: [1, 0.6, 1]
                                              } : {}}
                                              transition={{
                                                duration: 1,
                                                repeat: agentProgress > agentIndex * 33 ? Infinity : 0,
                                                ease: "easeInOut"
                                              }}
                                            />
                                            <span className="text-xs sm:text-sm text-gray-400">
                                              {agentProgress > agentIndex * 33 ? 'Active' : 'Waiting'}
                                            </span>
                                          </div>
                                        </motion.div>
                                      ))}
                                    </div>
                                    <Button
                                      onClick={handleAgentDemo}
                                      className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base"
                                    >
                                      <Network className="w-4 h-4 mr-2" />
                                      Start Agent Collaboration
                                    </Button>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Navigation Arrows for Desktop */}
            <div className="hidden lg:block">
              {currentIndex > 0 && (
                <motion.button
                  className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border border-orange-500/40 flex items-center justify-center text-orange-400 hover:bg-orange-500/20 transition-all duration-300 z-30 hover:border-orange-400"
                  onClick={() => {
                    setCurrentIndex(currentIndex - 1);
                    setActiveDemo(null);
                  }}
                  whileHover={{ scale: 1.1, x: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </motion.button>
              )}

              {currentIndex < services.length - 1 && (
                <motion.button
                  className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border border-orange-500/40 flex items-center justify-center text-orange-400 hover:bg-orange-500/20 transition-all duration-300 z-30 hover:border-orange-400"
                  onClick={() => {
                    setCurrentIndex(currentIndex + 1);
                    setActiveDemo(null);
                  }}
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              )}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-6 sm:mt-8 gap-2">
          {services.map((_, index) => (
            <motion.button
              key={index}
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300"
              style={{
                background: currentIndex === index
                  ? 'linear-gradient(135deg, #ff8c00, #ff6b00)'
                  : 'rgba(255, 255, 255, 0.3)'
              }}
              onClick={() => {
                setCurrentIndex(index);
                setActiveDemo(null);
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                scale: currentIndex === index ? 1.2 : 1,
              }}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-400 bg-transparent group px-6 sm:px-8 py-3 sm:py-4 relative overflow-hidden text-sm sm:text-base"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2 relative z-10" />
              <span className="relative z-10">Get Full Access to All AI Services</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;