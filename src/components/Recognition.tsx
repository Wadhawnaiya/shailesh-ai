"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const recognitions = [
  {
    committee: "DITS & WTO Committee",
    description: "National Level Faculty for the Direct & International Tax Study and WTO Committee of ICAI",
    icon: "⚖️",
    color: "#d4af37",
    badge: "National Faculty",
  },
  {
    committee: "AICA Committee",
    description: "National Level Faculty for the Artificial Intelligence Committee of ICAI — Certificate Course on AI for CAs",
    icon: "🤖",
    color: "#00d4aa",
    badge: "National Faculty",
  },
  {
    committee: "Train the Trainers",
    description: "Selected as Train the Trainers Faculty for AICA Committee — mentoring fellow CA educators across India",
    icon: "🏅",
    color: "#7c5cbf",
    badge: "AICA · ICAI",
  },
  {
    committee: "Certificate Courses",
    description: "Faculty for various ICAI Certificate Courses covering Audit, Tax, AI, ESG and Sustainability topics",
    icon: "📜",
    color: "#ffa726",
    badge: "Multi-Course",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.25,0.46,0.45,0.94] as const },
  }),
};

export default function Recognition() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="recognition" className="section" ref={ref}>
      <div className="orb" style={{
        width: 500, height: 500, top: "10%", right: "-5%",
        background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)",
      }} />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} style={{ marginBottom: "56px" }}
        >
          <span className="section-badge">✦ National Recognition</span>
          <h2 className="section-title">ICAI Recognitions</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Nationally recognized by the premier body of chartered accountants across multiple prestigious committees.
          </p>
        </motion.div>

        {/* Hero banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(0,212,170,0.06) 100%)",
            border: "1px solid rgba(212,175,55,0.2)",
            borderRadius: "24px",
            padding: "40px",
            marginBottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontSize: "3rem" }}>🎖️</div>
          <div>
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
              color: "var(--gold)", marginBottom: "8px",
            }}>
              National Level ICAI Faculty
            </h3>
            <p style={{ color: "var(--text-secondary)", maxWidth: "680px", lineHeight: 1.7 }}>
              Recognized across DITS & WTO, AICA, and multiple Certificate Courses — placing CA Shailesh among a select group of professionals honoured by ICAI at the national level for advancing the profession.
            </p>
          </div>
        </motion.div>

        <div className="grid-2">
          {recognitions.map((r, i) => (
            <motion.div
              key={r.committee}
              custom={i} variants={fadeUp}
              initial="hidden" animate={inView ? "show" : "hidden"}
              className="glass-card"
              style={{ padding: "32px" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <div style={{
                  width: 60, height: 60, borderRadius: "16px",
                  background: `${r.color}18`, border: `1px solid ${r.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.8rem",
                }}>
                  {r.icon}
                </div>
                <span style={{
                  background: `${r.color}18`, border: `1px solid ${r.color}30`,
                  color: r.color, fontSize: "0.7rem", fontWeight: 700,
                  padding: "4px 12px", borderRadius: "100px",
                  textTransform: "uppercase", letterSpacing: "0.08em",
                }}>
                  {r.badge}
                </span>
              </div>
              <h3 style={{
                color: r.color, fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: "1rem", marginBottom: "10px",
              }}>
                {r.committee}
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                {r.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ICAI branch engagements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          style={{ marginTop: "48px" }}
        >
          <h3 style={{
            color: "var(--text-primary)", fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600, marginBottom: "20px", fontSize: "1.1rem",
          }}>
            🏛 ICAI Branch Engagements
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {["WIRC BKC Branch","Ahmedabad Branch","Rajkot Branch","Vadodara Branch","CPE Study Circles","ICAI AI Innovation Summit"].map(b => (
              <div key={b} className="glass-card" style={{
                padding: "10px 20px",
                background: "rgba(212,175,55,0.05)",
                border: "1px solid rgba(212,175,55,0.15)",
              }}>
                <span style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}>{b}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
