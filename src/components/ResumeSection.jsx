import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle, ExternalLink, Printer } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ResumeSection = ({ darkMode }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume-section" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`p-8 sm:p-12 rounded-3xl border relative overflow-hidden ${
          darkMode 
            ? 'bg-gradient-to-br from-[#121620] via-[#171C27] to-[#121620] border-purple-500/20' 
            : 'bg-gradient-to-br from-purple-50 via-white to-cyan-50 border-purple-200 shadow-xl'
        }`}>
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full pointer-events-none blur-3xl" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex items-start gap-5 max-w-2xl">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0">
                <FileText className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest font-mono text-cyan-400 font-semibold mb-1 block">
                  Curriculum Vitae / ATS-Aligned
                </span>
                <h3 className={`font-heading font-extrabold text-2xl sm:text-3xl mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Recruiter & Hiring Manager Fast-Track
                </h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Review the structured, ATS-optimized one-page curriculum vitae documenting core coursework, academic grades (8.5 B.Sc., 9.9 SSC), internships, and embedded/web prototypes.
                </p>
                <div className="flex flex-wrap gap-4 mt-4 text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle className="w-4 h-4" /> ATS Compliant
                  </span>
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <CheckCircle className="w-4 h-4" /> Verified Credentials
                  </span>
                  <span className="flex items-center gap-1.5 text-purple-400">
                    <CheckCircle className="w-4 h-4" /> Entry-Level SE Ready
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap gap-4 w-full lg:w-auto">
              <button
                onClick={handlePrint}
                className={`w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-xs border flex items-center justify-center gap-2 transition-all ${
                  darkMode 
                    ? 'border-white/10 bg-white/5 hover:bg-white/10 text-white' 
                    : 'border-black/10 bg-white hover:bg-gray-100 text-gray-900 shadow-sm'
                }`}
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save as PDF</span>
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Requesting%20Resume%20for%20Software%20Engineering%20Role`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-xs bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Request Updated CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

