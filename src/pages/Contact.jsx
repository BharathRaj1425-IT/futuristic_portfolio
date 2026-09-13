import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail, MapPin, Clock, Phone, Globe, ChevronDown,
  Terminal, Github, Linkedin, Twitter, MessageSquare,
  Instagram
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import CardGlow from '../components/common/CardGlow';
import { personalInfo, socialLinks, faqItems } from '../data/data';

const socialIconMap = {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  MessageSquare,
};

export default function Contact() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      {/* 1. TRANSMISSION SECTION */}
      <section>
        <SectionHeading
          badge="01 TELEMETRY LINK"
          title="Initialize Transmission"
          subtitle="Direct encrypted channel for enterprise proposals, leadership opportunities, and high-impact advisory."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left Column: Direct Coordinates & Status */}
          <div className="lg:col-span-12 space-y-6">
            <CardGlow accentColor="cyan" className="p-6 sm:p-8 space-y-6">
              <div className='mb-2'>
                <div className="flex items-center gap-2 text-xs font-mono text-neon-cyan mb-2">
                  <Terminal className="w-4 h-4" />
                  <span>DIRECT ACCESS MATRIX</span>
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  Communication Relays
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Average response latency under 12 hours.
                </p>
              </div>

              {/* Status indicator */}
              <div className="p-3.5 rounded-xl bg-cyber-darker border border-emerald-500/30 flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <div className="text-xs font-mono">
                  <span className="text-white font-semibold">STATUS: </span>
                  <span className="text-emerald-400">{personalInfo.availabilityStatus}</span>
                </div>
              </div>

              {/* Coordinates List */}
              <div className="space-y-4 pt-2 border-t border-slate-800">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyber-darker border border-slate-800 flex items-center justify-center text-neon-cyan shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">ELECTRONIC MAIL</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-white hover:text-neon-cyan transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyber-darker border border-slate-800 flex items-center justify-center text-neon-blue shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">VOICE / CELL RELAY</div>
                    <div className="text-sm font-semibold text-white">
                      {personalInfo.phone}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyber-darker border border-slate-800 flex items-center justify-center text-neon-purple shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">PHYSICAL HEADQUARTERS</div>
                    <div className="text-sm font-semibold text-white">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyber-darker border border-slate-800 flex items-center justify-center text-amber-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">TEMPORAL OFFSET</div>
                    <div className="text-sm font-semibold text-white">
                      {personalInfo.timezone}
                    </div>
                  </div>
                </div>
              </div>
              <br />

              {/* Social Channels Matrix */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Public Encrypted Channels
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {socialLinks.map((social) => {
                    const Icon = socialIconMap[social.icon] || Globe;

                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-lg bg-cyber-darker border border-slate-800 hover:border-neon-cyan/40 text-slate-300 hover:text-neon-cyan transition-all flex items-center gap-2 text-xs font-mono"
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </CardGlow>
          </div>
        </div>
      </section>

      {/* 2. FREQUENTLY ASKED QUESTIONS */}
      <section>
        <SectionHeading
          badge="02 BRIEFING & FAQ"
          title="Frequently Inquired Parameters"
          subtitle="Clear telemetry on working preferences, collaboration models, and architecture methodology."
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {faqItems.map((faq, index) => {
            const isOpen = openFaqIndex === index;

            return (
              <CardGlow key={index} accentColor="cyan" className="overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-sans font-semibold text-white hover:text-neon-cyan transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neon-cyan transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-5 pb-5 pt-1 text-sm text-slate-400 leading-relaxed border-t border-slate-800/60"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </CardGlow>
            );
          })}
        </div>
      </section>
    </div>
  );
}
