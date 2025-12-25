import { Monitor, Brain, Code, Smartphone } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Digital Transformation",
    description: "End-to-end enterprise digitalization with CRM, ERP, and custom business solutions."
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "LLM integration, Computer Vision, and intelligent automation for your business processes."
  },
  {
    icon: Code,
    title: "Software Outsourcing",
    description: "Dedicated development teams delivering high-quality software on time and within budget."
  },
  {
    icon: Smartphone,
    title: "Web / App Development",
    description: "Modern, scalable web and mobile applications built with cutting-edge technologies."
  }
];

const WhatWeDoSection = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What We <span className="text-gradient">Do</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions to drive your business forward
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)]"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
