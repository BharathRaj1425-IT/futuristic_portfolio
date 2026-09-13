import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Tag, Sparkles } from 'lucide-react';

export default function GalleryModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-cyber-black/85 backdrop-blur-xl"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-cyber-dark/95 border border-neon-cyan/40 shadow-2xl flex flex-col cyber-corners"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800/80 bg-cyber-darker/80">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              <span className="text-xs font-mono text-neon-cyan uppercase tracking-wider">
                TRANSMISSION VIEWER // {item.category}
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close Preview"
              className="p-1.5 rounded-lg border border-slate-700/80 text-slate-400 hover:text-white hover:border-neon-cyan transition-colors bg-cyber-dark"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Media Image View */}
          <div className="relative w-full max-h-[55vh] bg-cyber-black overflow-hidden flex items-center justify-center">
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[55vh] w-full object-contain"
            />
            {/* High-tech grid overlay */}
            <div className="absolute inset-0 bg-cyber-grid bg-[size:30px_30px] opacity-10 pointer-events-none" />
          </div>

          {/* Details Section */}
          <div className="p-6 sm:p-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-2xl font-bold font-display text-white">
                {item.title}
              </h3>
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                <Calendar className="w-3.5 h-3.5 text-neon-cyan" />
                <span>{item.year}</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {item.description}
            </p>

            {/* Tag Pills */}
            {item.tags && (
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-800">
                <Tag className="w-3.5 h-3.5 text-neon-cyan" />
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded text-xs font-mono text-slate-300 bg-slate-800/80 border border-slate-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
