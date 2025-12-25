import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoLoginex from "@/assets/logo-loginex.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero grid-pattern">
      {/* Glow decorations */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/15 rounded-full blur-[150px]" />

      {/* Circuit lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute top-20 left-0 w-full h-full opacity-10"
          viewBox="0 0 1200 800"
        >
          <path
            d="M0,400 L300,400 L350,300 L500,300"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M1200,200 L900,200 L850,350 L700,350"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="500" cy="300" r="5" fill="hsl(var(--primary))" />
          <circle cx="700" cy="350" r="5" fill="hsl(var(--primary))" />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-2 md:mb-4 animate-float">
            <img
              src={logoLoginex}
              alt="LOGINEX"
              className="
                h-40 md:h-48 lg:h-56
                mx-auto
                drop-shadow-[0_0_60px_hsl(var(--primary)/0.5)]
                transition-transform duration-500 hover:scale-105
              "
            />
          </div>

          {/* Headline (no ugly wrap) */}
          <h1
            className="
              max-w-4xl mx-auto
              text-4xl md:text-5xl lg:text-6xl
              font-display font-bold
              mb-6
              leading-snug md:leading-[1.18] lg:leading-tight
              animate-slide-up
            "
          >
            <span className="block">Empowering Enterprises with</span>

            <span className="block text-gradient-animated">
              <span className="block md:inline">Digital Transformation</span>
              <span className="hidden md:inline">{" "}</span>
              <span className="inline whitespace-nowrap">
                &amp; AI&nbsp;Solutions
              </span>
            </span>
          </h1>

          {/* Sub headline */}
          <div
            className="mt-6 mb-6 flex justify-center animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="w-full max-w-4xl">
              <div
                className="
                  grid grid-cols-2 sm:grid-cols-4
                  rounded-2xl
                  border border-border/60
                  bg-card/30 backdrop-blur-sm
                  overflow-hidden
                  shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
                "
              >
                {[
                  "Digital Transformation",
                  "AI Solutions",
                  "Software Outsourcing",
                  "Web & App Development",
                ].map((item, i) => (
                  <div
                    key={item}
                    className={[
                      "px-4 py-3 md:py-3.5",
                      "text-center text-sm md:text-base",
                      "text-muted-foreground tracking-wide",
                      "transition-all duration-300",
                      "hover:text-foreground hover:bg-primary/5",
                      "relative",
                      // vertical separators (desktop)
                      i !== 0 ? "sm:border-l sm:border-border/60" : "",
                      // row separators (mobile 2x2)
                      i >= 2 ? "border-t border-border/60 sm:border-t-0" : "",
                    ].join(" ")}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>


          <p
            className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.15s" }}
          >
            We design and deliver practical systems that improve operations, connect data, and scale reliably — from discovery to production.
          </p>

          {/* CTA buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Link to="/contact">
              <Button variant="hero" size="xl">
                <MessageCircle className="w-5 h-5 mr-2" />
                Talk to Us
              </Button>
            </Link>

            <Link to="/services">
              <Button variant="heroOutline" size="xl">
                View Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
