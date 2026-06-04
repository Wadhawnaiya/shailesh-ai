"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const contactItems = [
  { icon: "📞", label: "Phone", value: "+91 79900 46540", href: "tel:+917990046540", color: "#d4af37" },
  { icon: "✉", label: "Email", value: "wadhawaniya@gmail.com", href: "mailto:wadhawaniya@gmail.com", color: "#00d4aa" },
  { icon: "💼", label: "LinkedIn", value: "ca-shailesh-wadhawaniya", href: "https://linkedin.com/in/ca-shailesh-wadhawaniya", color: "#0096ff" },
  { icon: "📍", label: "Location", value: "Ahmedabad, Gujarat 380028, India", href: null, color: "#7c5cbf" },
];

const services = [
  { title: "AI Training", icon: "🤖" },
  { title: "AI Consulting", icon: "📋" },
  { title: "Corporate & Managment Training", icon: "🏢" },
  { title: "ESG & BRSR Advisory", icon: "🌿" },
  { title: "CPA / EA Coaching", icon: "🎓" },
  { title: "Tax & Audit Services", icon: "📋" },
  { title: "Social Audit", icon: "🔍" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section" ref={ref} style={{ background: "var(--bg-secondary)" }}>
      <div className="orb" style={{
        width: 600, height: 600, bottom: "-10%", right: "-10%",
        background: "radial-gradient(circle, rgba(212,175,55,0.09) 0%, transparent 70%)",
      }} />
      <div className="orb" style={{
        width: 400, height: 400, top: "10%", left: "-5%",
        background: "radial-gradient(circle, rgba(0,212,170,0.06) 0%, transparent 70%)",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} style={{ marginBottom: "56px", textAlign: "center" }}
        >
          <span className="section-badge">✦ Let&apos;s Connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="gold-divider" style={{ margin: "20px auto" }} />
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Whether you&apos;re looking for ESG advisory, AI training, corporate workshops, or CPA/EA coaching — let&apos;s start a conversation.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
              marginBottom: "28px", color: "var(--text-primary)",
            }}>
              Contact Details
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {contactItems.map((c) => (
                <div key={c.label} className="glass-card" style={{ padding: "18px 22px" }}>
                  <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: "12px",
                      background: `${c.color}18`, border: `1px solid ${c.color}30`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.2rem", flexShrink: 0,
                    }}>
                      {c.icon}
                    </div>
                    <div>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>{c.label}</p>
                      {c.href ? (
                        <a href={c.href} style={{ color: c.color, fontWeight: 600, fontSize: "0.92rem", textDecoration: "none" }}
                          target={c.href.startsWith("http") ? "_blank" : undefined}
                          rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p style={{ color: "var(--text-secondary)", fontWeight: 600, fontSize: "0.92rem" }}>{c.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Firm logos */}
            <div style={{ marginTop: "28px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
              {["Wadhawaniya & Co.","StrideX Institute"].map(f => (
                <div key={f} style={{
                  background: "rgba(212,175,55,0.07)", border: "1px solid rgba(212,175,55,0.2)",
                  padding: "10px 18px", borderRadius: "10px",
                  color: "var(--gold)", fontWeight: 700, fontSize: "0.88rem",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}>
                  {f}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Services + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
              marginBottom: "28px", color: "var(--text-primary)",
            }}>
              Services Available
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "32px" }}>
              {services.map((s) => (
                <div key={s.title} className="glass-card" style={{
                  padding: "16px", display: "flex", gap: "10px", alignItems: "center",
                }}>
                  <span style={{ fontSize: "1.2rem" }}>{s.icon}</span>
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.85rem", fontWeight: 500 }}>{s.title}</span>
                </div>
              ))}
            </div>

            <a href="mailto:wadhawaniya@gmail.com" className="btn-primary" style={{ width: "100%", justifyContent: "center", marginBottom: "12px" }}>
              ✉ Send an Email
            </a>
            <a href="tel:+917990046540" className="btn-outline" style={{ width: "100%", justifyContent: "center" }}>
              📞 Call Directly
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: "80px", borderTop: "1px solid var(--border)",
        paddingTop: "32px", textAlign: "center",
      }}>
        <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
          © 2026 CA Shailesh S Wadhawaniya | Ahmedabad, India
        </p>
        <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginTop: "6px" }}>
          Chartered Accountant · AI Trainer · ESG Consultant · CPA(US) Educator
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
