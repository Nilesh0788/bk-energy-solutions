'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(10, 22, 40, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(10, 22, 40, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-navy opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Enhanced styling */}
          <div className={`space-y-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-8">
              <div className="inline-flex items-center bg-gradient-to-r from-orange/10 to-orange/5 border-2 border-orange/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold shadow-lg shadow-orange/10">
                <span className="w-3 h-3 bg-orange rounded-full mr-3 animate-pulse"></span>
                <span className="text-navy font-poppins tracking-wide">Authorised Helvar Distributor – North India</span>
              </div>
              
              <h1 className="text-5xl lg:text-8xl font-black text-navy leading-tight font-poppins tracking-tight">
                ENGINEERED FOR<br />
                <span className="gradient-text">BETTER LIGHTING.</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl font-poppins font-light leading-relaxed">
                Authorised Helvar LED Driver Distribution & Premium Lighting Component Solutions
              </p>
            </div>

            {/* CTA Buttons - Enhanced */}
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="#helvar"
                className="inline-flex items-center justify-center bg-gradient-to-r from-orange to-orange-light hover:from-orange-light hover:to-orange text-white px-10 py-5 rounded-full font-bold font-poppins transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-orange/30 transform hover:scale-105 border-2 border-orange"
              >
                Explore Helvar Drivers
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center border-2 border-navy text-navy hover:bg-navy hover:text-white px-10 py-5 rounded-full font-bold font-poppins transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Talk to an Expert
              </a>
            </div>

            {/* Trust Indicators - Enhanced */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t-2 border-gray-200">
              <div className="transform hover:scale-110 transition-transform duration-300 group">
                <div className="text-5xl font-black text-navy font-poppins group-hover:text-orange transition-colors">2019</div>
                <div className="text-sm text-gray-600 font-poppins font-medium mt-1">Since</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300 group">
                <div className="text-5xl font-black text-navy font-poppins group-hover:text-orange transition-colors">80+</div>
                <div className="text-sm text-gray-600 font-poppins font-medium mt-1">Products</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300 group">
                <div className="text-5xl font-black text-navy font-poppins group-hover:text-orange transition-colors">15+</div>
                <div className="text-sm text-gray-600 font-poppins font-medium mt-1">Years Experience</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300 group">
                <div className="text-5xl font-black text-navy font-poppins group-hover:text-orange transition-colors">North</div>
                <div className="text-sm text-gray-600 font-poppins font-medium mt-1">India Distribution</div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Visual */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative">
              {/* Main Product Image Placeholder - Premium styling */}
              <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-3xl p-8 lg:p-12 border border-gray-200 hover:border-orange/30 transition-all duration-500">
                <div className="aspect-square bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Animated background with premium effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange/10 via-transparent to-orange/5 animate-pulse"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent_70%)]"></div>
                  
                  <div className="text-center relative z-10">
                    <div className="w-52 h-52 mx-auto mb-6 bg-gradient-to-br from-orange via-orange-light to-orange rounded-3xl flex items-center justify-center transform hover:scale-110 transition-transform duration-500 shadow-2xl shadow-orange/30 relative overflow-hidden">
                      {/* Inner glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      <svg className="w-28 h-28 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-navy font-black text-2xl font-poppins tracking-tight">Helvar LED Driver</p>
                    <p className="text-gray-500 text-sm font-poppins font-light">Premium Product Visual</p>
                  </div>
                </div>
                
                {/* Floating secondary products - Enhanced */}
                <div className="absolute -top-4 -right-4 w-36 h-36 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl flex items-center justify-center border border-gray-200 hover:border-orange/30 transform hover:scale-110 transition-transform duration-500">
                  <div className="w-28 h-28 bg-gradient-to-br from-orange to-orange-light rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl flex items-center justify-center border border-gray-200 hover:border-orange/30 transform hover:scale-110 transition-transform duration-500">
                  <div className="w-24 h-24 bg-gradient-to-br from-navy to-navy-light rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-navy rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-navy rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}