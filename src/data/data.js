/**
 * =======================================================================
 * PORTFOLIO DATA CONFIGURATION (SINGLE SOURCE OF TRUTH)
 * =======================================================================
 * 
 * Edit this file to customize and personalize your entire portfolio website!
 * Every page and component dynamically reads from this file.
 */

import ProfessionalPic from '../images/Passport_Size_Professional.png'
import FinnovoFA from '../images/Finnovo 1st Anniversary.jpeg'
import FWD_Finnovo from '../images/FWD_Finnovo.jpeg'
import Frontend_Certification from '../images/FrontEnd Certification.jpeg'
import React_Certification from '../images/React Certification.jpeg'
import Hes_Summit from '../images/HES Summit.jpeg'
import Hysea_Summit from '../images/HYSEA Event.jpeg'
import JavaScript from '../images/JavaScript.jpeg'
import PostgreSQL from '../images/SQL Advanced.jpeg'
import FWD_RMES from '../images/FWD_RMES.jpg'
import LWD_Finnovo from '../images/LWD_Finnovo.png'

export const personalInfo = {
  // [CUSTOMIZE] Your full name and title
  name: "Bharath Raj Taduri",
  nick_name: 'Bharath Raj',
  title: "Full-Stack Software Architect & Creative Technologist",

  // [CUSTOMIZE] Animated text strings for hero subtitle typing effect
  roles: [
    "Full-Stack Software Engineer",
    "Creative Frontend Architect",
    "Generative AI Specialist",
    "High-Performance Web Developer",
    "UI/UX Motion Designer"
  ],

  // [CUSTOMIZE] Status badge displayed on Navbar and Hero
  availabilityStatus: "Open for High-Impact Roles & Consulting",
  statusColor: "emerald", // 'emerald' | 'cyan' | 'amber'

  // [CUSTOMIZE] Bio snippets
  shortBio: "Building the next generation of intelligent, hyper-responsive digital experiences where reactive systems meet cinematic aesthetics.",
  fullBio: "I am a Full-Stack Software Engineer with 2+ years of experience bridging Cutting-Edge Web Engineering, and Generative AI. My passion lies in crafting high-speed, visually breathtaking web interfaces backed by resilient, ultra-scalable microservices.",

  // [CUSTOMIZE] Contact & Location details
  location: "Hyderabad, India (Open to Remote Worldwide)",
  email: "bharatharjun14259@gmail.com",
  phone: "+91 9505004481",
  timezone: "IST (Indian Standard Time)",

  // [CUSTOMIZE] Resume/CV link (link to PDF in /public or Google Drive / external link)
  resumeUrl: "#contact", // e.g. "/resume.pdf" or external URL

  // [CUSTOMIZE] Profile Avatar Image
  avatarUrl: ProfessionalPic,
};

export const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Skills", path: "/skills" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/BharathRaj1425-IT",
    icon: "Github",
    username: "BharathRaj1425-IT",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/bharath-raj-taduri",
    icon: "Linkedin",
    username: "bharath-raj-taduri",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/bharath_raj_1425",
    icon: "Instagram",
    username: "bharath_raj_1425",
  },
];

export const stats = [
  {
    id: 1,
    label: "Years of Experience",
    value: 2,
    suffix: "+",
    description: "",
  },
  {
    id: 2,
    label: "Programming Languages",
    value: 4,
    suffix: "+",
    description: "",
  },
  {
    id: 3,
    label: "AI Tools",
    value: 10,
    suffix: "+",
    description: "",
  }
];

