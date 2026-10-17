'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail('');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-navy to-navy-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-4 font-poppins tracking-tight">
            STAY <span className="gradient-text">UPDATED</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-poppins font-light">
            Subscribe to our newsletter for the latest product updates and industry insights
          </p>
        </div>

        {/* Newsletter Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent font-poppins"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange to-orange-light hover:from-orange-light hover:to-orange text-white px-8 py-4 rounded-xl font-bold font-poppins transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-orange/30 transform hover:scale-105 border-2 border-orange"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-gray-400 text-sm font-poppins font-light">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white font-poppins mb-2">Thank You!</h3>
              <p className="text-gray-300 font-poppins font-light">You have been successfully subscribed.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}