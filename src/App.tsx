import React from 'react';
import { Instagram, Phone, ChevronLeft, MapPin, Printer, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

const LINKS = [
  {
    name: 'ئینستاگرام',
    username: '@cristal_reva',
    icon: <Instagram className="w-7 h-7 text-white" />,
    url: 'instagram://user?username=cristal_reva',
    fallbackUrl: 'https://www.instagram.com/cristal_reva/',
    iconBg: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]',
    iconShadow: 'shadow-[0_0_20px_rgba(219,39,119,0.5)]'
  },
  {
    name: 'سناپچات',
    username: 'cristalrevacr20',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 448 512">
        <path fill="#ffffff" stroke="#000000" strokeWidth="20" d="M424.2 340.3c-11.4-11.2-31.6-16.2-58.4-14.7-1.7-27.2-2.5-55.6-2.5-84.2 0-38.5-12.2-73.4-36.8-100.4C302.2 114.3 266.3 100 224 100c-42.3 0-78.2 14.3-102.5 41-24.6 27-36.8 61.9-36.8 100.4 0 28.6-.8 57-2.5 84.2-26.8-1.5-47 3.5-58.4 14.7-12.3 12.1-16.3 27.9-11.6 45.5 4.3 16.2 15.3 29.8 31.8 39.1 14.5 8.2 32.8 12.6 52.8 12.6 11.2 0 22.8-1.4 34.5-4.2 16.4-3.9 33.4-8.1 50.2-8.1 16.1 0 32.2 3.9 47.8 7.6 15.2 3.6 30.1 7.2 44.7 7.2 14.6 0 29.5-3.6 44.7-7.2 15.6-3.7 31.7-7.6 47.8-7.6 16.8 0 33.8 4.2 50.2 8.1 11.7 2.8 23.3 4.2 34.5 4.2 20 0 38.3-4.4 52.8-12.6 16.5-9.3 27.5-22.9 31.8-39.1 4.7-17.6.7-33.4-11.6-45.5z"/>
      </svg>
    ),
    url: 'snapchat://add/cristalrevacr20',
    fallbackUrl: 'https://www.snapchat.com/add/cristalrevacr20',
    iconBg: 'bg-[#FFFC00]',
    iconShadow: 'shadow-[0_0_25px_rgba(255,252,0,0.7)]',
    iconColor: 'text-black'
  },
  {
    name: 'تیکتۆک',
    username: '@cristal.reva',
    icon: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 448 512">
        <path fill="currentColor" d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
      </svg>
    ),
    url: 'tiktok://user?screen_name=cristal.reva',
    fallbackUrl: 'https://www.tiktok.com/@cristal.reva',
    iconBg: 'bg-black',
    iconShadow: 'shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-white/20'
  },
  {
    name: 'پەیوەندی کردن',
    username: '0750 194 9446',
    icon: <Phone className="w-7 h-7 text-white" />,
    url: 'tel:+9647501949446',
    fallbackUrl: 'tel:+9647501949446',
    iconBg: 'bg-emerald-500',
    iconShadow: 'shadow-[0_0_20px_rgba(16,185,129,0.5)]'
  }
];