export const coreValues = [
  {
    id: "speed",
    title: "Zero-Latency Engineering",
    description: "Every millisecond counts. Obsessive focus on code efficiency, bundle splitting, edge caching, and optimized database queries.",
    icon: "Zap",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: "cinematic",
    title: "Cinematic Aesthetics",
    description: "Interfaces shouldn't just function—they should captivate. Deep dark mode palettes, fluid 60fps animations, and tactile feedback.",
    icon: "Sparkles",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    id: "ai",
    title: "Intelligent Automation",
    description: "Harnessing modern LLM inference, embedding vectors, and autonomous agentic workflows to build software that thinks ahead.",
    icon: "Cpu",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "scale",
    title: "Fault-Tolerant Architecture",
    description: "Designing cloud-native systems with automated failover, graceful degradation, and comprehensive telemetry.",
    icon: "ShieldCheck",
    gradient: "from-emerald-500 to-cyan-500",
  },
];

export const experiences = [
  {
    id: "exp-1",
    role: "Software Engineer - I",
    company: "Rugged Monitoring",
    period: "Sept, 2026 — Present",
    location: "Madhapur, Hyderabad",
    badge: "Full-Time",
    description: "Developing scalable software and real-time monitoring solutions for industrial systems, leveraging IoT, data processing, and modern engineering practices to deliver reliable and intelligent monitoring platforms.",
    highlights: [
      // "Architected sub-100ms LLM streaming pipeline supporting 150k daily active users using WebSockets and Redis.",
      // "Engineered high-performance React frontends with WebGL graph visualizations for multi-agent reasoning graphs.",
      // "Cut cloud infrastructure costs by 34% through model quantization and semantic vector caching.",
    ],
    techStack: ["React", "Redux", "TypeScript", "Node.js", "WebSockets", ".Net Core", "WPF", "Jira", "Git"],
  },
  {
    id: "exp-2",
    role: "Software Engineer",
    company: "Finnovo Tech Functional Pvt. Ltd",
    period: "Oct, 2024 — Aug, 2026",
    location: "Madhapur, Hyderabad",
    badge: "Full-Time",
    description: "Software Engineer in a Saas Platform of over 20+ clients and 2000+ users.",
    highlights: [
      "Integrated Zoho, Gmail, Google Meet, and Twilio APIs to automate interview scheduling, communication workflows, and WhatsApp-based payslip delivery, reducing manual effort by ~90%.",
      "Implemented custom design system adopted across 14 enterprise micro-frontends.",
      "Implemented Bulk Candidate Status Updates and Interview Scheduling interface improving recruitment efficiency by ~70%.", "Built Client Schema Configuration and a Support Ticketing System, improving workflow customization and cutting issue resolution time by ~35%."],
    techStack: ["React", "Redux", "Node.js", "PostgreSQL", "WebSockets", "React Native", "Azure DevOps", "Git"],
  },
  {
    id: "exp-3",
    role: "Web Development Intern",
    company: "Algorithm Pod",
    period: "Jan, 2023 - Apr, 2023",
    location: "Remote",
    badge: "Internship",
    description: "Contributed to Frontend Development of E-Commerce Platform. Worked closely with design team to implement pixel-perfect UI's.",
    highlights: [
      "Implemented responsive designs for mobile and desktop",
      "Optimized page load times by 50%",
      "Collaborated with team of 8 developers",
    ],
    techStack: ["React", "Tailwind CSS", "JavaScript"],
  },
];

export const education = [
  {
    id: "edu-1",
    degree: "B.Tech. in Computer Science & Engineering",
    institution: "Jawaharlal Nehru Technological University - Hyderabad",
    year: "2020 — 2024",
    honors: "GPA: 7.0/10",
    details: "Specialized in Computer Science, Full-Stack Web Development, AI Engineering, and Generative AI, with a focus on building scalable and intelligent software solutions.",
  },
];

