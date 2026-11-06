import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ExternalLink, ShieldCheck, Terminal, Database, Code2 } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

const getCertIcon = (cat) => {
  if (cat.includes('Security')) return ShieldCheck;
  if (cat.includes('Data')) return Database;
  if (cat.includes('Systems')) return Code2;
  return Terminal;
};

export const Certifications = ({ darkMode }) => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-cyan-400 font-semibold mb-2 flex items-center gap-2">
            <span className="w-5 h-[1.5px] bg-cyan-400"></span>
            SECTION 07
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight">
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>Learning </span>
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Never Stops
            </span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base max-w-2xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Technical credentials validating core proficiencies in object-oriented paradigms, backend languages, data structures, and security awareness.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => {
            const Icon = getCertIcon(cert.category);
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className={`p-6 rounded-2xl border transition-all duration-300 group ${
                  darkMode 
                    ? 'bg-[#121620] border-white/10 hover:border-purple-500/40 hover:bg-[#161c28]' 
                    : 'bg-white border-black/10 hover:border-purple-400 hover:shadow-lg'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5">
                    {cert.code}
                  </span>
                </div>

                <h3 className={`font-heading font-bold text-lg mb-1.5 group-hover:text-purple-400 transition-colors ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {cert.name}
                </h3>

                <p className="text-xs font-mono text-cyan-400 mb-4">
                  {cert.category}
                </p>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified Knowledge</span>
                  </span>
                  
                  {/* Certificate Link Placeholder */}
                  <span className={`text-[11px] font-mono ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    Credential File
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