export default function App() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof LINKS[0]) => {
    e.preventDefault();
    window.location.href = link.url;
    setTimeout(() => {
      window.location.href = link.fallbackUrl;
    }, 500);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#030303] text-zinc-100 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        {/* Sparkles */}
        <div className="absolute top-4 right-10 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_white] animate-pulse z-20"></div>
        <div className="absolute bottom-6 left-10 w-2 h-2 bg-amber-200 rounded-full shadow-[0_0_10px_rgba(253,230,138,1)] animate-pulse delay-300 z-20"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md flex flex-col items-center"
      >
        {/* Profile Section */}
        <div className="relative w-48 h-48 mb-6 group flex items-center justify-center">
          <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full transform group-hover:scale-110 transition-transform duration-500"></div>
          
          <motion.div 
            className="relative w-full h-full z-10 flex items-center justify-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.img 
              src="https://i.ibb.co/4nmYRhrL/cropped-circle-image-1.png" 
              alt="Cristal Reva" 
              className="w-full h-full object-contain cursor-pointer drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]"
              style={{ 
                filter: 'invert(1) sepia(1) saturate(5) hue-rotate(-10deg) contrast(1.2)',
                mixBlendMode: 'screen'
              }}
              referrerPolicy="no-referrer"
              whileHover={{ scale: 1.08, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            />
          </motion.div>
        </div>

        <div className="flex flex-col items-center mb-10">
          <h1 className="text-4xl font-serif tracking-widest mb-3 text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-600 uppercase">
            CRISTAL REVA
          </h1>
          <div className="flex items-center gap-2 text-amber-200/80 bg-amber-900/20 px-4 py-1.5 rounded-full border border-amber-500/20">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide">قەڵادزێ - بازاڕی سەردەم</span>
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full space-y-5">
          {LINKS.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.fallbackUrl}
              onClick={(e) => handleClick(e, link)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative p-4 rounded-[14px] bg-white/[0.03] border border-white/10 overflow-hidden flex items-center w-full transition-all duration-300 hover:bg-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <div className={`w-14 h-14 rounded-[14px] flex items-center justify-center flex-shrink-0 ${link.iconBg} ${link.iconShadow} ${link.iconColor || ''}`}>
                {link.icon}
              </div>

              <div className="mr-5 flex-1 flex flex-col items-start z-10">
                <span className="text-lg font-bold text-zinc-100 tracking-wide group-hover:text-white transition-colors">{link.name}</span>
                <span className="text-sm text-zinc-400 font-mono mt-0.5 opacity-80 group-hover:text-amber-200/80 transition-colors">{link.username}</span>
              </div>

              <div className="absolute left-5 text-zinc-600 group-hover:text-amber-400 transition-colors duration-300 transform group-hover:-translate-x-1 z-10">
                <ChevronLeft className="w-6 h-6" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 w-full"
        >
          <div className="relative p-6 rounded-2xl bg-gradient-to-b from-amber-900/10 to-transparent border-t border-amber-500/20 text-center overflow-hidden">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
             <p className="text-amber-300 font-serif text-lg tracking-wide drop-shadow-[0_0_15px_rgba(251,191,36,0.6)] leading-relaxed">
               "لەبیرت نەچێت جوانی تۆ بۆ ئێمە گرینگە"
             </p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.a 
          href="https://chaplin-chap.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 mb-8 flex flex-col items-center justify-center gap-5 opacity-90 hover:opacity-100 transition-all duration-300 group cursor-pointer"
        >
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-amber-500/10 group-hover:border-amber-500/40 transition-all duration-300 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <span className="text-sm sm:text-base text-zinc-300 font-medium tracking-wider group-hover:text-amber-300 transition-colors z-10 flex items-center gap-2">
              دروستکاروە لەلایەن <span className="text-amber-500 font-bold group-hover:text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]">(چاپلین چاپ)</span>
              <ExternalLink className="w-4 h-4 text-amber-500/70 group-hover:text-amber-400 group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 transition-all duration-300" />
            </span>
          </div>
          
          <div className="h-20 bg-black/50 px-6 py-3 rounded-2xl border border-white/10 flex items-center justify-center shadow-lg group-hover:border-amber-500/30 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.15)] transition-all">
             <motion.div
               className="h-full flex items-center justify-center"
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             >
               <motion.img 
                 src="https://i.ibb.co/rRShnzK8/chaplin.jpg" 
                 alt="Chaplin Print" 
                 className="h-full w-auto object-contain mix-blend-screen"
                 whileHover={{ scale: 1.08, rotate: 5 }}
                 whileTap={{ scale: 0.95 }}
                 transition={{ type: "spring", stiffness: 300, damping: 15 }}
               />
             </motion.div>
          </div>

          {/* Beautiful Chaplin Chap Button */}
          <div className="relative group/btn mt-2">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 rounded-full blur opacity-40 group-hover/btn:opacity-100 transition duration-500 group-hover/btn:duration-200 animate-pulse"></div>
            <div className="relative flex items-center gap-3 px-8 py-3.5 bg-zinc-950 rounded-full border border-amber-500/50 leading-none shadow-2xl">
              <span className="text-amber-400 font-bold tracking-widest uppercase text-sm sm:text-base group-hover/btn:text-amber-300 transition-colors drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">
                Chaplin Chap
              </span>
              <svg className="w-5 h-5 text-amber-400 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </motion.a>
      </motion.div>
    </div>
  );
}
