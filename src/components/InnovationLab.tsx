"use client";

export default function InnovationLab() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/10 rounded-full blur-3xl" />
        {/* Stars */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/30 animate-pulse"
            style={{
              top: `${(i * 17 + 5) % 100}%`,
              left: `${(i * 23 + 10) % 100}%`,
              animationDelay: `${(i * 0.3) % 3}s`,
              animationDuration: `${2 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-[#0d1225] to-[#0a0e1f] border border-white/10 rounded-3xl overflow-hidden">
          {/* Inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />

          <div className="grid lg:grid-cols-2 gap-12 items-center p-8 sm:p-12 lg:p-16">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-1.5 text-sm text-violet-300 font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                Innovation Lab
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                The Bigger Picture:{" "}
                <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Project Moon.
                </span>
              </h2>

              <p className="text-white/60 text-lg leading-relaxed mb-10">
                Our innovation lab,{" "}
                <strong className="text-white">Projects Moon</strong>, is where
                bold ideas take flight. It&apos;s the engine behind our
                long-term research, experimental technologies, and the moonshot
                ideas that will define Africa&apos;s digital century.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-violet-500/25 transition-all duration-200"
              >
                Partner With Us
              </a>
            </div>

            {/* Right: Visual */}
            <div className="relative flex items-center justify-center h-64 lg:h-auto min-h-[300px]">
              {/* Moon visual */}
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-violet-400/20 to-blue-400/20 border border-violet-500/30 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-violet-500/30 to-blue-500/30 border border-violet-400/40 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-400 to-blue-500 shadow-lg shadow-violet-500/50 flex items-center justify-center text-3xl">
                      🌙
                    </div>
                  </div>
                </div>
                {/* Orbiting dots */}
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <div
                    key={deg}
                    className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-violet-400/60"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${deg}deg) translateX(80px)`,
                    }}
                  />
                ))}
              </div>

              {/* Labels */}
              <div className="absolute top-4 right-4 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm">
                <div className="text-violet-300 font-semibold">R&D Active</div>
                <div className="text-white/40 text-xs">Since 2015</div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm">
                <div className="text-blue-300 font-semibold">Future-First</div>
                <div className="text-white/40 text-xs">Always iterating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
