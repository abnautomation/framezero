"use client";

import { motion } from "framer-motion";

/* Shared gradient defs so every scene shares the Lantern & Ember palette */
function Defs() {
  return (
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#1b3a44" />
        <stop offset="1" stopColor="#3a2440" />
      </linearGradient>
      <linearGradient id="ember" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffcd6b" />
        <stop offset="0.55" stopColor="#ff5a3c" />
        <stop offset="1" stopColor="#e8410f" />
      </linearGradient>
      <linearGradient id="teal" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#4fb8c9" />
        <stop offset="1" stopColor="#1f7d72" />
      </linearGradient>
      <radialGradient id="moon" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#fff4d6" />
        <stop offset="1" stopColor="#f2a93b" />
      </radialGradient>
    </defs>
  );
}

/** The hero diorama — a parchment-framed cinematic scene with parallax layers. */
export function HeroDiorama() {
  return (
    <svg viewBox="0 0 420 520" className="w-full h-full" role="img" aria-label="An animated dusk scene with a small character looking at the moon">
      <Defs />
      {/* sky */}
      <rect x="0" y="0" width="420" height="520" rx="22" fill="url(#sky)" />
      {/* stars */}
      {[[60,70],[120,40],[300,60],[360,120],[250,90],[90,140],[330,200]].map(([x,y],i)=>(
        <motion.circle key={i} cx={x} cy={y} r="2" fill="#fff4d6"
          animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2 + i*0.4, repeat: Infinity }} />
      ))}
      {/* moon */}
      <motion.circle cx="305" cy="135" r="48" fill="url(#moon)"
        animate={{ y: [0, -6, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
      <circle cx="290" cy="125" r="48" fill="url(#sky)" opacity="0.5" />
      {/* far hills */}
      <path d="M0 360 Q105 300 210 350 T420 340 V520 H0 Z" fill="#214049" opacity="0.85" />
      {/* mid hills (teal) */}
      <path d="M0 410 Q120 350 240 400 T420 395 V520 H0 Z" fill="url(#teal)" opacity="0.55" />
      {/* foreground hill */}
      <path d="M0 455 Q140 415 280 450 T420 445 V520 H0 Z" fill="#15323a" />
      {/* little character on the hill */}
      <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
        <ellipse cx="150" cy="452" rx="26" ry="6" fill="#0b1f24" opacity="0.5" />
        {/* body */}
        <path d="M138 452 q-2 -34 12 -34 q14 0 12 34 Z" fill="url(#ember)" />
        {/* head */}
        <circle cx="150" cy="408" r="15" fill="#ffe9c2" />
        <path d="M135 405 a15 15 0 0 1 30 0 Z" fill="#3a2440" />
        {/* eyes */}
        <circle cx="145" cy="410" r="2" fill="#1a1410" />
        <circle cx="155" cy="410" r="2" fill="#1a1410" />
        {/* tiny lantern */}
        <line x1="170" y1="430" x2="178" y2="438" stroke="#3a2440" strokeWidth="2" />
        <motion.circle cx="182" cy="444" r="7" fill="url(#moon)"
          animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2.2, repeat: Infinity }} />
      </motion.g>
      {/* fireflies */}
      {[[80,420],[250,400],[330,430],[200,360]].map(([x,y],i)=>(
        <motion.circle key={i} cx={x} cy={y} r="2.5" fill="#7fe7d4"
          animate={{ y: [0,-12,0], opacity:[0.3,1,0.3] }} transition={{ duration: 3+i, repeat: Infinity }} />
      ))}
    </svg>
  );
}

/** A floating storyboard panel (used as decorative card). */
export function StoryboardCard({ variant = 0 }: { variant?: number }) {
  const scenes = [
    <g key="a"><circle cx="40" cy="34" r="14" fill="url(#ember)" /><path d="M10 70 q30 -22 60 0" stroke="url(#teal)" strokeWidth="4" fill="none" /></g>,
    <g key="b"><rect x="22" y="22" width="36" height="36" rx="6" fill="url(#teal)" /><circle cx="40" cy="40" r="8" fill="#ffcd6b" /></g>,
    <g key="c"><path d="M24 56 L40 20 L56 56 Z" fill="url(#ember)" /><circle cx="40" cy="60" r="4" fill="#4fb8c9" /></g>,
  ];
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <Defs />
      <rect x="2" y="2" width="76" height="76" rx="12" fill="#142e34" />
      {scenes[variant % scenes.length]}
    </svg>
  );
}

