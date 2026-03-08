import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Insight", href: "#insight" },
  { label: "Solution", href: "#solution" },
  { label: "Process", href: "#process" },
  { label: "Authority", href: "#authority" },
  { label: "Contact", href: "#cta" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [overDark, setOverDark] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 40);

      // Detect if navbar overlaps the hero (dark) section
      const hero = document.getElementById("hero");
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        // Navbar is ~60px from top; transition when hero bottom passes navbar center
        setOverDark(heroBottom > 60);
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  // Also check process and CTA sections (dark backgrounds)
  useEffect(() => {
    const update = () => {
      const navY = 60; // approximate navbar vertical center
      const darkSections = ["hero", "process", "cta"];
      let isDark = false;

      for (const id of darkSections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navY && rect.bottom > navY) {
            isDark = true;
            break;
          }
        }
      }

      setOverDark(isDark);
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div
        className={cn(
          "mx-auto max-w-6xl rounded-full border px-6 py-3 transition-all duration-300",
          "backdrop-blur-xl",
          scrolled
            ? overDark
              ? "bg-black/40 border-white/10 shadow-lg shadow-black/10"
              : "bg-white/80 border-border/50 shadow-lg shadow-primary/5"
            : overDark
              ? "bg-white/5 border-white/15"
              : "bg-white/60 border-border/30"
        )}
      >
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
            className={cn(
              "text-xl font-black tracking-widest transition-colors duration-300",
              overDark ? "text-purple-300" : "text-accent"
            )}
          >
            TRADEFIGUR
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                  "after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:rounded-full after:transition-all after:duration-300 hover:after:w-[60%]",
                  overDark
                    ? "text-white/70 hover:text-white hover:bg-white/10 after:bg-white/50"
                    : "text-foreground/60 hover:text-foreground hover:bg-foreground/5 after:bg-accent"
                )}
              >
                {link.label}
              </button>
            ))}
            <Button
              size="sm"
              onClick={() => scrollTo("#cta")}
              className="ml-2 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-md"
            >
              Get Started
              <ArrowRight className="ml-1 w-3.5 h-3.5" />
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "md:hidden p-2 transition-colors duration-300",
              overDark ? "text-white/80 hover:text-white" : "text-foreground/70 hover:text-foreground"
            )}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className={cn(
            "md:hidden mt-3 pt-3 border-t flex flex-col gap-1 pb-2",
            overDark ? "border-white/10" : "border-border/30"
          )}>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={cn(
                  "px-4 py-2.5 text-sm font-medium transition-colors duration-300 rounded-full text-left",
                  overDark
                    ? "text-white/70 hover:text-white hover:bg-white/10"
                    : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                )}
              >
                {link.label}
              </button>
            ))}
            <Button
              size="sm"
              onClick={() => scrollTo("#cta")}
              className="mt-2 mx-4 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            >
              Get Started
              <ArrowRight className="ml-1 w-3.5 h-3.5" />
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
