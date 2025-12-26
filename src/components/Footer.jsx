import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Properties for Sale', path: '/sale' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'RERA Approved Projects',
    'Property Consultation',
    'Site Visits',
    'Investment Advisory',
    'Home Loans Assistance'
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0A2540] to-[#061829] text-gray-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-6 sm:pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-2.5 mb-3 sm:mb-4">
              <img
                src={logo}
                alt="LIVMETRO Logo"
                className="h-8 sm:h-9 w-auto"
              />
              <span className="text-lg sm:text-xl font-bold tracking-wide text-white">
                LIVMETRO
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4 sm:mb-5">
              Trusted real estate consultants in Greater Noida, delivering RERA-approved residential projects with transparency and expert guidance.
            </p>
            <div className="flex gap-2.5 sm:gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#0078DB] flex items-center justify-center transition-all duration-300 group active:scale-95">
                <Facebook size={18} className="text-gray-300 group-hover:text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#0078DB] flex items-center justify-center transition-all duration-300 group active:scale-95">
                <Twitter size={18} className="text-gray-300 group-hover:text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#0078DB] flex items-center justify-center transition-all duration-300 group active:scale-95">
                <Instagram size={18} className="text-gray-300 group-hover:text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#0078DB] flex items-center justify-center transition-all duration-300 group active:scale-95">
                <Linkedin size={18} className="text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-white mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path} 
                    className="text-sm text-gray-400 hover:text-[#0078DB] active:text-[#0078DB] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold text-white mb-3 sm:mb-4">Our Services</h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {services.map((service, index) => (
                <li key={index} className="text-sm text-gray-400 flex items-start gap-2">
                  <span className="text-[#0078DB] mt-0.5 flex-shrink-0">•</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold text-white mb-3 sm:mb-4">Get In Touch</h3>
            <div className="space-y-3 mb-4 sm:mb-5">
              <a href="tel:+919123410620" className="flex items-start gap-2.5 text-sm text-gray-400 hover:text-[#0078DB] transition-colors">
                <Phone size={16} className="text-[#0078DB] mt-0.5 flex-shrink-0" />
                <span>+91 91234 10620</span>
              </a>
              <a href="mailto:info@livmetro.com" className="flex items-start gap-2.5 text-sm text-gray-400 hover:text-[#0078DB] transition-colors">
                <Mail size={16} className="text-[#0078DB] mt-0.5 flex-shrink-0" />
                <span>info@livmetro.com</span>
              </a>
              <div className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin size={16} className="text-[#0078DB] mt-0.5 flex-shrink-0" />
                <span>Greater Noida, Uttar Pradesh</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-gray-400">
                <Clock size={16} className="text-[#0078DB] mt-0.5 flex-shrink-0" />
                <span>Mon – Sat | 9:00 AM – 7:00 PM</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-4 sm:mt-5">
              <h4 className="text-sm font-semibold text-white mb-2">Newsletter</h4>
              <p className="text-xs text-gray-400 mb-3">Get updates on new projects</p>
              <div className="flex rounded-lg overflow-hidden border border-white/20">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2.5 text-sm text-gray-900 focus:outline-none bg-white min-w-0"
                />
                <button className="bg-[#0078DB] hover:bg-[#0066c0] active:bg-[#005ab3] px-4 py-2.5 text-white transition-colors duration-300 active:scale-95 flex-shrink-0">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs text-gray-400">
            <p className="text-center sm:text-left">© {new Date().getFullYear()} LIVMETRO. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
              <a href="#" className="hover:text-[#0078DB] transition-colors whitespace-nowrap">Privacy Policy</a>
              <a href="#" className="hover:text-[#0078DB] transition-colors whitespace-nowrap">Terms of Service</a>
              <a href="#" className="hover:text-[#0078DB] transition-colors whitespace-nowrap">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;