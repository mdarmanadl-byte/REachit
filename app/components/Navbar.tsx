"use client";

import React, { useState } from "react";
import { RadioTower, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "how", label: "How It Works" },
    { id: "impact", label: "Impact" },
    { id: "example", label: "Examples" },
    { id: "media", label: "For Media" },
    { id: "about", label: "About Us" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-[#1e293b] bg-[#020611]/90 backdrop-blur-md">
      <div className="max-w-[1500px] mx-auto px-8 h-[72px] flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#home" className="flex items-center gap-2">
          <RadioTower className="text-[#38bdf8]" size={24} />

          <div>
            <h1 className="text-lg font-bold tracking-tight leading-none text-white">
              ReachIt
            </h1>

            <p className="text-[10px] text-slate-400 tracking-wide mt-0.5">
              Your incident. Our reach.
            </p>
          </div>
        </a>

        {/* NAV LINKS */}
        <div className="hidden lg:flex items-center gap-10 text-[13px] font-medium">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className={`py-[25px] transition-all duration-300 border-b-2 ${
                active === item.id
                  ? "text-[#38bdf8] border-[#38bdf8]"
                  : "text-slate-300 border-transparent hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* BUTTON */}
        <button className="bg-[#0ea5e9] hover:bg-[#0284c7] hover:scale-105 text-white px-5 py-2 rounded font-medium flex items-center gap-2 text-sm transition-all duration-300 shadow-[0_0_15px_rgba(14,165,233,0.2)]">
          Reach Engine
          <ArrowRight size={16} />
        </button>
      </div>
    </nav>
  );
}