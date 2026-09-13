import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Github, Linkedin, Twitter, MessageSquare, Clock, Globe, ShieldCheck, Mail, Instagram } from 'lucide-react';
import { personalInfo, socialLinks, navigationLinks, footerData } from '../../data/data';

const socialIconMap = {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Instagram,
  MessageSquare,
};

export default function Footer() {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const timeStr = new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now).replace(",", "");

      setTimeStr(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-24 border-t border-slate-800/80 bg-cyber-darker/90 backdrop-blur-xl">
      {/* Top ambient line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">

          {/* Col 1: Brand & Status */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="flex items-center gap-3 mb-4 group">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-cyber-dark border border-neon-cyan/40 text-neon-cyan font-display font-bold">
                  BRT
                </div>
                <span className="font-display font-bold text-white text-lg tracking-wider">
                  {personalInfo.name}
                </span>
              </Link>

              <p className="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
                {footerData.quote}
              </p>
            </div>

            {/* Live UTC Telemetry Clock */}
            <div className="p-3.5 rounded-xl bg-cyber-black/70 border border-slate-800/90 flex flex-col gap-1 text-xs font-mono text-slate-400">
              <div className="flex items-center justify-between text-neon-cyan text-[11px]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  {footerData.systemStatus}
                </span>
                <Clock className="w-3.5 h-3.5 text-neon-cyan" />
              </div>
              <div className="text-slate-300 font-medium">
                {timeStr || 'TELEMETRY TIME SYNCHRONIZING...'}
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono text-neon-cyan uppercase tracking-widest mb-4">
              SITE DIRECTORY
            </h4>
            <ul className="space-y-2.5">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all font-mono"
                  >
                    &gt; {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social Connectivity & Back-to-Top */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono text-neon-cyan uppercase tracking-widest mb-4">
                ENCRYPTED CHANNELS
              </h4>
              <div className="flex flex-wrap gap-2.5 mb-6">
                {socialLinks.map((social) => {
                  const Icon = socialIconMap[social.icon] || Globe;

                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      className="p-2.5 rounded-xl bg-cyber-dark border border-slate-800 text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/50 hover:shadow-neon-cyan transition-all"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Warp Back To Top */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-neon-cyan py-2.5 px-4 rounded-xl border border-slate-800 hover:border-neon-cyan/40 bg-cyber-dark/80 transition-all self-start"
            >
              <span>RETURN TO ORBIT</span>
              <ArrowUp className="w-3.5 h-3.5 text-neon-cyan" />
            </button>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>{footerData.copyright}</div>
          <div className="flex items-center gap-1 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>SECURE REACT 18 + VITE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
