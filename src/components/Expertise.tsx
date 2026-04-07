"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const competencies = [
  {
    icon: "🤖",
    title: "Technology & AI",
    color: "#0096ff",
    skills: ["Generative AI Integration","Data Analytics & Visualization","Big Data Applications","AI/ML Mastery","RPA","Blockchain in Audit"],
  },
  {
    icon: "🌱",
    title: "Sustainability & ESG",
    color: "#4caf82",
    skills: ["BRSR Reporting","GRI Framework","SASB & IIRC","Social Audit","Net Zero Advisory","ESG Compliance Roadmap"],
  },
  {
    icon: "🎓",
    title: "Professional AI Training",
    color: "#ff7043",
    skills: ["ICAI AICA Faculty","Train the Trainers (AI)","Corporate GenAI Workshops","Adani Group Training","10k+ Professionals Trained"],
  },
  {
    icon: "📋",
    title: "Audit & Assurance",
    color: "#d4af37",
    skills: ["Statutory Audit","Tax & Internal Audit","Concurrent Audit","IFC","SAs & Ind AS","CARO"],
  },
  {
    icon: "📊",
    title: "Advisory & Consulting",
    color: "#7c5cbf",
    skills: ["Project Finance","Business Advisory","Process Improvement","Regulatory Compliance"],
  },
  {
    icon: "🏢",
    title: "US Certified Education",
    color: "#ffa726",
    skills: ["CPA REG & TCP", "EA All Parts", "US Taxation", "Global Tax Planning", "StrideX Mentorship"],
  },
  {
    icon: "🔍",
    title: "Specialized Areas",
    color: "#ec407a",
    skills: ["FAFD","Social Stock Exchange","Forensic Accounting","Fraud Detection"],
  },
  {
    icon: "💰",
    title: "Taxation",
    color: "#00d4aa",
    skills: ["GST","Income Tax","Direct Tax","FEMA","RERA","Appeals & Representation"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.25,0.46,0.45,0.94] as const },
  }),
};

export default function Expertise() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="expertise" className="section" ref={ref}>
      <div className="orb" style={{
        width: 500, height: 500, top: "30%", right: "-5%",
        background: "radial-gradient(circle, rgba(0,212,170,0.07) 0%, transparent 70%)",
      }} />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} style={{ marginBottom: "56px" }}
        >
          <span className="section-badge">✦ Core Competencies</span>
          <h2 className="section-title">Areas of Expertise</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            A multidisciplinary skill set spanning traditional finance, cutting-edge technology, and global professional education.
          </p>
        </motion.div>

        <div className="grid-4">
          {competencies.map((c, i) => (
            <motion.div
              key={c.title}
              custom={i} variants={fadeUp}
              initial="hidden" animate={inView ? "show" : "hidden"}
              className="glass-card"
              style={{ padding: "28px 24px", cursor: "default" }}
            >
              <div style={{
                width: 56, height: 56, borderRadius: "14px",
                background: `${c.color}18`,
                border: `1px solid ${c.color}30`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.6rem", marginBottom: "16px",
              }}>
                {c.icon}
              </div>
              <h3 style={{
                fontSize: "1rem", fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, color: c.color, marginBottom: "14px",
              }}>
                {c.title}
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                {c.skills.map(s => (
                  <li key={s} style={{
                    fontSize: "0.8rem", color: "var(--text-secondary)",
                    display: "flex", alignItems: "center", gap: "6px",
                  }}>
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: c.color, flexShrink: 0 }} />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
