'use client';

import { useState, useEffect } from 'react';
import { helvarProducts, productCategories, HelvarProduct } from '@/data/products';
import ProductModal from './ProductModal';

export default function ProductExplorer() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<HelvarProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

    const section = document.getElementById('products');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const filteredProducts = selectedCategory === 'All' 
    ? helvarProducts 
    : helvarProducts.filter(product => product.category === selectedCategory);

  const handleViewSpecs = (product: HelvarProduct) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleEnquire = (product: HelvarProduct) => {
    // Scroll to contact form and pre-fill
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header - Enhanced styling */}
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-orange/10 to-orange/5 text-orange px-6 py-2 rounded-full text-sm font-bold font-poppins border border-orange/20">
                PREMIUM PRODUCT CATALOGUE
              </span>
            </div>
            <h2 className="text-4xl lg:text-7xl font-black text-navy mb-6 font-poppins tracking-tight leading-tight">
              FIND THE RIGHT <span className="gradient-text">HELVAR DRIVER</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-poppins font-light leading-relaxed">
              Browse our comprehensive range of Helvar LED drivers for every application
            </p>
          </div>

          {/* Filter Tabs - Premium styling */}
          <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {productCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3.5 rounded-full font-bold font-poppins transition-all duration-300 transform hover:scale-105 border-2 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange to-orange-light text-white border-orange shadow-xl shadow-orange/30'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-orange/50 hover:text-navy hover:shadow-lg'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 hover:border-orange/30 hover:shadow-3xl transition-all duration-500 group transform hover:-translate-y-2
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Product Image Area - Premium styling */}
                <div className="aspect-[4/3] bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden p-8">
                  {/* Decorative gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-transparent to-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center relative">
                      {/* Product Image Placeholder with premium styling */}
                      <div className="w-48 h-48 mx-auto mb-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-gray-200/50 group-hover:border-orange/30 relative overflow-hidden">
                        {/* Inner glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <svg className="w-24 h-24 text-orange relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <p className="text-navy font-bold text-sm font-poppins tracking-wide">HELVAR DRIVER</p>
                    </div>
                  </div>
                  
                  {/* Premium hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                    <button 
                      onClick={() => handleViewSpecs(product)}
                      className="bg-white text-navy px-8 py-3 rounded-full font-bold font-poppins shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-orange"
                    >
                      View Specifications
                    </button>
                  </div>
                </div>

                {/* Product Info - Enhanced styling */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                  <div className="mb-4">
                    <span className="inline-block bg-gradient-to-r from-orange to-orange-light text-white px-4 py-1.5 rounded-full text-xs font-bold font-poppins mb-3 shadow-lg shadow-orange/30">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-black text-navy mb-1 font-poppins tracking-tight">{product.model}</h3>
                    <p className="text-gray-500 text-sm font-poppins font-light">{product.family}</p>
                  </div>

                  <div className="space-y-3 mb-5 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600 font-poppins font-medium">Power</span>
                      <span className="font-black text-navy font-poppins bg-orange/10 px-3 py-1 rounded-lg">{product.power}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600 font-poppins font-medium">Output Range</span>
                      <span className="font-black text-navy font-poppins bg-orange/10 px-3 py-1 rounded-lg">{product.outputRange}</span>
                    </div>
                  </div>

                  {/* Features Preview - Premium badges */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className="text-xs text-navy bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-1.5 rounded-full font-poppins font-medium border border-gray-200">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons - Enhanced */}
                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleViewSpecs(product)}
                      className="flex-1 bg-gradient-to-r from-navy to-navy-light hover:from-navy-light hover:to-navy text-white py-3.5 rounded-xl font-bold font-poppins transition-all duration-300 text-sm transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      View Specs
                    </button>
                    <button 
                      onClick={() => handleEnquire(product)}
                      className="flex-1 bg-gradient-to-r from-orange to-orange-light hover:from-orange-light hover:to-orange text-white py-3.5 rounded-xl font-bold font-poppins transition-all duration-300 text-sm transform hover:scale-105 shadow-lg hover:shadow-xl shadow-orange/30"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Products Message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg font-poppins">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}