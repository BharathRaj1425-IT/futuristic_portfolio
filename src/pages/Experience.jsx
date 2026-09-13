import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Briefcase, Award, TrendingUp } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import ExperienceTimeline from '../components/experience/ExperienceTimeline';
import CardGlow from '../components/common/CardGlow';
import { experiences, personalInfo } from '../data/data';

export default function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* Page Header */}
      <section>
        <SectionHeading
          badge="01 CAREER TELEMETRY"
          title="Professional Journey & Milestones"
          subtitle="A chronological timeline of leadership roles, enterprise engineering, and systems architecture."
        />

        {/* High-Tech Glowing Timeline */}
        <ExperienceTimeline experiences={experiences} />

        {/* Bottom Action Card */}
        <div className="mt-20 p-8 rounded-2xl bg-cyber-dark/80 border border-slate-800 text-center max-w-2xl mx-auto space-y-4 cyber-corners">
          <h4 className="text-xl font-bold font-display text-white">
            Looking for detailed technical references?
          </h4>
          <p className="text-sm text-slate-400">
            Download my comprehensive resume or connect to explore how I can contribute to your roadmap.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            {/* <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl font-mono text-xs font-semibold text-cyber-black bg-neon-cyan hover:bg-white transition-all shadow-neon-cyan flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a> */}
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl font-mono text-xs font-semibold text-white bg-cyber-black border border-slate-700 hover:border-neon-cyan transition-all flex items-center gap-2"
            >
              <span>DISCUSS AN OPPORTUNITY</span>
              <ArrowRight className="w-4 h-4 text-neon-cyan" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
