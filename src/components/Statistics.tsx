'use client';

import { useEffect, useState, useRef } from 'react';

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    years: 0,
    satisfaction: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const targetCounts = {
    clients: 500,
    projects: 1200,
    years: 15,
    satisfaction: 98
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const frameRate = 60;
    const totalFrames = duration / 1000 * frameRate;

    Object.keys(targetCounts).forEach((key) => {
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.floor(progress * targetCounts[key as keyof typeof targetCounts]);
        
        setCounters((prev) => ({
          ...prev,
          [key]: currentCount
        }));

        if (frame >= totalFrames) {
          clearInterval(counter);
          setCounters((prev) => ({
            ...prev,
            [key]: targetCounts[key as keyof typeof targetCounts]
          }));
        }
      }, 1000 / frameRate);
    });
  };

  const stats = [
    {
      number: counters.clients,
      label: "Happy Clients",
      suffix: "+",
      icon: "👥"
    },
    {
      number: counters.projects,
      label: "Projects Completed",
      suffix: "+",
      icon: "🏗️"
    },
    {
      number: counters.years,
      label: "Years Experience",
      suffix: "+",
      icon: "⭐"
    },
    {
      number: counters.satisfaction,
      label: "Client Satisfaction",
      suffix: "%",
      icon: "💯"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-orange/10 to-orange/5 text-orange px-6 py-2 rounded-full text-sm font-bold font-poppins border border-orange/20">
              OUR IMPACT
            </span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-navy mb-6 font-poppins tracking-tight leading-tight">
            NUMBERS THAT <span className="gradient-text">MATTER</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-poppins font-light leading-relaxed">
            Our track record speaks for itself
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-8 border-2 border-gray-200 hover:border-orange/30 card-hover group transform hover:-translate-y-2 shadow-xl hover:shadow-2xl transition-all duration-500 text-center
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500">
                {stat.icon}
              </div>
              <div className="text-5xl lg:text-6xl font-black text-navy mb-2 font-poppins group-hover:text-orange transition-colors">
                {stat.number}{stat.suffix}
              </div>
              <p className="text-gray-600 font-poppins font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}