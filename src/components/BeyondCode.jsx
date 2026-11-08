import React from 'react';
import { motion } from 'framer-motion';
import { BEYOND_CODE_DATA } from '../data/portfolioData';

export const BeyondCode = () => {
  return (
    <section id="beyond" className="py-24 sm:py-32 bg-[#EFEAE1]/50 border-t border-b border-[#DDD6CB]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16 sm:mb-24">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#773B45] font-medium block mb-3">
            07 / PERSPECTIVES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#29241F] font-normal tracking-tight leading-tight max-w-2xl">
            Life, beyond the screen.
          </h2>
        </div>

        {/* Magazine-inspired Editorial Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BEYOND_CODE_DATA.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="bg-[#FFFFFF] p-8 border border-[#DDD6CB] shadow-[0_2px_12px_rgba(41,36,31,0.02)] flex flex-col justify-between hover:border-[#773B45] transition-colors duration-400 group"
            >
              <div>
                <span className="font-sans text-[10px] tracking-[0.2em] text-[#773B45] uppercase block mb-6">
                  ESSAY 0{idx + 1}
                </span>

                <h3 className="font-serif text-2xl text-[#29241F] font-normal mb-4 group-hover:text-[#773B45] transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans text-sm text-[#77716A] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-[#DDD6CB]/50 flex items-center justify-between text-[11px] font-sans text-[#77716A]">
                <span>Reflection</span>
                <span className="text-[#B58D8C]">&bull;</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
