import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#FAF3E0] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#1B1F3B]">TechCorp</h3>
            <p className="text-[#1B1F3B]">
              Transforming ideas into digital reality through innovative solutions and cutting-edge technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#1B1F3B]">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-[#1B1F3B]" />
                <span className='text-[#1B1F3B]'>contact@techcorp.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-[#1B1F3B]" />
                <span className='text-[#1B1F3B]'>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-[#1B1F3B]" />
                <span className='text-[#1B1F3B] '>123 Tech Street, SF, CA</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#1B1F3B]">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="hover:text-[#CFAF60] transition-colors text-[#1B1F3B]">Services</a></li>
              <li><a href="/portfolio" className="hover:text-[#CFAF60] transition-colors text-[#1B1F3B]">Portfolio</a></li>
              <li><a href="/about" className="hover:text-[#CFAF60] transition-colors text-[#1B1F3B]">About Us</a></li>
              <li><a href="/contact" className="hover:text-[#CFAF60] transition-colors text-[#1B1F3B]">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#1B1F3B]">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#1B1F3B] transition-colors">
                <Github className="h-6 w-6 hover:text-[#CFAF60] transition-colors text-[#1B1F3B]" />
              </a>
              <a href="#" className="hover:text-[#1B1F3B] transition-colors">
                <Linkedin className="h-6 w-6 hover:text-[#CFAF60] transition-colors text-[#1B1F3B]" />
              </a>
              <a href="#" className="hover:text-[#1B1F3B] transition-colors">
                <Twitter className="h-6 w-6 hover:text-[#CFAF60] transition-colors text-[#1B1F3B]" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-[#1B1F3B]">
          <p>&copy; {new Date().getFullYear()} TechCorp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;