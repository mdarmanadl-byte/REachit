"use client";
import React from 'react';
import {
  Upload,
  ShieldCheck,
  Play,
  ArrowRight,
  TrendingUp,
  ChevronRight,
  CloudUpload,
  RadioTower,
  UserCircle2
} from 'lucide-react';

// CUSTOM SVG ICONS
const IconInstagram = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const IconX = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 4.07H5.078z"/></svg>
);
const IconFacebook = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
);
const IconYoutube = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);
const VerifiedCheck = () => (
  <svg className="w-3.5 h-3.5 text-[#0ea5e9]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z"/></svg>
);

export default function HeroSection() {
  const liveIncidents = [
    {
      image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=600&auto=format&fit=crop',
      duration: '0:45',
      badge: { text: 'VERIFIED', color: 'bg-[#0ea5e9]', icon: <ShieldCheck size={10} /> },
      title: 'Metro construction accident footage',
      ai: 'A metro site collapse injured several workers due to safety violations at the construction site.',
      user: 'Anonymous User',
      verifiedUser: false,
      socials: [
        <div key="ig1" className="w-6 h-6 rounded bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center"><IconInstagram size={12} /></div>,
        <div key="x1" className="w-6 h-6 rounded bg-black border border-slate-600 flex items-center justify-center"><IconX size={10} /></div>
      ],
      reach: '230K',
      growth: '+42%'
    },
    {
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
      duration: '1:02',
      badge: { text: 'TRENDING', color: 'bg-[#8b5cf6]', icon: <TrendingUp size={10} /> },
      title: 'University paper leak exposed',
      ai: 'Sensitive question paper was leaked hours before the exam. Students demand strict action.',
      user: 'Riya Sharma',
      verifiedUser: true,
      socials: [
        <div key="ig2" className="w-6 h-6 rounded bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center"><IconInstagram size={12} /></div>,
        <div key="x2" className="w-6 h-6 rounded bg-black border border-slate-600 flex items-center justify-center"><IconX size={10} /></div>,
        <div key="fb2" className="w-6 h-6 rounded bg-[#1877F2] flex items-center justify-center"><IconFacebook size={12} /></div>
      ],
      reach: '1.2M',
      growth: '+63%'
    },
    {
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop',
      duration: '0:37',
      badge: { text: 'LIVE', color: 'bg-[#ef4444]', icon: <RadioTower size={10} /> },
      title: 'Police harassment video',
      ai: 'Cop seen misbehaving with a youth on the street. Public reaction is massive.',
      user: 'Vikram J.',
      verifiedUser: false,
      socials: [
        <div key="ig3" className="w-6 h-6 rounded bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center"><IconInstagram size={12} /></div>,
        <div key="x3" className="w-6 h-6 rounded bg-black border border-slate-600 flex items-center justify-center"><IconX size={10} /></div>,
        <div key="yt3" className="w-6 h-6 rounded bg-[#ff0000] flex items-center justify-center"><IconYoutube size={12} /></div>
      ],
      reach: '890K',
      growth: '+28%'
    },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-24">
      {/* BACKGROUND IMAGE & GRADIENTS */}
      {/* BACKGROUND IMAGE & GRADIENTS */}
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

  {/* Image */}
  <div
  className="
    absolute left-0 top-0
    w-full md:w-[60%]
    h-[55vh] md:h-full
    bg-[url('/background.png')]
    bg-cover md:bg-contain
    bg-no-repeat
    bg-center md:bg-[position:0px_73px]
    opacity-50 md:opacity-80
  "
  />

  {/* Mobile only: fade bottom of image into dark so dashboard card below is clean */}
  <div className="md:hidden absolute left-0 right-0 top-[30vh] h-[28vh] bg-gradient-to-b from-transparent to-[#020611]" />

  {/* Desktop only: fade right edge of image */}
  <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[60%] bg-gradient-to-r from-transparent via-transparent to-[#020611]" />

  {/* Shared gradients — desktop text readability + top/bottom fades */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#020611] via-[#020611]/30 to-transparent" />
  <div className="absolute inset-0 bg-gradient-to-t from-[#020611] via-transparent to-[#020611]/40" />

</div>

      {/* FLOATING SOCIAL ICONS */}
      <div className="hidden md:block absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[32%] left-[41%] w-10 h-10 rounded-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(236,72,153,0.3)] opacity-70 animate-floating">
          <IconInstagram size={20} />
        </div>
        <div className="absolute top-[40%] left-[38%] w-11 h-11 rounded-xl bg-black border border-slate-700 flex items-center justify-center shadow-2xl opacity-70 animate-floating" style={{ animationDelay: '1.5s' }}>
          <IconX size={18} />
        </div>
        <div className="absolute top-[46%] left-[46.5%] w-10 h-10 rounded-xl bg-[#ff0000] flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.3)] opacity-70 animate-floating" style={{ animationDelay: '0.5s' }}>
          <IconYoutube size={20} />
        </div>
        <div className="absolute top-[56%] left-[47.5%] w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center shadow-lg opacity-70 animate-floating" style={{ animationDelay: '2s' }}>
          <IconFacebook size={18} />
        </div>
      </div>

      <div className="relative z-20 max-w-[1500px] mx-auto px-8 w-full flex flex-col lg:flex-row gap-12 lg:gap-8">
        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-8 pt-4">
          <div className="inline-flex items-center gap-2 bg-[#0d1526] border border-[#1e293b] px-3 py-1.5 rounded-full text-xs font-medium text-slate-300">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8]"></span>
            India's Live Incident Amplification Network
          </div>

          <h1 className="text-[56px] leading-[1.05] font-bold tracking-tight text-white">
            Stories That Matter.<br />
            <span className="text-[#38bdf8]">Finally Get Seen.</span>
          </h1>

          <p className="text-[17px] text-slate-300 leading-relaxed max-w-md">
            You record it. We verify it. We post it.<br />
            Your video goes out to millions through our official media & social channels.
          </p>

          {/* Stepper */}
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-3 border border-[#1e293b] rounded-lg p-2.5 bg-transparent">
              <Upload size={18} className="text-[#38bdf8]" />
              <span className="text-xs text-slate-300 font-medium leading-snug">Upload<br/>Your Video</span>
            </div>
            <ChevronRight size={14} className="text-slate-600" />
            <div className="flex items-center gap-3 border border-[#1e293b] rounded-lg p-2.5 bg-transparent">
              <ShieldCheck size={18} className="text-[#38bdf8]" />
              <span className="text-xs text-slate-300 font-medium leading-snug">We Verify<br/>& AI Summarize</span>
            </div>
            <ChevronRight size={14} className="text-slate-600" />
            <div className="flex items-center gap-3 border border-[#1e293b] rounded-lg p-2.5 bg-transparent">
              <RadioTower size={18} className="text-[#38bdf8]" />
              <span className="text-xs text-slate-300 font-medium leading-snug">We Amplify<br/>To Millions</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-2">
            <button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-7 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
              Submit Your Incident <CloudUpload size={18} />
            </button>
            <button className="border border-slate-600 hover:bg-slate-800 bg-transparent text-white px-7 py-3 rounded-lg font-medium flex items-center gap-3 transition-colors">
              <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center">
                <Play fill="currentColor" size={10} className="ml-0.5" />
              </div>
              See How It Works
            </button>
          </div>

          {/* Partners */}
          <div className="pt-8">
            <p className="text-slate-400 text-sm mb-4">Trusted by citizens. Amplified by media.</p>
            <div className="flex items-center gap-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Aaj_tak_logo.png" className="h-6 object-contain" alt="Aaj Tak" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/NDTV_logo.svg/2560px-NDTV_logo.svg.png" className="h-4 object-contain brightness-0 invert opacity-90" alt="NDTV" />
              <span className="font-serif font-bold text-xl tracking-tight opacity-90">THE HINDU</span>
              <span className="font-bold text-sm leading-none opacity-90 text-center">INDIA<br/>TODAY</span>
              <span className="font-bold text-lg tracking-tight opacity-90"><span className="text-red-500">ZEE</span>NEWS</span>
              <span className="text-xs text-slate-400 font-medium">& more</span>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT - DASHBOARD */}
        <div className="w-full lg:w-[580px] shrink-0">
          <div className="bg-[#0B1324] border border-[#1e293b] rounded-xl shadow-2xl flex flex-col">
            {/* Header */}
            <div className="h-12 px-5 border-b border-[#1e293b] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                <span className="text-[11px] font-bold tracking-widest text-white">LIVE MEDIA CONTROL ROOM</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#22c55e] text-xs font-medium">
                Live Updates <RadioTower size={14} />
              </div>
            </div>

            {/* List */}
            <div className="flex flex-col">
              {liveIncidents.map((incident, idx) => (
                <div key={idx} className={`p-5 flex gap-4 ${idx !== liveIncidents.length - 1 ? 'border-b border-[#1e293b]' : ''}`}>
                  {/* Image */}
                  <div className="relative w-[150px] h-[90px] rounded-lg overflow-hidden shrink-0 group cursor-pointer border border-[#1e293b]">
                    <img src={incident.image} className="w-full h-full object-cover group-hover:scale-105 transition-duration-500" alt={incident.title} />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                      <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center bg-black/40 backdrop-blur-sm">
                        <Play size={16} fill="white" className="ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-1.5 left-1.5 bg-black/80 px-1.5 py-0.5 rounded text-[10px] font-medium">
                      {incident.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider mb-2 ${incident.badge.color} text-white`}>
                      {incident.badge.icon} {incident.badge.text}
                    </div>
                    <h4 className="text-[15px] font-bold leading-tight mb-1 truncate text-white">{incident.title}</h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                      <span className="text-slate-300 font-medium">AI Summary:</span> {incident.ai}
                    </p>
                    <div className="flex items-center gap-1.5 mt-2.5 text-[11px] text-slate-300">
                      <UserCircle2 size={14} className="text-slate-500" />
                      {incident.user}
                      {incident.verifiedUser && <VerifiedCheck />}
                    </div>
                  </div>

                  {/* Stats Right */}
                  <div className="w-[100px] shrink-0 text-left border-l border-[#1e293b] pl-5 flex flex-col justify-center">
                    <p className="text-[9px] text-slate-500 mb-1.5">Posted on</p>
                    <div className="flex gap-1.5 mb-3">
                      {incident.socials}
                    </div>
                    <h3 className="text-2xl font-bold text-white leading-none mb-1">{incident.reach}</h3>
                    <p className="text-[10px] text-slate-400 mb-1">People Reached</p>
                    <p className="text-[10px] font-medium text-[#22c55e] flex items-center gap-1">
                      ↑ {incident.growth} <span className="text-slate-500">vs yesterday</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Chart Footer */}
            <div className="bg-[#050B14] p-5 flex items-center justify-between border-t border-[#1e293b] rounded-b-xl">
              <div className="flex items-center gap-4">
                <svg className="w-12 h-8" viewBox="0 0 100 40" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5,35 L25,20 L45,28 L75,10 L95,5" />
                  <polyline points="85,5 95,5 95,15" />
                </svg>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium tracking-wider uppercase mb-0.5">Videos Amplified Today</p>
                  <div className="flex items-end gap-3">
                    <h3 className="text-[32px] font-bold text-white leading-none">1.8M</h3>
                    <div className="pb-1">
                      <p className="text-[11px] font-bold text-[#22c55e]">▲ +37%</p>
                      <p className="text-[10px] text-slate-500">This Week</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="border border-[#1e293b] hover:bg-slate-800 text-white px-4 py-2 rounded text-xs font-medium flex items-center gap-2 transition-colors">
                View All Reports <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FEATURES */}
      <div className="relative z-20 max-w-[1500px] mx-auto px-8 w-full mt-12">
        <div className="bg-[#0B1324]/80 backdrop-blur-md border border-[#1e293b] rounded-2xl p-6 flex flex-col lg:flex-row gap-6 items-center shadow-lg">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[
              { icon: '⚡', title: 'AI Powered', desc: 'Smart summaries that make stories impactful' },
              { icon: '🌐', title: 'Media Network', desc: 'Shared across official pages & partners' },
              { icon: '📡', title: 'Maximum Reach', desc: 'Your incident reaches millions, not just friends' },
              { icon: '✓', title: 'Accountability', desc: 'More visibility. More action. Real change.' }
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded border border-slate-700 bg-[#0d1526] flex items-center justify-center shrink-0 text-white">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-white mb-0.5">{feature.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-[350px] shrink-0 border-t lg:border-t-0 lg:border-l border-[#1e293b] pt-5 lg:pt-0 lg:pl-6 flex gap-3">
            <span className="text-4xl text-slate-600 font-serif leading-none mt-1">"</span>
            <div>
              <p className="text-[12px] text-slate-300 leading-relaxed mb-3">
                Before ReachIt, my video had 200 views.<br/>
                After they posted it, it reached <span className="text-white font-semibold">1.3M people.</span><br/>
                Finally, someone listened.
              </p>
              <div className="flex items-center gap-2">
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop" className="w-5 h-5 rounded-full object-cover" alt="Arjun" />
                <span className="text-[11px] text-slate-400">— Arjun, Student</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
