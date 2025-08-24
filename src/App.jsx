import { useEffect } from 'react';
import viteLogo from '/vite.svg'
import Navigation from './Componenets/Navigation'
import './App.css'
import HeroSection from './Componenets/HeroSection';
import ServicesSection from './Componenets/ServiceSection';

function App() {
    useEffect(() => {
    // Apply dark theme on mount
    document.documentElement.classList.add('dark');
    
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
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

  return (
    <div className="min-h-screen bg-slate-900 text-white antialiased">
    < Navigation />
    <HeroSection/>
    <ServicesSection/>
    </div>
  )
}

export default App
