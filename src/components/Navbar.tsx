"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#recognition", label: "Recognition" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
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
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }} className="nav-desktop">
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
          <a href="mailto:wadhawaniya@gmail.com" className="btn-primary" style={{ padding: "10px 22px", fontSize: "0.82rem" }}>
            Get In Touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
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
