'use client';

import { useEffect, useState } from 'react';

export default function TechnicalExpertise() {
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

    const section = document.getElementById('technical-expertise');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const processSteps = [
    { title: "Requirement", description: "Share your lighting needs" },
    { title: "Technical Guidance", description: "Expert consultation & support" },
    { title: "Product Selection", description: "Right components for your application" },
    { title: "Component Supply", description: "Quality products, on-time delivery" },
    { title: "After-Sales Support", description: "Ongoing technical assistance" }
  ];

  return (
    <section id="technical-expertise" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Enhanced */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="bg-white/10 text-white px-6 py-2 rounded-full text-sm font-bold font-poppins border border-white/20">
              END-TO-END SUPPORT
            </span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-white mb-6 font-poppins tracking-tight leading-tight">
            NOT JUST A SUPPLIER.<br />
            <span className="gradient-text">YOUR LIGHTING COMPONENT PARTNER.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-poppins font-light leading-relaxed">
            End-to-end support from requirement to implementation
          </p>
        </div>

        {/* Process Flow */}
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange via-gray-600 to-orange transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                {/* Step Circle - Enhanced */}
                <div className="w-28 h-28 mx-auto mb-6 bg-gradient-to-br from-orange to-orange-light rounded-full flex items-center justify-center shadow-2xl border-4 border-orange/30 relative glow-effect transform hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl font-black text-white font-poppins">{index + 1}</span>
                  
                  {/* Arrow for desktop */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                      <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Step Content */}
                <h3 className="text-white font-bold text-xl mb-2 font-poppins">{step.title}</h3>
                <p className="text-gray-400 text-sm font-poppins font-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20 transform hover:scale-105 transition-transform duration-300">
            <svg className="w-6 h-6 text-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span className="text-white text-base font-bold font-poppins">Technical Team with 15+ Years Industry Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}