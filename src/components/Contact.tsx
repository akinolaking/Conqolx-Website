"use client";

import { Button } from "@heroui/react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-white/5 border border-white/15 hover:border-white/30 focus:border-violet-500 focus:outline-none rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm transition-colors";

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-1.5 text-sm text-violet-300 font-medium mb-6">
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                collaborate?
              </span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Whether you&apos;re a business, investor, developer, or partner —
              we&apos;d love to hear from you. Let&apos;s build something
              extraordinary together.
            </p>

            <div className="space-y-4">
              {[
                { icon: "🇬🇧", label: "United Kingdom", detail: "RC: 14565201" },
                { icon: "🇳🇬", label: "Nigeria", detail: "RC: 1775966" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-white font-semibold">{item.label}</div>
                    <div className="text-white/50 text-sm">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-white/60">
                  We&apos;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/60 text-sm mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-1.5">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us about your idea or project..."
                    rows={6}
                    required
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl transition-all duration-200 cursor-pointer"
                >
                  Send Message →
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