export const certifications = [
  {
    id: "cert-1",
    title: "JavaScript Developer",
    issuer: "Simplilearn",
    year: "2024",
    badge: "7048931",
  },
  {
    id: "cert-2",
    title: "HackerRank Certified PostgreSQL Developer - Advanced",
    issuer: "HackerRank",
    year: "2025",
    badge: "EAE731C02C73",
  },
  {
    id: "cert-3",
    title: "Frontend Developer (React Js)",
    issuer: "HackerRank",
    year: "2025",
    badge: "AC356DD2C656",
  },
];

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend & UI Architecture",
    description: "Modern, reactive, pixel-perfect user interfaces with cinematic motion design.",
    skills: [
      { name: "React.js", level: 96, category: "frontend", icon: "Code2" },
      { name: "State Management (Redux)", level: 90, category: "frontend", icon: "Cpu" },
      { name: "JavaScript", level: 98, category: "frontend", icon: "FileCode" },
      { name: "TypeScript", level: 92, category: "frontend", icon: "FileCode2" },
      { name: "Tailwind CSS", level: 96, category: "frontend", icon: "Palette" },
      { name: "Framer Motion", level: 94, category: "frontend", icon: "Activity" },
      { name: "HTML5 Canvas / WebGL", level: 85, category: "frontend", icon: "Layers" },
      { name: "Responsive UI / UX", level: 95, category: "frontend", icon: "Smartphone" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Systems",
    description: "High-throughput APIs, streaming microservices, and robust databases.",
    skills: [
      { name: "Node.js / Express", level: 92, category: "backend", icon: "Server" },
      { name: "Python / Django", level: 90, category: "backend", icon: "Terminal" },
      { name: "PostgreSQL / SQL", level: 88, category: "backend", icon: "Database" },
      { name: "REST APIs", level: 94, category: "backend", icon: "Share2" },
      { name: "WebSockets / Real-time", level: 90, category: "backend", icon: "Radio" },
    ],
  },
  {
    id: "ai",
    title: "AI & Machine Intelligence",
    description: "Agentic workflows, vector embeddings, fine-tuning, and LLM pipelines.",
    skills: [
      { name: "LLM Orchestration (LangChain)", level: 82, category: "ai", icon: "Bot" },
      { name: "Vector Databases (Chroma)", level: 78, category: "ai", icon: "Binary" },
      { name: "Prompt Engineering & RAG", level: 85, category: "ai", icon: "Brain" },
      { name: "OpenAI / Claude APIs", level: 84, category: "ai", icon: "Sparkles" },
      // { name: "Hugging Face Ecosystem", level: 82, category: "ai", icon: "FolderGit2" },
      { name: "Agentic Workflows", level: 80, category: "ai", icon: "Workflow" },
    ],
  },
  {
    id: "devops",
    title: "Cloud & DevOps",
    description: "Automated delivery, scalable container orchestration, and cloud security.",
    skills: [
      // { name: "Docker & Containerization", level: 88, category: "devops", icon: "Container" },
      // { name: "AWS (ECS, Lambda, S3, CloudFront)", level: 86, category: "devops", icon: "Cloud" },
      { name: "CI / CD (GitHub Actions)", level: 80, category: "devops", icon: "GitPullRequest" },
      { name: "Linux / Shell Scripting", level: 85, category: "devops", icon: "Terminal" },
      { name: "Vite / Build Optimization", level: 94, category: "devops", icon: "Cpu" },
      { name: "Web Security & OAuth", level: 85, category: "devops", icon: "Shield" },
    ],
  },
];

