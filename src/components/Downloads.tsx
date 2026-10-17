'use client';

import { useEffect, useState } from 'react';

export default function Downloads() {
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

    const section = document.getElementById('downloads');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const downloads = [
    {
      title: "Product Catalogue 2024",
      description: "Complete product guide with specifications",
      size: "2.5 MB",
      type: "PDF",
      icon: "📄"
    },
    {
      title: "Helvar Driver Selection Guide",
      description: "Technical guide for selecting the right driver",
      size: "1.8 MB",
      type: "PDF",
      icon: "📋"
    },
    {
      title: "Application Notes",
      description: "Industry-specific application guidelines",
      size: "3.2 MB",
      type: "PDF",
      icon: "📝"
    },
    {
      title: "Technical Specifications",
      description: "Detailed technical specifications",
      size: "4.1 MB",
      type: "PDF",
      icon: "⚙️"
    }
  ];

  return (
    <section id="downloads" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-orange/10 to-orange/5 text-orange px-6 py-2 rounded-full text-sm font-bold font-poppins border border-orange/20">
              RESOURCES
            </span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-navy mb-6 font-poppins tracking-tight leading-tight">
            DOWNLOAD <span className="gradient-text">RESOURCES</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-poppins font-light leading-relaxed">
            Access product catalogues, technical guides, and application notes
          </p>
        </div>

        {/* Downloads Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {downloads.map((download, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-6 border-2 border-gray-200 hover:border-orange/30 card-hover group transform hover:-translate-y-2 shadow-xl hover:shadow-2xl transition-all duration-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">
                {download.icon}
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-orange transition-colors font-poppins">
                {download.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 font-poppins font-light">
                {download.description}
              </p>

              {/* Size and Type */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4 font-poppins">
                <span>{download.size}</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-xs">{download.type}</span>
              </div>

              {/* Download Button */}
              <button className="w-full bg-gradient-to-r from-navy to-navy-light hover:from-navy-light hover:to-navy text-white py-3 rounded-xl font-bold font-poppins transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l4 4m0 0l4-4m-4 4v6" />
                </svg>
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}