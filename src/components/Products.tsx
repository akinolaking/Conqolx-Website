"use client";


const products = [
  {
    name: "Veeb.site",
    tagline: "AI-Powered WordPress Website Builder",
    description:
      "Launch a professional website in minutes — no code, no delays.",
    detail: "Perfect for: freelancers, small businesses, and agencies",
    status: "Live",
    statusColor: "success" as const,
    gradient: "from-violet-600/20 to-purple-600/20",
    border: "border-violet-500/20 hover:border-violet-500/40",
    icon: "🌐",
    cta: "Visit Veeb.site",
  },
  {
    name: "OneNet Servers",
    tagline: "AI Web Hosting & Infrastructure",
    description:
      "Fast, secure, and scalable hosting designed for the modern web.",
    detail: "Enterprise-grade infrastructure with AI-powered optimizations",
    status: "Live",
    statusColor: "success" as const,
    gradient: "from-blue-600/20 to-indigo-600/20",
    border: "border-blue-500/20 hover:border-blue-500/40",
    icon: "🖥️",
    cta: "Explore OneNet",
  },
  {
    name: "Mola",
    tagline: "The Local-First African Marketplace",
    description:
      "Empowering African merchants to sell locally and globally with ease.",
    detail: "Bridging the gap between local artisans and global commerce",
    status: "In Development",
    statusColor: "warning" as const,
    gradient: "from-orange-600/20 to-amber-600/20",
    border: "border-orange-500/20 hover:border-orange-500/40",
    icon: "🛒",
    cta: "Join Waitlist",
  },
  {
    name: "Shop8",
    tagline: "Seamless E-Commerce",
    description: "Your online store, simplified.",
    detail: "Everything you need to start, run, and grow your online business",
    status: "In Development",
    statusColor: "warning" as const,
    gradient: "from-green-600/20 to-teal-600/20",
    border: "border-green-500/20 hover:border-green-500/40",
    icon: "🏪",
    cta: "Join Waitlist",
  },
];

export default function Products() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-1.5 text-sm text-violet-300 font-medium mb-6">
            Our Products
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Tools built for{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              real-world impact.
            </span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Each product in our portfolio addresses a specific gap in Africa's
            digital economy — from web presence to e-commerce infrastructure.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className={`relative group rounded-2xl border ${product.border} bg-gradient-to-br ${product.gradient} backdrop-blur-sm p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20`}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/[0.02] transition-all duration-300" />

              {/* Top row */}
              <div className="flex items-start justify-between mb-6 relative">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
                    {product.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {product.name}
                    </h3>
                    <p className="text-white/50 text-sm">{product.tagline}</p>
                  </div>
                </div>
                <span
                  className={`flex-shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                    product.statusColor === "success"
                      ? "bg-green-500/15 text-green-400"
                      : "bg-yellow-500/15 text-yellow-400"
                  }`}
                >
                  {product.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-white/80 text-base leading-relaxed mb-3 relative">
                {product.description}
              </p>
              <p className="text-white/45 text-sm leading-relaxed mb-8 relative">
                {product.detail}
              </p>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center border border-white/20 text-white hover:bg-white/10 rounded-full font-medium text-sm px-4 py-2 transition-all relative"
              >
                {product.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
