'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Helvar LED Drivers', href: '#helvar' },
    { name: 'Products', href: '#products' },
    { name: 'Downloads', href: '#downloads' },
    { name: 'Industries', href: '#industries' },
    { name: 'Why BK Energy', href: '#why-bk' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-xl border-b-2 border-gray-200 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-16 h-10 flex items-center justify-center">
                <img src="/logo.svg" alt="BK Energy Solutions Logo" className="w-full h-full object-contain" />
              </div>
              <div className="hidden sm:block">
                <span className={`font-bold text-lg font-poppins tracking-tight ${isScrolled ? 'text-navy' : 'text-white'}`}>BK Energy Solutions</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium font-poppins tracking-wide relative group transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-orange' : 'text-gray-300 hover:text-orange'}`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button - Enhanced */}
          <div className="hidden lg:block">
            <Link
              href="#contact"
              className="bg-gradient-to-r from-orange to-orange-light hover:from-orange-light hover:to-orange text-white px-8 py-3.5 rounded-full font-bold font-poppins transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-orange/30 transform hover:scale-105 border-2 border-orange"
            >
              Talk to an Expert
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className={`w-6 h-6 ${isScrolled ? 'text-navy' : 'text-white'}`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Enhanced */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t-2 border-gray-200 shadow-2xl">
          <div className="px-4 py-8 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-gray-700 hover:text-orange hover:bg-orange/5 transition-colors duration-300 text-sm font-bold font-poppins py-3 px-4 rounded-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="block bg-gradient-to-r from-orange to-orange-light text-white px-6 py-4 rounded-xl font-bold font-poppins text-center transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}