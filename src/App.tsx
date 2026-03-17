/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Instagram, Phone, ChevronLeft, Gem, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import cristalLogo from './assets/cristal-reva-logo.jpg';
import chaplinLogo from './assets/chaplin-logo.jpg';

const SnapchatIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="-50 -50 548 612" fill="#ffffff" stroke="#000000" strokeWidth="45" strokeLinejoin="round">
    <path d="M439.8 320.5c-10.6-16.4-27-22.3-46.4-22.3-11.8 0-23.8 2.5-34.8 6.8-1.5-10.6-2.8-21.3-2.8-32 0-60.9-33.1-115.3-86.7-143.5V86.4C269.1 38.9 229.9 0 181.6 0s-87.5 38.9-87.5 86.4v43.1C40.5 157.7 7.4 212.1 7.4 273c0 10.7-1.3 21.4-2.8 32-11 4.3-23 6.8-34.8 6.8-19.4 0-35.8-5.9-46.4-22.3-2.4-3.7-6.5-5.9-10.9-5.9-6.8 0-12.4 5.5-12.4 12.4 0 3.3 1.3 6.5 3.6 8.8 21.6 21.6 51.3 33.5 81.8 33.5 13.5 0 27-2.4 39.8-7.1 11.2 25.9 33.1 45.4 60.1 53.5 14.4 4.3 29.8 6.5 45.4 6.5 15.6 0 31-2.2 45.4-6.5 27-8.1 48.9-27.6 60.1-53.5 12.8 4.7 26.3 7.1 39.8 7.1 30.5 0 60.2-11.9 81.8-33.5 2.3-2.3 3.6-5.5 3.6-8.8 0-6.8-5.5-12.4-12.4-12.4-4.4 0-8.5 2.2-10.9 5.9z"/>
  </svg>
);

const GoldSparkles = () => {
  const [sparkles, setSparkles] = useState<{ id: number; x: number; size: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate 35 random sparkles
    const newSparkles = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // Random horizontal position (vw)
      size: Math.random() * 8 + 4, // Random size between 4px and 12px
      delay: Math.random() * 1.5, // Random delay up to 1.5s
      duration: Math.random() * 3 + 2.5, // Random fall duration between 2.5s and 5.5s
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ y: -50, x: `${sparkle.x}vw`, opacity: 0, rotate: 0 }}
          animate={{ 
            y: '100vh', 
            opacity: [0, 1, 1, 0],
            rotate: [0, 180, 360] 
          }}
          transition={{ 
            duration: sparkle.duration, 
            delay: sparkle.delay, 
            ease: "easeInOut" 
          }}
          className="absolute top-0 bg-gradient-to-br from-amber-200 to-amber-500 shadow-[0_0_10px_rgba(251,191,36,0.8)]"
          style={{ 
            width: sparkle.size, 
            height: sparkle.size,
            // A beautiful star shape
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
          }}
        />
      ))}
    </div>
  );
};

