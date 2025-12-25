import { Factory, Building2, HeartPulse, ShoppingCart } from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Production planning, quality control, supply chain optimization, and factory system integration.",
  },
  {
    icon: Building2,
    title: "Construction",
    description:
      "Project management, cost control, progress tracking, and document management systems.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Hospital systems, medical data management, AI-assisted workflows, and compliance-focused platforms.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & Distribution",
    description:
      "POS systems, inventory management, customer analytics, and omnichannel operations.",
  },
];

const IndustriesSection = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[560px] h-[560px] bg-primary/5 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Industries & <span className="text-gradient">Use Cases</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Practical experience delivering technology solutions across core
            business sectors.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="
                group h-full
                p-7 rounded-2xl
                bg-card/60 backdrop-blur
                border border-border/50
                transition-all duration-300
                hover:border-primary/50
                hover:shadow-[0_0_32px_hsl(var(--primary)/0.12)]
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    w-12 h-12 rounded-xl
                    bg-primary/10
                    flex items-center justify-center
                    group-hover:bg-primary/20
                    transition-colors
                  "
                >
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-lg font-display font-semibold mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
