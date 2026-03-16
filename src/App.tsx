/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Phone, ChevronLeft, Gem, MapPin, Ghost } from 'lucide-react';
import { motion } from 'motion/react';

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
      icon: <Ghost className="w-7 h-7 text-black" strokeWidth={1.5} />,
      bgGlow: 'bg-[#FFFC00] shadow-[0_0_20px_rgba(255,252,0,0.5)]',
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
          className="relative w-36 h-36 rounded-full bg-gradient-to-tr from-amber-200 via-yellow-500 to-amber-700 p-[2px] mb-8 shadow-[0_0_50px_rgba(245,158,11,0.2)] group"
        >
          <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center overflow-hidden border-4 border-[#030303] relative">
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent" />
            
            {/* Crystal Icon */}
            <Gem className="w-16 h-16 text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.6)] transform group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
            
            {/* Sparkles */}
            <div className="absolute top-6 right-8 w-1 h-1 bg-white rounded-full shadow-[0_0_5px_white] animate-pulse" />
            <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-amber-200 rounded-full shadow-[0_0_8px_rgba(253,230,138,1)] animate-pulse delay-300" />
          </div>
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
              <div className={`relative flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center ${link.bgGlow} z-10`}>
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
      </motion.div>
    </div>
  );
}
