'use client';

import { useEffect, useState } from 'react';

export default function HelvarTechnology() {
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

    const section = document.getElementById('helvar-technology');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const techSteps = [
    { title: "LED Driver", icon: "⚡", description: "Premium power management" },
    { title: "Luminaire", icon: "💡", description: "Optimized light output" },
    { title: "DALI-2 / Smart Control", icon: "🎛️", description: "Intelligent lighting systems" },
    { title: "Efficient Lighting", icon: "✨", description: "Energy-saving solutions" }
  ];

  const features = [
    "DALI-2 Protocol",
    "Constant Current",
    "Constant Voltage",
    "Smart Control",
    "CLO (Constant Light Output)",
    "Corridor Function",
    "NFC Configuration"
  ];

  return (
    <section id="helvar-technology" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Enhanced */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-orange/10 to-orange/5 text-orange px-6 py-2 rounded-full text-sm font-bold font-poppins border border-orange/20">
              ADVANCED TECHNOLOGY
            </span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-navy mb-6 font-poppins tracking-tight leading-tight">
            HELVAR <span className="gradient-text">TECHNOLOGY</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-poppins font-light leading-relaxed">
            Advanced LED driver technology for modern lighting applications
          </p>
        </div>

        {/* Technology Flow - Enhanced */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card - Enhanced */}
                <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-8 border-2 border-gray-200 hover:border-orange/30 card-hover group transform hover:-translate-y-2 shadow-xl hover:shadow-2xl transition-all duration-500 text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500">{step.icon}</div>
                  <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-orange transition-colors font-poppins">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-poppins font-light">{step.description}</p>
                </div>

                {/* Arrow for desktop */}
                {index < techSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid - Enhanced */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-black text-navy text-center mb-8 font-poppins">Key Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-navy to-navy-light text-white rounded-xl p-4 text-center border-2 border-gray-700 hover:border-orange hover:from-orange hover:to-orange-light transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="font-bold text-sm font-poppins">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}