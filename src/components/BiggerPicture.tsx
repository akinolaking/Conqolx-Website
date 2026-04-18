"use client";

import { Button, Chip, Icon, PlaceholderImage } from "@/components/ui";

const nav = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const TAGS = ["Fintech", "Biotech", "Data Privacy", "Cloud", "Logistics", "Commerce"];

export default function BiggerPicture() {
  return (
    <section id="vision" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative">
            <PlaceholderImage label="PROJECT MOON · INNOVATION LAB" aspect="4/5" tone="warm" className="shadow-2xl" />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-zinc-200 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[--cqx-primary]/10 flex items-center justify-center">
                  <Icon.spark className="text-[--cqx-primary]" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500">Now building</div>
                  <div className="text-sm font-semibold text-zinc-900">Next-gen fintech</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Chip color="warning" variant="flat" className="mb-5">The Bigger Picture</Chip>
            <h2 className="font-serif text-4xl md:text-6xl tracking-[-0.02em] leading-[1.05] text-zinc-900">
              Project Moon — where bold ideas take flight.
            </h2>
            <div className="mt-6 space-y-4 text-[17px] text-zinc-600 leading-relaxed">
              <p>
                Our innovation lab, <span className="font-semibold text-zinc-900">Project Moon</span>, is where imagination becomes infrastructure. From next-generation payment systems and thriving digital communities to breakthroughs in biotechnology and data privacy — we&apos;re shaping solutions that will define the next era.
              </p>
              <p>
                We&apos;re not just building for today&apos;s Africa. We&apos;re imagining the Africa of{" "}
                <span className="font-semibold text-zinc-900">2050</span> — and creating the tools it will need to lead the world.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {TAGS.map((t, i) => (
                <Chip key={i} variant="bordered" color="default">{t}</Chip>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="bordered" color="default" size="lg" onClick={() => nav("contact")} endContent={<Icon.arrow />}>
                Collaborate with Project Moon
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
