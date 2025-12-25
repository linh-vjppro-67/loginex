import logoLoginex from "@/assets/logo-loginex.png";
import { Facebook, Linkedin, Twitter, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ];

  const serviceHighlights = [
    "Digital Transformation",
    "AI Solutions (LLM & Computer Vision)",
    "Software Outsourcing",
    "Web & App Development",
  ];

  const legalLinks = [
    { label: "Terms of Use", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookies", href: "#" },
  ];

  const socials = [
    { label: "Facebook", href: "#", icon: Facebook },
    { label: "LinkedIn", href: "#", icon: Linkedin },
    { label: "Twitter", href: "#", icon: Twitter },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 py-14">
        {/* Top grid */}
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <img src={logoLoginex} alt="LOGINEX" className="h-16" />
            <p className="mt-5 text-muted-foreground text-sm leading-relaxed max-w-md">
              A practical technology partner for digital transformation, AI adoption, and scalable software systems.
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-secondary/50 border border-border/40 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <a
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-90 transition-opacity"
            >
              Talk to us <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {serviceHighlights.map((s) => (
                <li key={s} className="text-muted-foreground text-sm flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                  <span className="leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>

            <a
              href="/services"
              className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Legal (wider + no wrap) */}
          <div className="lg:col-span-2 lg:text-right">
            <h4 className="font-display font-semibold mb-4">Legal</h4>

            <ul className="space-y-3">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm whitespace-nowrap"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-7 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-sm">
            © {currentYear} LOGINEX. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs text-center md:text-right">
            Built for enterprise delivery • Digital Transformation • AI • Software
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
