import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <section
      id="About"
      className="relative w-full bg-gradient-to-b from-white to-gray-50 py-20 md:py-28 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#0078DB]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0078DB]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-20 lg:px-32">
        
        {/* Section Label */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-[#0078DB]/20 rounded-full mb-4">
            <svg className="w-4 h-4 text-[#0078DB]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            <span className="text-sm font-semibold text-[#0078DB]">About LIVMETRO</span>
          </div>
          <div className="h-1 w-20 bg-[#0078DB] mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Why Homebuyers Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0078DB] to-[#1F4FD8]">
                LIVMETRO
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              LivMetro is a trusted real estate advisory platform focused on premium
              residential projects in Greater Noida. We work only with verified builders
              and RERA-approved projects to ensure complete transparency and peace of
              mind for homebuyers.
            </p>

            <p className="text-base text-gray-600 leading-relaxed">
              From curated site visits and price negotiations to home loans and legal
              documentation, our experts guide you through every step of your property
              buying journey.
            </p>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0078DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">RERA Verified</h3>
                  <p className="text-sm text-gray-600">100% approved projects</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0078DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Best Prices</h3>
                  <p className="text-sm text-gray-600">Exclusive builder rates</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0078DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Expert Team</h3>
                  <p className="text-sm text-gray-600">10+ years experience</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0078DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Free Site Visits</h3>
                  <p className="text-sm text-gray-600">Guided property tours</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#0078DB] to-[#1F4FD8] hover:from-[#005ec1] hover:to-[#1a40b0] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Get Project Details
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <p className="text-sm text-gray-500 mt-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free consultation • No spam calls • 100% confidential
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 relative">
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-[#0078DB]/10 to-[#1F4FD8]/10 rounded-2xl"></div>
              
              {/* Main Image */}
              <img
                src={assets.project_img_2}
                alt="Premium Property"
                className="relative w-full rounded-2xl shadow-2xl object-cover border-4 border-white"
              />

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#0078DB]">10K+</div>
                    <div className="text-xs text-gray-600">Happy Clients</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#0078DB]">500+</div>
                    <div className="text-xs text-gray-600">Properties</div>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg px-4 py-2 border border-gray-100">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <div>
                    <div className="text-sm font-bold text-gray-900">4.8/5</div>
                    <div className="text-xs text-gray-500">Rated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#0078DB] mb-2">100%</div>
              <div className="text-sm text-gray-600">RERA Verified</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#0078DB] mb-2">50+</div>
              <div className="text-sm text-gray-600">Builder Partners</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#0078DB] mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#0078DB] mb-2">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About