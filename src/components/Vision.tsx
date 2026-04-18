"use client";

import { Card, CardContent } from "@heroui/react";

const goals = [
  {
    icon: "🛡️",
    text: "Become a custodian of Africa's data and digital infrastructure.",
  },
  {
    icon: "🌍",
    text: "Drive inclusion in finance, education, and commerce.",
  },
  {
    icon: "🚀",
    text: "Build scalable solutions that evolve with the future.",
  },
];

export default function Vision() {
  return (
    <section id="vision" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 text-sm text-blue-300 font-medium mb-6">
              Vision — The Future Starts Here
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Africa is filled with{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                untapped potential.
              </span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              At Conqol-X, our mission is to unlock it through technology that
              bridges gaps, fuels business growth, and improves lives across the
              continent and beyond.
            </p>

            <p className="text-white/80 font-semibold mb-5 text-base uppercase tracking-wider">
              Our 10-year goals
            </p>
            <div className="flex flex-col gap-4">
              {goals.map((goal, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/8 transition-colors"
                >
                  <span className="text-2xl flex-shrink-0">{goal.icon}</span>
                  <p className="text-white/75 leading-relaxed">{goal.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-blue-600/20 rounded-3xl blur-2xl" />
            <Card className="relative bg-[#0d1225]/80 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">
              <CardContent className="p-8 sm:p-10">
                {/* Decorative top bar */}
                <div className="flex gap-2 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-violet-400 text-xs font-mono uppercase tracking-widest mb-2">
                      Mission Terminal v1.0
                    </div>
                    <div className="font-mono text-white/80 text-sm leading-relaxed">
                      <span className="text-green-400">$ </span>
                      <span className="text-blue-300">conqolx</span>{" "}
                      <span className="text-yellow-300">--unlock</span>{" "}
                      africa.potential
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6 space-y-3">
                    {[
                      "Scanning untapped markets...",
                      "Building digital bridges...",
                      "Scaling solutions...",
                    ].map((line, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{ animationDelay: `${i * 0.4}s` }} />
                        <span className="text-white/60 font-mono text-sm">{line}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <div className="text-white/40 font-mono text-xs">
                      Status: <span className="text-green-400">ACTIVE</span> —
                      Target: <span className="text-violet-400">2035</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
