'use client';

import { useEffect, useState } from 'react';

export default function Testimonials() {
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

    const section = document.getElementById('testimonials');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Lighting Solutions Pvt Ltd",
      text: "BK Energy Solutions has been our trusted partner for LED drivers. Their technical expertise and prompt service have been exceptional.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Smart Lighting Systems",
      text: "The quality of Helvar drivers and technical support from BK Energy is unmatched. Highly recommended for professional lighting projects.",
      rating: 5
    },
    {
      name: "Amit Verma",
      company: "Architectural Lighting Co",
      text: "We've been sourcing our lighting components from BK Energy for years. Their product knowledge and after-sales support is outstanding.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="bg-white/10 text-white px-6 py-2 rounded-full text-sm font-bold font-poppins border border-white/20">
              CLIENT TESTIMONIALS
            </span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-white mb-6 font-poppins tracking-tight leading-tight">
            WHAT OUR <span className="gradient-text">CLIENTS SAY</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-poppins font-light leading-relaxed">
            Trusted by industry professionals across India
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-8 border-2 border-gray-200 hover:border-orange/30 card-hover group transform hover:-translate-y-2 shadow-xl hover:shadow-2xl transition-all duration-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.969-1.81-.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed font-poppins font-light">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange to-orange-light rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white font-bold font-poppins">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-bold text-navy font-poppins">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 font-poppins font-light">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}