export const projects = [
  {
    id: "proj-1",
    title: "NEURA-GRID // Autonomous AI Workflow Studio",
    tagline: "Next-generation drag-and-drop neural canvas for orchestrating autonomous AI agents.",
    description: "A futuristic web-based canvas interface enabling engineers to visually chain multi-agent LLM systems, configure memory layers, and inspect real-time agent execution telemetry with live streaming response graphs.",
    category: "AI & Web Apps",
    tags: ["React", "Tailwind CSS", "Framer Motion", "FastAPI", "WebSockets", "Redis"],
    metrics: [
      { label: "Execution Speed", value: "< 75ms" },
      { label: "Active Users", value: "24,000+" },
      { label: "Agent Actions/Day", value: "1.2M" },
    ],
    featured: true,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://example.com/neura-grid",
    githubUrl: "https://github.com/example/neura-grid",
  },
  {
    id: "proj-2",
    title: "CYBER-VAULT // Quantum-Resistant DeFi Terminal",
    tagline: "Ultra-fast cryptographic asset analytics & trading terminal with WebGL order books.",
    description: "High-frequency crypto asset management platform with millisecond order-book updates, interactive 3D portfolio heatmaps, dynamic algorithmic alerts, and military-grade encryption safeguards.",
    category: "Fintech & Web3",
    tags: ["React", "TypeScript", "Tailwind CSS", "Three.js", "Chart.js", "PostgreSQL"],
    metrics: [
      { label: "Daily Volume", value: "$42M+" },
      { label: "Throughput", value: "15k TPS" },
      { label: "Latency", value: "28ms" },
    ],
    featured: true,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://example.com/cyber-vault",
    githubUrl: "https://github.com/example/cyber-vault",
  },
  {
    id: "proj-3",
    title: "SYNAPSE // Edge Observability & Telemetry Cloud",
    tagline: "Distributed microservices monitoring with predictive anomaly detection.",
    description: "An observability system that monitors global microservice clusters, auto-detects anomalous traffic spikes using real-time machine learning inference, and automatically recommends Kubernetes pod autoscaling rules.",
    category: "DevOps & Cloud",
    tags: ["React", "Vite", "FastAPI", "Docker", "Kubernetes", "Prometheus"],
    metrics: [
      { label: "Nodes Monitored", value: "1,500+" },
      { label: "Alert Accuracy", value: "99.4%" },
      { label: "False Positives", value: "-78%" },
    ],
    featured: true,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://example.com/synapse-cloud",
    githubUrl: "https://github.com/example/synapse-cloud",
  },
  {
    id: "proj-4",
    title: "HOLOSPHERE // 3D Spatial Audio & Audio-Reactive Visualizer",
    tagline: "Immersive WebAudio spatial synthesizer with GPU particle feedback.",
    description: "An experimental creative audio synthesizer leveraging the Web Audio API and WebGL shader passes to transform live microphone input or music stems into kinetic geometric particle choreographies.",
    category: "Creative Tech & 3D",
    tags: ["JavaScript", "HTML5 Canvas", "WebGL", "Web Audio API", "GLSL"],
    metrics: [
      { label: "Particle Count", value: "65,000" },
      { label: "Frame Rate", value: "60 FPS" },
      { label: "Audio Stems", value: "8 Tracks" },
    ],
    featured: false,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://example.com/holosphere",
    githubUrl: "https://github.com/example/holosphere",
  },
  {
    id: "proj-5",
    title: "AEON OS // Cybernetic Browser-Based Web Desktop",
    tagline: "A sleek futuristic web desktop environment with window manager & terminal emulator.",
    description: "A complete browser operating system environment featuring draggable z-indexed glassmorphic windows, an interactive command-line terminal with custom shell commands, a file explorer, and custom theme switches.",
    category: "Frontend Architecture",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Zustand", "Vite"],
    metrics: [
      { label: "Bundle Size", value: "84 KB" },
      { label: "Commands Supported", value: "35+" },
      { label: "Theme Accents", value: "6 Styles" },
    ],
    featured: false,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://example.com/aeon-os",
    githubUrl: "https://github.com/example/aeon-os",
  },
  {
    id: "proj-6",
    title: "CHRONO-PULSE // Biometric Productivity & Focus Tracker",
    tagline: "Smart cognitive workload tracker with adaptive circadian lighting advice.",
    description: "A minimalist health-tech productivity dashboard measuring typing cadence, mouse acceleration, and continuous active screen time to forecast cognitive exhaustion and provide automated ergonomic break suggestions.",
    category: "AI & Web Apps",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Chart.js"],
    metrics: [
      { label: "Focus Boost", value: "+32%" },
      { label: "Daily Streaks", value: "180 Days" },
      { label: "Burnout Rate", value: "-45%" },
    ],
    featured: false,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://example.com/chrono-pulse",
    githubUrl: "https://github.com/example/chrono-pulse",
  },
];

