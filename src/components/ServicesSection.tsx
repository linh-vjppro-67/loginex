import { Brain, Boxes, Cable, Code2, Eye, Rocket, Settings2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ServiceBlock = {
  icon: any;
  title: string;
  subtitle: string;
  highlights: string[]; // UI emphasis (equal weight)
  sections: { label: string; items: string[] }[];
  tags?: string[];
};

const serviceBlocks: ServiceBlock[] = [
  {
    icon: Boxes,
    title: "Digital Transformation",
    subtitle: "Modernize operations with systems and workflows that fit how your teams actually work.",
    tags: ["CRM", "ERP", "CDP", "DMP"],
    highlights: ["Workflow standardization", "System integration", "Data centralization"],
    sections: [
      {
        label: "Scope",
        items: ["CRM / ERP / CDP / DMP", "Process automation", "Reporting & dashboards"],
      },
      {
        label: "Deliverables",
        items: ["As-Is / To-Be analysis", "Solution architecture", "Build → deploy → handover"],
      },
    ],
  },
  {
    icon: Brain,
    title: "AI Solutions",
    subtitle: "Practical AI that improves speed, accuracy, and decision-making in daily operations.",
    tags: ["LLM", "RAG", "Computer Vision"],
    highlights: ["Knowledge base (RAG)", "Ops assistant", "Vision analytics"],
    sections: [
      { label: "LLM / RAG", items: ["Internal chatbot", "Document Q&A", "Workflow automation"] },
      { label: "Computer Vision", items: ["Detection / counting", "Camera + dashboard", "Alerts & rules"] },
    ],
  },
  {
    icon: Code2,
    title: "Software Outsourcing",
    subtitle: "Engineering capacity you can rely on — aligned to outcomes, quality, and timelines.",
    tags: ["Dedicated team", "Project-based"],
    highlights: ["Delivery discipline", "Clean architecture", "Long-term support"],
    sections: [
      { label: "Engagement", items: ["Dedicated team", "Project-based delivery", "Maintenance & SLA"] },
      { label: "Tech stack", items: ["Web", "Backend", "Cloud", "AI"] },
    ],
  },
  {
    icon: Rocket,
    title: "Web & App Development",
    subtitle: "Launch stable digital products fast — built to scale and easy to operate.",
    tags: ["Website", "Web app", "Mobile app"],
    highlights: ["Fast delivery", "Production-ready", "Scalable UI/UX"],
    sections: [
      { label: "What we build", items: ["Corporate websites", "Internal web apps", "Mobile apps"] },
      { label: "Typical outputs", items: ["Landing / corporate site", "Admin / dashboard", "Workflow tools"] },
    ],
  },
];

const engagementModels = [
  { icon: Settings2, title: "POC / MVP", description: "Validate fast before scaling to production." },
  { icon: Cable, title: "Fixed Price", description: "Best when scope and deliverables are clear." },
  { icon: Eye, title: "Time & Material", description: "Flexible priorities — optimized for speed." },
];

const SectionBadge = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-card/30 backdrop-blur-sm">
    <span className="text-sm text-muted-foreground">{text}</span>
  </div>
);

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-[520px] h-[520px] bg-primary/5 rounded-full blur-[130px]" />
      <div className="absolute -bottom-24 -left-24 w-[520px] h-[520px] bg-primary/5 rounded-full blur-[130px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionBadge text="Services" />
          <h2 className="mt-5 text-3xl md:text-5xl font-display font-bold tracking-tight">
            Core <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Digital transformation, AI, and scalable systems — designed for real operational needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {serviceBlocks.map((s) => (
            <div
              key={s.title}
              className="
                group rounded-3xl
                bg-card/55 backdrop-blur-sm
                border border-border/50
                transition-all duration-500
                hover:shadow-[0_0_40px_hsl(var(--primary)/0.12)]
                hover:-translate-y-1
                overflow-hidden
              "
            >
              {/* Top header */}
              <div className="p-8 pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <s.icon className="w-7 h-7 text-primary" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-2xl font-display font-semibold">{s.title}</h3>
                      <div className="hidden sm:flex gap-2">
                        {s.tags?.slice(0, 3).map((t) => (
                          <Badge key={t} variant="secondary" className="rounded-full">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {s.subtitle}
                    </p>

                    {/* Highlights = UI emphasis (not raw text) */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.highlights.map((h) => (
                        <div
                          key={h}
                          className="
                            inline-flex items-center
                            px-3 py-1.5
                            rounded-full
                            border border-border/60
                            bg-background/30
                            text-xs md:text-sm
                            text-muted-foreground
                            hover:border-primary/40
                            transition-colors
                          "
                        >
                          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary/70" />
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-border/40" />

              {/* Content */}
              <div className="p-8 pt-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  {s.sections.map((sec) => (
                    <div key={sec.label} className="rounded-2xl bg-secondary/20 border border-border/30 p-5">
                      <div className="text-sm font-semibold mb-3">{sec.label}</div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {sec.items.map((it) => (
                          <li key={it} className="flex gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                            <span className="leading-relaxed">{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Footer row: makes card feel “complete” */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">
                    Outcome-driven delivery • <span className="text-foreground/80">Discover → Build → Go-live</span>
                  </div>
                  <div className="inline-flex items-center text-xs text-primary/90 gap-1">
                    <span className="opacity-80">Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Engagement models */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <SectionBadge text="How we work" />
            <h3 className="mt-5 text-2xl md:text-3xl font-display font-bold">
              Engagement <span className="text-gradient">Models</span>
            </h3>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              Pick the model that matches your timeline, budget, and scope clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {engagementModels.map((m) => (
              <div
                key={m.title}
                className="
                  rounded-3xl bg-card/50 border border-border/50
                  backdrop-blur-sm p-7
                  hover:shadow-[0_0_30px_hsl(var(--primary)/0.10)]
                  transition-all duration-500
                "
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <m.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-lg font-display font-semibold">{m.title}</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="/contact">Contact us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
