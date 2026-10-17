'use client';

import { useEffect, useState } from 'react';
import { whyBKFeatures } from '@/data/company';

export default function WhyBK() {
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

    const section = document.getElementById('why-bk');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-bk" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Enhanced */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-orange/10 to-orange/5 text-orange px-6 py-2 rounded-full text-sm font-bold font-poppins border border-orange/20">
              TRUSTED PARTNERSHIP
            </span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-navy mb-6 font-poppins tracking-tight leading-tight">
            WHY PARTNER WITH <span className="gradient-text">BK ENERGY SOLUTIONS?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-poppins font-light leading-relaxed">
            Your trusted partner for premium lighting components
          </p>
        </div>

        {/* Features Grid - Enhanced */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyBKFeatures.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-8 border-2 border-gray-200 hover:border-orange/30 card-hover group transform hover:-translate-y-2 shadow-xl hover:shadow-2xl transition-all duration-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Number - Enhanced */}
              <div className="text-orange font-black text-4xl mb-4 font-poppins group-hover:scale-110 transition-transform duration-300">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-orange transition-colors font-poppins">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-poppins font-light">
                {feature.description}
              </p>

              {/* Icon - Enhanced */}
              <div className="mt-6 w-14 h-14 bg-gradient-to-br from-orange/10 to-orange/5 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br from-orange to-orange-light transition-all duration-300">
                <svg className="w-7 h-7 text-orange group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-orange to-orange-light hover:from-orange-light hover:to-orange text-white px-8 py-4 rounded-full font-bold font-poppins transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange/30 transform hover:scale-105"
          >
            Start Your Partnership
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}