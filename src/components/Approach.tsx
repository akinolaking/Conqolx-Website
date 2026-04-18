"use client";

const steps = [
  {
    number: "01",
    title: "Identify the Gap",
    description:
      "We research real problems facing African businesses and communities — not hypothetical ones.",
    color: "from-violet-500 to-purple-600",
  },
  {
    number: "02",
    title: "Build with Intent",
    description:
      "Every product is crafted with precision, starting small, iterating fast, and scaling responsibly.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    number: "03",
    title: "Grow the Impact",
    description:
      "We measure success not just in revenue, but in lives changed and businesses empowered.",
    color: "from-indigo-500 to-blue-600",
  },
];

export default function Approach() {
  return (
    <section id="impact" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-1.5 text-sm text-indigo-300 font-medium mb-6">
            Approach
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Innovation in Drops,{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Impact in Oceans.
            </span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            We believe in the power of small, strategic steps. Each product we
            build is a drop that creates ripples — growing into an ocean of
            lasting impact across Africa and beyond.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative group">
              {/* Connector line (hidden on last) */}
              <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-white/20 to-transparent z-10 last:hidden" />

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-300 h-full">
                {/* Number badge */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} text-white font-black text-lg mb-6 shadow-lg`}
                >
                  {step.number}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-violet-600/10 via-indigo-600/10 to-blue-600/10 border border-white/10 rounded-2xl px-8 py-6 max-w-2xl">
            <p className="text-white/70 text-lg italic leading-relaxed">
              &quot;We don&apos;t wait for the future — we build it, one
              innovation at a time.&quot;
            </p>
            <p className="text-violet-400 font-semibold mt-3 text-sm">
              — ConqolX Technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
