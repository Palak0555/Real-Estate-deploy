import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { 
      name: 'For Buyers', 
      hasDropdown: true,
      items: ['Buy Property', 'New Projects', 'Ready to Move', 'Under Construction']
    },
    { 
      name: 'For Tenants', 
      hasDropdown: true,
      items: ['Rent Property', 'PG/Hostels', 'Flatmates']
    },
    { 
      name: 'For Sellers', 
      hasDropdown: true,
      items: ['Sell Property', 'Property Valuation', 'Owner Plans']
    },
    { 
      name: 'Services', 
      hasDropdown: true,
      items: ['Home Loans', 'Legal Assistance', 'Site Visits', 'Interior Design']
    },
    { name: 'News & Guide', hasDropdown: false }
  ]

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-lg py-3' 
        : 'bg-[#0078DB] py-4'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8">
        
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className={`relative transition-transform duration-300 group-hover:scale-110 ${
            scrolled ? 'w-10 h-10' : 'w-10 h-10'
          }`}>
            <img 
              src={assets.logo}
              alt="LIVMETRO"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl md:text-2xl font-bold tracking-wide transition-colors ${
              scrolled ? 'text-[#0078DB]' : 'text-white'
            }`}>
              LIVMETRO
            </span>
            <span className={`text-xs font-medium transition-colors ${
              scrolled ? 'text-gray-500' : 'text-blue-100'
            }`}>
              Your Dream Home Awaits
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-base font-medium">
          {menuItems.map((item, index) => (
            <li 
              key={index}
              className="relative group"
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1 transition-colors ${
                scrolled 
                  ? 'text-gray-700 hover:text-[#0078DB]' 
                  : 'text-white hover:text-blue-100'
              }`}>
                {item.name}
                {item.hasDropdown && (
                  <svg 
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              
              {/* Dropdown Menu */}
              {item.hasDropdown && (
                <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                  activeDropdown === item.name 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2'
                }`}>
                  {item.items.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href="#"
                      className="block px-5 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#0078DB] transition-colors border-b border-gray-50 last:border-b-0"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
              
              {/* Underline Animation */}
              {!item.hasDropdown && (
                <span className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                  scrolled ? 'bg-[#0078DB]' : 'bg-white'
                }`}></span>
              )}
            </li>
          ))}
        </ul>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Contact Number */}
          <a 
            href="tel:+91 91234 10620" 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              scrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-sm font-semibold hidden xl:inline">+91 91234 10620</span>
          </a>

          {/* Login Button */}
          <button className={`group relative inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 overflow-hidden ${
            scrolled 
              ? 'bg-gradient-to-r from-[#0078DB] to-[#1F4FD8] text-white hover:shadow-lg' 
              : 'bg-white text-[#0078DB] hover:shadow-xl'
          }`}>
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Login
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className={`lg:hidden focus:outline-none transition-colors ${
            scrolled ? 'text-gray-700' : 'text-white'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className={`px-6 pb-6 pt-4 ${scrolled ? 'bg-white' : 'bg-[#0078DB]'}`}>
          <ul className="flex flex-col gap-3">
            {menuItems.map((item, index) => (
              <li key={index} className="border-b border-white/10 last:border-b-0 pb-3 last:pb-0">
                <button 
                  className={`w-full text-left font-medium transition-colors flex items-center justify-between ${
                    scrolled ? 'text-gray-700' : 'text-white'
                  }`}
                  onClick={() => item.hasDropdown && setActiveDropdown(
                    activeDropdown === item.name ? null : item.name
                  )}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg 
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                
                {/* Mobile Dropdown */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="mt-3 ml-4 space-y-2">
                    {item.items.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className={`block text-sm py-2 transition-colors ${
                          scrolled ? 'text-gray-600 hover:text-[#0078DB]' : 'text-blue-100 hover:text-white'
                        }`}
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Actions */}
          <div className="mt-6 space-y-3">
            <a 
              href="tel:+91 91234 10620"
              className={`flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg border-2 font-semibold transition-all ${
                scrolled 
                  ? 'border-[#0078DB] text-[#0078DB] hover:bg-[#0078DB] hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-[#0078DB]'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            
            <button className={`w-full px-6 py-3 rounded-lg font-semibold transition-all ${
              scrolled 
                ? 'bg-gradient-to-r from-[#0078DB] to-[#1F4FD8] text-white shadow-lg' 
                : 'bg-white text-[#0078DB] shadow-lg'
            }`}>
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Login
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar