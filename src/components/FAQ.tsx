'use client';

import { useState, useEffect } from 'react';

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('faq');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "What makes Helvar LED drivers special?",
      answer: "Helvar LED drivers are known for their reliability, energy efficiency, and advanced features like DALI-2 protocol, smart control, and NFC configuration. They're designed for demanding commercial and industrial applications."
    },
    {
      question: "Do you provide technical support?",
      answer: "Yes, our technical team with 15+ years of industry experience provides end-to-end support from product selection to implementation. We help you choose the right components for your specific application."
    },
    {
      question: "What is your delivery timeline?",
      answer: "We maintain a comprehensive inventory and typically deliver within 3-5 business days for in-stock items. For custom orders, delivery time varies based on product availability and order quantity."
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes, we offer competitive pricing and volume discounts for bulk orders. Contact our sales team with your requirements for a customized quote."
    },
    {
      question: "What warranty do you provide?",
      answer: "We provide manufacturer warranty on all products. Specific warranty terms vary by product and manufacturer. We also handle warranty claims and replacements efficiently."
    },
    {
      question: "Can you help with project specifications?",
      answer: "Absolutely! Our technical team can assist with product selection, technical specifications, and system design for your lighting projects. We provide detailed datasheets and application support."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-orange/10 to-orange/5 text-orange px-6 py-2 rounded-full text-sm font-bold font-poppins border border-orange/20">
              COMMON QUESTIONS
            </span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-navy mb-6 font-poppins tracking-tight leading-tight">
            FREQUENTLY ASKED <span className="gradient-text">QUESTIONS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-poppins font-light leading-relaxed">
            Everything you need to know about our products and services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl border-2 border-gray-200 hover:border-orange/30 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-lg font-bold text-navy font-poppins pr-4">{faq.question}</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index ? 'bg-orange text-white rotate-180' : 'bg-gray-100 text-navy'
                }`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5 pt-0">
                  <p className="text-gray-600 leading-relaxed font-poppins font-light">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}