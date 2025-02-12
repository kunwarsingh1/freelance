import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Briefcase } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-[#FAF3E0] shadow-lg fixed w-full z-50">
      {/* text-[#008080] */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
            <a href="/" className="flex items-center mx-auto space-x-2 opacity-0 animate-fadeIn">
              <Briefcase className="h-8 w-8 text-[#008080]" />
              <span className="text-xl font-bold text-[#1B1F3B]">TechCorp</span>
            </a>
          </div>

          {/* Desktop Menu */}
          {/* <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="relative"
              >
                <span className={`text-[#1B1F3B] hover:text-blue-600 transition-colors ${
                  location.pathname === link.path ? 'text-blue-600' : ''
                }`}>
                  {link.name}
                </span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-blue-600 bottom-0"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          {/* <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      // </div>

      {/* Mobile Menu */}
      {/* <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        className="md:hidden overflow-hidden"
      >  */}
        {/* <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
          {links.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === link.path
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              {link.name}
            </a>
          ))} */}
        </div>
      {/* </motion.div> */}
    </nav>
  );
};

export default Navbar;