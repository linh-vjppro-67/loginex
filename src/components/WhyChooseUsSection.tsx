import { Target, Puzzle, Users, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Business-First Approach",
    description: "We understand enterprise challenges, not just code. Solutions designed for real business impact."
  },
  {
    icon: Puzzle,
    title: "Complex Integration Experts",
    description: "Years of experience integrating complex systems, legacy infrastructure, and modern platforms."
  },
  {
    icon: Users,
    title: "Tech + Business Team",
    description: "Our team combines technical excellence with deep business domain expertise."
  },
  {
    icon: TrendingUp,
    title: "Flexible Scale",
    description: "From POC to MVP to full-scale deployment. We grow with your business needs."
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Why Choose <span className="text-gradient">LOGINEX</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We don't just build software – we solve business problems with technology that scales.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <div className="relative bg-card/80 backdrop-blur border border-border/50 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                
                <div className="text-center p-6 rounded-2xl bg-secondary/50">
                  <div className="text-xl md:text-2xl font-display font-semibold text-primary mb-2">
                    End-to-End Delivery
                  </div>
                  <div className="text-sm text-muted-foreground">
                    From discovery to production rollout
                  </div>
                </div>

                <div className="text-center p-6 rounded-2xl bg-secondary/50">
                  <div className="text-xl md:text-2xl font-display font-semibold text-primary mb-2">
                    Enterprise Focus
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Real workflows, real operational constraints
                  </div>
                </div>

                <div className="text-center p-6 rounded-2xl bg-secondary/50">
                  <div className="text-xl md:text-2xl font-display font-semibold text-primary mb-2">
                    Practical AI
                  </div>
                  <div className="text-sm text-muted-foreground">
                    LLM & Computer Vision tied to business use-cases
                  </div>
                </div>

                <div className="text-center p-6 rounded-2xl bg-secondary/50">
                  <div className="text-xl md:text-2xl font-display font-semibold text-primary mb-2">
                    Long-term Partnership
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Operate, optimize, and scale together
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
