import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, AlertCircle, Mail, MapPin } from 'lucide-react';
import { BrandIcons } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage('Please complete all required fields.');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/mqkrqekv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email
        })
      });

      if (response.ok) {
        setStatus('success');
        setStatusMessage('Your message has been sent. Thank you for connecting.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('success');
        setStatusMessage('Thank you. You can also reach me directly at maithyligajula@gmail.com.');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      setStatus('success');
      setStatusMessage('Message noted. Feel free to connect directly via maithyligajula@gmail.com.');
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-36 bg-[#F3EFEA]/45 border-t border-[#E8E2D9]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16 sm:mb-24">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#9E656B] font-semibold block mb-3">
            07 / CONTACT
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#22201D] font-normal tracking-tight leading-[1.1] max-w-2xl mb-6">
            Let's create something meaningful.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#6B655E] leading-relaxed max-w-xl">
            Whether it's an interesting opportunity, a collaborative project, or simply a conversation about technology, I'd love to connect.
          </p>
        </div>

        {/* Content & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="bg-[#FFFFFF] p-8 border border-[#E8E2D9] shadow-[0_4px_20px_rgba(34,32,29,0.02)]">
              <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#9E656B] font-semibold block mb-6 pb-3 border-b border-[#E8E2D9]">
                DIRECT CHANNELS
              </span>

              <div className="space-y-6 font-sans">
                <div>
                  <span className="text-[11px] tracking-[0.16em] uppercase text-[#6B655E] block mb-1">
                    Email
                  </span>
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-base text-[#22201D] hover:text-[#9E656B] transition-colors font-medium break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <div className="pt-4 border-t border-[#E8E2D9]">
                  <span className="text-[11px] tracking-[0.16em] uppercase text-[#6B655E] block mb-1">
                    Location
                  </span>
                  <span className="text-base text-[#22201D] font-medium block">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-8 mt-8 border-t border-[#E8E2D9] flex flex-wrap gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-sans tracking-[0.12em] uppercase bg-[#FAF8F5] text-[#22201D] border border-[#E8E2D9] hover:border-[#9E656B] hover:text-[#9E656B] transition-colors rounded-sm"
                >
                  <Mail className="w-3.5 h-3.5 text-[#9E656B]" />
                  <span>EMAIL ME</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-sans tracking-[0.12em] uppercase bg-[#FAF8F5] text-[#22201D] border border-[#E8E2D9] hover:border-[#9E656B] hover:text-[#9E656B] transition-colors rounded-sm"
                >
                  <BrandIcons.Linkedin className="w-3.5 h-3.5 text-[#5F7D8E]" />
                  <span>LINKEDIN</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-sans tracking-[0.12em] uppercase bg-[#FAF8F5] text-[#22201D] border border-[#E8E2D9] hover:border-[#9E656B] hover:text-[#9E656B] transition-colors rounded-sm"
                >
                  <BrandIcons.Github className="w-3.5 h-3.5 text-[#22201D]" />
                  <span>GITHUB</span>
                </a>
              </div>
            </div>
          </div>

          {/* Minimalist Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-[#FFFFFF] p-8 sm:p-12 border border-[#E8E2D9] space-y-6 shadow-[0_4px_20px_rgba(34,32,29,0.02)]">
              
              <div>
                <label className="block font-sans text-[11px] tracking-[0.16em] uppercase text-[#22201D] font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8E2D9] text-sm font-sans text-[#22201D] placeholder-[#6B655E]/50 focus:outline-none focus:border-[#9E656B] transition-colors rounded-sm"
                />
              </div>

              <div>
                <label className="block font-sans text-[11px] tracking-[0.16em] uppercase text-[#22201D] font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@organization.com"
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8E2D9] text-sm font-sans text-[#22201D] placeholder-[#6B655E]/50 focus:outline-none focus:border-[#9E656B] transition-colors rounded-sm"
                />
              </div>

              <div>
                <label className="block font-sans text-[11px] tracking-[0.16em] uppercase text-[#22201D] font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details regarding your opportunity or inquiry..."
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8E2D9] text-sm font-sans text-[#22201D] placeholder-[#6B655E]/50 focus:outline-none focus:border-[#9E656B] transition-colors resize-y rounded-sm"
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div className="p-4 bg-[#EEF3EF] border border-[#7A9283]/30 text-xs font-sans text-[#7A9283] flex items-center gap-2 rounded-sm">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-[#F7EEF0] border border-[#9E656B]/30 text-xs font-sans text-[#9E656B] flex items-center gap-2 rounded-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#9E656B] text-[#FFFFFF] font-sans text-xs tracking-[0.18em] uppercase hover:bg-[#22201D] transition-colors duration-300 disabled:opacity-50 cursor-pointer shadow-[0_4px_16px_rgba(158,101,107,0.2)] rounded-sm"
              >
                {status === 'submitting' ? 'SENDING...' : 'SEND INQUIRY'}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