/** Parametric chapter scene — distinct hand-built illustration per chapter. */
export function ChapterScene({ variant }: { variant: number }) {
  return (
    <svg viewBox="0 0 360 360" className="w-full h-full" aria-hidden>
      <Defs />
      <rect x="0" y="0" width="360" height="360" rx="26" fill="url(#sky)" />
      {/* floating particles */}
      {[[60,80],[300,70],[320,250],[70,280],[180,50]].map(([x,y],i)=>(
        <motion.circle key={i} cx={x} cy={y} r="3" fill="#ffcd6b"
          animate={{ y:[0,-10,0], opacity:[0.3,1,0.3] }} transition={{ duration:3+i, repeat:Infinity }} />
      ))}

      {variant === 0 && ( /* Basics — a spark of imagination */
        <motion.g animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "180px 180px" }}>
          <circle cx="180" cy="180" r="70" fill="none" stroke="url(#ember)" strokeWidth="3" strokeDasharray="6 10" />
          <circle cx="180" cy="180" r="40" fill="url(#ember)" opacity="0.9" />
          <path d="M180 150 l8 22 22 8 -22 8 -8 22 -8-22 -22-8 22-8 Z" fill="#fff4d6" />
        </motion.g>
      )}
      {variant === 1 && ( /* 3D — a floating cube character */
        <motion.g animate={{ y:[0,-14,0] }} transition={{ duration:5, repeat:Infinity, ease:"easeInOut" }}>
          <path d="M180 110 L240 145 L240 215 L180 250 L120 215 L120 145 Z" fill="url(#teal)" />
          <path d="M180 110 L240 145 L180 180 L120 145 Z" fill="#6fd8c4" />
          <path d="M180 180 L240 145 L240 215 L180 250 Z" fill="#1f7d72" />
          <circle cx="165" cy="200" r="6" fill="#fff4d6" />
          <circle cx="200" cy="190" r="6" fill="#fff4d6" />
        </motion.g>
      )}
      {variant === 2 && ( /* Cartoon — a smiley character */
        <motion.g animate={{ rotate:[-4,4,-4] }} transition={{ duration:4, repeat:Infinity, ease:"easeInOut" }} style={{ transformOrigin:"180px 180px" }}>
          <circle cx="180" cy="180" r="66" fill="url(#ember)" />
          <circle cx="158" cy="168" r="9" fill="#1a1410" />
          <circle cx="202" cy="168" r="9" fill="#1a1410" />
          <circle cx="161" cy="165" r="3" fill="#fff" />
          <circle cx="205" cy="165" r="3" fill="#fff" />
          <path d="M150 200 q30 30 60 0" stroke="#1a1410" strokeWidth="6" fill="none" strokeLinecap="round" />
          <circle cx="138" cy="195" r="8" fill="#ff8a6b" opacity="0.6" />
          <circle cx="222" cy="195" r="8" fill="#ff8a6b" opacity="0.6" />
        </motion.g>
      )}
      {variant === 3 && ( /* Filmmaking — clapperboard + frame */
        <motion.g animate={{ y:[0,-8,0] }} transition={{ duration:5, repeat:Infinity, ease:"easeInOut" }}>
          <rect x="110" y="140" width="140" height="100" rx="10" fill="#142e34" stroke="url(#teal)" strokeWidth="3" />
          <motion.rect x="110" y="120" width="140" height="26" rx="6" fill="url(#ember)"
            animate={{ rotate:[0,-18,0] }} transition={{ duration:3, repeat:Infinity, repeatDelay:1 }} style={{ transformOrigin:"112px 133px" }} />
          {[0,1,2,3].map(i=>(<rect key={i} x={118+i*34} y="124" width="14" height="18" rx="2" fill="#142e34" transform={`skewX(-15)`} />))}
          <path d="M165 175 L205 190 L165 205 Z" fill="url(#ember)" />
        </motion.g>
      )}
      {variant === 4 && ( /* Content — rocket / growth */
        <motion.g animate={{ y:[0,-16,0] }} transition={{ duration:4, repeat:Infinity, ease:"easeInOut" }}>
          <path d="M180 110 q34 30 28 84 l-56 0 q-6 -54 28 -84 Z" fill="url(#ember)" />
          <circle cx="180" cy="160" r="13" fill="#142e34" />
          <circle cx="180" cy="160" r="6" fill="#7fe7d4" />
          <path d="M152 194 l-16 26 24 -8 Z" fill="url(#teal)" />
          <path d="M208 194 l16 26 -24 -8 Z" fill="url(#teal)" />
          <motion.path d="M168 200 q12 40 24 0" fill="#ffcd6b"
            animate={{ opacity:[0.4,1,0.4], scaleY:[0.8,1.2,0.8] }} transition={{ duration:0.6, repeat:Infinity }} style={{ transformOrigin:"180px 200px" }} />
        </motion.g>
      )}
    </svg>
  );
}
