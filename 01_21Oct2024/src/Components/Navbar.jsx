import React, { useState } from "react";
import { Menu, X, User, ShoppingCart } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavItems = [
    { name: 'HOME', path: '/' },
    { name: 'SHOP', path: '/shop' },
    { name: 'ABOUT', path: '/#about' },
    { name: 'CONTACT', path: '/#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 to-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section with Hover Effect */}
          <div className="flex items-center space-x-3 transform transition-transform hover:scale-105">
            <img
              className="h-12 w-12 rounded-full ring-2 ring-white"
              src="/image.png"
              alt="Prithvi Steel Art Logo"
            />
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              PRITHVI STEEL ART
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-4">
              {NavItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.path} 
                  className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Action Icons */}
            <div className="flex space-x-4">
              <a 
                href="#login" 
                className="text-gray-300 hover:text-white transition-colors"
                title="Login"
              >
                <User className="h-6 w-6" />
              </a>
              <a 
                href="#cart" 
                className="text-gray-300 hover:text-white transition-colors relative"
                title="Shopping Cart"
              >
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none transition-colors"
            >
              {!isMenuOpen ? <Menu className="h-8 w-8" /> : <X className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Slide-in Overlay) */}
      <div className={`
        fixed inset-0 bg-black bg-opacity-90 z-50 transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        md:hidden
      `}>
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {NavItems.map((item) => (
            <a 
              key={item.name}
              href={item.path} 
              onClick={toggleMenu}
              className="text-2xl text-white hover:text-blue-500 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="flex space-x-6 pt-6">
            <a href="#login" onClick={toggleMenu} className="text-white hover:text-blue-500">
              <User className="h-8 w-8" />
            </a>
            <a href="#cart" onClick={toggleMenu} className="text-white hover:text-blue-500 relative">
              <ShoppingCart className="h-8 w-8" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;