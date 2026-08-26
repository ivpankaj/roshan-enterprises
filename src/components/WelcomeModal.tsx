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

  const fullLine1 = "Trust by Partner,";
  const fullLine2 = "Build by Driven";

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
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center px-6 transition-all duration-700 ease-in-out cursor-pointer select-none bg-navy-dark/70 backdrop-blur-2xl ${
        isFading ? 'opacity-0 scale-105 pointer-events-none filter blur-md' : 'opacity-100 scale-100'
      }`}
    >
      {/* Subtle Ambient Background Grid & Glow */}
      <div className="absolute inset-0 pattern-grid-subtle opacity-30 pointer-events-none"></div>
      <div className="absolute w-[500px] h-[500px] bg-gold-primary/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Skip Button in Top Right */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleSkip();
        }}
        className="absolute top-6 right-6 sm:top-8 sm:right-10 z-20 flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-gold-primary text-white hover:text-navy-dark text-xs font-extrabold uppercase tracking-wider rounded-full border border-white/20 transition-all duration-300 backdrop-blur-md shadow-lg"
      >
        <span>Skip Intro</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>

      {/* Center Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center space-y-6">

        {/* Large Typewriter Headline */}
        <div className="min-h-[140px] sm:min-h-[180px] flex flex-col justify-center items-center space-y-2">
          
          {/* Line 1 */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight flex items-center justify-center">
            <span>{displayedLine1}</span>
            {!isLine1Done && (
              <span className="inline-block w-1 h-8 sm:h-12 bg-gold-primary ml-1.5 animate-pulse"></span>
            )}
          </h1>

          {/* Line 2 */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight flex items-center justify-center gold-gradient-text">
            <span>{displayedLine2}</span>
            {isLine1Done && !isAllDone && (
              <span className="inline-block w-1 h-8 sm:h-12 bg-gold-bright ml-1.5 animate-pulse"></span>
            )}
          </h1>

        </div>

        {/* Bottom Hint */}
        <div className="pt-8 flex flex-col items-center space-y-2 opacity-70">
          <p className="text-slate-300 text-xs sm:text-sm font-medium tracking-wide">
            {isAllDone ? 'Entering website...' : 'Click anywhere to enter'}
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-primary to-transparent animate-pulse"></div>
        </div>

      </div>
    </div>
  );
};

