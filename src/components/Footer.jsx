import React from 'react';
import { ArrowUp } from 'lucide-react';
import { BrandIcons } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 sm:py-20 bg-[#F8F5EF] border-t border-[#DDD6CB]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-8 pb-12 border-b border-[#DDD6CB]">
          
          {/* Identity & Tagline */}
          <div>
            <h4 className="font-serif text-2xl sm:text-3xl text-[#29241F] tracking-wide mb-2">
              {PERSONAL_INFO.name.toUpperCase()}
            </h4>
            <p className="font-serif italic text-base text-[#77716A]">
              "Designed with curiosity. Built with intention."
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-6 font-sans text-xs tracking-[0.16em] uppercase">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="text-[#77716A] hover:text-[#773B45] transition-colors"
            >
              GITHUB
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[#77716A] hover:text-[#773B45] transition-colors"
            >
              LINKEDIN
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[#77716A] hover:text-[#773B45] transition-colors"
            >
              EMAIL
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#29241F] hover:text-[#773B45] transition-colors cursor-pointer pl-4 border-l border-[#DDD6CB]"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Legal & Location */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-[#77716A]">
          <div>
            &copy; 2026 Maithyli Gajula. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Visakhapatnam, India</span>
            <span>&bull;</span>
            <span className="text-[#773B45]">Software Engineer &bull; MCA</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
