import React from 'react';
import Squares from './SquaresAnimat';

const OurChatbot = () => {
  return (
    <section 
      className="relative flex items-center justify-center h-screen bg-black text-white overflow-hidden"
    >
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <Squares 
          speed={0.3} 
          squareSize={50}
          direction='diagonal'
          borderColor='#3B82F6'
          hoverFillColor='#222'
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-5 pointer-events-none"></div>

      {/* Content (centered) */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Our Smart Chatbot</h1>
        <p className="text-lg max-w-xl mx-auto opacity-80">
          Experience next-generation AI chat designed for businesses — smart, fast, and human-like.
        </p>
      </div>
     
    </section>
  );
};

export default OurChatbot;
