const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Vision", href: "#vision" },
  { label: "Our Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

const products = [
  { label: "Veeb.site", href: "#" },
  { label: "OneNet Servers", href: "#" },
  { label: "Mola", href: "#" },
  { label: "Shop8", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#040710]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center font-bold text-white text-sm">
                CX
              </div>
              <span className="font-bold text-lg text-white">
                Conqol<span className="text-violet-400">X</span>
              </span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Building Africa&apos;s digital future through innovation,
              inclusion, and scalable technology solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="space-y-3">
              {products.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center sm:text-left">
            © 2015 – 2025 ConqolX Technologies Limited. All Rights Reserved.
          </p>
          <p className="text-white/30 text-xs text-center sm:text-right">
            Registered in the United Kingdom (RC: 14565201) and Nigeria (RC: 1775966)
          </p>
        </div>
      </div>
    </footer>
  );
}
