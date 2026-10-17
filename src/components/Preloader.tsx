'use client';

import { useState, useEffect } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="relative mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-orange to-orange-light rounded-2xl flex items-center justify-center shadow-2xl animate-pulse">
            <span className="text-white font-black text-4xl font-poppins">BK</span>
          </div>
          <div className="absolute inset-0 border-4 border-orange/30 rounded-2xl animate-ping"></div>
        </div>
        
        {/* Loading Text */}
        <p className="text-2xl font-black text-navy font-poppins mb-4">BK Energy Solutions</p>
        
        {/* Loading Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-orange to-orange-light rounded-full animate-loading" style={{ width: '60%' }}></div>
        </div>
      </div>
    </div>
  );
}