"use client";

import { Chip, Accordion } from "@/components/ui";

const items = [
  {
    title: "What does Conqol-X actually do?",
    content: "We build software and hardware solutions across industrial, commercial, fintech, biotech, data, security, entertainment, education, computation, privacy, and transport markets — with a focus on African problems worth solving.",
  },
  {
    title: "What products are live today?",
    content: "Veeb.site (AI WordPress website builder) and OneNet Servers (AI-driven hosting & infrastructure) are both live. Mola, Shop8, and RIBS are in active development within Project Moon.",
  },
  {
    title: "What is Project Moon?",
    content: "Project Moon is our innovation lab — where deep imagination is birthed into real markets by an industry-leading team. Every Conqol-X product passes through it.",
  },
  {
    title: "How do you work with partners or investors?",
    content: "We love collaborators. Use the contact form below or email hello@conqolx.com and we'll route your message to the right person within 48 hours.",
  },
  {
    title: "Where are you based?",
    content: "Lagos, Nigeria. We serve Africa and the world. Registration No. RC 1755966.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <Chip color="primary" variant="flat" className="mb-5">FAQ</Chip>
          <h2 className="font-serif text-4xl md:text-5xl tracking-[-0.02em] text-zinc-900">Questions, answered.</h2>
        </div>
        <Accordion items={items} />
      </div>
    </section>
  );
}
