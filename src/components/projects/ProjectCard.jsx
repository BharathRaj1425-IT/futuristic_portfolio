import React from 'react';
import { ExternalLink, Github, ArrowUpRight, Cpu } from 'lucide-react';
import CardGlow from '../common/CardGlow';

export default function ProjectCard({ project, featured = false }) {
  const { title, tagline, description, category, tags, metrics, image, liveUrl, githubUrl } = project;

  return (
    <CardGlow
      accentColor={featured ? 'cyan' : 'purple'}
      className="h-full flex flex-col group"
    >
      {/* Project Image Container */}
      <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-cyber-dark">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/40 to-transparent" />

        {/* High-Tech HUD Scanline Overlay */}
        <div className="absolute inset-0 bg-cyber-grid bg-[size:24px_24px] opacity-20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded text-[11px] font-mono font-medium tracking-wide bg-cyber-black/80 border border-slate-700/80 text-neon-cyan backdrop-blur-md">
            {category}
          </span>
          {featured && (
            <span className="px-2.5 py-1 rounded text-[11px] font-mono font-medium tracking-wide bg-neon-cyan/20 border border-neon-cyan text-neon-cyan backdrop-blur-md flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
              FEATURED
            </span>
          )}
        </div>

        {/* Interactive Quick-Action Links floating on Image */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="View Source Code"
              className="p-2 rounded-lg bg-cyber-black/80 border border-slate-700 text-slate-300 hover:text-neon-cyan hover:border-neon-cyan transition-all backdrop-blur-md"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="View Live Deployment"
              className="p-2 rounded-lg bg-neon-cyan text-cyber-black font-semibold hover:bg-white transition-all shadow-neon-cyan flex items-center gap-1"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="text-xl font-bold font-display text-white group-hover:text-neon-cyan transition-colors mb-2">
            {title}
          </h3>

          {/* Tagline */}
          {tagline && (
            <p className="text-xs font-mono text-neon-blue mb-3">
              {tagline}
            </p>
          )}

          {/* Description */}
          <p className="text-sm text-slate-400 leading-relaxed mb-5 line-clamp-3">
            {description}
          </p>
        </div>

        <div>
          {/* Key Metrics HUD Bar */}
          {metrics && metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-lg bg-slate-900/60 border border-slate-800/80 mb-5 text-center">
              {metrics.map((metric, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xs font-mono font-bold text-white">
                    {metric.value}
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-slate-800/60 border border-slate-700/50 hover:border-neon-cyan/40 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </CardGlow>
  );
}
