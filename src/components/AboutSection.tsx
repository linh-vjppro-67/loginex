import {
  Sparkles,
  Target,
  Eye,
  Wrench,
  Cpu,
  Plug,
  Layers,
  Briefcase,
  ShieldCheck,
  Handshake,
  Users,
} from "lucide-react";

/* =======================
   DATA DEFINITIONS
======================= */

const focusAreas = [
  {
    icon: Sparkles,
    title: "Digital Transformation",
    description:
      "CRM, ERP, CDP/DMP, internal systems, and end-to-end process optimization.",
  },
  {
    icon: Cpu,
    title: "AI-driven Solutions",
    description:
      "LLM, Computer Vision, AI-powered workflows, and business automation.",
  },
  {
    icon: Layers,
    title: "Scalable Software Systems",
    description:
      "Custom web, mobile, and platform solutions built to scale and operate reliably.",
  },
];

const expertise = [
  {
    icon: Briefcase,
    title: "Digital Transformation Consulting",
    description:
      "Assessing current operations, standardizing workflows, and designing solutions aligned with business objectives.",
  },
  {
    icon: Cpu,
    title: "AI Engineering (LLM & Computer Vision)",
    description:
      "Designing, fine-tuning, deploying, and measuring AI systems based on real-world use cases.",
  },
  {
    icon: Plug,
    title: "System Integration",
    description:
      "Integrating ERP, CRM, HRM, POS, WMS, and third-party services into unified systems.",
  },
  {
    icon: Wrench,
    title: "Product & Platform Development",
    description:
      "Building custom products, portals, dashboards, and operational platforms.",
  },
];

const values = [
  {
    icon: Target,
    title: "Business-first Mindset",
    description:
      "Technology exists to solve business problems, not to showcase complexity.",
  },
  {
    icon: ShieldCheck,
    title: "Transparency",
    description:
      "Clear scope, progress, cost, and risks throughout the entire project lifecycle.",
  },
  {
    icon: Sparkles,
    title: "Ownership",
    description:
      "Taking full responsibility for delivery quality, system stability, and outcomes.",
  },
  {
    icon: Handshake,
    title: "Long-term Partnership",
    description:
      "Focusing on sustainable collaboration rather than short-term delivery.",
  },
];

/* =======================
   UI HELPERS
======================= */

const SectionHeader = ({ badge, title, description }) => (
  <div className="max-w-3xl">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-card/30 backdrop-blur-sm">
      <Users className="w-4 h-4 text-primary" />
      <span className="text-sm text-muted-foreground">{badge}</span>
    </div>

    <h2 className="mt-5 text-3xl md:text-5xl font-display font-bold tracking-tight">
      {title}
    </h2>

    <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
      {description}
    </p>
  </div>
);

const BlockTitle = ({ kicker, title }) => (
  <div className="mb-6">
    {kicker && (
      <div className="text-xs uppercase tracking-widest text-muted-foreground">
        {kicker}
      </div>
    )}
    <h3 className="mt-2 text-2xl md:text-3xl font-display font-bold">
      {title}
    </h3>
  </div>
);

const Card = ({ children, className = "" }) => (
  <div
    className={[
      "bg-card/70 backdrop-blur-sm border border-border/50 rounded-3xl",
      "shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",
      className,
    ].join(" ")}
  >
    {children}
  </div>
);

/* =======================
   MAIN COMPONENT
======================= */

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute left-[-120px] top-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[140px]" />
      <div className="absolute right-[-140px] bottom-1/4 w-[28rem] h-[28rem] bg-primary/10 rounded-full blur-[160px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* ================= HEADER ================= */}
        <SectionHeader
          badge="About Us"
          title="Who We Are"
          description={
            <>
              We are a technology company helping organizations operate smarter
              through{" "}
              <span className="text-foreground font-medium">
                digital transformation
              </span>
              ,{" "}
              <span className="text-foreground font-medium">AI</span>, and{" "}
              <span className="text-foreground font-medium">
                scalable software systems
              </span>
              .
            </>
          }
        />

        <div className="mt-10 h-px bg-border/50" />

        {/* ================= FOCUS AREAS ================= */}
        <div className="mt-12">
          <BlockTitle kicker="Focus" title="What We Focus On" />

          <div className="grid md:grid-cols-3 gap-6">
            {focusAreas.map((item) => (
              <Card key={item.title} className="p-7">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{item.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* ================= MISSION & VISION ================= */}
        <div className="mt-16">
          <BlockTitle kicker="Direction" title="Mission & Vision" />

          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-5 h-5 text-primary" />
                <h4 className="text-xl font-semibold">Our Mission</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To help organizations operate more intelligently by applying
                practical technology that optimizes processes, data, and overall
                performance.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="w-5 h-5 text-primary" />
                <h4 className="text-xl font-semibold">Our Vision</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become a long-term digital transformation and AI partner —
                supporting businesses from implementation to operation and
                continuous scaling.
              </p>
            </Card>
          </div>
        </div>

        {/* ================= EXPERTISE ================= */}
        <div className="mt-16">
          <BlockTitle kicker="Capability" title="Our Expertise" />

          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((item) => (
              <Card key={item.title} className="p-7">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{item.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* ================= VALUES & CULTURE ================= */}
        <div className="mt-16">
          <BlockTitle kicker="Principles" title="Values & Culture" />

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Values */}
            <div className="space-y-4">
              {values.map((item) => (
                <Card key={item.title} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Culture */}
            <Card className="p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h4 className="text-xl font-semibold">Team & Culture</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Delivery-first mindset with practical engineering standards.
                  </p>
                </div>
                <div className="hidden sm:block w-24 h-[1px] bg-border/60 mt-3" />
              </div>

              {/* Team intro */}
              <div className="mt-5">
                <p className="text-muted-foreground leading-relaxed">
                  We’re a cross-functional team of{" "}
                  <span className="text-foreground font-medium">Software Engineers</span>,{" "}
                  <span className="text-foreground font-medium">AI Engineers</span>,{" "}
                  <span className="text-foreground font-medium">Solution Architects</span>, and{" "}
                  <span className="text-foreground font-medium">Product / Project leads</span>.
                  We work closely with your stakeholders to align scope, execution, and measurable outcomes.
                </p>
              </div>

              {/* Culture pillars */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border/50 bg-background/40 p-5">
                  <div className="text-sm font-semibold mb-1">Clarity & Discovery</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    We start by mapping workflows and constraints (As-is / To-be) before building.
                  </div>
                </div>

                <div className="rounded-2xl border border-border/50 bg-background/40 p-5">
                  <div className="text-sm font-semibold mb-1">Engineering Quality</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    Clean architecture, code reviews, testing, and maintainable delivery — not quick hacks.
                  </div>
                </div>

                <div className="rounded-2xl border border-border/50 bg-background/40 p-5">
                  <div className="text-sm font-semibold mb-1">Security & Reliability</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    Access control, auditability, and stable operations designed from day one.
                  </div>
                </div>

                <div className="rounded-2xl border border-border/50 bg-background/40 p-5">
                  <div className="text-sm font-semibold mb-1">Ownership & Transparency</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    Weekly updates, clear risks, and shared responsibility from implementation to operation.
                  </div>
                </div>
              </div>

              {/* Bottom strip (optional, but makes it feel “complete”) */}
              <div className="mt-6 rounded-2xl border border-border/50 bg-card/40 p-5">
                <div className="text-sm font-semibold">How we typically engage</div>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Discovery workshop → POC/MVP → Production delivery → Handover & long-term maintenance.
                </p>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-16 h-px bg-border/50" />
      </div>
    </section>
  );
};

export default AboutSection;
