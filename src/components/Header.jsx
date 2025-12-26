import React from 'react'
import Navbar from './Navbar'
import SearchCard from './SearchCard'

const Header = () => {
  return (
    <header
      id="Header"
      className="relative min-h-screen w-full bg-gradient-to-br from-[#E5F0FF] via-blue-50/50 to-white overflow-hidden"
    >
      
      <div className="absolute top-20 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#0078DB]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 sm:w-[600px] sm:h-[600px] bg-[#1F4FD8]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200/20 rounded-full blur-2xl"></div>

      <div className="absolute top-40 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 border-4 border-[#0078DB]/20 rounded-lg rotate-12 animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-40 right-10 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 border-4 border-[#1F4FD8]/20 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>

      <Navbar />

      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-20 pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-20">

        
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/80 backdrop-blur-sm border border-[#0078DB]/20 rounded-full shadow-md mb-4 sm:mb-6 animate-fadeIn">
          <svg className="w-4 h-4 text-[#0078DB] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-xs sm:text-sm font-semibold text-[#0078DB]">Trusted by 10,000+ Homebuyers</span>
        </div>

        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900 max-w-4xl animate-fadeInUp mb-6 sm:mb-8">
          Premium Residential Properties in{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0078DB] to-[#1F4FD8] relative">
            Noida
            <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
              <path d="M2 10C50 2 150 2 298 10" stroke="#0078DB" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </span>
        </h1>

        
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white rounded-full shadow-md border border-gray-100">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">RERA-Approved</span>
          </div>
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white rounded-full shadow-md border border-gray-100">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">Verified Listings</span>
          </div>
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white rounded-full shadow-md border border-gray-100">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">Best Price Assurance</span>
          </div>
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white rounded-full shadow-md border border-gray-100">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">Free Site Visits</span>
          </div>
        </div>

        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl leading-relaxed mb-8 sm:mb-10 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          Explore thoughtfully designed 2, 3 & 4 BHK apartments and villas
          from trusted developers, backed by transparent pricing and
          complete end-to-end buying support.
        </p>

        <div className="flex flex-wrap items-center gap-6 sm:gap-8 mb-10 sm:mb-14 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#0078DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-gray-900">500+</div>
              <div className="text-xs sm:text-sm text-gray-600">Properties</div>
            </div>
          </div>
          
          <div className="hidden sm:block h-12 w-px bg-gray-300"></div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#0078DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-gray-900">50+</div>
              <div className="text-xs sm:text-sm text-gray-600">Builders</div>
            </div>
          </div>
          
          <div className="hidden sm:block h-12 w-px bg-gray-300"></div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg shadow-md flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#0078DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-gray-900">10K+</div>
              <div className="text-xs sm:text-sm text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>

       
        <div className="mb-10 sm:mb-14 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0078DB]/20 to-[#1F4FD8]/20 blur-2xl rounded-3xl transform scale-105"></div>
            <div className="relative">
              <SearchCard />
            </div>
          </div>
        </div>

        
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-600 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-medium whitespace-nowrap">4.8/5 Rating</span>
          </div>
          <span className="hidden sm:inline text-gray-400">•</span>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium whitespace-nowrap">100% Secure</span>
          </div>
          <span className="hidden sm:inline text-gray-400">•</span>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="font-medium whitespace-nowrap">Expert Support 24/7</span>
          </div>
        </div>

      </div>

   
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </header>
  )
}

export default Header