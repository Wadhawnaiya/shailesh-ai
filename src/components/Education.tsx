"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const education = [
  {
    degree: "CA",
    field: "Chartered Accountancy",
    institution: "ICAI",
    year: "July 2021",
    icon: "🎓",
    color: "#d4af37",
  },
  {
    degree: "M.Com",
    field: "Commerce",
    institution: "Gujarat University",
    year: "April 2016",
    icon: "📖",
    color: "#00d4aa",
  },
  {
    degree: "B.Com",
    field: "Commerce",
    institution: "Gujarat University",
    year: "April 2014",
    icon: "📚",
    color: "#ffa726",
  },
];

const certifications = [
  { name: "Forensic Accounting & Fraud Detection (FAFD)", body: "ICAI", icon: "🔍" },
  { name: "AICA Level 1 & Level 2 Certified", body: "ICAI AI Committee", icon: "🤖" },
  { name: "Certified Social Auditor", body: "ISAI (Institute of Social Auditor of India)", icon: "🌱" },
  { name: "AIF in IFSCA GIFT City", body: "IFSCA", icon: "🏙" },
  { name: "CPA(US) — Regulation & TCP", body: "AICPA (in progress)", icon: "🇺🇸" },
  { name: "EA(US) — All Three Parts", body: "IRS Enrolled Agent", icon: "⚖️" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.09, duration: 0.6, ease: [0.25,0.46,0.45,0.94] as const },
  }),
};

const interests = [
  { emoji: "🌿", label: "Nature Observation" },
  { emoji: "📚", label: "Non-Fiction Reading" },
  { emoji: "🎵", label: "Music" },
  { emoji: "🪁", label: "Kite Flying" },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="section" ref={ref}>
      <div className="orb" style={{
        width: 500, height: 500, top: "10%", right: "-5%",
        background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)",
      }} />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} style={{ marginBottom: "56px" }}
        >
          <span className="section-badge">✦ Qualifications</span>
          <h2 className="section-title">Education &<br />Certifications</h2>
          <div className="gold-divider" />
        </motion.div>

        {/* Degrees */}
        <div className="grid-4" style={{ marginBottom: "56px" }}>
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              custom={i} variants={fadeUp}
              initial="hidden" animate={inView ? "show" : "hidden"}
              className="glass-card"
              style={{ padding: "28px 20px", textAlign: "center" }}
            >
              <div style={{
                width: 64, height: 64, borderRadius: "50%",
                background: `${e.color}18`, border: `2px solid ${e.color}40`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.8rem", margin: "0 auto 16px",
              }}>
                {e.icon}
              </div>
              <div style={{
                fontSize: "1.8rem", fontWeight: 900,
                background: `linear-gradient(135deg, ${e.color}, ${e.color}99)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                fontFamily: "'Space Grotesk', sans-serif", marginBottom: "6px",
              }}>
                {e.degree}
              </div>
              <p style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "0.9rem", marginBottom: "6px" }}>{e.field}</p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>{e.institution}</p>
              <p style={{ color: e.color, fontSize: "0.75rem", fontWeight: 600, marginTop: "6px" }}>{e.year}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <h3 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
            color: "var(--text-secondary)", fontSize: "0.85rem",
            letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "24px",
          }}>
            Post-Qualification Certifications
          </h3>
          <div className="grid-3" style={{ marginBottom: "56px" }}>
            {certifications.map((c, i) => (
              <motion.div
                key={c.name}
                custom={i + 4} variants={fadeUp}
                initial="hidden" animate={inView ? "show" : "hidden"}
                className="glass-card"
                style={{ padding: "20px 20px", display: "flex", gap: "14px", alignItems: "flex-start" }}
              >
                <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{c.icon}</span>
                <div>
                  <p style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "0.88rem", lineHeight: 1.5 }}>{c.name}</p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginTop: "4px" }}>{c.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.7 }}
          style={{
            background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.12)",
            borderRadius: "20px", padding: "32px", display: "flex",
            gap: "32px", flexWrap: "wrap", alignItems: "center",
          }}
        >
          <div>
            <p style={{ color: "var(--gold)", fontWeight: 700, marginBottom: "16px", fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Personal Interests</p>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {interests.map(int => (
                <div key={int.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontSize: "1.8rem" }}>{int.emoji}</span>
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.78rem" }}>{int.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderLeft: "1px solid var(--border)", paddingLeft: "32px" }}>
            <p style={{ color: "var(--gold)", fontWeight: 700, marginBottom: "16px", fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Languages</p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {[["🇬🇧","English","Professional"],["🇮🇳","Gujarati","Native"],["🇮🇳","Hindi","Native"],["🇧🇷","Portuguese","Working"]].map(([f, l, lvl]) => (
                <div key={l} className="glass-card" style={{ padding: "8px 16px", textAlign: "center" }}>
                  <div style={{ fontSize: "1.1rem" }}>{f}</div>
                  <div style={{ color: "var(--text-primary)", fontSize: "0.8rem", fontWeight: 600 }}>{l}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.68rem" }}>{lvl}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
