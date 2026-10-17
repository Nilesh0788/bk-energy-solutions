'use client';

import { useEffect, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const productCategories = [
    "LED Drivers",
    "CoB & LEDs",
    "Wire & Cable",
    "Terminal Connectors",
    "Braided Sleeves",
    "Waterproof Connectors & Cable Glands",
    "Flexible LED Strips",
    "Other lighting/electronic components"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Large Typography - Enhanced */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-6">
              <span className="bg-gradient-to-r from-orange/10 to-orange/5 text-orange px-6 py-2 rounded-full text-sm font-bold font-poppins border border-orange/20">
                SINCE 2019
              </span>
            </div>
            <h2 className="text-5xl lg:text-8xl font-black text-navy leading-tight font-poppins tracking-tight">
              ONE PARTNER.<br />
              <span className="gradient-text">MULTIPLE LIGHTING</span><br />
              SOLUTIONS.
            </h2>
          </div>

          {/* Right - Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed font-poppins font-light">
                BK Energy Solutions has been serving LED / CoB, lighting and electronic component requirements since 2019. We provide single-window sourcing for lighting and electronic component requirements.
              </p>
              
              <div className="flex items-center space-x-2 text-navy font-bold font-poppins">
                <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>80+ Products</span>
              </div>
            </div>

            {/* Product Categories */}
            <div>
              <h3 className="text-navy font-bold text-xl mb-4 font-poppins">Product Categories</h3>
              <div className="grid grid-cols-2 gap-3">
                {productCategories.map((category, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-gray-600 font-poppins transform hover:translate-x-2 transition-transform duration-300">
                    <div className="w-2 h-2 bg-orange rounded-full animate-pulse"></div>
                    <span>{category}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 card-hover">
              <h3 className="text-navy font-bold text-xl mb-6 font-poppins">Our Journey</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange to-orange-light rounded-xl flex items-center justify-center flex-shrink-0 glow-effect">
                    <span className="text-white font-black font-poppins">2019</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy font-poppins">Established</h4>
                    <p className="text-sm text-gray-600 font-poppins">Started serving lighting component requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange to-orange-light rounded-xl flex items-center justify-center flex-shrink-0 glow-effect">
                    <span className="text-white font-black font-poppins">80+</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy font-poppins">Today</h4>
                    <p className="text-sm text-gray-600 font-poppins">Expanded product portfolio with 80+ products</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-navy to-navy-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black font-poppins text-sm">15+</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy font-poppins">Technical Edge</h4>
                    <p className="text-sm text-gray-600 font-poppins">15+ years industry experience within the technical team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}