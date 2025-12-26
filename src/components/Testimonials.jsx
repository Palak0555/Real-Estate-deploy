import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      text: "LivMetro helped us find the perfect home in Greater Noida at the best price. Very transparent, professional, and stress-free experience. The team guided us through every step.",
      name: "Rajesh Kumar",
      role: "Homeowner",
      location: "Greater Noida West",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh"
    },
    {
      text: "Smooth process from site visit to booking. Highly recommended for genuine property deals with complete transparency. They really care about their clients.",
      name: "Priya Sharma",
      role: "First-time Buyer",
      location: "Noida Extension",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
    },
    {
      text: "Excellent service! The team was very knowledgeable and helped us get an amazing deal. The entire documentation process was handled smoothly.",
      name: "Amit Verma",
      role: "Investor",
      location: "Greater Noida",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit"
    },
    {
      text: "Professional and trustworthy. They made our dream of owning a home come true. Best real estate consultants in the region without a doubt.",
      name: "Sneha Gupta",
      role: "Homeowner",
      location: "Sector Alpha",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha"
    }
  ]

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 md:py-28 px-6 md:px-20 overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0078DB]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1F4FD8]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-[#0078DB]/20 rounded-full mb-6">
            <svg className="w-4 h-4 text-[#0078DB]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>
            <span className="text-sm font-semibold text-[#0078DB]">Client Testimonials</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0078DB] to-[#1F4FD8]">
              Clients Say
            </span>
          </h2>
          <div className="h-1 w-24 bg-[#0078DB] mx-auto rounded-full mb-6"></div>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our happy homebuyers have to say about their experience with LivMetro.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden border border-gray-100 hover:border-[#0078DB]"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#0078DB] to-[#1F4FD8]"></div>

              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-16 h-16 text-[#0078DB]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array(5).fill().map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm font-semibold text-gray-700">5.0</span>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed text-base mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full bg-gray-100 border-2 border-[#0078DB]"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role} • {testimonial.location}</p>
                </div>
                <div className="ml-auto">
                  <svg className="w-6 h-6 text-[#0078DB]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#0078DB]/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Video Testimonial CTA */}
        <div className="bg-gradient-to-r from-[#0078DB] to-[#1F4FD8] rounded-2xl p-8 md:p-12 text-center mb-16 shadow-xl">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Watch Video Testimonials
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl">
              Hear directly from our clients about their home buying journey with LivMetro
            </p>
            <button className="group inline-flex items-center gap-2 bg-white text-[#0078DB] px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Watch Now
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="text-4xl md:text-5xl font-bold text-[#0078DB] mb-2">10K+</div>
            <p className="text-gray-600 text-sm font-medium">Happy Homebuyers</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="text-4xl md:text-5xl font-bold text-[#0078DB] mb-2">100%</div>
            <p className="text-gray-600 text-sm font-medium">Transparent Dealing</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="text-4xl md:text-5xl font-bold text-[#0078DB] mb-2">4.8/5</div>
            <p className="text-gray-600 text-sm font-medium">Average Rating</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="text-4xl md:text-5xl font-bold text-[#0078DB] mb-2">500+</div>
            <p className="text-gray-600 text-sm font-medium">Properties Sold</p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Verified Reviews</span>
          </div>
          <span className="text-gray-400">•</span>
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Real Client Stories</span>
          </div>
          <span className="text-gray-400">•</span>
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">No Fake Reviews</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials