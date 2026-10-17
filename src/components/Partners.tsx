'use client';

import { useEffect, useState } from 'react';

export default function Partners() {
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

    const section = document.getElementById('partners');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const partners = [
    { name: "Helvar", description: "Official Partner" },
    { name: "Philips", description: "Trusted Brand" },
    { name: "Osram", description: "Authorized Distributor" },
    { name: "Cree", description: "Partner" },
    { name: "Lumileds", description: "Premium Partner" },
    { name: "Samsung", description: "LED Components" }
  ];

  return (
    <section id="partners" className="py-16 bg-gradient-to-b from-white to-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl lg:text-5xl font-black text-navy mb-4 font-poppins tracking-tight">
            TRUSTED <span className="gradient-text">PARTNERS</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-poppins font-light">
            We partner with industry-leading brands to deliver quality
          </p>
        </div>

        {/* Partners Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-orange/30 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col items-center justify-center min-h-[120px]">
                <div className="w-16 h-16 bg-gradient-to-br from-orange/10 to-orange/5 rounded-xl flex items-center justify-center mb-3 group-hover:bg-gradient-to-br from-orange to-orange-light transition-all duration-300">
                  <span className="text-2xl font-black text-orange group-hover:text-white transition-colors font-poppins">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-navy group-hover:text-orange transition-colors font-poppins">
                  {partner.name}
                </h3>
                <p className="text-xs text-gray-500 font-poppins font-light">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}