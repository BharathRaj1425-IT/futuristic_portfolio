import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Sparkles, Download, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../../data/data';
import HoloSphere from './HoloSphere';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const roles = personalInfo.roles || [];
    if (!roles.length) return;

    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* High-Tech Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/20 text-emerald-400 text-xs font-mono mb-6 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.availabilityStatus}</span>
            </div>

            {/* Terminal Monogram Intro */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
              <Terminal className="w-3.5 h-3.5 text-neon-cyan" />
              <span>INITIALIZING SYSTEM PROFILE //</span>
              <span className="text-neon-cyan">{personalInfo.location}</span>
            </div>

            {/* Main Cyber Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-4 font-display">
              Hey, I'm <br />
              <span className="cyber-gradient-text drop-shadow-[0_0_25px_rgba(0,245,212,0.35)]">
                {personalInfo.nick_name}
              </span>
            </h1>

            {/* Dynamic Typewriter Subtitle */}
            <div className="h-10 sm:h-12 flex items-center text-lg sm:text-2xl font-mono text-slate-300 mb-6 font-medium">
              <span className="text-neon-cyan mr-2">&gt;</span>
              <span>{displayText}</span>
              <span className="w-2.5 h-6 bg-neon-cyan ml-1 inline-block animate-pulse" />
            </div>

            {/* Short Narrative Bio */}
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
              {personalInfo.shortBio}
            </p>

            {/* Action Buttons (High-Impact CTAs) */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link
                to="/contact"
                className="relative group overflow-hidden px-7 py-3.5 rounded-xl font-mono text-sm font-semibold text-cyber-black bg-neon-cyan transition-all duration-300 shadow-neon-cyan hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-2.5 w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                <span>TRANSMIT MESSAGE</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

            {/*  <Link
                to="/experience"
                className="relative px-7 py-3.5 rounded-xl font-mono text-sm font-semibold text-slate-200 border border-slate-700 bg-cyber-dark/80 hover:bg-slate-800/80 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2.5 w-full sm:w-auto"
              >
                <Sparkles className="w-4 h-4 text-neon-cyan" />
                <span>EXPLORE WORK</span>
              </Link> */}

              {/* <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3.5 rounded-xl font-mono text-xs text-slate-400 hover:text-white border border-transparent hover:border-slate-700 transition-all flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>CV / RESUME</span>
              </a> */}
            </div>

            {/* High-Tech Security & Guarantee Badges */}
            <div className="mt-10 pt-6 border-t border-slate-800/60 w-full flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-neon-cyan" />
                <span>Clean Scalable Code</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                <span>Full-Stack & AI Systems</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-purple" />
                <span>Cinematic UI/UX</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: 3D Holographic AI Canvas Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <HoloSphere />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
