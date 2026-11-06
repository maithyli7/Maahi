import React from 'react';
import { Mail, ArrowUp, Heart, Code2 } from 'lucide-react';
import { BrandIcons } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t py-12 transition-colors ${
      darkMode ? 'bg-[#0B0D12] border-white/10' : 'bg-gray-50 border-black/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-heading font-bold text-base tracking-tight bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Maithyli Gajula
              </span>
              <span className="text-xs font-mono text-gray-500">/ 2026</span>
            </div>
            <p className={`text-xs font-mono ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Designed & Developed by Maithyli Gajula.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-lg border transition-colors ${
                darkMode ? 'border-white/10 text-gray-300 hover:text-cyan-300 hover:border-cyan-400/40' : 'border-black/10 text-gray-700 hover:text-purple-600'
              }`}
              aria-label="GitHub Profile"
            >
              <BrandIcons.Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-lg border transition-colors ${
                darkMode ? 'border-white/10 text-gray-300 hover:text-purple-300 hover:border-purple-400/40' : 'border-black/10 text-gray-700 hover:text-purple-600'
              }`}
              aria-label="LinkedIn Profile"
            >
              <BrandIcons.Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className={`p-2 rounded-lg border transition-colors ${
                darkMode ? 'border-white/10 text-gray-300 hover:text-cyan-300 hover:border-cyan-400/40' : 'border-black/10 text-gray-700 hover:text-purple-600'
              }`}
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className={`px-3 py-2 rounded-lg border flex items-center gap-1.5 transition-colors ${
                darkMode 
                  ? 'border-white/10 text-gray-300 hover:text-white hover:bg-white/5' 
                  : 'border-black/10 text-gray-700 hover:text-gray-900 hover:bg-black/5'
              }`}
            >
              <ArrowUp className="w-3.5 h-3.5 text-purple-400" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            &copy; 2026 Maithyli Gajula. All Rights Reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Visakhapatnam, India</span>
            <span>&bull;</span>
            <span className="text-emerald-400">Available for Opportunities</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
