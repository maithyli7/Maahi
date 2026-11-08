import React from 'react';
import { Download, Printer, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ResumeSection = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume-section" className="py-20 sm:py-28 bg-[#F8F5EF]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-[#FFFFFF] p-8 sm:p-14 border border-[#DDD6CB] shadow-[0_4px_24px_rgba(41,36,31,0.02)]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="max-w-xl">
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#773B45] font-medium block mb-2">
                CURRICULUM VITAE
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#29241F] font-normal mb-3">
                Comprehensive Technical Résumé
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#77716A] leading-relaxed">
                Clean, ATS-aligned document detailing academic standings (8.5 B.Sc., 9.9 SSC), AWS Cloud & Full-Stack internship engagements, and practical embedded prototypes.
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap gap-4">
              <button
                onClick={handlePrint}
                className="px-6 py-3.5 border border-[#DDD6CB] bg-[#F8F5EF] text-[#29241F] font-sans text-xs tracking-[0.16em] uppercase hover:border-[#773B45] hover:text-[#773B45] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>PRINT / SAVE AS PDF</span>
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Requesting%20Software%20Engineering%20Resume`}
                className="px-6 py-3.5 bg-[#773B45] text-[#FFFFFF] font-sans text-xs tracking-[0.16em] uppercase hover:bg-[#29241F] transition-colors flex items-center justify-center gap-2"
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
