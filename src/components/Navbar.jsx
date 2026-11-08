import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'WORK', href: '#work' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-[#F8F5EF]/95 backdrop-blur-md border-[#DDD6CB] py-4 shadow-[0_2px_12px_rgba(41,36,31,0.03)]'
          : 'bg-[#F8F5EF]/80 backdrop-blur-sm border-[#DDD6CB]/70 py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#" className="flex flex-col group focus:outline-none">
          <span className="font-serif font-semibold text-xl sm:text-2xl tracking-[0.08em] text-[#29241F] group-hover:text-[#773B45] transition-colors">
            {PERSONAL_INFO.shortName}.
          </span>
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#77716A] -mt-0.5">
            {PERSONAL_INFO.roleTitle}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-xs tracking-[0.18em] text-[#77716A] hover:text-[#773B45] transition-colors relative py-1 group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#773B45] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 text-[#29241F] hover:text-[#773B45] transition-colors focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#F8F5EF] border-b border-[#DDD6CB] px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-xs tracking-[0.2em] text-[#29241F] hover:text-[#773B45] py-2 border-b border-[#DDD6CB]/40 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 text-[11px] font-sans text-[#77716A]">
                {PERSONAL_INFO.location} &bull; {PERSONAL_INFO.status}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
