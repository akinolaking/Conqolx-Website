"use client";

import { useState, useEffect } from "react";
import { Button, Logo, cn } from "@/components/ui";

const links = [
  { id: "home", label: "Home" },
  { id: "vision", label: "Vision" },
  { id: "approach", label: "Approach" },
  { id: "products", label: "Products" },
  { id: "impact", label: "Impact" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.id);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const nav = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/80 backdrop-blur-xl border-b border-black/5" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => nav(l.id)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
                active === l.id ? "text-[--cqx-primary]" : "text-zinc-700 hover:text-zinc-900"
              )}
            >
              {l.label}
              {active === l.id && (
                <span className="absolute inset-x-4 -bottom-0.5 h-0.5 bg-[--cqx-primary] rounded-full" />
              )}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="shadow" color="primary" size="md" onClick={() => nav("contact")}>
            Collaborate
          </Button>
        </div>

        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            ) : (
              <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-black/5 px-5 py-3">
          {links.map((l) => (
            <button key={l.id} onClick={() => nav(l.id)} className="block w-full text-left py-3 text-sm font-medium text-zinc-800 border-b border-zinc-100 last:border-0">
              {l.label}
            </button>
          ))}
          <Button variant="shadow" color="primary" className="w-full mt-3" onClick={() => nav("contact")}>
            Collaborate
          </Button>
        </div>
      )}
    </nav>
  );
}
