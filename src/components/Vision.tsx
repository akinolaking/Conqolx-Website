"use client";

import { Button, Chip, Icon } from "@/components/ui";

const nav = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const goals = [
  {
    title: "Custodian of Africa's data",
    body: "Building the Big Data infrastructure that guarantees every African privacy, financial, and social inclusion.",
    icon: <Icon.shield />,
  },
  {
    title: "Drive inclusion",
    body: "Unlock finance, education, and commerce for the next generation — across every African market.",
    icon: <Icon.globe />,
  },
  {
    title: "Scale with the future",
    body: "Solutions that compound: each product evolves into infrastructure the next decade depends on.",
    icon: <Icon.brain />,
  },
];

const team = [
  { name: "Hafeez Alao", role: "Director & Co-founder" },
  { name: "Muyiwa Akinola", role: "Director & Co-founder" },
];

export default function Vision() {
  return (
    <section id="impact" className="py-20 md:py-28 relative overflow-hidden bg-zinc-950 text-white">
      <div
        className="absolute inset-0 -z-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(236,139,79,0.25), transparent 50%), radial-gradient(ellipse at bottom right, rgba(103,71,232,0.35), transparent 55%)",
        }}
      />
      <div
        className="absolute inset-0 -z-0"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <Chip color="warning" variant="flat" className="mb-5 bg-[--cqx-accent]/20 text-[--cqx-accent]">
              10-Year Vision
            </Chip>
            <h2 className="font-serif text-4xl md:text-6xl tracking-[-0.02em] leading-[1.05]">
              The future starts here.
            </h2>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl">
              Africa is filled with untapped potential. At Conqol-X, our mission is to unlock it through technology that bridges gaps, fuels business growth, and improves lives.
            </p>
            <div className="mt-8">
              <Button variant="shadow" color="warning" size="lg" onClick={() => nav("contact")} endContent={<Icon.arrow />}>
                Discover our impact
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            {goals.map((g, i) => (
              <div key={i} className="group relative p-6 rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[--cqx-accent] to-[--cqx-primary] flex items-center justify-center shrink-0 text-white">
                    {g.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">{g.title}</h3>
                      <span className="text-xs font-mono text-white/40">0{i + 1}</span>
                    </div>
                    <p className="mt-2 text-sm text-white/60 leading-relaxed">{g.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team strip */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <Chip variant="flat" className="mb-3 bg-white/10 text-white">Team</Chip>
              <h3 className="font-serif text-3xl md:text-4xl tracking-tight">Led by builders, for builders.</h3>
            </div>
            <p className="text-white/60 text-sm max-w-sm">An industry-leading team turning bold imagination into markets.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {team.map((p, i) => (
              <div key={i} className="flex items-center gap-5 p-5 rounded-3xl bg-white/[0.04] border border-white/10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[--cqx-accent] to-[--cqx-primary] flex items-center justify-center font-serif text-xl">
                  {p.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1">
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-white/60">{p.role}</div>
                </div>
                <Icon.arrow className="text-white/40" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
