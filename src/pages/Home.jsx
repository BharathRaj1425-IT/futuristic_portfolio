import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Hero from '../components/hero/Hero';
import CardGlow from '../components/common/CardGlow';
import AnimatedCounter from '../components/common/AnimatedCounter';
import { stats, projects } from '../data/data';

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="space-y-24 md:space-y-32 pb-16">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. STATS TELEMETRY BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-3"
        >          {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CardGlow accentColor="cyan" className="p-5 sm:p-6 text-center h-full flex flex-col justify-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neon-cyan font-mono mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-1 font-sans">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                {stat.description}
              </div>
            </CardGlow>
          </motion.div>
        ))}
        </div>
      </section>

      {/* 3. STRONG CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden p-8 sm:p-14 bg-gradient-to-r from-cyan-950/40 via-cyber-dark to-purple-950/40 border border-neon-cyan/30 text-center cyber-corners">
          <div className="absolute inset-0 bg-cyber-grid bg-[size:30px_30px] opacity-15 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-cyan/30 bg-cyber-black/80 text-neon-cyan text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TRANSMISSION READY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
              Ready to Construct the <span className="cyber-gradient-text">Next Frontier?</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you need to architect an intelligent full-stack web application,
              supercharge your team's frontend velocity, or consult on cutting-edge AI systems.
            </p>

            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl font-mono text-sm font-semibold text-cyber-black bg-neon-cyan hover:bg-white transition-all shadow-neon-cyan flex items-center gap-2"
              >
                <span>INITIATE CONTACT</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 rounded-xl font-mono text-sm font-semibold text-white bg-cyber-dark border border-slate-700 hover:border-neon-cyan transition-all"
              >
                <span>READ BACKGROUND</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
