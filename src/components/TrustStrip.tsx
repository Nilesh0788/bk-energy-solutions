export default function TrustStrip() {
  return (
    <section className="bg-navy py-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-orange opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left - Authorised Badge */}
          <div className="flex items-center space-x-4 transform hover:scale-105 transition-transform duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-orange to-orange-light rounded-full flex items-center justify-center flex-shrink-0 glow-effect">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-black text-2xl font-poppins tracking-tight">AUTHORISED HELVAR DISTRIBUTION</h3>
              <p className="text-gray-300 text-sm font-poppins">Premium LED Drivers & Lighting Control Solutions</p>
            </div>
          </div>

          {/* Right - Partnership Statement */}
          <div className="text-center md:text-right">
            <p className="text-white font-bold text-xl font-poppins">Professional Lighting & Electronic Components Partner</p>
            <p className="text-gray-400 text-sm font-poppins mt-1">Serving North India with Technical Excellence</p>
          </div>
        </div>

        {/* Verification-style visual */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20 transform hover:scale-105 transition-transform duration-300">
            <svg className="w-6 h-6 text-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-white text-base font-bold font-poppins">Official Authorised Distributor</span>
          </div>
        </div>
      </div>
    </section>
  );
}