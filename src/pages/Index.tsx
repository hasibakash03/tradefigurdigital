import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Target, Layers, Rocket } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const Index = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(275_80%_60%_/_0.3),_transparent_60%)]" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-white/60 mb-6">
            Strategic Growth Consultancy
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6">
            Your business doesn't have
            <br />
            a marketing problem.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
              It has a strategy problem.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-light">
            Most companies are running ads, posting content, and redesigning logos — but without clear positioning or a real growth strategy. That's why the marketing doesn't convert.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-8 text-base font-semibold"
            onClick={() => scrollTo("#cta")}
          >
            Book a Strategy Call
            <ArrowRight className="ml-1" />
          </Button>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            The Problem
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            The Real Reason Most
            <br className="hidden md:block" /> Marketing Doesn't Work
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {/* Symptoms */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <p className="text-sm font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-6">
                What it looks like
              </p>
              <ul className="space-y-4 text-foreground">
                {[
                  "Ads are running.",
                  "Content is being posted.",
                  "Designs look nice.",
                ].map((item) => (
                  <li key={item} className="text-lg">{item}</li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-border space-y-3">
                {[
                  "Yet growth feels slow.",
                  "Leads are inconsistent.",
                  "Sales are unpredictable.",
                  "The brand doesn't stand out.",
                ].map((item) => (
                  <p key={item} className="text-muted-foreground">{item}</p>
                ))}
              </div>
            </div>

            {/* Root causes */}
            <div className="p-8 rounded-2xl bg-card border border-accent/30">
              <p className="text-sm font-semibold tracking-[0.15em] uppercase text-accent mb-6">
                The real cause
              </p>
              <p className="text-lg text-foreground mb-6">
                The real problem isn't marketing execution.
                <br />
                <span className="font-bold">It's the lack of clarity behind it.</span>
              </p>
              <ul className="space-y-4">
                {[
                  "No clear positioning.",
                  "No strong brand foundation.",
                  "No defined market advantage.",
                ].map((item) => (
                  <li key={item} className="text-muted-foreground text-lg">{item}</li>
                ))}
              </ul>
              <p className="mt-6 pt-6 border-t border-border text-foreground font-semibold">
                So every campaign feels like guesswork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insight */}
      <section
        id="insight"
        className="py-24 md:py-32 px-6"
        style={{
          background:
            "linear-gradient(180deg, hsl(270 30% 96%) 0%, hsl(270 30% 98%) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            The Insight
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            More Marketing Isn't
            <br className="hidden md:block" /> The Solution
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Most companies think the answer is simple: Run more ads. Post more content. Hire another agency.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            But more activity doesn't fix a weak strategy.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <div className="p-6 rounded-2xl border border-border bg-card">
              <p className="text-foreground font-semibold">If your positioning is unclear,</p>
              <p className="text-muted-foreground mt-1">marketing becomes noise.</p>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card">
              <p className="text-foreground font-semibold">If your brand is generic,</p>
              <p className="text-muted-foreground mt-1">customers ignore it.</p>
            </div>
          </div>
          <p className="text-xl md:text-2xl font-bold text-primary">
            What businesses actually need: a clear strategy that makes marketing work.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            The Solution
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Tradefigur Builds The Strategy
            <br className="hidden md:block" /> Behind Growth
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-12 leading-relaxed">
            We don't start with ads. We don't start with design. We start with understanding the business — your market, your competitors, your positioning. Then we design the strategic foundation that makes marketing effective.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Search,
                title: "Market Analysis",
                desc: "Deep research into your market landscape, customer behavior, and competitive dynamics.",
              },
              {
                icon: Target,
                title: "Strategic Positioning",
                desc: "Define what makes your brand different, valuable, and impossible to ignore.",
              },
              {
                icon: Layers,
                title: "Brand Foundation",
                desc: "Messaging frameworks, identity direction, and brand strategy that creates clarity.",
              },
              {
                icon: Rocket,
                title: "Growth System Design",
                desc: "A marketing system engineered to generate consistent, predictable demand.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-8 rounded-2xl border border-border hover:border-accent/40 bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <item.icon className="w-10 h-10 text-accent mb-5 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg font-semibold text-foreground mt-12">
            Once the strategy is clear, execution becomes simple.
          </p>
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="py-24 md:py-32 px-6"
        style={{
          background:
            "linear-gradient(135deg, hsl(270 60% 18%) 0%, hsl(275 55% 28%) 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-white/50 mb-4">
            The Method
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            The Tradefigur Method
          </h2>
          <p className="text-lg text-white/60 mb-16">Our process is simple and structured.</p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Market Intelligence", desc: "We analyze your market, customers, and competitors." },
              { step: "02", title: "Strategic Positioning", desc: "We identify what makes your brand different and valuable." },
              { step: "03", title: "Brand Foundation", desc: "We define your messaging, identity direction, and brand strategy." },
              { step: "04", title: "Growth System Design", desc: "We build the marketing system designed to generate consistent demand." },
            ].map((item) => (
              <div key={item.step} className="text-center md:text-left">
                <p className="text-5xl font-black text-white/15 mb-4">{item.step}</p>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-white/50 text-center mt-16 text-sm max-w-lg mx-auto">
            Execution partners then bring the strategy to life. But the thinking starts here.
          </p>
        </div>
      </section>

      {/* Authority */}
      <section id="authority" className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            The Principle
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            Strategy Before Execution
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Many agencies start with design. Others start with ads. But execution without strategy is expensive experimentation. The companies that grow consistently all start with the same thing: <span className="text-foreground font-semibold">Clarity.</span>
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              "Clear Positioning",
              "Clear Messaging",
              "Clear Strategy",
            ].map((badge) => (
              <div
                key={badge}
                className="py-6 px-4 rounded-2xl border border-border bg-card"
              >
                <p className="text-sm font-semibold text-foreground">{badge}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We help businesses move from random marketing to intentional growth systems.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        id="cta"
        className="py-24 md:py-32 px-6"
        style={{
          background:
            "linear-gradient(135deg, hsl(270 60% 25%) 0%, hsl(280 65% 40%) 50%, hsl(290 55% 50%) 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            Ready To Fix The Real
            <br /> Growth Problem?
          </h2>
          <p className="text-lg text-white/70 mb-4 max-w-xl mx-auto">
            If your business is already running but growth feels inconsistent, the first step is strategy.
          </p>
          <p className="text-white/50 mb-10 max-w-xl mx-auto">
            We'll analyze your business, identify the gaps, and show you where growth is actually coming from.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-base font-bold shadow-2xl shadow-black/20"
          >
            Book Your Strategy Call
            <ArrowRight className="ml-1" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-black tracking-widest text-foreground">TRADEFIGUR</p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tradefigur. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
