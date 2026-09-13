import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { Terminal, ArrowLeft } from 'lucide-react';

function PageTransitionWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center p-8 sm:p-12 rounded-2xl bg-cyber-dark/80 border border-slate-800 max-w-lg cyber-corners">
        <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 border border-neon-cyan/40 text-neon-cyan flex items-center justify-center mx-auto mb-4">
          <Terminal className="w-6 h-6" />
        </div>
        <div className="text-xs font-mono text-neon-cyan mb-2">ERROR 404 // ROUTE DISCONNECTED</div>
        <h2 className="text-3xl font-bold font-display text-white mb-3">Signal Lost in Deep Space</h2>
        <p className="text-sm text-slate-400 mb-6 leading-relaxed">
          The requested coordinate or protocol does not exist within this system cluster.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-semibold text-cyber-black bg-neon-cyan hover:bg-white transition-all shadow-neon-cyan"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO HOME BASE</span>
        </Link>
      </div>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransitionWrapper>
              <Home />
            </PageTransitionWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransitionWrapper>
              <About />
            </PageTransitionWrapper>
          }
        />
        <Route
          path="/experience"
          element={
            <PageTransitionWrapper>
              <Experience />
            </PageTransitionWrapper>
          }
        />
        <Route
          path="/skills"
          element={
            <PageTransitionWrapper>
              <Skills />
            </PageTransitionWrapper>
          }
        />
        <Route
          path="/gallery"
          element={
            <PageTransitionWrapper>
              <Gallery />
            </PageTransitionWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransitionWrapper>
              <Contact />
            </PageTransitionWrapper>
          }
        />
        <Route
          path="*"
          element={
            <PageTransitionWrapper>
              <NotFound />
            </PageTransitionWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
}
