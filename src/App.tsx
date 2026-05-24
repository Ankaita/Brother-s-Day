/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, Eye, ArrowRight, RotateCcw, Volume2, Info, ChevronRight, HelpCircle } from 'lucide-react';
import { Scene } from './types';
import { ParticleBackground } from './components/ParticleBackground';
import { Brooch } from './components/Brooch';
import { 
  LumineFlower, 
  TanjiroNezukoBow, 
  HimmelRing, 
  BlueMoonWeed, 
  VioletFlowers 
} from './components/Decorations';

export default function App() {
  const [scene, setScene] = useState<Scene>('intro');
  const [envelopeStep, setEnvelopeStep] = useState<number>(0); // 0: fully closed, 1: lifted up with sparkles, 2: flap opens, 3: paper sliding out and unfolding
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);
  const [letterLinesVisible, setLetterLinesVisible] = useState<number>(0);

  // Sparkle generator for envelope lifts
  const triggerSparkles = () => {
    const newSparkles = Array.from({ length: 15 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 260 - 130, // shift range centered
      y: Math.random() * -180 - 20, // fly upwards
    }));
    setSparkles(newSparkles);
    // Cleanup sparkles after 1.5 seconds
    setTimeout(() => {
      setSparkles([]);
    }, 1500);
  };

  // Envelope clicks
  const handleEnvelopeClick = () => {
    if (envelopeStep === 0) {
      setEnvelopeStep(1);
      triggerSparkles();
    } else if (envelopeStep === 1) {
      setEnvelopeStep(2);
    } else if (envelopeStep === 2) {
      setEnvelopeStep(3);
      // Auto transition to letter screen after slide effect finishes
      setTimeout(() => {
        setScene('letter');
      }, 1800);
    }
  };

  // Letter lines reveal animation
  const letterBlocks = [
    "Dear joy dada,",
    "U already know how much u meant to me, from that random late night calls to that study sessions mah brother saw it all, meri saare ulti seedhi ichchaon ko aapne hi anjam diya hai 😝 am js so much amused ki hum dono itne baate kar kaise lete hai..it's not that we are having drama everyday but we repeat same stories once in a while still never got bored out of them 😵.",
    "Aur mereko Kitna free treat bhi deta hai 😝 soch le yeh website se 110 rupee Maine chuka diya Jhon ke last din ka biriyani ka ✨️swoosh swoosh Bhul gaya ^_^",
    "At the end thank you for being the most reliable person in my corner. And I hope you know - I am so glad to have you as my brother.",
    "Lucky to mai hu 😋",
    "And Happy Brother's day, Joy ♡",
    "Ache bhai ke sath dost bhi ban gaya 😒\nShit yr 🙆‍♀️abh to friend's day me bhi wish karna hoga 😭",
    "With love (and zero regrets)\n-your Lumine"
  ];

  useEffect(() => {
    if (scene === 'letter') {
      setLetterLinesVisible(0);
      const interval = setInterval(() => {
        setLetterLinesVisible((prev) => {
          if (prev < letterBlocks.length) {
            return prev + 1;
          }
          clearInterval(interval);
          return prev;
        });
      }, 2500); // progressive typing speed per block (2.5 seconds to read each beautifully)
      return () => clearInterval(interval);
    }
  }, [scene]);

  const restartExperience = () => {
    setEnvelopeStep(0);
    setLetterLinesVisible(0);
    setScene('intro');
  };

  return (
    <div className="w-full h-full relative select-none paper-grain immersive-bg-gradient flex flex-col items-center justify-center text-brand-brown antialiased overflow-hidden">
      {/* Absolute Aesthetic dreamy blur backgrounds */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-brand-pink/25 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brand-pink/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[20%] w-[40%] h-[40%] rounded-full bg-brand-gold/10 blur-[100px] pointer-events-none" />

      {/* Floating Sparkles and Hearts */}
      <ParticleBackground />

      {/* Top soft brand notification / Aesthetic greeting label */}
      <div className="fixed top-5 left-6 pointer-events-none hidden sm:flex items-center gap-1.5 opacity-60">
        <span className="text-[12px] font-sans tracking-[0.2em] uppercase text-brand-brown/70 font-light">
          digital letter
        </span>
      </div>

      {/* Main Container - Ensuring single frame fullscreen responsiveness */}
      <main className="w-full h-full flex items-center justify-center p-4 z-10 max-w-4xl">
        <AnimatePresence mode="wait">
          
          {/* ================= SECTION 1: INTRO SCREEN ================= */}
          {scene === 'intro' && (
            <motion.div
              key="intro-scene"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col items-center text-center max-w-md px-6 leading-relaxed"
            >
              {/* Cute Header Group */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-3 relative"
              >
                {/* Embedded decorative star flowers */}
                <div className="absolute -top-12 -left-12 opacity-80 animate-pulse">
                  <BlueMoonWeed className="w-12 h-12" />
                </div>
                <div className="absolute -bottom-8 -right-14 opacity-70">
                  <LumineFlower className="w-11 h-11" />
                </div>

                <p className="text-rose-500 font-handwritten text-3xl mb-1 drop-shadow-sm rotate-[-2deg] select-none">
                  a little something for you
                </p>
              </motion.div>

              {/* Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.9 }}
                className="font-serif text-4xl xs:text-5xl sm:text-6xl font-normal text-brand-brown tracking-tight leading-tight select-none pt-2"
              >
                happy brother’s day <span className="text-amber-500 font-light animate-pulse">✦</span>
              </motion.h1>

              {/* Pure decorative, highly aligned subtle icons with soft transitions, without borders or labels */}
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="flex items-center justify-center gap-6 mt-6 select-none"
              >
                <LumineFlower className="w-7 h-7 hover:scale-115 transition-transform" />
                <TanjiroNezukoBow className="w-7 h-7 hover:scale-115 transition-transform" />
                <HimmelRing className="w-7 h-7 hover:scale-115 transition-transform" />
              </motion.div>

              {/* Open Envelope Button */}
              <motion.button
                id="intro-open-button"
                whileTap={{ scale: 0.95 }}
                onClick={() => setScene('envelope')}
                className="btn-soft mt-10 flex items-center gap-2"
              >
                <span>OPEN ENVELOPE</span>
                <ArrowRight className="w-4 h-4 text-brand-brown" />
              </motion.button>
            </motion.div>
          )}

          {/* ================= SECTION 2: ENVELOPE OPENING ================= */}
          {scene === 'envelope' && (
            <motion.div
              key="envelope-scene"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col items-center justify-center w-full max-w-lg"
            >
              {/* Context Instruction Label */}
              <div className="text-center mb-8 px-4 select-none">
                <span className="text-rose-500 font-handwritten text-2xl block mb-1">
                  {envelopeStep === 0 && "Oh look, a vintage letter from Lumine... ✨"}
                  {envelopeStep === 1 && "The seal sparkles softly... ✨"}
                  {envelopeStep === 2 && "The wax flap opens... 🌸"}
                  {envelopeStep === 3 && "Unfolding Joy Dada's letter... ♡"}
                </span>
                <p className="font-sans text-xs uppercase tracking-widest text-brand-brown/70 font-light mt-1">
                  {envelopeStep === 0 && "Tap the envelope to pull it closer"}
                  {envelopeStep === 1 && "Tap again to unseal the top flap"}
                  {envelopeStep === 2 && "Tap to unfold and read what is inside!"}
                  {envelopeStep === 3 && "Revealing the secret notes... Please hold on..."}
                </p>
              </div>

              {/* ENVELOPE DESIGN STAGE */}
              <div 
                id="interactive-envelope-wrapper"
                className="relative flex items-center justify-center z-10 w-[310px] xs:w-[350px] sm:w-[410px] h-[210px] xs:h-[235px] sm:h-[270px] select-none"
                onClick={handleEnvelopeClick}
              >
                {/* Sparkle burst nodes */}
                {sparkles.map((spark) => (
                  <motion.div
                    key={spark.id}
                    className="absolute z-40 text-yellow-500/90 text-xl pointer-events-none select-none"
                    initial={{ x: 0, y: 0, opacity: 1, scale: 0.5 }}
                    animate={{ x: spark.x, y: spark.y, opacity: 0, scale: 1.4, rotate: 360 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  >
                    ✦
                  </motion.div>
                ))}

                {/* The Rotating and Sliding Paper Letter (In-Envelope Nested Structure) */}
                <motion.div
                  id="envelope-nested-letter"
                  className="absolute left-4 right-4 bg-[#fcf9f2] rounded-md shadow-inner px-5 py-4 border border-brand-brown/10 font-handwritten text-brand-brown text-left select-none pointer-events-none overflow-hidden"
                  style={{
                    height: '88%',
                    top: '8%',
                    transformOrigin: 'bottom center',
                  }}
                  animate={{
                    y: envelopeStep === 3 ? -165 : 0,
                    scale: envelopeStep === 3 ? 1.05 : 1,
                    rotate: envelopeStep === 3 ? [-1, 2, -1, 0] : 0,
                    boxShadow: envelopeStep === 3 
                      ? "0 25px 50px -12px rgba(93, 64, 55, 0.25)" 
                      : "0 4px 10px rgba(0,0,0,0.03)"
                  }}
                  transition={{
                    y: { duration: 1.2, ease: [0.25, 1, 0.5, 1] },
                    scale: { duration: 1.2 },
                    rotate: { duration: 1.2, ease: "easeInOut" }
                  }}
                >
                  {/* Crumpled paper simulated look underneath */}
                  <div className="absolute inset-0 crinkle-texture opacity-30 mix-blend-multiply" />
                  
                  {/* Pockets view content preview */}
                  <div className="relative h-full flex flex-col justify-between opacity-80 leading-relaxed text-xs sm:text-sm">
                    {/* Retro line markings */}
                    <div className="space-y-2.5">
                      <div className="h-3 w-28 bg-brand-brown/15 rounded-sm" />
                      <div className="h-2 w-full bg-brand-brown/10 rounded-sm" />
                      <div className="h-2 w-[90%] bg-brand-brown/5 rounded-sm" />
                      <div className="h-2 w-[95%] bg-brand-brown/10 rounded-sm" />
                    </div>
                    
                    <div className="flex items-center justify-between text-[11px] border-t border-brand-brown/10 pt-2 text-brand-brown">
                      <span>To: Joy Dada ♡</span>
                      <span className="font-sans text-[9px] uppercase tracking-wider">Lumine original</span>
                    </div>
                  </div>
                </motion.div>

                {/* ENVELOPE BACKDROP CASING (Inside lining) */}
                <div className="absolute inset-0 bg-[#f5e6d3] rounded-xl shadow-lg border border-brand-brown/10 overflow-hidden">
                  {/* Inside Liner Decorative Cute Pastel Hearts & Stars */}
                  <div className="absolute inset-2 bg-[#fdfbf7] rounded-lg border border-dashed border-brand-pink/30 flex items-center justify-center opacity-60">
                    <div className="grid grid-cols-6 gap-6 text-[10px] text-brand-pink">
                      <span>♥</span><span>✦</span><span>♥</span><span>✦</span><span>♥</span><span>✦</span>
                      <span>✦</span><span>♥</span><span>✦</span><span>♥</span><span>✦</span><span>♥</span>
                      <span>♥</span><span>✦</span><span>♥</span><span>✦</span><span>♥</span><span>✦</span>
                    </div>
                  </div>
                </div>

                {/* LEFT FLAP FLANGE */}
                <div 
                  className="absolute inset-y-0 left-0 bg-[#fdfbf7] z-25 border-l border-b border-brand-brown/5 shadow-sm"
                  style={{
                    width: '50.5%',
                    clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)',
                  }}
                />

                {/* RIGHT FLAP FLANGE */}
                <div 
                  className="absolute inset-y-0 right-0 bg-[#fdfbf7] z-25 border-r border-b border-brand-brown/5 shadow-sm"
                  style={{
                    width: '50.5%',
                    clipPath: 'polygon(100% 0%, 0% 50%, 100% 100%)',
                  }}
                />

                {/* BOTTOM COMPACT FLAP */}
                <div 
                  className="absolute bottom-0 inset-x-0 bg-[#f5e6d3] z-30 border-b border-brand-brown/5"
                  style={{
                    height: '52%',
                    clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)',
                    boxShadow: '0 -4px 15px rgba(93, 64, 55, 0.05)'
                  }}
                />

                {/* TOP ROTATING FLAP (Opens Upward) */}
                <motion.div
                  className="absolute top-0 inset-x-0 bg-[#ecdcc7] z-20 origin-top"
                  style={{
                    height: '51%',
                    clipPath: 'polygon(0% 0%, 50% 100%, 100% 0%)',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.01)'
                  }}
                  animate={{
                    rotateX: envelopeStep >= 2 ? 180 : 0,
                    backgroundColor: envelopeStep >= 2 ? '#fdfbf7' : '#ecdcc7',
                    zIndex: envelopeStep >= 2 ? 5 : 30 // behind letter once opened
                  }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                />

                {/* THE VINTAGE EMERALD BROOCH PINNED ON CENTER */}
                <motion.div 
                  className="absolute z-40 transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: '50%', top: '50%' }}
                  animate={{
                    scale: envelopeStep === 0 ? 1 : envelopeStep === 1 ? 1.15 : 0.85,
                    y: envelopeStep >= 2 ? 45 : 0, // shifts down out of the flap line
                    opacity: envelopeStep === 3 ? 0.3 : 1
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  <Brooch glowing={envelopeStep === 1} />
                </motion.div>
              </div>

              {/* Action Prompt Guide Buttons */}
              <div className="mt-12 flex justify-center gap-4">
                {envelopeStep > 0 && (
                  <button
                    id="envelope-reset-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setEnvelopeStep(0);
                    }}
                    className="px-5 py-2.5 rounded-full bg-brand-pink/30 hover:bg-brand-pink/50 text-brand-brown font-sans text-xs tracking-wider border border-brand-pink/40 transition-all duration-300 cursor-pointer flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>RESET</span>
                  </button>
                )}

                <button
                  id="envelope-step-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEnvelopeClick();
                  }}
                  className="btn-soft px-8 py-3 flex items-center gap-2"
                >
                  <span>
                    {envelopeStep === 0 && "UPLIFT"}
                    {envelopeStep === 1 && "UNSEAL FLAP"}
                    {envelopeStep === 2 && "SLIDE & UNFOLD PAPER"}
                    {envelopeStep === 3 && "TRANSITIONING..."}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Micro-Illustration items floating nearby for cute context */}
              <div className="flex justify-center gap-10 mt-14 opacity-50 text-brand-brown">
                <BlueMoonWeed className="w-9 h-9 opacity-80" />
                <VioletFlowers className="w-9 h-9 opacity-80" />
              </div>

            </motion.div>
          )}

          {/* ================= SECTION 3: LETTER READING PAGE ================= */}
          {scene === 'letter' && (
            <motion.div
              key="letter-scene"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-brand-pink/45 p-5 sm:p-9 md:p-12 overflow-hidden flex flex-col rotate-[-0.5deg]"
              style={{
                /* Set a beautiful maximum height matching viewport limit so they never need to scroll the overall site */
                maxHeight: '90vh',
              }}
            >
              {/* Crinkle and Paper fiber texture */}
              <div className="absolute inset-0 crinkle-texture opacity-45 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(#cfc2af_1px,transparent_0)] bg-[size:16px_16px] opacity-10 pointer-events-none" />

              {/* Mini Easter Egg Pins on the Paper card margins */}
              <div className="absolute top-4 left-4 flex gap-2 z-20">
                <LumineFlower className="w-9 h-9" />
                <TanjiroNezukoBow className="w-9 h-9" />
              </div>
              <div className="absolute top-4 right-16 flex gap-2 z-20">
                <HimmelRing className="w-9 h-9" />
              </div>

              {/* Decorative side items embedded beautifully */}
              <div className="absolute bottom-4 right-4 z-20 flex gap-1.5 opacity-80">
                <BlueMoonWeed className="w-10 h-10" />
                <VioletFlowers className="w-10 h-10" />
              </div>

              {/* The Pinned Emerald Brooch (pinned at the center top of raw handwritten paper letter) */}
              <div className="flex flex-col items-center justify-center pt-2 pb-5 z-20 border-b border-brand-pink/30">
                <Brooch className="w-12 h-12 mb-1" glowing={false} />
              </div>

              {/* Handwritten Paper Content Area (With custom designed beautiful scrollbar) */}
              <div 
                id="handwritten-scroll-area"
                className="flex-1 overflow-y-auto py-6 px-1 sm:px-4 text-brand-brown handwriting-text letter-writing-lines leading-[34px] text-lg sm:text-xl md:text-2xl selection:bg-brand-pink/40 select-text z-10 font-handwritten font-medium space-y-4"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#ecdcb9 transparent'
                }}
              >
                
                {/* Paragraphs with line-by-line typing and soft staggering reveals */}
                <AnimatePresence>
                  {letterBlocks.map((block, index) => {
                    const isVisible = letterLinesVisible > index;
                    if (!isVisible) return null;

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="whitespace-pre-line relative"
                      >
                        {/* Highlights specific special sentences within the text to maximize emotional touch */}
                        {block.includes("Lucky to mai hu") ? (
                          <span className="inline-block px-1 bg-brand-pink/50 rounded-md border-b-2 border-dashed border-brand-gold font-semibold text-brand-brown">
                            {block}
                          </span>
                        ) : block.includes("thank you for being") ? (
                          <span className="text-rose-800 drop-shadow-sm font-semibold selection:text-white">
                            {block}
                          </span>
                        ) : (
                          block
                        )}

                        {/* Sparkle effect on newly generated block */}
                        {index === letterLinesVisible - 1 && (
                          <motion.span 
                            initial={{ scale: 0, opacity: 1 }}
                            animate={{ scale: 1.3, opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute -right-4 -top-2 text-rose-400 pointer-events-none"
                          >
                            <Sparkles className="w-4 h-4 inline px-0.5" />
                          </motion.span>
                        )}
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                {/* Show simulated ink pen trailing indicator while writing blocks */}
                {letterLinesVisible < letterBlocks.length && (
                  <motion.div 
                    animate={{ opacity: [0.4, 1, 0.4] }} 
                    transition={{ repeat: Infinity, duration: 1.2 }}
                    className="flex items-center gap-2 pt-2 text-xs font-sans tracking-widest text-brand-brown font-light italic"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-brand-gold animate-bounce" />
                    <span>Lumine is writing lines...</span>
                  </motion.div>
                )}
              </div>

              {/* Footer row with Made with Love detail */}
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-brand-pink/40 z-20">
                <button
                  id="re-read-letter-button"
                  onClick={restartExperience}
                  className="px-4.5 py-2.5 rounded-full hover:bg-brand-pink/15 text-brand-brown font-sans text-xs tracking-wider transition-all duration-300 flex items-center gap-1.5 cursor-pointer border border-transparent hover:border-brand-pink/40"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>READ AGAIN</span>
                </button>

                <div className="flex flex-col items-end pr-2">
                  <span className="font-handwritten text-lg text-rose-800 font-semibold animate-pulse tracking-wide">
                    made with love ✦
                  </span>
                  <span className="font-sans text-[8px] tracking-widest text-brand-brown/50 uppercase select-none mt-0.5">
                    may your wishes flourish
                  </span>
                </div>
              </div>

              {/* Little tip to scroll the letter if overflow */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[9px] font-sans tracking-widest bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-100 uppercase opacity-60 flex items-center gap-1 pointer-events-none select-none">
                <Info className="w-3 h-3 text-emerald-600" />
                <span>Scroll inside the paper to read complete draft</span>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Persistent global mini helper in bottom screen */}
      <footer className="fixed bottom-3 left-1/2 -translate-x-1/2 pointer-events-none opacity-40 text-center font-sans text-[10px] text-brand-brown tracking-wider uppercase">
        <span>For My Aether</span>
      </footer>
    </div>
  );
}
