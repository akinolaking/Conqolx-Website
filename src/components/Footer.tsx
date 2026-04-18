"use client";

import { Logo } from "@/components/ui";
import { PRODUCTS } from "@/components/Products";

const navLinks = ["Home", "Vision", "Approach", "Products", "Contact"];

const nav = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Logo onDark />
            <p className="mt-4 text-white/60 max-w-sm leading-relaxed">
              Technology-focused company developing software and hardware solutions for Africa and the world.{" "}
              <span className="italic">...exploring the future with you.</span>
            </p>
            <div className="mt-6 text-xs text-white/40 font-mono">RC 1755966 · Lagos, Nigeria</div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-white/40 mb-4">Explore</div>
            <div className="space-y-2">
              {navLinks.map((l) => (
                <button key={l} onClick={() => nav(l.toLowerCase())} className="block text-sm text-white/70 hover:text-white transition-colors">
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-white/40 mb-4">Products</div>
            <div className="space-y-2">
              {PRODUCTS.map((p) => (
                <a key={p.id} href={`https://${p.url}`} target="_blank" rel="noopener noreferrer" className="block text-sm text-white/70 hover:text-white transition-colors">
                  {p.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/40">
          <div>© 2026 Conqol-X Technologies Limited. All rights reserved.</div>
          <div>Registered in the United Kingdom (RC: 14565201) and Nigeria (RC: 1755966).</div>
        </div>
      </div>
    </footer>
  );
}
