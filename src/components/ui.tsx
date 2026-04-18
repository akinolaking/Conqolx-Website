"use client";

// HeroUI-inspired primitives matching the Conqol-X design system

import { cn } from "@heroui/react";
export { cn };
import { useState } from "react";

// ---------- Button ----------
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "bordered" | "light" | "flat" | "ghost" | "shadow";
  color?: "primary" | "warning" | "default" | "white";
  size?: "sm" | "md" | "lg";
  radius?: "full" | "lg" | "md" | "sm" | "none";
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isLoading?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  as?: "button" | "a";
}

export function Button({
  variant = "solid",
  color = "primary",
  size = "md",
  radius = "full",
  className = "",
  startContent,
  endContent,
  isLoading,
  children,
  href,
  target,
  rel,
  as: As,
  ...rest
}: ButtonProps) {
  const sizes = {
    sm: "h-8 px-3 text-xs gap-1.5",
    md: "h-10 px-4 text-sm gap-2",
    lg: "h-12 px-6 text-base gap-2.5",
  };
  const radii = {
    full: "rounded-full",
    lg: "rounded-2xl",
    md: "rounded-xl",
    sm: "rounded-lg",
    none: "rounded-none",
  };

  const palette: Record<string, Record<string, string>> = {
    primary: {
      solid: "bg-[--cqx-primary] text-white hover:opacity-90",
      bordered: "border-2 border-[--cqx-primary] text-[--cqx-primary] hover:bg-[--cqx-primary]/5",
      light: "text-[--cqx-primary] hover:bg-[--cqx-primary]/10",
      flat: "bg-[--cqx-primary]/10 text-[--cqx-primary] hover:bg-[--cqx-primary]/20",
      ghost: "border-2 border-[--cqx-primary] text-[--cqx-primary] hover:bg-[--cqx-primary] hover:text-white",
      shadow: "bg-[--cqx-primary] text-white shadow-[0_10px_30px_-6px_var(--cqx-primary-shadow)] hover:opacity-95",
    },
    warning: {
      solid: "bg-[--cqx-accent] text-white hover:opacity-90",
      bordered: "border-2 border-[--cqx-accent] text-[--cqx-accent] hover:bg-[--cqx-accent]/5",
      flat: "bg-[--cqx-accent]/10 text-[--cqx-accent] hover:bg-[--cqx-accent]/20",
      shadow: "bg-[--cqx-accent] text-white shadow-[0_10px_30px_-6px_rgba(236,139,79,0.55)] hover:opacity-95",
    },
    default: {
      solid: "bg-zinc-900 text-white hover:bg-zinc-800",
      bordered: "border border-zinc-300 text-zinc-900 hover:bg-zinc-100",
      light: "text-zinc-900 hover:bg-zinc-100",
      flat: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
    },
    white: {
      solid: "bg-white text-zinc-900 hover:bg-white/90",
      bordered: "border border-white/60 text-white hover:bg-white/10",
      ghost: "border-2 border-white text-white hover:bg-white hover:text-zinc-900",
    },
  };

  const cls = cn(
    "inline-flex items-center justify-center font-medium transition-all select-none cursor-pointer",
    "outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[--cqx-primary]/40",
    "active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none",
    sizes[size],
    radii[radius],
    palette[color]?.[variant] || palette.default.solid,
    className
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={cls}>
        {isLoading ? (
          <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
        ) : startContent}
        {children}
        {!isLoading && endContent}
      </a>
    );
  }

  return (
    <button className={cls} {...rest}>
      {isLoading ? (
        <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
      ) : startContent}
      {children}
      {!isLoading && endContent}
    </button>
  );
}

// ---------- Card ----------
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  isHoverable?: boolean;
  isPressable?: boolean;
  shadow?: "none" | "sm" | "md" | "lg";
}

