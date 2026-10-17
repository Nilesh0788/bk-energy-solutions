'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will get back to you soon.');
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      product: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Enhanced */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-orange/10 to-orange/5 text-orange px-6 py-2 rounded-full text-sm font-bold font-poppins border border-orange/20">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-black text-navy mb-6 font-poppins tracking-tight leading-tight">
            LET'S BUILD THE RIGHT <span className="gradient-text">LIGHTING SOLUTION.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-poppins font-light leading-relaxed">
            Looking for Helvar LED drivers or lighting components? Talk to our team about your requirement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form - Enhanced */}
          <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-8 border-2 border-gray-200 shadow-xl card-hover">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-400 mb-2 font-poppins">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-navy focus:ring-2 focus:ring-orange focus:border-transparent transition-all duration-300 font-poppins"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-gray-400 mb-2 font-poppins">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-navy focus:ring-2 focus:ring-orange focus:border-transparent transition-all duration-300 font-poppins"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-400 mb-2 font-poppins">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-navy focus:ring-2 focus:ring-orange focus:border-transparent transition-all duration-300 font-poppins"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-400 mb-2 font-poppins">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-navy focus:ring-2 focus:ring-orange focus:border-transparent transition-all duration-300 font-poppins"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-bold text-gray-400 mb-2 font-poppins">
                  Product / Requirement *
                </label>
                <select
                  id="product"
                  name="product"
                  required
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-orange focus:border-transparent transition-all duration-300 font-poppins"
                >
                  <option value="">Select a product category</option>
                  <option value="LED Drivers">LED Drivers</option>
                  <option value="DALI Drivers">DALI Drivers</option>
                  <option value="Constant Current Drivers">Constant Current Drivers</option>
                  <option value="Constant Voltage Drivers">Constant Voltage Drivers</option>
                  <option value="Terminal Connectors">Terminal Connectors</option>
                  <option value="CoB & LEDs">CoB & LEDs</option>
                  <option value="Wire & Cable">Wire & Cable</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Other">Other Components</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-400 mb-2 font-poppins">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-orange focus:border-transparent transition-all duration-300 resize-none font-poppins"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange to-orange-light hover:from-orange-light hover:to-orange text-white py-4 rounded-xl font-bold font-poppins transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-orange/30 transform hover:scale-105 border-2 border-orange"
              >
                Send Enquiry
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-black text-navy mb-6 font-poppins">Get in Touch</h3>
              <p className="text-gray-600 mb-8 font-poppins font-light">
                Our technical team is ready to help you find the right lighting components for your application.
              </p>
            </div>

            {/* Contact Options */}
            <div className="space-y-6">
              <a
                href="tel:+919718350484"
                className="flex items-center space-x-4 p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-orange card-hover group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange to-orange-light rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-effect">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-navy group-hover:text-orange transition-colors font-poppins">Call Us</h4>
                  <p className="text-gray-600 text-sm font-poppins">+91-9718350484</p>
                </div>
              </a>

              <a
                href="https://wa.me/919718350484"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-orange card-hover group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-navy group-hover:text-orange transition-colors font-poppins">WhatsApp</h4>
                  <p className="text-gray-600 text-sm font-poppins">+91-9718350484</p>
                </div>
              </a>

              <a
                href="mailto:bkenergysolutions20@gmail.com"
                className="flex items-center space-x-4 p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-orange card-hover group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange to-orange-light rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-effect">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-navy group-hover:text-orange transition-colors font-poppins">Email Us</h4>
                  <p className="text-gray-600 text-sm font-poppins">bkenergysolutions20@gmail.com</p>
                </div>
              </a>
            </div>

            {/* Office Hours */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
              <h4 className="font-bold mb-2 text-white font-poppins">Office Hours</h4>
              <p className="text-gray-400 text-sm font-poppins">Monday - Saturday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-400 text-sm font-poppins">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}