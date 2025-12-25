import { Search, Palette, Hammer, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "Understand your business, challenges, and goals through deep consultation.",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Architect solutions that fit your needs with scalability in mind.",
  },
  {
    icon: Hammer,
    title: "Build",
    description:
      "Agile development with continuous feedback and quality assurance.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description:
      "Seamless deployment with training and change management support.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description:
      "Ongoing optimization and expansion as your business grows.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enterprise-friendly methodology from concept to scale
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Timeline line (desktop only) - fixed at icon center */}
          <div className="hidden lg:block absolute left-0 right-0 top-[32px]">
            <div className="h-0.5 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10" />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative group"
              >
                {/* Card wrapper to keep spacing stable (prevents overlap) */}
                <div className="h-full rounded-3xl bg-card/40 border border-border/50 backdrop-blur-sm p-6 lg:p-5 transition-all duration-300 hover:shadow-[0_0_24px_hsl(var(--primary)/0.12)]">
                  {/* Icon row */}
                  <div className="relative flex items-center justify-center lg:justify-start">
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-card border border-border/50 flex items-center justify-center group-hover:border-primary/50 transition-colors duration-300">
                      <step.icon className="w-7 h-7 text-primary" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="mt-5 text-center lg:text-left">
                    <h3 className="font-display font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Optional dot on line alignment (desktop only) */}
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[32px] w-2.5 h-2.5 rounded-full bg-primary/70 shadow-[0_0_18px_hsl(var(--primary)/0.35)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
