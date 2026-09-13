import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Sparkles, Layers, Tag, Calendar } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import GalleryModal from '../components/gallery/GalleryModal';
import CardGlow from '../components/common/CardGlow';
import { galleryCategories, galleryItems } from '../data/data';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <section>
        <SectionHeading
          badge="01 ARTIFACT ARCHIVE"
          title="Events & Personal Moments"
          subtitle="Explore moments from events, professional experiences, achievements, and memorable highlights from my journey."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-semibold transition-all backdrop-blur-md ${activeCategory === cat
                  ? 'bg-neon-cyan text-cyber-black shadow-neon-cyan'
                  : 'bg-cyber-dark/80 text-slate-300 border border-slate-800 hover:border-neon-cyan/40'
                }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <CardGlow
                  accentColor="cyan"
                  className="group cursor-pointer h-full flex flex-col overflow-hidden"
                  onClick={() => setSelectedItem(item)}
                >
                  {/* Thumbnail container */}
                  <div className="relative h-64 w-full overflow-hidden bg-cyber-dark">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/30 to-transparent" />

                    {/* Cyber Grid scanline */}
                    <div className="absolute inset-0 bg-cyber-grid bg-[size:20px_20px] opacity-15 pointer-events-none" />

                    {/* Top Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded text-[10px] font-mono tracking-wider bg-cyber-black/85 border border-slate-700 text-neon-cyan backdrop-blur-md">
                        {item.category}
                      </span>
                    </div>

                    {/* Hover Inspect Reticle */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-cyber-black/50 backdrop-blur-xs">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neon-cyan text-cyber-black text-xs font-mono font-bold shadow-neon-cyan transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-4 h-4" />
                        <span>INSPECT ARTIFACT</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                        <span>{item.year}</span>
                        <span className="text-neon-cyan text-[11px]">CLICK TO EXPAND</span>
                      </div>

                      <h3 className="text-lg font-bold font-display text-white group-hover:text-neon-cyan transition-colors mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
                        {item.description}
                      </p>
                    </div>

                    {/* Tags */}
                    {item.tags && (
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                        {item.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-slate-900 border border-slate-800"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </CardGlow>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <GalleryModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}
