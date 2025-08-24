'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { MessageCircle, Mic, Users, ArrowRight, Zap, Bot, Brain } from 'lucide-react';
import { useState } from 'react';

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: MessageCircle,
      title: 'ChatBot',
      description:
        'Intelligent conversational AI that understands context, learns from interactions, and delivers personalized responses with human-like understanding',
      color: 'from-cyan-500 to-blue-600',
      glowColor: 'shadow-cyan-500/30',
      features: ['Natural Language Processing', 'Context Awareness', 'Multi-language Support', '24/7 Availability'],
      bgIcon: Bot,
    },
    {
      icon: Mic,
      title: 'VoiceBot',
      description:
        'Advanced voice interactions with crystal-clear speech recognition, natural synthesis, and real-time conversation capabilities',
      color: 'from-purple-500 to-pink-600',
      glowColor: 'shadow-purple-500/30',
      features: ['Speech Recognition', 'Voice Synthesis', 'Emotion Detection', 'Real-time Processing'],
      bgIcon: Mic,
    },
    {
      icon: Users,
      title: 'Multi-Agent',
      description:
        'Collaborative AI ecosystems where multiple specialized agents work together to solve complex business challenges efficiently',
      color: 'from-emerald-500 to-teal-600',
      glowColor: 'shadow-emerald-500/30',
      features: ['Agent Collaboration', 'Task Distribution', 'Scalable Architecture', 'Intelligent Routing'],
      bgIcon: Brain,
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
        <div className="absolute inset-0 holographic opacity-10"></div>

        {/* Animated Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Grid Lines */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-purple-400/30 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Zap className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm text-purple-400">AI-Powered Solutions</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Powerful AI Services</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Choose from our suite of advanced AI solutions designed to transform your business operations with unprecedented intelligence and efficiency
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const BgIconComponent = service.bgIcon;

            return (
              <motion.div
                key={service.title}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                {/* Background Icon */}
                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <BgIconComponent className="w-32 h-32 text-white" />
                </div>

                {/* Card */}
                <div
                  className={`glass-effect rounded-2xl p-8 h-full transition-all duration-500 group-hover:shadow-2xl ${service.glowColor} group-hover:shadow-lg relative overflow-hidden`}
                >
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/20 transition-all duration-500">
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative`}
                      whileHover={{ rotate: 5 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300`}
                      ></div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-glow transition-all duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-white/60"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    {/* Try Now Button */}
                    <Button
                      className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg hover:shadow-current/30 border-0 group/btn relative overflow-hidden`}
                      size="lg"
                    >
                      <div className="relative z-10 flex items-center justify-center">
                        Try Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </div>
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 bg-transparent group px-8 py-4"
          >
            Explore All Services
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
