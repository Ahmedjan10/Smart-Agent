'use client';

import { useEffect, useState } from 'react';
import Navigation from './Componenets/Navigation';
import HeroSection from './Componenets/HeroSection';
import ServicesSection from './Componenets/ServiceSection';
import DashboardSection from './Componenets/DashboardSection';
import Footer from './Componenets/Footer';
import AuthPage from './Componenets/Authpage';


export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // ✅ removed type

  useEffect(() => {
    // Apply dark theme on mount
    document.documentElement.classList.add('dark');
    
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {   // ✅ removed Event typing
      const target = e.target;
      if (target.href && target.href.includes('#')) {
        e.preventDefault();
        const id = target.href.split('#')[1];
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  const navigateToAuth = () => setCurrentPage('auth');
  const navigateToHome = () => setCurrentPage('home');

  // Render different pages based on current route
  if (currentPage === 'auth') {
    return <AuthPage onBack={navigateToHome} />;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white antialiased">
      {/* Navigation */}
      <Navigation onNavigateToAuth={navigateToAuth} />
      
      {/* Main Content */}
      <main className="relative">
        <HeroSection onNavigateToAuth={navigateToAuth} />
        <ServicesSection />
        {/* <DashboardSection /> */}
    
      </main>
      
      
      {/* Footer */}
      <Footer />
      
      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        {/* Scanning Lines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent opacity-20 animate-pulse"></div>
      </div>
    </div>
  );
}


