import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Code2, Download, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar = ({ darkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Beyond Code', href: '#beyond' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-[#0B0D12]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3.5'
            : 'bg-white/85 backdrop-blur-md border-b border-black/10 shadow-sm py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1px] transition-transform duration-300 group-hover:scale-105">
            <div className={`w-full h-full rounded-[11px] flex items-center justify-center transition-colors ${darkMode ? 'bg-[#0B0D12]' : 'bg-white'}`}>
              <span className="font-heading font-bold text-sm tracking-tighter bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                MG
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className={`font-heading font-bold text-sm tracking-wide transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Maithyli Gajula
            </span>
            <span className="text-[10px] font-mono tracking-wider text-purple-400 font-medium">
              DEV / MCA
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 ${
                darkMode
                  ? 'text-gray-300 hover:text-white hover:bg-white/5'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-black/5'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle & Resume CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-xl transition-all border ${
              darkMode
                ? 'border-white/10 bg-white/5 text-yellow-400 hover:bg-white/10'
                : 'border-black/10 bg-black/5 text-gray-700 hover:bg-black/10'
            }`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="#contact"
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-xl border ${
              darkMode
                ? 'border-white/10 bg-white/5 text-yellow-400'
                : 'border-black/10 bg-black/5 text-gray-700'
            }`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
            className={`p-2 rounded-xl border ${
              darkMode
                ? 'border-white/10 bg-white/5 text-white'
                : 'border-black/10 bg-black/5 text-gray-900'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden border-b px-6 py-5 ${
              darkMode
                ? 'bg-[#121620]/95 backdrop-blur-xl border-white/10'
                : 'bg-white/95 backdrop-blur-xl border-black/10'
            }`}
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors ${
                    darkMode
                      ? 'text-gray-300 hover:text-white hover:bg-white/5'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-black/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 flex gap-3">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 text-center py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

