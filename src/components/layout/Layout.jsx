import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from '../common/CustomCursor';
import CyberBackground from '../common/CyberBackground';

export default function Layout({ children }) {
  const { pathname } = useLocation();

  // Scroll to top whenever the route path changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen flex flex-col selection:bg-neon-cyan/30 selection:text-neon-cyan">
      {/* High-Tech Custom Cursor */}
      <CustomCursor />

      {/* Cybernetic Particle Background with Glowing Lights */}
      <CyberBackground />

      {/* Futuristic Floating Header */}
      <Navbar />

      {/* Main Page Body */}
      <main className="flex-1 w-full relative z-10 pt-16">
        {children}
      </main>

      {/* Futuristic Grid Footer */}
      <Footer />
    </div>
  );
}
