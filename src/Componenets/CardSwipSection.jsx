import React from "react";
import CardSwap, { Card } from "./CardSwiptCode";

const CardSection = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen md:min-h-[600px] flex flex-col md:flex-row items-center justify-between py-12 md:py-0 overflow-hidden">
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-white text-center md:text-left px-6 md:px-12 lg:px-16 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
          Card stacks have never looked so good
        </h1>
        <p className="text-lg md:text-lg lg:text-xl text-gray-300">
          Just look at it go!
        </p>
      </div>

      {/* Card Section */}
      <div className="w-full md:w-1/2 relative h-[500px] md:h-[600px]">
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          <Card>
            <h3>Card 1</h3>
            <p>Your content here</p>
          </Card>

          <Card>
            <h3>Card 2</h3>
            <p>Your content here</p>
          </Card>

          <Card>
            <h3>Card 3</h3>
            <p>Your content here</p>
          </Card>
        </CardSwap>
      </div>
    </div>
  );
};

export default CardSection;
