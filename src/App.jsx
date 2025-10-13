'use client';

import { useEffect, useState } from 'react';
import Navigation from './Componenets/Navigation';
import HeroSection from './Componenets/HeroSection';
import ServicesSection from './Componenets/ServiceSection';
import DashboardSection from './Componenets/DashboardSection';
import Footer from './Componenets/Footer';
import AuthPage from './Componenets/Authpage';
import CardSwap  from './Componenets/CardSwipSection';





export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // ✅ removed type

  useEffect(() => {

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
    <div className="min-h-screen bg-white">

      {/* Navigation */}
      <Navigation onNavigateToAuth={navigateToAuth} />


      {/* Main Content */}
      <main className="relative">
        <HeroSection onNavigateToAuth={navigateToAuth} />

  <ServicesSection />
<CardSwap/>

      </main>



      {/* Footer */}
      <Footer />



      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Ambient Glow */}

      </div>
    </div>
  );
}


