'use client';

import { useEffect, useState } from 'react';
import { industries } from '@/data/company';

export default function Industries() {
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

    const section = document.getElementById('industries');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Enhanced */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-orange/10 to-orange/5 text-orange px-6 py-2 rounded-full text-sm font-bold font-poppins border border-orange/20">
              INDUSTRY SOLUTIONS
            </span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-navy mb-6 font-poppins tracking-tight leading-tight">
            COMPONENTS FOR <span className="gradient-text">REAL-WORLD LIGHTING APPLICATIONS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-poppins font-light leading-relaxed">
            Serving diverse industries with premium lighting solutions
          </p>
        </div>

        {/* Industry Grid - Enhanced */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className={`bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-8 border-2 border-gray-200 hover:border-orange/30 card-hover group transform hover:-translate-y-2 shadow-xl hover:shadow-2xl transition-all duration-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Industry Icon - Enhanced */}
              <div className="w-20 h-20 bg-gradient-to-br from-orange to-orange-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 glow-effect shadow-xl shadow-orange/30">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-orange transition-colors font-poppins">
                {industry.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-poppins font-light">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}