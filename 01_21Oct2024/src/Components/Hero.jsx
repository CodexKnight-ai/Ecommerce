import React from "react";
import { ArrowRight } from 'lucide-react';

function Hero() {
  return (
    <header className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Dark Side Column */}
      <div 
        className="w-full md:w-[30%] bg-gradient-to-br from-gray-900 to-black 
        flex items-center justify-center p-8 md:p-12"
      >
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold 
            text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400 
            mb-6 leading-tight">
            PRITHVI STEEL ART
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-md mx-auto md:mx-0 mb-8">
            Transforming architectural visions into extraordinary metal masterpieces. 
            We blend innovation, craftsmanship, and design to create stunning steel 
            and glass solutions that elevate spaces.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a 
              href="#services" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg 
              hover:bg-blue-700 transition-colors duration-300 
              inline-flex items-center group"
            >
              Our Services
              <ArrowRight 
                className="ml-2 group-hover:translate-x-1 transition-transform" 
                size={20} 
              />
            </a>
            <a 
              href="#portfolio" 
              className="border border-gray-300 text-gray-300 
              px-6 py-3 rounded-lg hover:bg-white/10 
              transition-colors duration-300"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>

      {/* Image Side Column */}
      <div 
        className="relative w-full md:w-[70%] min-h-[500px] md:min-h-screen 
        bg-cover bg-center border-l-4 border-blue-500"
        style={{backgroundImage: 'url("/heroBg.jpeg")'}}
      >
        {/* Overlay Content */}
        <div 
          className="absolute inset-0 bg-black/40 flex items-center justify-center 
          md:items-end md:justify-start md:p-12"
        >
          <div 
            className="bg-black/60 backdrop-blur-md rounded-xl shadow-2xl 
            p-6 md:p-8 m-4 md:m-0 md:mb-12 md:ml-12 max-w-xl 
            transform transition-all duration-500 hover:scale-[1.02]"
          >
            <article className="text-white space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-4">
                Crafting Architectural Excellence
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Our passion lies in creating exceptional architectural solutions 
                that blend functionality with artistic vision. From intricate metal 
                works to innovative glass designs, we transform spaces with precision 
                and creativity, delivering custom solutions that exceed expectations.
              </p>
              <div className="pt-4 flex space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400 font-bold text-2xl">10+</span>
                  <span className="text-sm text-gray-300">Years of Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400 font-bold text-2xl">500+</span>
                  <span className="text-sm text-gray-300">Completed Projects</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;