export const galleryCategories = ["All", "Certifications", "Events", "Achievements & Milestones"];

export const galleryItems = [
  {
    id: "gal-1",
    title: "React Certification from Great Learning",
    category: "Certifications",
    aspectRatio: "wide",
    image: React_Certification,
    year: "2025",
    tags: ["React"],
  },
  {
    id: "gal-2",
    title: "JavaScript Developer from Simplilearn",
    category: "Certifications",
    aspectRatio: "wide",
    image: JavaScript,
    year: "2025",
    tags: ["React", "JavaScript"],
  },
  {
    id: "gal-3",
    title: "Frontend Developer from HackerRank",
    category: "Certifications",
    aspectRatio: "wide",
    image: Frontend_Certification,
    year: "2025",
    tags: ["React", "JavaScript"],
  },
  {
    id: "gal-4",
    title: "PostgreSQL Developer from HackerRank",
    category: "Certifications",
    aspectRatio: "wide",
    image: PostgreSQL,
    year: "2025",
    tags: ["PostgreSQL", "SQL"],
  },
  {
    id: "gal-5",
    title: "First Working Day at @Rugged Monitoring",
    category: "Achievements & Milestones",
    aspectRatio: "wide",
    image: FWD_RMES,
    year: "2026",
    tags: ["First Working Day"],
  },
  {
    id: "gal-6",
    title: "Last Working Day at @FINNOVO",
    category: "Achievements & Milestones",
    aspectRatio: "wide",
    image: LWD_Finnovo,
    year: "2026",
    tags: ["Last Working Day"],
  },
  {
    id: "gal-7",
    title: "One Year Anniversary at @FINNOVO",
    category: "Achievements & Milestones",
    aspectRatio: "wide",
    image: FinnovoFA,
    year: "2025",
    tags: ["One Year Work Anniversary"],
  },
  {
    id: "gal-8",
    title: "First Working Day at @FINNOVO",
    category: "Achievements & Milestones",
    aspectRatio: "wide",
    image: FWD_Finnovo,
    year: "2024",
    tags: ["1st Job", 'First Working Day'],
  },
  {
    id: "gal-9",
    title: "HES - Nov, 2025",
    category: "Events",
    aspectRatio: "wide",
    image: Hes_Summit,
    year: "2025",
    tags: ["Hyderabad Entrepreneurship Summit (HES) - 2025"],
  },
  {
    id: "gal-10",
    title: "HYSEA - Feb, 2025",
    category: "Events",
    aspectRatio: "wide",
    image: Hysea_Summit,
    year: "2025",
    tags: ["Hyderabad Software Enterprises Association (HYSEA) National Summit & Awards - 2025"],
  },
];

export const faqItems = [
  {
    question: "What types of roles or contracts are you looking for?",
    answer: "I am open to Lead / Senior Full-Stack Engineering roles, AI Systems Architect positions, and selective high-impact consulting projects where performant frontend systems and intelligent backends are required.",
  },
  {
    question: "What is your typical technology stack?",
    answer: "For frontends: React, TypeScript, Tailwind CSS, and Framer Motion. For backends: Node.js, Python (Django), PostgreSQL. For AI: LangChain, vector databases, and OpenAI/Anthropic APIs.",
  },
  {
    question: "Are you available for remote work across time zones?",
    answer: "Yes! I am based in India (IST) but have worked with distributed teams across Asia for over 2 years with strong asynchronous communication habits.",
  },
  {
    question: "How quickly can you onboard or begin a project?",
    answer: "Depending on current commitments, I am usually able to initiate discovery and architecture within 1 to 2 weeks of alignment.",
  },
];

export const footerData = {
  copyright: `© ${new Date().getFullYear()} Bharath Raj. All systems operational.`,
  systemStatus: "ALL SYSTEMS OPERATIONAL // PROTOCOL V4.8",
  quote: "“The best way to predict the future is to invent its user interface.”",
};
