'use client';

import { useEffect, useState } from 'react';
import { companyInfo } from '@/data/company';

export default function CompanyCredentials() {
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

    const section = document.getElementById('credentials');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="credentials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Enhanced */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-orange/10 to-orange/5 text-orange px-6 py-2 rounded-full text-sm font-bold font-poppins border border-orange/20">
              ESTABLISHED 2019
            </span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-navy mb-6 font-poppins tracking-tight leading-tight">
            COMPANY <span className="gradient-text">CREDENTIALS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-poppins font-light leading-relaxed">
            Established lighting component partner you can trust
          </p>
        </div>

        {/* Credentials Card - Enhanced */}
        <div className={`max-w-3xl mx-auto bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-200 card-hover transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header - Enhanced */}
          <div className="bg-gradient-to-r from-orange to-orange-light p-10 text-center shadow-xl">
            <h3 className="text-3xl font-black text-white font-poppins">{companyInfo.name}</h3>
            <p className="text-white/90 mt-2 font-poppins font-light text-lg">{companyInfo.tagline}</p>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 font-poppins">Established</h4>
                <p className="text-navy font-black text-xl font-poppins">{companyInfo.established}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 font-poppins">GSTN</h4>
                <p className="text-navy font-black text-xl font-poppins">{companyInfo.gstn}</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 font-poppins">Address</h4>
              <p className="text-gray-700 font-poppins font-light">{companyInfo.address}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 font-poppins">Phone</h4>
                <div className="space-y-1">
                  {companyInfo.phone.map((phone, index) => (
                    <a key={index} href={`tel:${phone.replace(/[^0-9]/g, '')}`} className="block text-navy hover:text-orange transition-colors font-poppins">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 font-poppins">Email</h4>
                <a href={`mailto:${companyInfo.email}`} className="text-navy hover:text-orange transition-colors font-poppins">
                  {companyInfo.email}
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 font-poppins">Website</h4>
              <a href={`https://${companyInfo.website}`} target="_blank" rel="noopener noreferrer" className="text-navy hover:text-orange transition-colors font-poppins">
                {companyInfo.website}
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 p-6 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-bold font-poppins">Authorised Helvar Distributor – North India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}