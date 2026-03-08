import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div
        className={cn(
          "mx-auto max-w-6xl rounded-full border px-6 py-3 transition-all duration-500",
          "backdrop-blur-xl",
          scrolled
            ? "bg-background/60 border-border/50 shadow-lg shadow-primary/5"
            : "bg-white/10 border-white/20"
        )}
      >
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
            className="text-xl font-black tracking-widest text-accent"
          >
            TRADEFIGUR
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-white/10"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground/70 hover:text-foreground"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-1 pb-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-white/10 text-left"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
