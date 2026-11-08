import React from 'react';
import { Download, Printer } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ResumeSection = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume-section" className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-[#FFFFFF] p-8 sm:p-14 border border-[#E8E2D9] shadow-[0_4px_24px_rgba(34,32,29,0.02)] relative overflow-hidden">
          
          {/* Subtle pastel corner glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FAF1EC] rounded-full blur-3xl pointer-events-none opacity-50" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            
            <div className="max-w-xl">
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#9E656B] font-semibold block mb-2">
                CURRICULUM VITAE
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#22201D] font-normal mb-3">
                Comprehensive Technical Résumé
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#6B655E] leading-relaxed">
                Clean, ATS-aligned document detailing academic standings (8.5 B.Sc., 9.9 SSC), AWS Cloud & Full-Stack internship engagements, and practical embedded prototypes.
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap gap-4">
              <button
                onClick={handlePrint}
                className="px-6 py-3.5 border border-[#E8E2D9] bg-[#FAF8F5] text-[#22201D] font-sans text-xs tracking-[0.16em] uppercase hover:border-[#9E656B] hover:text-[#9E656B] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-[0_2px_8px_rgba(34,32,29,0.02)]"
              >
                <Printer className="w-4 h-4" />
                <span>PRINT / SAVE AS PDF</span>
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Requesting%20Software%20Engineering%20Resume`}
                className="px-6 py-3.5 bg-[#9E656B] text-[#FFFFFF] font-sans text-xs tracking-[0.16em] uppercase hover:bg-[#22201D] transition-colors flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(158,101,107,0.2)]"
              >
                <Download className="w-4 h-4" />
                <span>REQUEST CV DIRECTLY</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
