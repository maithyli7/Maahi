import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 sm:pt-36 sm:pb-28 overflow-hidden bg-[#FAF8F5]">
      {/* Very subtle pleasant pastel ambient tint in the background */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#FAF1EC] rounded-full blur-[140px] pointer-events-none opacity-60" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#EEF3EF] rounded-full blur-[140px] pointer-events-none opacity-60" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Typography & Copy */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Small introductory text with pleasant dusty rose pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7EEF0] border border-[#9E656B]/20 text-[#9E656B] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9E656B]" />
              <span className="font-sans text-[11px] tracking-[0.2em] uppercase font-medium">
                {PERSONAL_INFO.heroSubtitle}
              </span>
            </div>

            {/* Candidate Name in refined typography */}
            <h2 className="font-serif text-3xl sm:text-4xl text-[#22201D] tracking-tight mb-2 font-normal italic">
              {PERSONAL_INFO.name}
            </h2>

            {/* Large Serif Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.1rem] text-[#22201D] font-normal leading-[1.08] tracking-[-0.01em] mb-7">
              {PERSONAL_INFO.heroHeadline}
            </h1>

            {/* Supporting Text */}
            <p className="font-sans text-base sm:text-lg text-[#6B655E] leading-relaxed max-w-xl mb-10 font-normal">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12 w-full sm:w-auto">
              <a
                href="#work"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#9E656B] text-[#FFFFFF] font-sans text-xs tracking-[0.16em] uppercase hover:bg-[#22201D] shadow-[0_4px_16px_rgba(158,101,107,0.2)] hover:shadow-none transition-all duration-300 group"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#resume-section"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-[#E8E2D9] bg-[#FFFFFF] text-[#22201D] font-sans text-xs tracking-[0.16em] uppercase hover:border-[#9E656B] hover:text-[#9E656B] transition-all duration-300 shadow-[0_2px_8px_rgba(34,32,29,0.02)]"
              >
                <Download className="w-3.5 h-3.5 mr-2" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>

            {/* Status / Location Meta */}
            <div className="pt-6 border-t border-[#E8E2D9] w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans text-[#6B655E]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#9E656B]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEF3EF] border border-[#7A9283]/30 rounded-full text-[#7A9283]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A9283] animate-pulse" />
                <span className="tracking-wide font-medium">{PERSONAL_INFO.status}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Photograph Frame */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Soft Pastel Backdrop Layer */}
              <div className="absolute -inset-3 sm:-inset-4 border border-[#E8E2D9] bg-[#F3EFEA]/60 pointer-events-none -z-0" />
              
              {/* Photograph Container */}
              <div className="relative z-10 bg-[#FFFFFF] p-3 sm:p-4 border border-[#E8E2D9] shadow-[0_8px_30px_rgba(34,32,29,0.04)]">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#F3EFEA]">
                  <img 
                    src="/images/profile.jpg" 
                    alt="Maithyli Gajula" 
                    className="w-full h-full object-cover object-center filter contrast-[1.02] hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Editorial Caption */}
                <div className="mt-4 pt-3 border-t border-[#E8E2D9] px-1">
                  <p className="font-serif italic text-sm text-[#6B655E] text-center">
                    "{PERSONAL_INFO.editorialCaption}"
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
