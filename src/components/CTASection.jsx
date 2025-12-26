import React from 'react';

const CTASection = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 overflow-hidden">
     
      <div className="absolute -top-40 -right-40 w-64 h-64 sm:w-96 sm:h-96 bg-[#0078DB]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-64 h-64 sm:w-96 sm:h-96 bg-[#1F4FD8]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[600px] sm:h-[600px] bg-[#0078DB]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto">
        
        <div className="
          bg-white
          border border-gray-100
          rounded-2xl sm:rounded-3xl
          px-6 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-20 lg:py-20
          text-center
          shadow-xl sm:shadow-2xl
          hover:shadow-3xl
          transition-all duration-500
          backdrop-blur-sm
        ">
          
        
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-50 border border-[#0078DB]/20 rounded-full mb-4 sm:mb-6">
            <svg className="w-4 h-4 text-[#0078DB] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs sm:text-sm font-semibold text-[#0078DB]">Trusted by 10,000+ Homebuyers</span>
          </div>

          
          <h2 className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
            font-bold
            text-gray-900
            leading-tight
            mb-4 sm:mb-6
            px-2
          ">
            Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0078DB] to-[#1F4FD8]">Dream Home</span> in Greater Noida
          </h2>

          
          <p className="
            text-gray-600
            text-sm sm:text-base md:text-lg lg:text-xl
            max-w-3xl
            mx-auto
            leading-relaxed
            mb-8 sm:mb-10
            px-2
          ">
            Connect with our expert consultants for personalized property recommendations, 
            exclusive deals, and end-to-end assistance in your home buying journey.
          </p>

          
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-10 pb-8 sm:pb-10 border-b border-gray-100">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0078DB] mb-1">500+</div>
              <div className="text-xs sm:text-sm text-gray-500">Properties</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0078DB] mb-1">50+</div>
              <div className="text-xs sm:text-sm text-gray-500">Builders</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0078DB] mb-1">10K+</div>
              <div className="text-xs sm:text-sm text-gray-500">Happy Clients</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button className="
              group
              relative
              inline-flex items-center justify-center
              px-6 sm:px-8 md:px-12 py-3.5 sm:py-4 md:py-5
              text-sm sm:text-base md:text-lg font-semibold
              rounded-full
              bg-gradient-to-r from-[#0078DB] to-[#1F4FD8]
              text-white
              hover:from-[#005ec1] hover:to-[#1a40b0]
              transition-all duration-300
              shadow-lg hover:shadow-2xl
              transform hover:-translate-y-1
              active:scale-95
              overflow-hidden
              w-full sm:w-auto
            ">
              <span className="relative z-10 flex items-center gap-2">
                Get Free Consultation
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>

            <a href="tel:+919123410620" className="
              inline-flex items-center justify-center
              px-6 sm:px-8 md:px-12 py-3.5 sm:py-4 md:py-5
              text-sm sm:text-base md:text-lg font-semibold
              rounded-full
              bg-white
              text-[#0078DB]
              border-2 border-[#0078DB]
              hover:bg-[#0078DB]
              hover:text-white
              transition-all duration-300
              shadow-md hover:shadow-lg
              transform hover:-translate-y-1
              active:scale-95
              w-full sm:w-auto
            ">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden sm:inline">Call: +91 91234 10620</span>
              <span className="sm:hidden">Call Now</span>
            </a>
          </div>

          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% Verified Properties</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No Hidden Charges</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;