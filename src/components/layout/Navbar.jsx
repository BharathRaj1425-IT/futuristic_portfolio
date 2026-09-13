import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';
import { personalInfo, navigationLinks } from '../../data/data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
          ? 'py-3 bg-cyber-black/85 backdrop-blur-xl border-b border-neon-cyan/20 shadow-lg shadow-black/40'
          : 'py-5 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Cyber Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-cyber-dark border border-neon-cyan/40 group-hover:border-neon-cyan shadow-sm transition-all group-hover:shadow-neon-cyan overflow-hidden">
              <span className="font-display font-extrabold text-neon-cyan text-lg tracking-wider">
                BRT
              </span>
              <div className="absolute inset-0 bg-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-base tracking-wider group-hover:text-neon-cyan transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] font-mono text-neon-cyan/80 tracking-widest uppercase">
                SYSTEM CORE // ONLINE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-cyber-dark/80 px-4 py-1.5 rounded-full border border-slate-800 backdrop-blur-md">
            {navigationLinks.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider transition-all duration-200 ${isActive
                      ? 'text-neon-cyan'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 shadow-sm"
                      transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                    />
                  )}
                  <span className="relative z-10">{item.name.toUpperCase()}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Status / CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-4 py-2 rounded-lg text-xs font-mono font-semibold text-cyber-black bg-neon-cyan hover:bg-white transition-all shadow-neon-cyan flex items-center gap-1.5 group"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-lg border border-slate-800 bg-cyber-dark/80 text-slate-300 hover:text-neon-cyan hover:border-neon-cyan transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-cyber-dark/95 border-b border-neon-cyan/20 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigationLinks.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg text-sm font-mono font-semibold transition-all ${isActive
                        ? 'bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/30'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-neon-cyan" />
                      )}
                    </div>
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-800">
                <Link
                  to="/contact"
                  className="w-full py-3 rounded-xl font-mono text-sm font-semibold text-cyber-black bg-neon-cyan hover:bg-white transition-all shadow-neon-cyan flex items-center justify-center gap-2"
                >
                  <span>CONNECT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
