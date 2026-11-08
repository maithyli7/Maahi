import React from 'react';
import { motion } from 'framer-motion';
import { BEYOND_CODE_DATA } from '../data/portfolioData';

// Pleasant pastel card borders & tags
const bentoAccents = [
  { tag: 'ESSAY 01', bg: 'bg-[#F7EEF0]', text: 'text-[#9E656B]', border: 'border-[#9E656B]/20' },
  { tag: 'ESSAY 02', bg: 'bg-[#EFF3F6]', text: 'text-[#5F7D8E]', border: 'border-[#5F7D8E]/20' },
  { tag: 'ESSAY 03', bg: 'bg-[#EEF3EF]', text: 'text-[#7A9283]', border: 'border-[#7A9283]/20' },
  { tag: 'ESSAY 04', bg: 'bg-[#FAF1EC]', text: 'text-[#B37D64]', border: 'border-[#B37D64]/20' },
  { tag: 'ESSAY 05', bg: 'bg-[#F7EEF0]', text: 'text-[#9E656B]', border: 'border-[#9E656B]/20' },
];

export const BeyondCode = () => {
  return (
    <section id="beyond" className="py-24 sm:py-32 bg-[#F3EFEA]/45 border-t border-b border-[#E8E2D9]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16 sm:mb-24">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#9E656B] font-semibold block mb-3">
            07 / PERSPECTIVES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#22201D] font-normal tracking-tight leading-tight max-w-2xl">
            Life, beyond the screen.
          </h2>
        </div>

        {/* Magazine-inspired Editorial Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BEYOND_CODE_DATA.map((item, idx) => {
            const style = bentoAccents[idx % bentoAccents.length];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="bg-[#FFFFFF] p-8 border border-[#E8E2D9] shadow-[0_4px_20px_rgba(34,32,29,0.02)] flex flex-col justify-between hover:border-[#9E656B]/60 transition-colors duration-300 group"
              >
                <div>
                  <span className={`font-sans text-[10px] tracking-[0.16em] uppercase px-2.5 py-1 rounded inline-block mb-6 ${style.bg} ${style.text} ${style.border} border font-medium`}>
                    {style.tag}
                  </span>

                  <h3 className="font-serif text-2xl text-[#22201D] font-normal mb-3 group-hover:text-[#9E656B] transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-sans text-sm text-[#6B655E] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-8 border-t border-[#E8E2D9]/70 flex items-center justify-between text-[11px] font-sans text-[#6B655E]">
                  <span>Reflection</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9E656B]/50" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
