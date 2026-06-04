"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25,0.46,0.45,0.94] as const },
  }),
};

const info = [
  { icon: "📍", label: "Location", value: "Ahmedabad, Gujarat 380028" },
  { icon: "📞", label: "Phone", value: "+91 79900 46540" },
  { icon: "✉", label: "Email", value: "wadhawaniya@gmail.com" },
  { icon: "💼", label: "LinkedIn", value: "ca-shailesh-wadhawaniya" },
  { icon: "🌐", label: "Languages", value: "English · Gujarati · Hindi · Portuguese" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section" ref={ref} style={{ background: "var(--bg-secondary)" }}>
      {/* Glow */}
      <div className="orb" style={{
        width: 400, height: 400, top: "20%", left: "-5%",
        background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)",
      }} />

      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "64px", alignItems: "center" }}>
          {/* Left — Profile card */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}
          >
            <div className="glass-card" style={{
              padding: "40px 32px",
              background: "rgba(212,175,55,0.03)",
              border: "1px solid rgba(212,175,55,0.15)",
              position: "relative", overflow: "hidden",
            }}>
              {/* Photo Avatar */}
              <div style={{
                width: 130, height: 130,
                borderRadius: "50%",
                background: "linear-gradient(135deg,#d4af37,#a88a20)",
                position: "relative",
                margin: "0 auto 24px",
                boxShadow: "0 0 40px rgba(212,175,55,0.4)",
                overflow: "hidden",
                border: "3px solid transparent",
                backgroundClip: "padding-box",
              }}>
                <div style={{ position: "absolute", inset: "-3px", background: "linear-gradient(135deg, #d4af37, #f0d060)", zIndex: -1, borderRadius: "50%" }} />
                <Image 
                  src="/images/shailesh_photo.jpeg"
                  alt="CA Shailesh S Wadhawaniya"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="130px"
                />
              </div>

              <div style={{ textAlign: "center", marginBottom: "28px" }}>
                <h3 style={{ color: "var(--text-primary)", marginBottom: "6px" }}>CA Shailesh S Wadhawaniya</h3>
<p style={{ color: "var(--gold)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.06em" }}>
                   AI DHURANDHAR · CA
                 </p>
                <div className="gold-divider" style={{ margin: "14px auto" }} />
                <em style={{ color: "var(--text-secondary)", fontSize: "0.9rem", fontFamily: "'Playfair Display', serif" }}>
                  &ldquo;Resilient. Resourceful. Dependable.&rdquo;
                </em>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {info.map((item) => (
                  <div key={item.label} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "2px" }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{item.label}</div>
                      <div style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Summary text */}
          <div>
            <motion.div custom={1} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}>
              <span className="section-badge">✦ About Me</span>
              <h2 className="section-title">AI Expert With Next-Gen Intelligence</h2>
              <div className="gold-divider" />
            </motion.div>

            <motion.p custom={2} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}
              style={{ color: "var(--text-secondary)", marginBottom: "20px", fontSize: "1.02rem" }}>
              I empower modern finance professionals by bridging the gap between <strong style={{ color: "var(--text-primary)" }}>Generative AI, Data Analytics, and Industry 4.0</strong> technologies. With over <strong style={{ color: "var(--gold)" }}>10,000+ Professionals & Business Leader trained</strong> in AI, I help enterprises automate the operations and scale intelligently.
            </motion.p>

<motion.p custom={3} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}
               style={{ color: "var(--text-secondary)", marginBottom: "20px", fontSize: "1.02rem" }}>
              As an ESG & Sustainability Leader, I guide organizations on environmental responsibilities globally.
            </motion.p>

<motion.p custom={4} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}
               style={{ color: "var(--text-secondary)", marginBottom: "20px", fontSize: "1.02rem" }}>
              I am a National Level Faculty for ICAI, training 10,000+ Professionals & Business Leaders in AI.
            </motion.p>

            <motion.div custom={5} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}
              style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "28px" }}>
{["AI Dhurandhar", "AI Expert", "ESG Strategist", "National & International Level Faculty"].map(t => (
                 <span key={t} className="tag">{t}</span>
               ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #about .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
