'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const WelcomeModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [displayedLine1, setDisplayedLine1] = useState('');
  const [displayedLine2, setDisplayedLine2] = useState('');
  const [isLine1Done, setIsLine1Done] = useState(false);
  const [isAllDone, setIsAllDone] = useState(false);

  const fullLine1 = "Trusted by Businesses,";
  const fullLine2 = "Driven by Excellence";

  useEffect(() => {
    // Check if user has already seen intro in this session
    const hasSeenIntro = sessionStorage.getItem('re_intro_seen');
    if (hasSeenIntro) {
      setIsVisible(false);
      return;
    }

    // Prevent body scroll during splash intro
    document.body.style.overflow = 'hidden';

    let index1 = 0;
    let index2 = 0;
    let timer1: NodeJS.Timeout;
    let timer2: NodeJS.Timeout;
    let finishTimer: NodeJS.Timeout;

    // Start typing line 1
    timer1 = setInterval(() => {
      if (index1 < fullLine1.length) {
        setDisplayedLine1(fullLine1.slice(0, index1 + 1));
        index1++;
      } else {
        clearInterval(timer1);
        setIsLine1Done(true);

        // Pause briefly, then start typing line 2
        setTimeout(() => {
          timer2 = setInterval(() => {
            if (index2 < fullLine2.length) {
              setDisplayedLine2(fullLine2.slice(0, index2 + 1));
              index2++;
            } else {
              clearInterval(timer2);
              setIsAllDone(true);

              // Pause after completion, then trigger fade out to show site
              finishTimer = setTimeout(() => {
                triggerFadeOut();
              }, 1000);
            }
          }, 55);
        }, 180);
      }
    }, 55);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearTimeout(finishTimer);
      document.body.style.overflow = '';
    };
  }, []);

  const triggerFadeOut = () => {
    setIsFading(true);
    sessionStorage.setItem('re_intro_seen', 'true');
    setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = '';
    }, 700);
  };

  const handleSkip = () => {
    setDisplayedLine1(fullLine1);
    setDisplayedLine2(fullLine2);
    setIsLine1Done(true);
    setIsAllDone(true);
    triggerFadeOut();
  };

  if (!isVisible) return null;

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center px-6 transition-all duration-700 ease-in-out cursor-pointer select-none bg-black/15 backdrop-blur-2xl ${
        isFading ? 'opacity-0 scale-105 pointer-events-none filter blur-md' : 'opacity-100 scale-100'
      }`}
    >
      {/* Subtle Ambient Background Grid & Glow */}
      <div className="absolute inset-0 pattern-grid-subtle opacity-20 pointer-events-none"></div>
      <div className="absolute w-[500px] h-[500px] bg-gold-primary/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Skip Button in Top Right */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleSkip();
        }}
        className="absolute top-6 right-6 sm:top-8 sm:right-10 z-20 flex items-center gap-2 px-4 py-2 bg-navy-primary/70 hover:bg-gold-primary text-white hover:text-navy-dark text-xs font-extrabold uppercase tracking-wider rounded-full border border-gold-primary/40 transition-all duration-300 backdrop-blur-md shadow-xl"
      >
        <span>Skip Intro</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>

      {/* Center Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center space-y-6">

        {/* Animated Brand Logo Header */}
        <div className="mb-2 sm:mb-4 flex flex-col items-center justify-center">
          <div className="relative group animate-float-logo rounded-full">
            {/* Animated Pulse Glow ring behind Logo */}
            <div className="absolute -inset-2 bg-gradient-to-r from-gold-primary via-gold-bright to-gold-primary rounded-full blur-md opacity-75 animate-pulse"></div>

            {/* Logo Pill Container */}
            <div className="relative px-6 py-3 bg-navy-primary/90 border-2 border-gold-primary rounded-full flex items-center gap-3.5 shadow-2xl backdrop-blur-md">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white p-0.5 border border-gold-primary flex-shrink-0 flex items-center justify-center overflow-hidden shadow-md">
                <img
                  src="/logo.png"
                  alt="Roshan Enterprises Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-black tracking-wider text-lg sm:text-xl leading-none uppercase text-white drop-shadow">
                  ROSHAN
                </span>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="h-[2px] w-2 bg-gold-primary"></span>
                  <span className="font-extrabold tracking-widest text-[9px] sm:text-[10px] uppercase text-gold-bright">
                    ENTERPRISES
                  </span>
                  <span className="h-[2px] w-2 bg-gold-primary"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Typewriter Headline */}
        <div className="min-h-[120px] sm:min-h-[160px] flex flex-col justify-center items-center space-y-2">
          
          {/* Line 1 */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight flex items-center justify-center drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            <span>{displayedLine1}</span>
            {!isLine1Done && (
              <span className="inline-block w-1 h-8 sm:h-12 bg-gold-primary ml-1.5 animate-pulse shadow-[0_0_10px_#D99A16]"></span>
            )}
          </h1>

          {/* Line 2 */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight flex items-center justify-center gold-gradient-text drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            <span>{displayedLine2}</span>
            {isLine1Done && !isAllDone && (
              <span className="inline-block w-1 h-8 sm:h-12 bg-gold-bright ml-1.5 animate-pulse shadow-[0_0_10px_#F0B323]"></span>
            )}
          </h1>

        </div>

        {/* Bottom Hint */}
        <div className="pt-4 flex flex-col items-center space-y-2">
          <p className="text-white font-medium text-xs sm:text-sm tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {isAllDone ? 'Entering website...' : 'Click anywhere to enter'}
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-primary to-transparent animate-pulse shadow-sm"></div>
        </div>

      </div>
    </div>
  );
};

