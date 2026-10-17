'use client';

import { useEffect, useState } from 'react';
import { helvarFeatures } from '@/data/company';

export default function WhyHelvar() {
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

    const section = document.getElementById('helvar');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="helvar" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Enhanced */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="bg-white/10 text-white px-6 py-2 rounded-full text-sm font-bold font-poppins border border-white/20">
              TECHNOLOGY PARTNER
            </span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-white mb-6 font-poppins tracking-tight leading-tight">
            HELVAR LED DRIVERS.<br />
            <span className="gradient-text">BUILT FOR PERFORMANCE.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-poppins font-light leading-relaxed">
            Reliable power. Intelligent control. Designed for modern lighting.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {helvarFeatures.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 card-hover group
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-orange font-black text-5xl mb-4 font-poppins">{feature.number}</div>
              <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-orange transition-colors font-poppins">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-poppins font-light">
                {feature.description}
              </p>
              
              {/* Icon placeholder - Enhanced */}
              <div className="mt-6 w-14 h-14 bg-gradient-to-br from-orange/10 to-orange/5 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br from-orange to-orange-light transition-all duration-300">
                <svg className="w-7 h-7 text-orange group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20 transform hover:scale-105 transition-transform duration-300">
            <svg className="w-6 h-6 text-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-white font-bold font-poppins">Certified: BIS, ENEC, CE</span>
          </div>
        </div>
      </div>
    </section>
  );
}