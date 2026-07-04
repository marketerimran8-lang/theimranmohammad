import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Megaphone, 
  Cpu, 
  Palette, 
  CodeXml, 
  Share2, 
  Upload, 
  X, 
  ArrowRight,
  Sparkles,
  Heart,
  Linkedin,
  Mail,
  Instagram,
  ExternalLink
} from "lucide-react";
import { FloatingPaths } from "./components/ui/background-paths";
import { ShootingStars } from "./components/ui/shooting-stars";
import { Button } from "./components/ui/button";
import { CardSpotlight } from "./components/ui/card-spotlight";

export default function App() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load uploaded image from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem("imran_portrait");
    if (saved) {
      setUploadedImage(saved);
    }
  }, []);

  // Handle image upload and save to local storage (base64)
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setUploadedImage(base64String);
        localStorage.setItem("imran_portrait", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  // Trigger file input
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // Clear portrait image
  const removeImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setUploadedImage(null);
    localStorage.removeItem("imran_portrait");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Scroll smoothly to target section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const titleWords = "theimranmohammad".split(" ");

  return (
    <div className="relative min-h-screen text-[#F2F2F4] bg-[#050507] selection:bg-white selection:text-black">
      
      {/* 1. GLOBAL BACKGROUND PATHS & SHOOTING STARS (FIXED BEHIND ALL SECTIONS) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.08]">
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
        </div>
        <ShootingStars 
          starColor="#FFFFFF"
          trailColor="rgba(255,255,255,0.12)"
          minSpeed={6}
          maxSpeed={16}
          minDelay={3500}
          maxDelay={8500}
          starWidth={12}
          starHeight={1}
        />
      </div>

      {/* MAIN LAYOUT WRAPPER */}
      <div className="relative z-10 w-full flex flex-col items-center">
        
        {/* 2. HERO SECTION */}
        <section id="hero" className="relative min-h-screen w-full flex items-center justify-center">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.8 }}
              className="flex flex-col items-center"
            >
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-medium mb-8 tracking-tighter leading-none font-serif select-none">
                {titleWords.map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                    {word.split("").map((letter, letterIndex) => (
                      <motion.span
                        key={`${wordIndex}-${letterIndex}`}
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: wordIndex * 0.1 + letterIndex * 0.025,
                          type: "spring",
                          stiffness: 140,
                          damping: 24,
                        }}
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-400"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </h1>

              {/* Subheading / Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-base sm:text-lg text-[#9A9A9F] mb-12 max-w-lg tracking-wide font-light leading-relaxed"
              >
                Co-Founder of <span className="text-[#F2F2F4] font-medium">Relex Xora</span> &bull; Digital Marketer &bull; AI Automation Specialist &bull; Web Developer
              </motion.p>

              {/* Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="inline-block group relative bg-gradient-to-b from-white/5 to-black/15 p-px rounded-2xl backdrop-blur-md overflow-hidden border border-white/5 shadow-2xl"
              >
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection("about")}
                  className="rounded-[1.15rem] px-8 py-6 text-base font-medium bg-[#111214]/90 hover:bg-[#111214] text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-white/5 hover:shadow-lg hover:shadow-black/70"
                >
                  <span className="opacity-90 group-hover:opacity-100 transition-opacity font-sans">
                    Discover Excellence
                  </span>
                  <ArrowRight className="ml-3 h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 3. ABOUT ME SECTION (TRANSPARENT WITH TWO EQUAL-HEIGHT CARDS) */}
        <section id="about" className="relative w-full py-28 px-4 sm:px-6 flex items-center justify-center overflow-hidden">
          <div className="w-full max-w-[1200px]">
            
            {/* Header label */}
            <div className="mb-14 text-center md:text-left">
              <span className="text-xs tracking-[0.25em] font-medium text-[#9A9A9F] uppercase block mb-3 font-sans">
                INTRODUCTION
              </span>
              <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-[#F2F2F4] font-serif">
                About Me
              </h2>
            </div>

            {/* Asymmetric Desktop 60/40 Grid - Flex Stretch for perfect equal heights */}
            <div className="flex flex-col lg:flex-row gap-8 items-stretch w-full">
              
              {/* LEFT CARD - CONTENT */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex-[3] bg-[#111214] border border-white/[0.08] hover:border-white/[0.15] hover:-translate-y-1 rounded-[28px] p-8 md:p-12 transition-all duration-400 ease-out shadow-lg hover:shadow-black/60 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] tracking-[0.2em] text-[#66666B] uppercase font-semibold block mb-4">
                    CREATIVE TECHNOLOGIST
                  </span>
                  
                  <h3 className="text-2xl font-serif text-[#F2F2F4] mb-8 leading-relaxed font-normal">
                    Fusing marketing intelligence with state-of-the-art engineering.
                  </h3>

                  {/* Body Paragraphs with Highlights */}
                  <div className="space-y-6 text-[#9A9A9F] font-light leading-relaxed text-sm sm:text-base">
                    <p>
                      Hello, I am Imran Mohammad. I operate at the intersection of creation and conversion as a professional <span className="text-[#F2F2F4] font-normal">Digital Marketer</span> and senior <span className="text-[#F2F2F4] font-normal">AI Prompt Engineer</span>. My craft centers around automating business growth, streamlining workflows, and building modern customer experiences.
                    </p>
                    <p>
                      Currently, I am actively engineering my proprietary <span className="text-[#F2F2F4] font-normal">SaaS Builder</span> workflows and driving scalable brand acceleration frameworks. I design custom solutions that transform standard ideas into automated pipelines that deliver measurable outcomes.
                    </p>
                    <p>
                      As the <span className="text-[#F2F2F4] font-normal">Co-Founder of Relex Xora</span>, I am constructing an integrated digital ecosystem focused on premier marketing strategies, bespoke <span className="text-[#F2F2F4] font-normal">Web Developer</span> executions, and intelligent prompt infrastructures to scale businesses into the AI era.
                    </p>
                  </div>
                </div>

                {/* Bottom Badges */}
                <div className="mt-10 border-t border-white/[0.05] pt-8">
                  <span className="text-xs text-[#66666B] block mb-4 font-medium uppercase tracking-wider">
                    Core Focus Areas
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "Digital Marketing",
                      "AI Automation",
                      "Web Development",
                      "Prompt Engineering",
                      "Content Strategy"
                    ].map((badge) => (
                      <span
                        key={badge}
                        className="px-4 py-1.5 rounded-full text-xs font-normal text-[#9A9A9F] bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] hover:text-white transition-all duration-300"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* RIGHT CARD - PORTRAIT CONTAINER */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.15 }}
                onClick={triggerFileInput}
                className="flex-[2] min-h-[480px] lg:min-h-0 bg-[#111214] border border-white/[0.08] hover:border-white/[0.15] hover:-translate-y-1 rounded-[28px] p-6 transition-all duration-400 ease-out shadow-lg hover:shadow-black/60 flex flex-col justify-center items-center relative group cursor-pointer overflow-hidden"
              >
                {/* Hidden input for custom upload */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />

                {/* Soft Radial Glow behind Image (5% white) */}
                <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_65%)]" />

                {/* Image or Premium Placeholder State */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center min-h-[360px]">
                  {uploadedImage ? (
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      <img
                        src={uploadedImage}
                        alt="Imran Mohammad Portrait"
                        referrerPolicy="no-referrer"
                        className="max-h-[380px] max-w-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] animate-fade-in transition-all duration-300"
                      />
                      
                      {/* Hover Overlay controls */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl gap-3">
                        <span className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-xs font-medium border border-white/10 backdrop-blur-sm transition-all">
                          Change Photo
                        </span>
                        <button
                          onClick={removeImage}
                          className="p-2 bg-red-950/40 hover:bg-red-900/60 border border-red-500/20 text-red-200 rounded-xl transition-all"
                          title="Remove Photo"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center p-6 flex flex-col items-center justify-center max-w-sm">
                      
                      {/* Premium Portrait Placeholder Graphic */}
                      <div className="w-24 h-24 rounded-full border border-white/[0.08] bg-white/[0.01] flex items-center justify-center mb-6 shadow-inner relative group-hover:border-white/20 transition-all duration-300">
                        <span className="text-3xl font-serif text-[#F2F2F4]/80 tracking-widest font-normal">IM</span>
                        <div className="absolute inset-0 rounded-full border border-dashed border-white/10 group-hover:animate-spin-slow" />
                      </div>

                      <div className="flex items-center gap-2 mb-2 text-xs text-[#9A9A9F] tracking-wide font-normal">
                        <Upload className="h-3.5 w-3.5 text-[#BFC2C8]" />
                        <span>PORTRAIT CONTAINER</span>
                      </div>

                      <p className="text-xs text-[#66666B] leading-relaxed mb-4 max-w-[240px]">
                        Click here to upload your custom portrait. Transparent background PNG works best.
                      </p>

                      <div className="px-3.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-[10px] text-[#9A9A9F] font-mono group-hover:bg-white/[0.05] group-hover:text-white transition-all">
                        UPLOAD PNG
                      </div>
                    </div>
                  )}
                </div>

                {/* Absolute Top-Right Decorative Indicator */}
                <div className="absolute top-6 right-6 text-[10px] font-mono text-[#66666B] border border-white/[0.05] rounded-md px-2 py-0.5 pointer-events-none">
                  PERSISTENT_FRAME
                </div>
              </motion.div>

            </div>

          </div>
        </section>

        {/* 4. SKILLS & EXPERTISE SECTION (USING CARD SPOTLIGHT COMPONENTS) */}
        <section id="skills" className="relative w-full py-28 px-4 sm:px-6 flex items-center justify-center overflow-hidden">
          <div className="w-full max-w-[1200px]">
            
            {/* Header label */}
            <div className="mb-14 text-center md:text-left">
              <span className="text-xs tracking-[0.25em] font-medium text-[#9A9A9F] uppercase block mb-3 font-sans">
                CAPABILITIES
              </span>
              <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-[#F2F2F4] font-serif">
                Skills &amp; Expertise
              </h2>
            </div>

            {/* Grid layout for 5 skills - 3 Columns Top Row, 2 Columns Bottom Row (Centered) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              
              {/* Skill 1: Ads Expert */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="h-full"
              >
                <CardSpotlight className="h-full bg-[#111214] border-white/[0.06] text-left hover:border-white/[0.15] p-8 rounded-3xl transition-all duration-300">
                  <div className="flex flex-col justify-between h-full space-y-8">
                    <div>
                      {/* Icon & Label */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-white">
                          <Megaphone className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] tracking-widest font-mono text-[#66666B]">01 // GROWTH</span>
                      </div>

                      <h3 className="text-xl font-sans font-medium text-[#F2F2F4] mb-3">
                        Ads Expert
                      </h3>
                      
                      <p className="text-sm text-[#9A9A9F] leading-relaxed font-light mb-6">
                        Engineered custom conversion channels that maximize budget efficiency across top digital channels. Highly analytical focus on growth loops.
                      </p>
                    </div>

                    <ul className="space-y-2.5 border-t border-white/[0.04] pt-5 font-light text-xs text-[#9A9A9F]">
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#BFC2C8]" /> Meta &amp; Google Ads Architecture
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#BFC2C8]" /> Dynamic Retargeting Pipelines
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#BFC2C8]" /> ROAS Optimization &amp; LTV Modeling
                      </li>
                    </ul>
                  </div>
                </CardSpotlight>
              </motion.div>

              {/* Skill 2: AI & Prompt Engineering */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="h-full"
              >
                <CardSpotlight className="h-full bg-[#111214] border-white/[0.06] text-left hover:border-white/[0.15] p-8 rounded-3xl transition-all duration-300">
                  <div className="flex flex-col justify-between h-full space-y-8">
                    <div>
                      {/* Icon & Label */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-white">
                          <Cpu className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] tracking-widest font-mono text-[#66666B]">02 // INTELLIGENCE</span>
                      </div>

                      <h3 className="text-xl font-sans font-medium text-[#F2F2F4] mb-3">
                        AI &amp; Prompt Engineering
                      </h3>
                      
                      <p className="text-sm text-[#9A9A9F] leading-relaxed font-light mb-6">
                        Designing robust LLM context templates, multi-agent automated agent orchestrations, and integrating neural pipelines directly into SaaS platforms.
                      </p>
                    </div>

                    <ul className="space-y-2.5 border-t border-white/[0.04] pt-5 font-light text-xs text-[#9A9A9F]">
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#BFC2C8]" /> Advanced Few-Shot Prompt Design
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#BFC2C8]" /> LLM Workflows &amp; Automation
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#BFC2C8]" /> Cognitive Agent Architectures
                      </li>
                    </ul>
                  </div>
                </CardSpotlight>
              </motion.div>

              {/* Skill 3: Visual Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-full"
              >
                <CardSpotlight className="h-full bg-[#111214] border-white/[0.06] text-left hover:border-white/[0.15] p-8 rounded-3xl transition-all duration-300">
                  <div className="flex flex-col justify-between h-full space-y-8">
                    <div>
                      {/* Icon & Label */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-white">
                          <Palette className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] tracking-widest font-mono text-[#66666B]">03 // AESTHETICS</span>
                      </div>

                      <h3 className="text-xl font-sans font-medium text-[#F2F2F4] mb-3">
                        Visual Design
                      </h3>
                      
                      <p className="text-sm text-[#9A9A9F] leading-relaxed font-light mb-6">
                        Creating editorial, elegant digital products with severe attention to negative space, high typographic standards, and minimal aesthetic systems.
                      </p>
                    </div>

                    <ul className="space-y-2.5 border-t border-white/[0.04] pt-5 font-light text-xs text-[#9A9A9F]">
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#BFC2C8]" /> Swiss Typography &amp; Ratios
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#BFC2C8]" /> Premium Dark Mode Systems
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#BFC2C8]" /> Micro-interaction Orchestration
                      </li>
                    </ul>
                  </div>
                </CardSpotlight>
              </motion.div>

              {/* Skill 4: Web Developer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="h-full md:col-span-1 lg:col-span-1 lg:col-start-1"
              >
                <CardSpotlight className="h-full bg-[#111214] border-white/[0.06] text-left hover:border-white/[0.15] p-8 rounded-3xl transition-all duration-300">
                  <div className="flex flex-col justify-between h-full space-y-8">
                    <div>
                      {/* Icon & Label */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-white">
                          <CodeXml className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] tracking-widest font-mono text-[#66666B]">04 // ENGINEERING</span>
                      </div>

                      <h3 className="text-xl font-sans font-medium text-[#F2F2F4] mb-3">
                        Web Developer
                      </h3>
                      
                      <p className="text-sm text-[#9A9A9F] leading-relaxed font-light mb-6">
                        Crafting modular, high-speed, and perfectly responsive full-stack solutions using React, TypeScript, and modern styling architectures.
                      </p>
                    </div>

                    <ul className="space-y-2.5 border-t border-white/[0.04] pt-5 font-light text-xs text-[#9A9A9F]">
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#BFC2C8]" /> React 18/19 &amp; TypeScript Core
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#BFC2C8]" /> Tailwind CSS &amp; Modern Styling
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#BFC2C8]" /> Performance Audit &amp; Bundle Tuning
                      </li>
                    </ul>
                  </div>
                </CardSpotlight>
              </motion.div>

              {/* Skill 5: Content Strategy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="h-full md:col-span-1 lg:col-span-1"
              >
                <CardSpotlight className="h-full bg-[#111214] border-white/[0.06] text-left hover:border-white/[0.15] p-8 rounded-3xl transition-all duration-300">
                  <div className="flex flex-col justify-between h-full space-y-8">
                    <div>
                      {/* Icon & Label */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-white">
                          <Share2 className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] tracking-widest font-mono text-[#66666B]">05 // NARRATIVE</span>
                      </div>

                      <h3 className="text-xl font-sans font-medium text-[#F2F2F4] mb-3">
                        Content Strategy
                      </h3>
                      
                      <p className="text-sm text-[#9A9A9F] leading-relaxed font-light mb-6">
                        Developing authority-building ecosystems that command attention, foster brand resonance, and cleanly convert attention into sustainable volume.
                      </p>
                    </div>

                    <ul className="space-y-2.5 border-t border-white/[0.04] pt-5 font-light text-xs text-[#9A9A9F]">
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#BFC2C8]" /> Distribution Funnel Formulation
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#BFC2C8]" /> Technical Copywriting &amp; Positioning
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#BFC2C8]" /> Content Calendars &amp; Flow Systems
                      </li>
                    </ul>
                  </div>
                </CardSpotlight>
              </motion.div>

              {/* Decorative Card to Complete Bento Style Balance (Only on Desktop) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:flex h-full bg-[#111214]/40 border border-dashed border-white/[0.06] p-8 rounded-3xl flex-col justify-between items-center text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-radial-gradient from-white/[0.01] to-transparent pointer-events-none" />
                <div className="flex flex-col items-center justify-center my-auto space-y-4 relative z-10 p-4">
                  <Sparkles className="h-6 w-6 text-[#9A9A9F] animate-pulse" />
                  <h4 className="text-sm font-sans font-medium text-[#F2F2F4] tracking-wide">
                    Ready to Scale Next?
                  </h4>
                  <p className="text-[11px] text-[#66666B] max-w-[200px] leading-relaxed">
                    Let's collaborate to build premier automated SaaS growth engines.
                  </p>
                </div>
                <div className="text-[10px] font-mono text-[#66666B] mt-auto">
                  RELEX_XORA // {new Date().getFullYear()}
                </div>
              </motion.div>

            </div>

          </div>
        </section>

        {/* 5. FOOTER (CLEAN, MINIMAL, ALL RIGHTS RESERVED IN RELEX XORA) */}
        <footer className="relative w-full py-16 px-4 sm:px-6 border-t border-white/[0.04] mt-12 flex items-center justify-center">
          <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Branding / Co-Founder Tag */}
            <div className="text-center md:text-left">
              <span className="text-sm font-serif text-[#F2F2F4] tracking-wider block font-normal mb-1">
                theimranmohammad
              </span>
              <span className="text-[11px] text-[#66666B] tracking-wide block font-light">
                Co-Founder &bull; Relex Xora
              </span>
            </div>

            {/* Social / Contact Links (Professional minimal, hover states) */}
            <div className="flex items-center gap-6 text-[#9A9A9F]">
              <a 
                href="mailto:marketerimran8@gmail.com" 
                className="hover:text-white transition-colors duration-300 flex items-center gap-2 text-xs font-light"
                title="Send Email"
              >
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">marketerimran8@gmail.com</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-white transition-colors duration-300"
                title="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-white transition-colors duration-300"
                title="Instagram Profile"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>

            {/* Copyright Claim as explicitly requested */}
            <div className="text-center md:text-right text-xs text-[#66666B] font-light">
              <p>All rights reserved in Relex Xora.</p>
              <p className="mt-1 text-[10px] font-mono text-[#66666B]/60">
                &copy; {new Date().getFullYear()} RELEX XORA
              </p>
            </div>

          </div>
        </footer>

      </div>
    </div>
  );
}
