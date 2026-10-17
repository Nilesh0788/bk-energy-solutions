'use client';

import { useEffect, useState } from 'react';
import { productCategories } from '@/data/company';

export default function ProductRange() {
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

    const section = document.getElementById('product-range');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="product-range" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Enhanced */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-orange/10 to-orange/5 text-orange px-6 py-2 rounded-full text-sm font-bold font-poppins border border-orange/20">
              COMPLETE PRODUCT RANGE
            </span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-navy mb-6 font-poppins tracking-tight leading-tight">
            MORE THAN <span className="gradient-text">DRIVERS.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-poppins font-light leading-relaxed">
            Complete lighting component solutions for every application
          </p>
        </div>

        {/* Category Grid - Enhanced */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <div
              key={category.name}
              className={`bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-200 hover:border-orange/30 card-hover group transform hover:-translate-y-2 transition-all duration-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Category Image Placeholder - Enhanced */}
              <div className="aspect-video bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-7xl group-hover:scale-110 transition-transform duration-500">{category.icon}</div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>

              {/* Category Info - Enhanced */}
              <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-orange transition-colors font-poppins">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed font-poppins font-light">
                  {category.description}
                </p>
                
                <button className="inline-flex items-center text-navy font-bold font-poppins hover:text-orange transition-colors group-hover:translate-x-2 duration-300">
                  Explore Products
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}