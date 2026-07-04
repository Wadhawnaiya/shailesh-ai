"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#recognition", label: "Recognition" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
];

// Easy to extend in future — just add more objects here
const exploreLinks = [
  {
    label: "Explore 5000+ Prompt Libraries",
    href: "https://shaileshai-prompt.vercel.app/",
    description: "Curated AI prompts for finance, tax & productivity",
    external: true,
  },
  // Add future links here, e.g.:
  // { label: "AI Tools & Resources", href: "...", description: "...", external: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [exploreOpen, setExploreOpen] = useState(false);
  const exploreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close Explore dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (exploreRef.current && !exploreRef.current.contains(event.target as Node)) {
        setExploreOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setExploreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setMenuOpen(false);
    setExploreOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleExploreClick = (href: string, external?: boolean) => {
    setExploreOpen(false);
    setMenuOpen(false);
    if (external) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "0 24px",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled
            ? "rgba(4,6,15,0.88)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(212,175,55,0.1)"
            : "none",
          transition: "all 0.4s ease",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNav("#hero"); }}
          style={{ textDecoration: "none" }}
        >
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.3rem",
            fontWeight: 700,
            background: "linear-gradient(135deg,#d4af37,#f0d060)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "0.02em",
          }}>
            CA Shailesh
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "28px", alignItems: "center" }} className="nav-desktop">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: active === l.href ? "var(--gold)" : "var(--text-secondary)",
                fontSize: "0.88rem",
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.04em",
                transition: "color 0.2s",
                padding: "4px 0",
                borderBottom: active === l.href ? "1px solid var(--gold)" : "1px solid transparent",
              }}
            >
              {l.label}
            </button>
          ))}

          {/* Explore Dropdown */}
          <div ref={exploreRef} style={{ position: "relative" }}>
            <button
              onClick={() => setExploreOpen(!exploreOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: exploreOpen ? "var(--gold)" : "var(--text-secondary)",
                fontSize: "0.88rem",
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.04em",
                transition: "color 0.2s",
                padding: "4px 8px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                borderBottom: exploreOpen ? "1px solid var(--gold)" : "1px solid transparent",
              }}
              aria-haspopup="true"
              aria-expanded={exploreOpen}
            >
              Explore
              <ChevronDown
                size={15}
                style={{
                  transition: "transform 0.2s ease",
                  transform: exploreOpen ? "rotate(180deg)" : "none",
                }}
              />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {exploreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    top: "calc(100% + 12px)",
                    right: 0,
                    minWidth: "280px",
                    background: "rgba(8, 13, 28, 0.98)",
                    border: "1px solid rgba(212,175,55,0.2)",
                    borderRadius: "12px",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                    backdropFilter: "blur(20px)",
                    padding: "8px",
                    zIndex: 1100,
                  }}
                >
                  {exploreLinks.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleExploreClick(item.href, item.external)}
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        textAlign: "left",
                        padding: "12px 14px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        color: "var(--text-primary)",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(212,175,55,0.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>{item.label}</span>
                          {item.external && (
                            <ExternalLink size={13} style={{ color: "var(--gold)", opacity: 0.7 }} />
                          )}
                        </div>
                        {item.description && (
                          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "2px", lineHeight: 1.3 }}>
                            {item.description}
                          </div>
                        )}
                      </div>
                    </button>
                  ))}

                  {/* Future note / empty state hint */}
                  {exploreLinks.length === 1 && (
                    <div style={{
                      fontSize: "0.7rem",
                      color: "var(--text-muted)",
                      padding: "6px 14px 4px",
                      opacity: 0.6,
                    }}>
                      More resources coming soon
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="mailto:wadhawaniya@gmail.com" className="btn-primary" style={{ padding: "10px 22px", fontSize: "0.82rem" }}>
            Get In Touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => {
            setMenuOpen(!menuOpen);
            setExploreOpen(false);
          }}
          className="nav-hamburger"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
          aria-label="Toggle menu"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: "block", width: "24px", height: "2px",
              background: "var(--gold)",
              borderRadius: "2px",
              transition: "all 0.3s",
              transform: menuOpen
                ? i === 0 ? "rotate(45deg) translate(5px,5px)"
                : i === 1 ? "scaleX(0)"
                : "rotate(-45deg) translate(5px,-5px)"
                : "none",
            }} />
          ))}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed",
              top: "68px",
              left: 0,
              right: 0,
              zIndex: 999,
              background: "rgba(4,6,15,0.97)",
              backdropFilter: "blur(20px)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              borderBottom: "1px solid rgba(212,175,55,0.1)",
            }}
          >
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: "var(--text-primary)", fontSize: "1.1rem",
                  fontWeight: 500, textAlign: "left",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {l.label}
              </button>
            ))}

            {/* Mobile Explore section */}
            <div style={{ marginTop: "8px", borderTop: "1px solid rgba(212,175,55,0.15)", paddingTop: "16px" }}>
              <div style={{ color: "var(--gold)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "8px", paddingLeft: "4px" }}>
                EXPLORE
              </div>
              {exploreLinks.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleExploreClick(item.href, item.external)}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    color: "var(--text-primary)", fontSize: "1rem",
                    fontWeight: 500, textAlign: "left",
                    fontFamily: "'Inter', sans-serif",
                    padding: "8px 4px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    width: "100%",
                  }}
                >
                  {item.label}
                  {item.external && <ExternalLink size={14} style={{ opacity: 0.6 }} />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
