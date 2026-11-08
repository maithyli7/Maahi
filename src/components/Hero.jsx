import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 sm:pt-36 sm:pb-28 overflow-hidden bg-[#F8F5EF]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Typography & Copy */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Small introductory text */}
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#773B45] font-medium mb-5 inline-block">
              {PERSONAL_INFO.heroSubtitle}
            </span>

            {/* Candidate Name in refined typography */}
            <h2 className="font-serif text-3xl sm:text-4xl text-[#29241F] tracking-tight mb-3 font-normal italic">
              {PERSONAL_INFO.name}
            </h2>

            {/* Large Serif Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.2rem] text-[#29241F] font-normal leading-[1.08] tracking-[-0.01em] mb-7">
              {PERSONAL_INFO.heroHeadline}
            </h1>

            {/* Supporting Text */}
            <p className="font-sans text-base sm:text-lg text-[#77716A] leading-relaxed max-w-xl mb-10 font-normal">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12 w-full sm:w-auto">
              <a
                href="#work"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#773B45] text-[#FFFFFF] font-sans text-xs tracking-[0.16em] uppercase hover:bg-[#29241F] transition-colors duration-300 group"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#resume-section"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-[#DDD6CB] bg-[#FFFFFF] text-[#29241F] font-sans text-xs tracking-[0.16em] uppercase hover:border-[#773B45] hover:text-[#773B45] transition-all duration-300"
              >
                <Download className="w-3.5 h-3.5 mr-2" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>

            {/* Status / Location Meta */}
            <div className="pt-6 border-t border-[#DDD6CB] w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans text-[#77716A]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#773B45]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#773B45]" />
                <span className="tracking-wide">{PERSONAL_INFO.status}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Photograph Frame */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Offset Decorative Architectural Frame */}
              <div className="absolute -inset-3 sm:-inset-4 border border-[#DDD6CB] pointer-events-none -z-0" />
              
              {/* Photograph Container */}
              <div className="relative z-10 bg-[#FFFFFF] p-3 sm:p-4 border border-[#DDD6CB] shadow-[0_4px_24px_rgba(41,36,31,0.04)]">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#EFEAE1]">
                  <img 
                    src="/images/profile.jpg" 
                    alt="Maithyli Gajula" 
                    className="w-full h-full object-cover object-center filter contrast-[1.02] hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Editorial Caption */}
                <div className="mt-4 pt-3 border-t border-[#DDD6CB]/60 px-1">
                  <p className="font-serif italic text-sm text-[#77716A] text-center">
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
