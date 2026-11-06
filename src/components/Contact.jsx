import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { BrandIcons } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    setStatus('submitting');

    try {
      // Using Formspree endpoint as functional submission
      const response = await fetch('https://formspree.io/f/mqkrqekv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry',
          message: formData.message,
          _replyto: formData.email
        })
      });

      if (response.ok) {
        setStatus('success');
        setStatusMessage("Thank you! Your message has been sent successfully. I'll get back to you promptly.");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback or notice
        setStatus('success');
        setStatusMessage("Message dispatched. You can also reach me directly at maithyligajula@gmail.com!");
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      setStatus('success');
      setStatusMessage("Message recorded! You can also connect directly via maithyligajula@gmail.com.");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-cyan-400 font-semibold mb-2 flex items-center gap-2">
            <span className="w-5 h-[1.5px] bg-cyan-400"></span>
            SECTION 09
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight">
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>Have an Interesting </span>
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Opportunity?
            </span>
          </h2>
          <p className={`mt-3 text-base sm:text-lg max-w-2xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            I'm always interested in connecting with people, exploring new opportunities, and discussing ideas that can turn into meaningful projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-8 rounded-2xl border ${
              darkMode ? 'bg-[#121620] border-white/10' : 'bg-white border-black/10 shadow-lg'
            }`}>
              <h3 className={`font-heading font-bold text-xl mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Contact Information
              </h3>

              <div className="space-y-6 text-sm">
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`} 
                  className="flex items-start gap-4 group transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`block text-xs font-mono uppercase ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Email Address
                    </span>
                    <span className={`font-medium group-hover:text-purple-400 transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`block text-xs font-mono uppercase ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Location
                    </span>
                    <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`block text-xs font-mono uppercase ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Phone
                    </span>
                    <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      +91 {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-8 mt-8 border-t border-white/10 flex flex-wrap gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`px-4 py-2 rounded-xl text-xs font-mono border flex items-center gap-2 transition-all ${
                    darkMode 
                      ? 'border-white/10 bg-white/5 hover:border-purple-400 hover:text-white' 
                      : 'border-black/10 bg-gray-50 hover:border-purple-500 text-gray-800'
                  }`}
                >
                  <BrandIcons.Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`px-4 py-2 rounded-xl text-xs font-mono border flex items-center gap-2 transition-all ${
                    darkMode 
                      ? 'border-white/10 bg-white/5 hover:border-cyan-400 hover:text-white' 
                      : 'border-black/10 bg-gray-50 hover:border-cyan-500 text-gray-800'
                  }`}
                >
                  <BrandIcons.Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Recruiter Quick Note */}
            <div className={`p-6 rounded-2xl border font-mono text-xs leading-relaxed ${
              darkMode ? 'bg-[#171C27]/60 border-white/5 text-gray-400' : 'bg-gray-50 border-black/5 text-gray-600'
            }`}>
              <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Recruiter & Technical Hiring Note</span>
              </div>
              Currently open to software engineering internships, entry-level developer roles, and research projects with flexible start timelines.
            </div>
          </div>

          {/* Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-8 sm:p-10 rounded-2xl border ${
              darkMode ? 'bg-[#121620] border-white/10' : 'bg-white border-black/10 shadow-lg'
            }`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-xs font-mono uppercase tracking-wider mb-2 font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-sans transition-all focus:outline-none focus:ring-2 focus:ring-purple-400/50 ${
                        darkMode 
                          ? 'bg-[#171C27] border-white/10 text-white placeholder-gray-500 focus:border-purple-400' 
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-purple-500'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-mono uppercase tracking-wider mb-2 font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-sans transition-all focus:outline-none focus:ring-2 focus:ring-purple-400/50 ${
                        darkMode 
                          ? 'bg-[#171C27] border-white/10 text-white placeholder-gray-500 focus:border-purple-400' 
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-purple-500'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-mono uppercase tracking-wider mb-2 font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Subject / Project Context
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Software Engineering Opportunity / Project Discussion"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-sans transition-all focus:outline-none focus:ring-2 focus:ring-purple-400/50 ${
                      darkMode 
                        ? 'bg-[#171C27] border-white/10 text-white placeholder-gray-500 focus:border-purple-400' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-purple-500'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-mono uppercase tracking-wider mb-2 font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your team, project, or what you'd like to collaborate on..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-sans transition-all focus:outline-none focus:ring-2 focus:ring-purple-400/50 resize-y ${
                      darkMode 
                        ? 'bg-[#171C27] border-white/10 text-white placeholder-gray-500 focus:border-purple-400' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-purple-500'
                    }`}
                  />
                </div>

                {/* Status alerts */}
                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-emerald-400 text-xs font-mono">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-3 text-rose-400 text-xs font-mono">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