// Main App Component for Cristal Reva
export default function App() {
  const links = [
    {
      name: 'ئینستاگرام',
      username: '@cristal_reva',
      url: 'https://www.instagram.com/cristal_reva/',
      icon: <Instagram className="w-7 h-7 text-white" strokeWidth={1.5} />,
      bgGlow: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-[0_0_20px_rgba(219,39,119,0.5)]',
      hoverClass: 'hover:border-pink-500/50 hover:bg-white/10',
    },
    {
      name: 'سناپچات',
      username: 'cristalrevacr20',
      url: 'https://www.snapchat.com/add/cristalrevacr20',
      icon: <SnapchatIcon className="w-9 h-9" />,
      bgGlow: 'bg-[#FFFC00] shadow-[0_0_25px_rgba(255,252,0,0.7)]',
      hoverClass: 'hover:border-yellow-400/50 hover:bg-white/10',
    },
    {
      name: 'پەیوەندی کردن',
      username: '0750 194 9446',
      url: 'tel:+9647501949446',
      icon: <Phone className="w-7 h-7 text-white" strokeWidth={1.5} />,
      bgGlow: 'bg-gradient-to-tr from-emerald-400 to-emerald-600 shadow-[0_0_20px_rgba(16,185,129,0.5)]',
      hoverClass: 'hover:border-emerald-500/50 hover:bg-white/10',
    },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // On mobile, keeping navigation in the same tab triggers Universal Links / App Links
      // which automatically opens the native Instagram/Snapchat app.
      window.location.href = url;
    } else {
      // On desktop, open in a new tab
      window.open(url, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans" dir="rtl">
      <GoldSparkles />
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md flex flex-col items-center"
      >
        {/* Profile / Logo */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-48 h-48 mb-6 group flex items-center justify-center"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full transform group-hover:scale-110 transition-transform duration-500" />
          
          {/* Crystal Logo Image */}
          <img 
            src={cristalLogo} 
            alt="Cristal Reva Logo" 
            className="w-full h-full object-contain relative z-10 transform group-hover:scale-105 transition-transform duration-500"
            style={{ 
              filter: "invert(1) contrast(500%) sepia(100%) saturate(500%) hue-rotate(350deg)",
              mixBlendMode: "screen"
            }}
          />
          
          {/* Sparkles */}
          <div className="absolute top-4 right-10 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_white] animate-pulse z-20" />
          <div className="absolute bottom-6 left-10 w-2 h-2 bg-amber-200 rounded-full shadow-[0_0_10px_rgba(253,230,138,1)] animate-pulse delay-300 z-20" />
        </motion.div>

        {/* Title & Address */}
        <div className="flex flex-col items-center mb-10">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl font-serif tracking-widest mb-3 text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-600 uppercase"
          >
            Cristal Reva
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-2 text-amber-200/80 bg-amber-900/20 px-4 py-1.5 rounded-full border border-amber-500/20"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide">قەڵادزێ - بازاڕی سەردەم</span>
          </motion.div>
        </div>

        {/* Links Container */}
        <div className="w-full space-y-5">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              onClick={(e) => handleLinkClick(e, link.url)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative flex items-center p-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 group overflow-hidden ${link.hoverClass} shadow-lg`}
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

              {/* Icon Container */}
              <div className={`relative flex-shrink-0 w-14 h-14 ${link.name === 'سناپچات' ? 'rounded-[14px]' : 'rounded-full'} flex items-center justify-center ${link.bgGlow} z-10`}>
                {link.icon}
              </div>
              
              {/* Text */}
              <div className="mr-5 flex flex-col items-start z-10">
                <span className="text-lg font-bold text-zinc-100 tracking-wide group-hover:text-white transition-colors">{link.name}</span>
                <span className="text-sm text-zinc-400 font-mono mt-0.5 opacity-80 group-hover:text-amber-200/80 transition-colors" dir="ltr">{link.username}</span>
              </div>

              {/* Arrow/Chevron */}
              <div className="absolute left-5 text-zinc-600 group-hover:text-amber-400 transition-colors duration-300 transform group-hover:-translate-x-1 z-10">
                <ChevronLeft className="w-6 h-6" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 w-full"
        >
          <div className="relative p-6 rounded-2xl bg-gradient-to-b from-amber-900/10 to-transparent border-t border-amber-500/20 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            
            <p className="text-amber-300 font-serif text-lg tracking-wide drop-shadow-[0_0_15px_rgba(251,191,36,0.6)] leading-relaxed">
              "لەبیرت نەچێت جوانی تۆ بۆ ئێمە گرینگە"
            </p>
          </div>
        </motion.div>

        {/* Developer Credit */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-8 mb-4 flex items-center justify-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300"
        >
          <span className="text-xs sm:text-sm text-zinc-400 font-light tracking-wider">
            دروستکراوە لە لایەن چاپلین چاپەوە
          </span>
          <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-500/30 shadow-[0_0_15px_rgba(251,191,36,0.15)] flex-shrink-0 bg-[#0a0a0a] flex items-center justify-center">
            <img 
              src={chaplinLogo} 
              alt="Chaplin Chap Logo" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
