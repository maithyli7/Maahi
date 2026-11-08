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
    <section id="contact" className="py-24 sm:py-36 bg-[#EFEAE1]/40 border-t border-[#DDD6CB]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16 sm:mb-24">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#773B45] font-medium block mb-3">
            07 / CONTACT
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#29241F] font-normal tracking-tight leading-[1.1] max-w-2xl mb-6">
            Let's create something meaningful.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#77716A] leading-relaxed max-w-xl">
            Whether it's an interesting opportunity, a collaborative project, or simply a conversation about technology, I'd love to connect.
          </p>
        </div>

        {/* Content & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="bg-[#FFFFFF] p-8 border border-[#DDD6CB]">
              <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#773B45] font-semibold block mb-6 pb-3 border-b border-[#DDD6CB]">
                DIRECT CHANNELS
              </span>

              <div className="space-y-6 font-sans">
                <div>
                  <span className="text-[11px] tracking-[0.16em] uppercase text-[#77716A] block mb-1">
                    Email
                  </span>
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-base text-[#29241F] hover:text-[#773B45] transition-colors font-medium break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <div className="pt-4 border-t border-[#DDD6CB]/60">
                  <span className="text-[11px] tracking-[0.16em] uppercase text-[#77716A] block mb-1">
                    Location
                  </span>
                  <span className="text-base text-[#29241F] font-medium block">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-8 mt-8 border-t border-[#DDD6CB] flex flex-wrap gap-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-sans tracking-[0.14em] uppercase bg-[#F8F5EF] text-[#29241F] border border-[#DDD6CB] hover:border-[#773B45] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>EMAIL ME</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-sans tracking-[0.14em] uppercase bg-[#F8F5EF] text-[#29241F] border border-[#DDD6CB] hover:border-[#773B45] transition-colors"
                >
                  <BrandIcons.Linkedin className="w-3.5 h-3.5" />
                  <span>LINKEDIN</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-sans tracking-[0.14em] uppercase bg-[#F8F5EF] text-[#29241F] border border-[#DDD6CB] hover:border-[#773B45] transition-colors"
                >
                  <BrandIcons.Github className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                </a>
              </div>
            </div>
          </div>

          {/* Minimalist Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-[#FFFFFF] p-8 sm:p-12 border border-[#DDD6CB] space-y-6">
              
              <div>
                <label className="block font-sans text-[11px] tracking-[0.16em] uppercase text-[#29241F] font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 bg-[#F8F5EF] border border-[#DDD6CB] text-sm font-sans text-[#29241F] placeholder-[#77716A]/50 focus:outline-none focus:border-[#773B45] transition-colors"
                />
              </div>

              <div>
                <label className="block font-sans text-[11px] tracking-[0.16em] uppercase text-[#29241F] font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@organization.com"
                  className="w-full px-4 py-3 bg-[#F8F5EF] border border-[#DDD6CB] text-sm font-sans text-[#29241F] placeholder-[#77716A]/50 focus:outline-none focus:border-[#773B45] transition-colors"
                />
              </div>

              <div>
                <label className="block font-sans text-[11px] tracking-[0.16em] uppercase text-[#29241F] font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details regarding your opportunity or inquiry..."
                  className="w-full px-4 py-3 bg-[#F8F5EF] border border-[#DDD6CB] text-sm font-sans text-[#29241F] placeholder-[#77716A]/50 focus:outline-none focus:border-[#773B45] transition-colors resize-y"
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div className="p-4 bg-[#F8F5EF] border border-[#773B45]/40 text-xs font-sans text-[#773B45] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-[#F8F5EF] border border-rose-400 text-xs font-sans text-rose-800 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#773B45] text-[#FFFFFF] font-sans text-xs tracking-[0.18em] uppercase hover:bg-[#29241F] transition-colors duration-300 disabled:opacity-50 cursor-pointer"
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
