"use client";

import { Chip, Card, CardBody, Icon } from "@/components/ui";

const steps = [
  { n: "01", title: "Imagine", body: "Bold ideas born from deep exploration of real African problems — finance, health, commerce, privacy." },
  { n: "02", title: "Build", body: "An industry-leading team ships software & hardware. AI-driven automation. Premium cloud. Privacy-first data." },
  { n: "03", title: "Release", body: "Market-ready products, launched periodically. Small, strategic drops that people actually use." },
  { n: "04", title: "Scale", body: "We compound: drops become oceans. Each product graduates into a market-future solution." },
];

export default function Approach() {
  return (
    <section id="approach" className="py-20 md:py-28 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Chip color="primary" variant="flat" className="mb-5">Approach</Chip>
          <h2 className="font-serif text-4xl md:text-6xl tracking-[-0.02em] leading-[1.05] text-zinc-900">
            Innovation in drops. Impact in oceans.
          </h2>
          <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
            <em className="font-serif">Little drops of water make a mighty ocean.</em> We release market-ready solutions periodically and scale them into market-future solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <Card key={i} isHoverable shadow="sm" className="overflow-hidden">
              <CardBody className="p-7">
                <div className="flex items-start justify-between mb-8">
                  <span className="font-serif text-5xl tracking-tight text-[--cqx-primary]">{s.n}</span>
                  <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                    <Icon.arrow className="text-zinc-400" />
                  </div>
                </div>
                <h3 className="font-semibold text-xl text-zinc-900 mb-2">{s.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{s.body}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
