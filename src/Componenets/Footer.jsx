'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from './ui/Button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'API Docs', 'Integrations']
    },
    {
      title: 'Company',
      links: ['About', 'Blog', 'Careers', 'Press']
    },
    {
      title: 'Support',
      links: ['Help Center', 'Community', 'Contact', 'Status']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR']
    }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <footer id="contact" className="relative pt-20 pb-8 overflow-hidden bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 50px'
        }}></div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-20"
            style={{
              background: 'linear-gradient(135deg, #ff8c00, #ff6b00)',
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform bg-blue-500"
        style={{
          
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </motion.button>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-700"
                style={{
                  
              
                }}
              >
                <div className="w-5 h-5 bg-white rounded-sm opacity-90"></div>
              </div>
              <span className="text-2xl font-bold">
                <span className="bg-blue-100 bg-clip-text text-transparent"
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                  AI Agent Hub
                </span>
              </span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Empowering businesses with next-generation AI agents. Transform your operations with our cutting-edge ChatBot, VoiceBot, and Multi-Agent systems.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-blue-400 transition-colors hover:border-blue-400/30 hover:bg-orange-400/5"
                    whileHover={{ y: -2, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <a 
                      href="#" 
                      className="text-white/60 hover:text-blue-400 transition-colors hover:translate-x-1 inline-block transform transition-transform duration-200"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Animated Background Gradient */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              background: 'linear-gradient(135deg, #ff8c00, #ff6b00)',
            }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-white/70 mb-6">
              Get the latest news about AI technology and product updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
              />
              <Button 
                className="px-8 text-white font-medium border-0 bg-blue-500"
                
              >
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 mb-4 md:mb-0">
            © 2024 AI Agent Hub. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="text-white/60 hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-blue-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;