"use client";

import { Button, Chip, Icon } from "@/components/ui";

const nav = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const MARQUEE_ITEMS = ["Veeb.site", "OneNet Servers", "Mola", "Shop8", "Yebovest", "RIBS", "Project Moon"];

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-20 overflow-hidden">
      {/* Decorative gradient mesh */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 -left-32 w-[520px] h-[520px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--cqx-accent), transparent 70%)" }}
        />
        <div
          className="absolute top-20 right-0 w-[620px] h-[620px] rounded-full opacity-35 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--cqx-primary), transparent 70%)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)",
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <Chip
            variant="flat"
            color="primary"
            size="md"
            className="mb-6"
            startContent={<span className="w-1.5 h-1.5 rounded-full bg-[--cqx-primary] animate-pulse" />}
          >
            RC 1755966 · Lagos · Exploring the future with you
          </Chip>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-[84px] leading-[1.05] tracking-[-0.03em] text-zinc-900">
            <span className="block">Building Africa&apos;s future</span>
            <span className="block">
              <span className="italic bg-gradient-to-r from-[--cqx-accent] via-[--cqx-primary] to-violet-600 bg-clip-text text-transparent">
                one drop
              </span>
              <span>{" "}at a time.</span>
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed">
            Conqol-X Technologies Limited is more than a tech company. We&apos;re explorers, inventors, and builders — shipping market-ready software and hardware solutions for Africa and the world.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 w-full justify-center">
            <Button
              variant="shadow"
              color="primary"
              size="lg"
              onClick={() => nav("contact")}
              endContent={<Icon.arrow />}
            >
              Collaborate With Us
            </Button>
            <Button
              variant="bordered"
              color="default"
              size="lg"
              onClick={() => nav("products")}
              startContent={<Icon.play />}
            >
              See what we&apos;ve built
            </Button>
          </div>

          {/* Stats strip */}
          <div className="mt-16 grid grid-cols-3 gap-6 md:gap-12 w-full max-w-3xl">
            {[
              { n: "2", l: "Live Products" },
              { n: "3", l: "In Development" },
              { n: "10yr", l: "Vision horizon" },
            ].map((s, i) => (
              <div key={i} className="text-left border-l-2 border-zinc-200 pl-4">
                <div className="font-serif text-3xl md:text-4xl tracking-tight text-zinc-900">{s.n}</div>
                <div className="text-xs md:text-sm text-zinc-500 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-20 overflow-hidden">
          <div className="text-center text-xs uppercase tracking-[0.3em] text-zinc-400 mb-6">
            Projects Moon · the innovation lab
          </div>
          <div className="relative">
            <div className="flex gap-6 animate-marquee" style={{ width: "max-content" }}>
              {[...Array(2)].map((_, r) => (
                <div key={r} className="flex gap-6">
                  {MARQUEE_ITEMS.map((p, i) => (
                    <div key={i} className="flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-zinc-200 shrink-0">
                      <span className="w-2 h-2 rounded-full bg-[--cqx-primary]" />
                      <span className="text-sm font-medium text-zinc-700">{p}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
