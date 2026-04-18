"use client";

import { useState } from "react";
import { Button, Chip, Card, CardBody, Input, Textarea, Icon, cn } from "@/components/ui";

const interests = ["Partnership", "Investment", "Press", "Careers", "Product feedback", "Other"];

const contactDetails = [
  { icon: <Icon.mail />, label: "Email", value: "hello@conqolx.com", href: "mailto:hello@conqolx.com" },
  { icon: <Icon.phone />, label: "Call", value: "+234 201 330 9154", href: "tel:+2342013309154" },
  { icon: <Icon.chat />, label: "WhatsApp", value: "+234 813 638 6437", href: "https://wa.me/2348136386437" },
  { icon: <Icon.pin />, label: "Visit", value: "conqolx.com · Lagos, Nigeria", href: "https://conqolx.com" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", interest: "Partnership", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please use a valid email";
    if (!form.message.trim()) e.message = "Required";
    else if (form.message.length < 20) e.message = `Add a bit more detail (${form.message.length}/20)`;
    return e;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 1100));
    setSending(false);
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-5 gap-6 md:gap-10">
          {/* Left: Info */}
          <div className="md:col-span-2">
            <Chip color="primary" variant="flat" className="mb-5">Get in touch</Chip>
            <h2 className="font-serif text-4xl md:text-5xl tracking-[-0.02em] text-zinc-900 leading-[1.05]">
              Let&apos;s explore the future together.
            </h2>
            <p className="mt-5 text-zinc-600 leading-relaxed">
              Drop us a line — partnerships, investment, press, or a product idea you think we should build. We reply within 48 hours.
            </p>
            <div className="mt-10 space-y-1">
              {contactDetails.map((c, i) => (
                <a key={i} href={c.href} className="flex items-center gap-4 p-3 -ml-3 rounded-2xl hover:bg-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-700">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">{c.label}</div>
                    <div className="font-medium text-zinc-900">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="md:col-span-3">
            <Card shadow="lg" className="overflow-hidden">
              <CardBody className="p-7 md:p-10">
                {sent ? (
                  <div className="py-10 text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-5">
                      <Icon.check />
                    </div>
                    <h3 className="font-serif text-3xl text-zinc-900 tracking-tight">Message received.</h3>
                    <p className="mt-2 text-zinc-600">
                      Thanks {form.name.split(" ")[0] || "friend"} — we&apos;ll be in touch within 48 hours.
                    </p>
                    <Button
                      variant="light"
                      color="primary"
                      className="mt-6"
                      onClick={() => { setSent(false); setForm({ name: "", email: "", company: "", interest: "Partnership", message: "" }); }}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input label="Full name" isRequired value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} errorMessage={errors.name} />
                      <Input label="Email address" type="email" isRequired value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} errorMessage={errors.email} />
                    </div>
                    <Input label="Company / organization" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />

                    <div>
                      <label className="text-xs text-zinc-500 ml-1 mb-2 block uppercase tracking-wider">What brings you here?</label>
                      <div className="flex flex-wrap gap-2">
                        {interests.map((interest) => (
                          <button
                            key={interest}
                            type="button"
                            onClick={() => setForm({ ...form, interest })}
                            className={cn(
                              "px-4 py-2 rounded-full text-sm font-medium border transition-all",
                              form.interest === interest
                                ? "bg-[--cqx-primary] border-[--cqx-primary] text-white"
                                : "bg-white border-zinc-200 text-zinc-600 hover:border-zinc-300"
                            )}
                          >
                            {interest}
                          </button>
                        ))}
                      </div>
                    </div>

                    <Textarea label="Tell us what you're working on" isRequired rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} errorMessage={errors.message} />

                    <div className="flex items-center justify-between pt-2">
                      <div className="text-xs text-zinc-500">We reply within 48 hours.</div>
                      <Button variant="shadow" color="primary" size="lg" type="submit" isLoading={sending} endContent={!sending ? <Icon.arrow /> : undefined}>
                        {sending ? "Sending..." : "Send message"}
                      </Button>
                    </div>
                  </form>
                )}
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
