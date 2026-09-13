import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import CardGlow from '../common/CardGlow';

export default function ExperienceTimeline({ experiences }) {
  return (
    <div className="relative">
      {/* Central Cyber Vertical Connector Line */}
      <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-neon-cyan via-neon-blue to-neon-purple opacity-30" />

      <div className="space-y-12 sm:space-y-16">
        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col sm:flex-row items-start ${
                isEven ? 'sm:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Center Glowing Node */}
              <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-cyber-black border-2 border-neon-cyan shadow-neon-cyan">
                  <span className="w-2 h-2 rounded-full bg-neon-cyan" />
                  <span className="absolute inset-0 rounded-full border border-neon-cyan/50 animate-ping" />
                </div>
              </div>

              {/* Timeline Card Container */}
              <div className="w-full sm:w-[calc(50%-40px)] pl-12 sm:pl-0">
                <CardGlow accentColor={isEven ? 'cyan' : 'purple'} className="p-6 sm:p-7">
                  {/* Top Metadata Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium tracking-wide bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/30">
                      {exp.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-neon-cyan" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Role Title & Company */}
                  <h3 className="text-xl font-bold text-white font-display">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-neon-blue font-mono mb-4">
                    <span className="font-semibold">{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-400 text-xs">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  {/* General Summary */}
                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Achievements Bullet Highlights */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="space-y-2 mb-5">
                      {exp.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                          <CheckCircle2 className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                    {exp.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-slate-900/80 border border-slate-800 hover:border-neon-cyan/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardGlow>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
