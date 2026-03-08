import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Globe, Shield, TrendingUp, Users, Zap } from "lucide-react";

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
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(270 60% 20%) 0%, hsl(275 70% 35%) 50%, hsl(280 60% 45%) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(275_80%_60%_/_0.3),_transparent_60%)]" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-white/60 mb-6">
            Global Trade Intelligence
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6">
            Navigate Global Trade
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
              with Precision
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-light">
            Real-time compliance, market intelligence, and strategic advisory for enterprises operating across borders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-8 text-base font-semibold"
              onClick={() => scrollTo("#cta")}
            >
              Book a Strategy Call
              <ArrowRight className="ml-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 text-base"
              onClick={() => scrollTo("#solution")}
            >
              Explore Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            The Challenge
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            Global trade is a maze of
            <br className="hidden md:block" /> regulations and risk
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Globe,
                title: "Complex Regulations",
                desc: "Navigating hundreds of jurisdictions with constantly evolving trade policies and tariffs.",
              },
              {
                icon: Shield,
                title: "Compliance Risk",
                desc: "One misstep in sanctions screening or export controls can mean millions in penalties.",
              },
              {
                icon: TrendingUp,
                title: "Market Volatility",
                desc: "Supply chain disruptions and geopolitical shifts create unpredictable market conditions.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors"
              >
                <item.icon className="w-10 h-10 text-accent mb-5" />
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
            Our Insight
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            Data-driven decisions win in global trade
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            The companies that thrive aren't just reacting to trade shifts — they're anticipating them.
            We combine deep regulatory expertise with real-time data to give you an unfair advantage.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { num: "150+", label: "Countries Covered" },
              { num: "99.7%", label: "Compliance Rate" },
              { num: "$2.4B", label: "Trade Facilitated" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-black text-primary">{stat.num}</p>
                <p className="text-sm text-muted-foreground mt-2 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            Solutions
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12 leading-tight">
            Everything you need to trade globally
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Trade Analytics Platform",
                desc: "Real-time dashboards tracking tariffs, duties, and trade flows across your entire supply chain.",
              },
              {
                icon: Shield,
                title: "Compliance Engine",
                desc: "Automated screening against global sanctions lists, denied parties, and export control regulations.",
              },
              {
                icon: Users,
                title: "Advisory Services",
                desc: "Dedicated trade specialists who understand your markets and keep you ahead of regulatory changes.",
              },
              {
                icon: Zap,
                title: "Market Intelligence",
                desc: "AI-powered insights on emerging opportunities, risk factors, and competitive positioning.",
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
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 leading-tight">
            From complexity to clarity
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We map your trade operations and identify compliance gaps." },
              { step: "02", title: "Strategy", desc: "Custom roadmap aligned with your markets and growth plans." },
              { step: "03", title: "Integration", desc: "Deploy our platform and connect to your existing systems." },
              { step: "04", title: "Optimize", desc: "Continuous monitoring, reporting, and strategic refinement." },
            ].map((item) => (
              <div key={item.step} className="text-center md:text-left">
                <p className="text-5xl font-black text-white/15 mb-4">{item.step}</p>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority */}
      <section id="authority" className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            Why Tradefigur
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            Trusted by industry leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Our team combines decades of trade law expertise with cutting-edge technology.
            We've helped enterprises across 6 continents navigate the most complex trade environments.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Fortune 500 Clients",
              "ISO 27001 Certified",
              "24/7 Global Support",
              "15+ Year Track Record",
            ].map((badge) => (
              <div
                key={badge}
                className="py-6 px-4 rounded-2xl border border-border bg-card"
              >
                <p className="text-sm font-semibold text-foreground">{badge}</p>
              </div>
            ))}
          </div>
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
            Ready to simplify
            <br /> global trade?
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
            Book a free strategy session with our trade experts and discover how Tradefigur can transform your operations.
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
