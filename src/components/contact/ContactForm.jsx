import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import CardGlow from '../common/CardGlow';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    budget: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please provide your name, email, and transmission message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid electronic mail address.');
      return;
    }

    setStatus('submitting');

    // Simulate cyber network dispatch
    try {
      await new Promise((resolve) => setTimeout(resolve, 1400));
      setStatus('success');

      // Trigger high-tech celebratory particles
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f5d4', '#38bdf8', '#a855f7'],
      });
    } catch (err) {
      setStatus('error');
      setErrorMessage('Transmission pipeline error. Please attempt contact via direct email.');
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', budget: '', message: '' });
    setStatus('idle');
  };

  return (
    <CardGlow accentColor="cyan" className="p-6 sm:p-8 md:p-10">
      {status === 'success' ? (
        <div className="py-12 text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-neon-cyan/20 border-2 border-neon-cyan flex items-center justify-center text-neon-cyan shadow-neon-cyan mb-6">
            <CheckCircle2 className="w-8 h-8 animate-bounce" />
          </div>
          <h3 className="text-2xl font-bold font-display text-white mb-2">
            TRANSMISSION RECEIVED // 200 OK
          </h3>
          <p className="text-slate-300 max-w-md text-sm mb-6 leading-relaxed">
            Your encrypted packet has arrived at Alex's terminal. Expect a telemetry response within 24 hours.
          </p>
          <button
            onClick={handleReset}
            className="px-6 py-2.5 rounded-xl text-xs font-mono font-semibold text-cyber-black bg-neon-cyan hover:bg-white transition-all shadow-neon-cyan"
          >
            INITIALIZE NEW PACKET
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-2">
            <span className="text-xs font-mono text-neon-cyan flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              ENCRYPTED DIRECT CHANNEL //
            </span>
            <span className="text-xs font-mono text-slate-500">256-BIT TLS</span>
          </div>

          {status === 'error' && (
            <div className="p-3.5 rounded-lg bg-red-950/40 border border-red-500/40 text-red-400 text-xs font-mono flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name input */}
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-slate-300 uppercase mb-2">
                Identity // Name <span className="text-neon-cyan">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Commander Shepard"
                className="w-full px-4 py-3 rounded-lg bg-cyber-darker border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all font-sans"
              />
            </div>

            {/* Email input */}
            <div>
              <label htmlFor="email" className="block text-xs font-mono text-slate-300 uppercase mb-2">
                Coordinates // Email <span className="text-neon-cyan">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. user@domain.com"
                className="w-full px-4 py-3 rounded-lg bg-cyber-darker border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all font-sans"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-xs font-mono text-slate-300 uppercase mb-2">
                Protocol // Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project inquiry / Full-time role"
                className="w-full px-4 py-3 rounded-lg bg-cyber-darker border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all font-sans"
              />
            </div>

            {/* Budget / Scope */}
            <div>
              <label htmlFor="budget" className="block text-xs font-mono text-slate-300 uppercase mb-2">
                Scope // Budget Tier
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-cyber-darker border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all font-sans"
              >
                <option value="">Select scope tier...</option>
                <option value="lead-role">Full-Time / Lead Role</option>
                <option value="contract-50k+">Enterprise Project ($50k+)</option>
                <option value="contract-20k-50k">Consulting Project ($20k - $50k)</option>
                <option value="advisory">Advisory / Tech Due Diligence</option>
                <option value="other">Other Collaboration</option>
              </select>
            </div>
          </div>

          {/* Message input */}
          <div>
            <label htmlFor="message" className="block text-xs font-mono text-slate-300 uppercase mb-2">
              Payload // Transmission Details <span className="text-neon-cyan">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Outline project parameters, deliverables, tech requirements, or role specifics..."
              className="w-full px-4 py-3 rounded-lg bg-cyber-darker border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all font-sans resize-y"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-4 rounded-xl font-mono text-sm font-semibold text-cyber-black bg-neon-cyan hover:bg-white transition-all duration-300 shadow-neon-cyan flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-cyber-black" />
                <span>DISPATCHING TELEMETRY PACKET...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                <span>TRANSMIT MESSAGE NOW</span>
              </>
            )}
          </button>
        </form>
      )}
    </CardGlow>
  );
}
