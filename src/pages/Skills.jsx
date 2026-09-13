import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Terminal, Zap, Shield, Sparkles, Layers } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import SkillCard from '../components/skills/SkillCard';
import CardGlow from '../components/common/CardGlow';
import { skillCategories } from '../data/data';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const allSkills = skillCategories.flatMap((cat) => cat.skills);

  const displayedSkills =
    activeTab === 'all'
      ? allSkills
      : skillCategories.find((cat) => cat.id === activeTab)?.skills || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <section>
        <SectionHeading
          badge="01 ARSENAL & PROFICIENCY"
          title="Technical Capabilities Matrix"
          subtitle="A comprehensive inventory of frameworks, distributed architectures, neural networks, and cloud pipelines."
        />

        {/* Category Filter Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-mono font-semibold transition-all backdrop-blur-md ${activeTab === 'all'
                ? 'bg-neon-cyan text-cyber-black shadow-neon-cyan'
                : 'bg-cyber-dark/80 text-slate-300 border border-slate-800 hover:border-neon-cyan/40'
              }`}
          >
            [ ALL CAPABILITIES ] ({allSkills.length})
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-semibold transition-all backdrop-blur-md ${activeTab === cat.id
                  ? 'bg-neon-cyan text-cyber-black shadow-neon-cyan'
                  : 'bg-cyber-dark/80 text-slate-300 border border-slate-800 hover:border-neon-cyan/40'
                }`}
            >
              {cat.title} ({cat.skills.length})
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Philosophy & Architecture Breakdown */}
      <section className="pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardGlow accentColor="cyan" className="p-6">
            <div className="flex items-center gap-2 text-neon-cyan font-mono text-xs mb-3">
              <Layers className="w-4 h-4" />
              <span>REACT & MOTION ARCHITECTURE</span>
            </div>
            <h4 className="text-base font-bold font-display text-white mb-2">
              Composable UI Systems
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Constructing strictly modular, accessible, and high-performance component graphs with reusable layouts,
              custom hooks, and Framer Motion spring physics.
            </p>
          </CardGlow>

          <CardGlow accentColor="blue" className="p-6">
            <div className="flex items-center gap-2 text-neon-blue font-mono text-xs mb-3">
              <Sparkles className="w-4 h-4" />
              <span>INTELLIGENT BACKENDS</span>
            </div>
            <h4 className="text-base font-bold font-display text-white mb-2">
              Autonomous Agent Orchestration
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Bridging modern vector search indices with fine-tuned LLM execution graphs,
              delivering context-aware multi-step reasoning capabilities.
            </p>
          </CardGlow>

          <CardGlow accentColor="purple" className="p-6">
            <div className="flex items-center gap-2 text-neon-purple font-mono text-xs mb-3">
              <Shield className="w-4 h-4" />
              <span>OBSERVABILITY & SCALE</span>
            </div>
            <h4 className="text-base font-bold font-display text-white mb-2">
              Continuous Infrastructure
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dockerized multi-stage container workflows, GitHub Actions CI/CD pipelines,
              and edge-cached CDN distributions engineered for zero downtime.
            </p>
          </CardGlow>
        </div>
      </section>
    </div>
  );
}
