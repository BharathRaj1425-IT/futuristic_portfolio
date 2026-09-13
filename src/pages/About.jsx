import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap, Sparkles, Cpu, ShieldCheck, Download, GraduationCap,
  Award, MapPin, Mail, Globe, Terminal, CheckCircle2
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import CardGlow from '../components/common/CardGlow';
import { personalInfo, coreValues, education, certifications, stats } from '../data/data';

const valueIconMap = {
  Zap,
  Sparkles,
  Cpu,
  ShieldCheck,
};

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      {/* 1. TOP HEADER & IDENTITY OVERVIEW */}
      <section>
        <SectionHeading
          badge="01 BIOGRAPHY & ORIGIN"
          title="Architecting Resilient Intelligence"
          subtitle="A deeper look into my engineering philosophy, technical background, and drive for creative perfection."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Holographic Identity Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <CardGlow accentColor="cyan" className="p-6 sm:p-8 text-center sm:text-left">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto sm:mx-0 mb-6 rounded-2xl overflow-hidden border-2 border-neon-cyan/50 shadow-neon-cyan">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover filter brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-2 left-2 right-2 text-[10px] font-mono text-neon-cyan bg-cyber-dark/80 px-2 py-0.5 rounded border border-neon-cyan/30 text-center">
                  BIOMETRIC VERIFIED
                </div>
              </div>

              <h3 className="text-2xl font-bold font-display text-white mb-1">
                {personalInfo.name}
              </h3>
              <p className="text-xs font-mono text-neon-cyan mb-4">
                {personalInfo.title}
              </p>

              <div className="space-y-2 text-xs font-mono text-slate-300 mb-6 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-neon-cyan" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-neon-blue" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-neon-purple" />
                  <span>{personalInfo.timezone}</span>
                </div>
              </div>

              {/* <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl font-mono text-xs font-semibold text-cyber-black bg-neon-cyan hover:bg-white transition-all shadow-neon-cyan flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD COMPLETE CURRICULUM VITAE</span>
              </a> */}
            </CardGlow>
          </motion.div>

          {/* Biography Text & Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-cyber-dark/80 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-neon-cyan">
                <Terminal className="w-4 h-4" />
                <span>SYSTEM LOG ENTRY // EXECUTIVE BIO</span>
              </div>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-light">
                {personalInfo.fullBio}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Over the past 6+ years, I have navigated the evolution from single-page web apps to distributed,
                AI-orchestrated computing networks. I believe that true software excellence sits at the intersection of
                system efficiency and visceral design delight.
              </p>
            </div>

            {/* Quick Metrics Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-cyber-darker/90 border border-slate-800/80">
                <div className="text-2xl font-bold font-mono text-neon-cyan">2+ YRS</div>
                <div className="text-xs text-slate-400">Professional Experience</div>
              </div>
              <div className="p-4 rounded-xl bg-cyber-darker/90 border border-slate-800/80">
                <div className="text-2xl font-bold font-mono text-neon-blue">4+</div>
                <div className="text-xs text-slate-400">Programming Languages</div>
              </div>
              <div className="p-4 rounded-xl bg-cyber-darker/90 border border-slate-800/80 col-span-2 sm:col-span-1">
                <div className="text-2xl font-bold font-mono text-neon-purple">10+</div>
                <div className="text-xs text-slate-400">AI Tools</div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. CORE VALUES & PHILOSOPHY */}
      <section>
        <SectionHeading
          badge="02 CORE VALUES"
          title="Engineering Tenets & Philosophy"
          subtitle="The foundational principles guiding every line of code and architectural decision."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreValues.map((value, index) => {
            const Icon = valueIconMap[value.icon] || Zap;

            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CardGlow accentColor="cyan" className="p-6 sm:p-8 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyber-darker border border-neon-cyan/40 flex items-center justify-center text-neon-cyan shrink-0 shadow-neon-cyan">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold font-display text-white mb-2">
                        {value.title}
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardGlow>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. ACADEMIC FOUNDATION & HONORS */}
      <section>
        <SectionHeading
          badge="03 SCHOLASTIC RECORD"
          title="Education & Credentials"
          subtitle="Formal academic study in computing and top-tier industry certifications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education Card */}
          <div className="lg:col-span-6">
            {education.map((edu) => (
              <CardGlow key={edu.id} accentColor="blue" className="p-6 sm:p-8 h-full">
                <div className="flex items-center gap-3 text-neon-blue text-xs font-mono mb-4">
                  <GraduationCap className="w-5 h-5" />
                  <span>ACADEMIC DEGREE</span>
                </div>
                <h4 className="text-xl font-bold font-display text-white mb-1">
                  {edu.degree}
                </h4>
                <div className="text-sm font-semibold text-neon-cyan font-mono mb-2">
                  {edu.institution}
                </div>
                <div className="text-xs font-mono text-slate-400 mb-4">
                  {edu.year} • <span className="text-emerald-400">{edu.honors}</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {edu.details}
                </p>
              </CardGlow>
            ))}
          </div>

          {/* Certifications Card */}
          <div className="lg:col-span-6 space-y-4">
            {certifications.map((cert) => (
              <CardGlow key={cert.id} accentColor="purple" className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyber-darker border border-neon-purple/40 flex items-center justify-center text-neon-purple shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-sm sm:text-base font-bold text-white font-sans">
                        {cert.title}
                      </h5>
                      <div className="text-xs font-mono text-slate-400">
                        {cert.issuer} • {cert.year}
                      </div>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block px-2.5 py-1 rounded text-[11px] font-mono text-neon-cyan bg-cyber-black border border-slate-800">
                    {cert.badge}
                  </span>
                </div>
              </CardGlow>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