export function Card({ className = "", isHoverable, isPressable, shadow = "sm", children, ...rest }: CardProps) {
  const shadows = {
    none: "",
    sm: "shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(17,17,26,0.08)]",
    md: "shadow-[0_4px_12px_rgba(0,0,0,0.05),0_20px_40px_-20px_rgba(17,17,26,0.12)]",
    lg: "shadow-[0_10px_30px_rgba(0,0,0,0.06),0_30px_60px_-30px_rgba(17,17,26,0.18)]",
  };
  return (
    <div
      className={cn(
        "bg-white rounded-3xl border border-black/[0.04]",
        shadows[shadow],
        isHoverable && "transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08),0_30px_60px_-30px_rgba(17,17,26,0.25)]",
        isPressable && "cursor-pointer active:scale-[0.99]",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export const CardBody = ({ className = "", children }: { className?: string; children: React.ReactNode }) => (
  <div className={cn("p-6", className)}>{children}</div>
);
export const CardHeader = ({ className = "", children }: { className?: string; children: React.ReactNode }) => (
  <div className={cn("px-6 pt-6 pb-2", className)}>{children}</div>
);
export const CardFooter = ({ className = "", children }: { className?: string; children: React.ReactNode }) => (
  <div className={cn("px-6 pb-6 pt-2", className)}>{children}</div>
);

// ---------- Chip ----------
interface ChipProps {
  variant?: "flat" | "bordered" | "solid" | "dot";
  color?: "primary" | "warning" | "success" | "secondary" | "default";
  size?: "sm" | "md" | "lg";
  className?: string;
  startContent?: React.ReactNode;
  children: React.ReactNode;
}

export function Chip({ variant = "flat", color = "default", size = "md", className = "", startContent, children }: ChipProps) {
  const sizes = { sm: "h-6 px-2 text-[11px]", md: "h-7 px-3 text-xs", lg: "h-8 px-4 text-sm" };
  const palette: Record<string, Record<string, string>> = {
    primary: {
      flat: "bg-[--cqx-primary]/10 text-[--cqx-primary]",
      solid: "bg-[--cqx-primary] text-white",
    },
    warning: {
      flat: "bg-[--cqx-accent]/10 text-[--cqx-accent]",
      solid: "bg-[--cqx-accent] text-white",
    },
    success: {
      flat: "bg-emerald-500/10 text-emerald-700",
      solid: "bg-emerald-500 text-white",
    },
    secondary: { flat: "bg-violet-500/10 text-violet-700" },
    default: {
      flat: "bg-zinc-100 text-zinc-700",
      bordered: "border border-zinc-200 text-zinc-700",
    },
  };
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full font-medium whitespace-nowrap", sizes[size], palette[color]?.[variant] || palette.default.flat, className)}>
      {startContent}
      {children}
    </span>
  );
}

// ---------- Input ----------
interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  isRequired?: boolean;
  className?: string;
  startContent?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export function Input({ label, placeholder, type = "text", value, onChange, errorMessage, isRequired, className = "", startContent, size = "md" }: InputProps) {
  const [focused, setFocused] = useState(false);
  const heights = { sm: "h-11", md: "h-14", lg: "h-16" };
  return (
    <div className={cn("w-full", className)}>
      <label className={cn(
        "relative block bg-zinc-100 rounded-2xl transition-all cursor-text",
        heights[size],
        focused ? "bg-zinc-50 ring-2 ring-[--cqx-primary]/40" : "hover:bg-zinc-200/60",
        errorMessage && "ring-2 ring-red-500/60"
      )}>
        {label && (
          <span className={cn(
            "absolute left-3 pointer-events-none transition-all text-zinc-500",
            (focused || value) ? "top-1.5 text-[11px]" : "top-1/2 -translate-y-1/2 text-sm"
          )}>
            {label}{isRequired && <span className="text-red-500 ml-0.5">*</span>}
          </span>
        )}
        <div className="absolute inset-0 flex items-center pl-3">
          {startContent && <span className="mr-2 text-zinc-500">{startContent}</span>}
          <input
            type={type}
            value={value}
            placeholder={focused ? placeholder : ""}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={cn(
              "flex-1 bg-transparent outline-none text-sm text-zinc-900 placeholder:text-zinc-400 pr-3",
              label && "pt-4"
            )}
          />
        </div>
      </label>
      {errorMessage && <p className="text-red-500 text-xs mt-1.5 ml-1">{errorMessage}</p>}
    </div>
  );
}

// ---------- Textarea ----------
interface TextareaProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  errorMessage?: string;
  isRequired?: boolean;
  rows?: number;
  className?: string;
}

export function Textarea({ label, placeholder, value, onChange, errorMessage, isRequired, rows = 4, className = "" }: TextareaProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div className={cn("w-full", className)}>
      <label className={cn(
        "relative block bg-zinc-100 rounded-2xl transition-all cursor-text p-3",
        focused ? "bg-zinc-50 ring-2 ring-[--cqx-primary]/40" : "hover:bg-zinc-200/60",
        errorMessage && "ring-2 ring-red-500/60"
      )}>
        {label && (
          <span className={cn("block transition-all text-zinc-500", (focused || value) ? "text-[11px]" : "text-sm")}>
            {label}{isRequired && <span className="text-red-500 ml-0.5">*</span>}
          </span>
        )}
        <textarea
          value={value}
          rows={rows}
          placeholder={focused ? placeholder : ""}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent outline-none text-sm text-zinc-900 placeholder:text-zinc-400 resize-none mt-1"
        />
      </label>
      {errorMessage && <p className="text-red-500 text-xs mt-1.5 ml-1">{errorMessage}</p>}
    </div>
  );
}

// ---------- Accordion ----------
interface AccordionItem {
  title: string;
  subtitle?: string;
  content: string;
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-zinc-200">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="py-2">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between py-4 text-left group"
            >
              <div>
                <div className="font-semibold text-zinc-900 text-base">{it.title}</div>
                {it.subtitle && <div className="text-sm text-zinc-500 mt-0.5">{it.subtitle}</div>}
              </div>
              <span className={cn(
                "w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center transition-transform group-hover:bg-zinc-200 shrink-0 ml-4",
                isOpen && "rotate-180 bg-[--cqx-primary] text-white group-hover:bg-[--cqx-primary]"
              )}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
            <div className={cn("grid transition-all duration-300", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
              <div className="overflow-hidden">
                <div className="pb-5 pr-12 text-[15px] text-zinc-600 leading-relaxed">{it.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ---------- PlaceholderImage ----------
export function PlaceholderImage({ label, aspect = "4/3", className = "", tone = "warm" }: { label: string; aspect?: string; className?: string; tone?: "warm" | "cool" | "dark" }) {
  const palettes = {
    warm: "from-orange-200 via-rose-200 to-violet-300",
    cool: "from-indigo-200 via-violet-200 to-sky-200",
    dark: "from-zinc-800 via-zinc-900 to-black",
  };
  return (
    <div
      className={cn("relative overflow-hidden rounded-3xl bg-gradient-to-br", palettes[tone], className)}
      style={{ aspectRatio: aspect }}
    >
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.25) 0 2px, transparent 2px 14px)"
      }} />
      <div className="absolute bottom-3 left-3">
        <span className="inline-block bg-black/50 backdrop-blur text-white text-[10px] font-mono px-2 py-1 rounded">{label}</span>
      </div>
    </div>
  );
}

// ---------- Logo ----------
export function Logo({ className = "", onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <a href="#home" className={cn("inline-flex items-baseline gap-0.5 font-semibold tracking-[0.18em] text-lg", className)}>
      <span className={onDark ? "text-white" : "text-[--cqx-primary]"}>CONQOL</span>
      <span className="text-[--cqx-accent] text-xl italic -mx-0.5">✕</span>
      <span className="sr-only">Conqol-X</span>
      <span className={cn("text-[9px] tracking-[0.28em] font-normal italic ml-1", onDark ? "text-white/60" : "text-zinc-500")}>Technologies</span>
    </a>
  );
}

// ---------- Icons ----------
export const Icon = {
  arrow: (p: React.SVGProps<SVGSVGElement>) => (
    <svg {...p} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  check: (p: React.SVGProps<SVGSVGElement>) => (
    <svg {...p} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  play: (p: React.SVGProps<SVGSVGElement>) => (
    <svg {...p} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
  ),
  spark: (p: React.SVGProps<SVGSVGElement>) => (
    <svg {...p} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
    </svg>
  ),
  globe: (p: React.SVGProps<SVGSVGElement>) => (
    <svg {...p} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  shield: (p: React.SVGProps<SVGSVGElement>) => (
    <svg {...p} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  brain: (p: React.SVGProps<SVGSVGElement>) => (
    <svg {...p} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3a3 3 0 0 0-3 3 3 3 0 0 0-3 3 3 3 0 0 0 1 2.2A3 3 0 0 0 3 14a3 3 0 0 0 3 3 3 3 0 0 0 3 3V3z" />
      <path d="M15 3a3 3 0 0 1 3 3 3 3 0 0 1 3 3 3 3 0 0 1-1 2.2A3 3 0 0 1 21 14a3 3 0 0 1-3 3 3 3 0 0 1-3 3V3z" />
    </svg>
  ),
  mail: (p: React.SVGProps<SVGSVGElement>) => (
    <svg {...p} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  phone: (p: React.SVGProps<SVGSVGElement>) => (
    <svg {...p} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  chat: (p: React.SVGProps<SVGSVGElement>) => (
    <svg {...p} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  pin: (p: React.SVGProps<SVGSVGElement>) => (
    <svg {...p} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
};
