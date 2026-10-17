import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <h1 className="text-9xl font-black text-navy mb-4 font-poppins">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-8 font-poppins">Page Not Found</h2>
        <p className="text-gray-600 mb-8 font-poppins font-light">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center bg-gradient-to-r from-orange to-orange-light hover:from-orange-light hover:to-orange text-white px-8 py-4 rounded-full font-bold font-poppins transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-orange/30 transform hover:scale-105 border-2 border-orange"
        >
          Back to Home
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}