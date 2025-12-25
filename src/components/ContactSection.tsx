import { Mail, Phone, MapPin, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SectionBadge = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-card/30 backdrop-blur-sm">
    <span className="text-sm text-muted-foreground">{text}</span>
  </div>
);

const InfoRow = ({
  icon: Icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: React.ReactNode;
}) => (
  <div className="flex items-start gap-3 p-4 rounded-2xl bg-secondary/25 border border-border/30">
    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <div className="min-w-0">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="font-semibold break-words">{value}</div>
    </div>
  </div>
);

const Field = ({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) => (
  <div className="space-y-2">
    <label className="text-sm font-medium">{label}</label>
    {children}
    {hint ? <div className="text-xs text-muted-foreground">{hint}</div> : null}
  </div>
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-card relative overflow-hidden">
      {/* Background decoration (keep palette) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[160px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* ===== Header ===== */}
          <div className="text-center mb-12">
            <div className="flex justify-center">
              <SectionBadge text="Contact" />
            </div>

            <h2 className="mt-5 text-3xl md:text-5xl font-display font-bold tracking-tight">
              Contact <span className="text-gradient">Us</span>
            </h2>

            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Tell us about your challenge — we’ll propose a practical solution path and clear next steps.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {/* ===== Left: Contact info ===== */}
            <div className="lg:col-span-2">
              <div className="p-8 rounded-3xl bg-card/60 backdrop-blur-sm border border-border/50 shadow-glow-sm h-full">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xl font-display font-semibold">Contact Info</div>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      Prefer email? We respond fast with a structured plan.
                    </p>
                  </div>

                  <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground rounded-full border border-border/50 bg-background/30 px-3 py-1">
                    <Clock className="w-4 h-4" />
                    <span>Reply within 24h</span>
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  <InfoRow
                    icon={Mail}
                    label="Email"
                    value={<a className="hover:underline" href="mailto:linhphampnplinh@gmail.com">linhphampnplinh@gmail.com</a>}
                  />
                  <InfoRow icon={Phone} label="Phone" value={"+84 912 342 146"} />
                  <InfoRow icon={MapPin} label="Address" value={"180–182 Ly Chinh Thang Street, Vo Thi Sau Ward, Ho Chi Minh City"} />
                </div>

                <div className="mt-7 rounded-2xl bg-secondary/20 border border-border/30 p-5">
                  <div className="text-sm font-semibold mb-2">What you’ll get</div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                      <span>High-level assessment + proposed approach</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                      <span>Recommended scope & timeline options</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                      <span>Next steps: call / workshop / proposal</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-7">
                  <Button variant="heroOutline" size="lg" asChild className="w-full">
                    <a href="/services">
                      View services <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* ===== Right: Form ===== */}
            <div className="lg:col-span-3">
              <div className="p-8 rounded-3xl bg-card/60 backdrop-blur-sm border border-border/50 shadow-glow">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div>
                    <div className="text-xl font-display font-semibold">Contact Form</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Share a bit of context — we’ll follow up with actionable recommendations.
                    </p>
                  </div>
                  <div className="hidden md:block w-28 h-[1px] bg-border/60" />
                </div>

                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  {/* Block: basics */}
                  <div className="rounded-2xl border border-border/40 bg-background/20 p-5">
                    <div className="text-sm font-semibold mb-4">Basic information</div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Field label="Name">
                        <Input placeholder="Your name" required />
                      </Field>
                      <Field label="Company">
                        <Input placeholder="Company / Organization" />
                      </Field>

                      <Field label="Email">
                        <Input type="email" placeholder="name@company.com" required />
                      </Field>

                      <Field label="Service interested in">
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="digital-transformation">Digital Transformation</SelectItem>
                            <SelectItem value="ai-llm">AI LLM (Chatbot / Knowledge Base)</SelectItem>
                            <SelectItem value="computer-vision">Computer Vision (AI CV)</SelectItem>
                            <SelectItem value="outsourcing">Software Outsourcing</SelectItem>
                            <SelectItem value="web-app">Web & App Development</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </Field>
                    </div>
                  </div>

                  {/* Block: message */}
                  <div className="rounded-2xl border border-border/40 bg-background/20 p-5">
                    <div className="text-sm font-semibold mb-4">Message</div>

                    <Field
                      label="Your challenge"
                      hint="Example: current workflow, pain points, target timeline, and expected outcomes."
                    >
                      <Textarea
                        placeholder="Tell us about your challenge…"
                        className="min-h-[160px]"
                        required
                      />
                    </Field>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-1">
                    <Button variant="hero" size="lg" type="submit" className="sm:flex-1">
                      Send message <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button variant="heroOutline" size="lg" asChild className="sm:flex-1">
                      <a href="mailto:linhphampnplinh@gmail.com">Email us directly</a>
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    By submitting this form, you agree that we may contact you to discuss your request and propose a suitable solution.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="mt-10 text-center">
            <Button variant="ghost" asChild>
              <a href="/">Back to home</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
