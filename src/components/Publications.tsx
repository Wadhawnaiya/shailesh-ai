"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const articles = [
  {
    title: "Direct Listing of Equity Shares on International Exchanges of GIFT IFSC",
    pub: "TaxGuru",
    icon: "📈",
    color: "#d4af37",
    tag: "Capital Markets",
  },
  {
    title: "ESG Investing — New SEBI Regulations & Green Finance",
    pub: "TaxGuru",
    icon: "🌿",
    color: "#4caf82",
    tag: "ESG & Finance",
  },
  {
    title: "Indian Carbon Market — Policy Framework & Global Integration",
    pub: "TaxGuru",
    icon: "🌍",
    color: "#00d4aa",
    tag: "Climate Policy",
  },
  {
    title: "AI Use Cases for Chartered Accountants",
    pub: "ICAI AI Hub",
    icon: "🤖",
    color: "#7c5cbf",
    tag: "AI in Finance",
  },
];

const research = [
  {
    title: "Initial Phase — Social Stock Exchange cum Social Auditor Framework",
    org: "Social Stock Exchange / Social Audit — SRSB, ICAI",
    icon: "📚",
  },
  {
    title: "Part 2 — SSE AE Framework",
    org: "Social Stock Exchange / Social Audit — SRSB, ICAI",
    icon: "📚",
  },
  {
    title: "Part 3 — SSE Framework",
    org: "Social Stock Exchange / Social Audit — SRSB, ICAI",
    icon: "📚",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25,0.46,0.45,0.94] as const },
  }),
};

export default function Publications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="publications" className="section" ref={ref} style={{ background: "var(--bg-secondary)" }}>
      <div className="orb" style={{
        width: 450, height: 450, top: "20%", left: "-5%",
        background: "radial-gradient(circle, rgba(0,150,255,0.07) 0%, transparent 70%)",
      }} />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} style={{ marginBottom: "56px" }}
        >
          <span className="section-badge">✦ Thought Leadership</span>
          <h2 className="section-title">Publications &<br />Research</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Contributed to the professional discourse through published articles, research papers, and ICAI initiatives.
          </p>
        </motion.div>

        <div style={{ marginBottom: "56px" }}>
          <h3 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
            color: "var(--text-secondary)", fontSize: "0.85rem",
            letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "24px",
          }}>
            Published Articles
          </h3>
          <div className="grid-2">
            {articles.map((a, i) => (
              <motion.div
                key={a.title}
                custom={i} variants={fadeUp}
                initial="hidden" animate={inView ? "show" : "hidden"}
                className="glass-card"
                style={{ padding: "28px" }}
              >
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{
                    width: 50, height: 50, borderRadius: "12px",
                    background: `${a.color}18`, border: `1px solid ${a.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.4rem", flexShrink: 0,
                  }}>
                    {a.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: "8px", marginBottom: "8px", flexWrap: "wrap" }}>
                      <span style={{
                        background: `${a.color}18`, border: `1px solid ${a.color}30`,
                        color: a.color, fontSize: "0.68rem", fontWeight: 700,
                        padding: "2px 10px", borderRadius: "100px", textTransform: "uppercase",
                      }}>
                        {a.pub}
                      </span>
                      <span className="tag" style={{ fontSize: "0.68rem" }}>{a.tag}</span>
                    </div>
                    <p style={{ color: "var(--text-primary)", fontSize: "0.92rem", lineHeight: 1.6, fontWeight: 500 }}>
                      {a.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Research */}
        <div>
          <h3 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
            color: "var(--text-secondary)", fontSize: "0.85rem",
            letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "24px",
          }}>
            Research Contributions — Social Stock Exchange
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {research.map((r, i) => (
              <motion.div
                key={r.title}
                custom={i + 4} variants={fadeUp}
                initial="hidden" animate={inView ? "show" : "hidden"}
                className="glass-card"
                style={{ padding: "20px 24px", display: "flex", gap: "16px", alignItems: "center" }}
              >
                <span style={{ fontSize: "1.4rem" }}>{r.icon}</span>
                <div>
                  <p style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "0.9rem" }}>{r.title}</p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginTop: "3px" }}>{r.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
