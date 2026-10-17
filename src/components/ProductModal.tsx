'use client';

import { useState, useEffect } from 'react';
import { HelvarProduct } from '@/data/products';

interface ProductModalProps {
  product: HelvarProduct | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!product || !isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      {/* Modal Content */}
      <div
        className={`relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Product Image */}
          <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 bg-gradient-to-br from-orange to-orange-light rounded-xl flex items-center justify-center shadow-xl">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-navy font-bold font-poppins">{product.model}</p>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-orange/10 text-orange px-3 py-1 rounded-full text-sm font-bold font-poppins mb-2">
                {product.category}
              </span>
              <h2 className="text-3xl font-bold text-navy mb-2 font-poppins">{product.model}</h2>
              <p className="text-gray-600 font-poppins font-light">{product.family}</p>
            </div>

            {/* Specifications */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-navy font-poppins">Technical Specifications</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1 font-poppins">Power</p>
                  <p className="font-bold text-navy font-poppins">{product.power}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1 font-poppins">Output Range</p>
                  <p className="font-bold text-navy font-poppins">{product.outputRange}</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-bold text-navy mb-3 font-poppins">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-poppins font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div>
              <h3 className="text-lg font-bold text-navy mb-3 font-poppins">Applications</h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((application, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-poppins border border-gray-200">
                    {application}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <button className="flex-1 bg-navy hover:bg-navy-light text-white py-3 rounded-lg font-bold font-poppins transition-all duration-300 transform hover:scale-105">
                Request Quote
              </button>
              <button className="flex-1 border-2 border-navy text-navy hover:bg-navy hover:text-white py-3 rounded-lg font-bold font-poppins transition-all duration-300 transform hover:scale-105">
                Talk to Technical Team
              </button>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-gray-50 p-6 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-poppins font-light">Need help selecting the right driver? <a href="#contact" className="text-orange font-bold hover:underline">Talk to our technical team</a></span>
          </div>
        </div>
      </div>
    </div>
  );
}