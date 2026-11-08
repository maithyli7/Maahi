import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 sm:py-32 bg-[#F8F5EF]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16 sm:mb-24">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#773B45] font-medium block mb-3">
            06 / CERTIFICATIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#29241F] font-normal tracking-tight leading-tight max-w-2xl">
            Knowledge in progress.
          </h2>
        </div>

        {/* Compact Elegant Rows */}
        <div className="border-t border-[#DDD6CB] divide-y divide-[#DDD6CB]">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="py-6 sm:py-7 flex items-center justify-between group hover:bg-[#EFEAE1]/30 transition-colors px-2 sm:px-4"
            >
              <div className="flex items-baseline gap-4 sm:gap-6">
                <span className="font-sans text-xs tracking-[0.2em] text-[#773B45]">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#29241F] font-normal group-hover:text-[#773B45] transition-colors">
                  {cert.name}
                </h3>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-sans text-[11px] tracking-[0.16em] uppercase text-[#77716A]">
                  CREDENTIAL
                </span>
                <span className="text-[#DDD6CB] group-hover:text-[#773B45] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
