"use client";

import { useState } from "react";
import { Button, Chip, Card, Icon, cn } from "@/components/ui";

const PRODUCTS = [
  {
    id: "veeb", name: "Veeb.site", tagline: "AI-Powered WordPress Website Builder",
    status: "live",
    description: "Launch a professional website in minutes — no code, no delays. Describe your idea, and Veeb's AI turns it into a live, hosted WordPress site with built-in email, SSL, and support.",
    for: "Freelancers, small businesses, and agencies that want speed without sacrificing quality.",
    url: "veeb.site", cta: "Try Veeb", logoText: "<eeb>",
  },
  {
    id: "onenet", name: "OneNet Servers", tagline: "AI Web Hosting & Infrastructure",
    status: "live",
    description: "Fast, secure, and scalable hosting designed for the modern web. From agencies to enterprise projects, OneNet combines AI-driven automation with premium WordPress hosting and cloud solutions.",
    for: "Agencies, SaaS teams, and enterprise engineering orgs.",
    url: "onenetservers.net.ng", cta: "Visit OneNet", logoText: "ON",
  },
  {
    id: "mola", name: "Mola", tagline: "The Local-First African Marketplace",
    status: "development",
    description: "Empowering African merchants to sell locally and globally with ease. Mola brings buyers and sellers together with secure payments, logistics support, and mobile-first design.",
    for: "Merchants, logistics partners, cross-border buyers.",
    url: "mola.ng", cta: "Join waitlist", logoText: "M",
  },
  {
    id: "shop8", name: "Shop8", tagline: "Seamless E-Commerce",
    status: "development",
    description: "Your online store, simplified. Shop8 makes it easy for small businesses to launch, manage, and grow their e-commerce presence without technical stress.",
    for: "Independent sellers and small retail businesses.",
    url: "shop8.com.ng", cta: "Join waitlist", logoText: "S8",
  },
  {
    id: "ribs", name: "RIBS", tagline: "Infrastructure for trust",
    status: "development",
    description: "A foundational product in the Project Moon lab. More to share as we approach launch.",
    for: "Teams curious about our data infrastructure bets.",
    url: "ribsapp.com", cta: "Follow progress", logoText: "R",
  },
];

function ProductCard({ product, featured }: { product: typeof PRODUCTS[0]; featured?: boolean }) {
  const nav = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Card
      isHoverable
      shadow={featured ? "lg" : "sm"}
      className={cn("relative overflow-hidden group", featured && "lg:col-span-2 lg:row-span-1")}
    >
      <div className={cn("relative p-7", featured && "lg:p-10 lg:flex lg:gap-10 lg:items-start")}>
        {featured && (
          <div className="hidden lg:block shrink-0 w-56">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-[--cqx-primary]/15 via-[--cqx-accent]/10 to-violet-200 flex items-center justify-center relative overflow-hidden">
              <span className="font-serif text-6xl tracking-tight text-zinc-900">{product.logoText}</span>
              <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.4) 0 1px, transparent 1px 10px)" }} />
            </div>
          </div>
        )}

        <div className="flex-1">
          {!featured && (
            <div className="flex items-center justify-between mb-5">
              <div className="w-14 h-14 rounded-2xl bg-zinc-100 flex items-center justify-center font-serif text-xl text-zinc-900">
                {product.logoText}
              </div>
              <Chip color={product.status === "live" ? "success" : "warning"} variant="flat" size="sm">
                <span className={cn("w-1.5 h-1.5 rounded-full", product.status === "live" ? "bg-emerald-500" : "bg-[--cqx-accent]")} />
                {product.status === "live" ? "Live" : "In development"}
              </Chip>
            </div>
          )}
          {featured && (
            <Chip color={product.status === "live" ? "success" : "warning"} variant="flat" size="sm" className="mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Live · shipping today
            </Chip>
          )}

          <h3 className={cn("font-serif text-zinc-900 tracking-tight", featured ? "text-3xl lg:text-4xl" : "text-xl")}>{product.name}</h3>
          <p className={cn("mt-1 text-[--cqx-primary] font-medium", featured ? "text-base" : "text-sm")}>{product.tagline}</p>
          <p className={cn("mt-4 text-zinc-600 leading-relaxed", featured ? "text-base" : "text-sm")}>{product.description}</p>
          {featured && (
            <p className="mt-3 text-sm text-zinc-500">
              <span className="font-semibold text-zinc-700">Perfect for:</span> {product.for}
            </p>
          )}

          <div className="mt-6 flex items-center justify-between">
            <a href={`https://${product.url}`} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-zinc-400 hover:text-zinc-700 transition-colors">
              {product.url} ↗
            </a>
            <Button variant={featured ? "shadow" : "light"} color="primary" size={featured ? "md" : "sm"} endContent={<Icon.arrow />} onClick={() => nav("contact")}>
              {product.cta}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function Products() {
  const [filter, setFilter] = useState("all");
  const filters = [
    { id: "all", label: "All products", count: PRODUCTS.length },
    { id: "live", label: "Live", count: PRODUCTS.filter((p) => p.status === "live").length },
    { id: "development", label: "In development", count: PRODUCTS.filter((p) => p.status === "development").length },
  ];
  const list = filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.status === filter);

  return (
    <section id="products" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <Chip color="primary" variant="flat" className="mb-5">Products</Chip>
            <h2 className="font-serif text-4xl md:text-6xl tracking-[-0.02em] leading-[1.05] text-zinc-900">
              Live markets today. Futures in the lab.
            </h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all border",
                  filter === f.id
                    ? "bg-zinc-900 text-white border-zinc-900"
                    : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300"
                )}
              >
                {f.label} <span className="opacity-60 ml-1">({f.count})</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((p, i) => (
            <ProductCard key={p.id} product={p} featured={i === 0 && filter === "all"} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { PRODUCTS };
