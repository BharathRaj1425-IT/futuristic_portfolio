import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, FileCode, FileCode2, Palette, Activity, Layers, Smartphone, Cpu, 
  Server, Terminal, Database, HardDrive, Share2, Radio, Boxes, 
  Bot, Binary, Brain, Sparkles, FolderGit2, Workflow, Container, 
  Cloud, GitPullRequest, Shield, CheckCircle 
} from 'lucide-react';
import CardGlow from '../common/CardGlow';

// Icon map helper
const iconMap = {
  Code2, FileCode, FileCode2, Palette, Activity, Layers, Smartphone, Cpu,
  Server, Terminal, Database, HardDrive, Share2, Radio, Boxes,
  Bot, Binary, Brain, Sparkles, FolderGit2, Workflow, Container,
  Cloud, GitPullRequest, Shield,
};

export default function SkillCard({ skill, index = 0 }) {
  const IconComponent = iconMap[skill.icon] || Code2;

  // Level classification
  const getLevelLabel = (lvl) => {
    if (lvl >= 95) return 'Master';
    if (lvl >= 90) return 'Advanced';
    if (lvl >= 80) return 'Proficient';
    return 'Competent';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
    >
      <CardGlow accentColor={index % 2 === 0 ? "cyan" : "amethyst"} className="p-4 sm:p-5 h-full flex flex-col justify-between">
        <div>
          {/* Top Row: Icon + Skill Name + Level Label */}
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg bg-cyber-darker border ${index % 2 === 0 ? 'border-neon-cyan/40 text-neon-cyan shadow-[0_0_12px_rgba(0,240,255,0.25)]' : 'border-royal-amethyst/40 text-royal-amethystLight shadow-[0_0_12px_rgba(157,78,221,0.25)]'} flex items-center justify-center`}>
                <IconComponent className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-white font-sans">
                  {skill.name}
                </h4>
                <span className="text-[11px] font-mono text-slate-400">
                  {getLevelLabel(skill.level)}
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className={`text-sm font-mono font-bold ${index % 2 === 0 ? 'text-neon-cyan' : 'text-royal-amethystLight'}`}>
                {skill.level}%
              </span>
            </div>
          </div>
        </div>

        {/* Futuristic Meter Bar */}
        <div className="mt-2">
          <div className="w-full h-1.5 rounded-full bg-slate-800/80 overflow-hidden relative">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="h-full bg-gradient-to-r from-neon-cyan via-royal-amethyst to-royal-amethystLight rounded-full shadow-[0_0_10px_rgba(0,240,255,0.4)] relative"
            >
              <div className="absolute top-0 right-0 bottom-0 w-2 bg-white/70 rounded-full animate-pulse" />
            </motion.div>
          </div>
        </div>
      </CardGlow>
    </motion.div>
  );
}
