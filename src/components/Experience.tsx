"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "2022 – Present",
    role: "National AI Faculty & Corporate Trainer",
    org: "ICAI & Major Enterprises",
    loc: "Pan-India",
    color: "#0096ff",
    points: [
      "National Faculty for AI; driving the 'Train the Trainers' initiative for upcoming AI educators.",
      "Trained over 10,000 Professionals, Business Leader and led extensive corporate training for giants like the Adani Group.",
      "Spearheaded Generative AI and Data Analytics integration use cases published on Global Reputed journals & Sites.",
      "National Faculty — AI in ICAI Committee, DITS & WTO Committee of ICAI, and many more Committees of ICAI",
    ],
  },
  {
    period: "Nov 2021 – Present",
    role: "Principal AI & ESG Consultant",
    loc: "Ahmedabad, India",
    color: "#4caf82",
    points: [
      "Pioneering tech-driven assurance by embedding Industry 4.0 (Big Data, IoT, RPA) into traditional audits.",
      "Specializing in BRSR reporting, helping corporations align with GRI, SASB, and IIRC global frameworks.",
      "Certified Social Auditor driving sustainable impact assessments and ESG roadmap development.",
      "Full-service CA firm managing GST, Income Tax, FEMA, RERA, and expansive Statutory Audits.",
    ],
  },
  {
    period: "2022 – Present",
    role: "Chief Educator",
    org: "StrideX CPA(US)",
    loc: "Global",
    color: "#ffa726",
    points: [
      "Specialized coaching for US CPA subjects — REG (Regulation) and TCP (Tax Compliance & Planning).",
      "Comprehensive coaching for all three parts of the Enrolled Agent (EA) examination.",
      "Mentoring resilient aspiring professionals entering the complex world of global taxation.",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section" ref={ref} style={{ background: "var(--bg-secondary)" }}>
      <div className="orb" style={{
        width: 450, height: 450, bottom: "10%", left: "-5%",
        background: "radial-gradient(circle, rgba(124,92,191,0.08) 0%, transparent 70%)",
      }} />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} style={{ marginBottom: "56px" }}
        >
          <span className="section-badge">✦ Professional Journey</span>
          <h2 className="section-title">Experience</h2>
          <div className="gold-divider" />
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: "20px", top: 0, bottom: 0,
            width: "1px", background: "linear-gradient(to bottom, var(--gold), transparent)",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.25,0.46,0.45,0.94] as const }}
                style={{ display: "flex", gap: "40px", paddingLeft: "0" }}
              >
                {/* Dot + period */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: "120px" }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: `${exp.color}20`,
                    border: `2px solid ${exp.color}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, zIndex: 1,
                    boxShadow: `0 0 16px ${exp.color}40`,
                  }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: exp.color }} />
                  </div>
                  <span style={{
                    fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "10px",
                    textAlign: "center", lineHeight: 1.4,
                  }}>
                    {exp.period}
                  </span>
                </div>

                {/* Card */}
                <div className="glass-card" style={{ flex: 1, padding: "28px 28px" }}>
                  <div style={{ marginBottom: "16px" }}>
                    <h3 style={{
                      color: exp.color, fontSize: "1.1rem",
                      fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                    }}>
                      {exp.role}
                    </h3>
                    <p style={{ color: "var(--text-primary)", fontWeight: 600, marginTop: "4px" }}>{exp.org}</p>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "2px" }}>📍 {exp.loc}</p>
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {exp.points.map((pt, j) => (
                      <li key={j} style={{ display: "flex", gap: "10px", color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                        <span style={{ color: exp.color, flexShrink: 0, marginTop: "6px" }}>▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
