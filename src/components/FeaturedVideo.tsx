"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function FeaturedVideo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1, y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section id="featured-video" className="section" ref={ref} style={{ background: "var(--bg-primary)" }}>
      {/* Glow orb */}
      <div className="orb" style={{
        width: 500, height: 500, top: "10%", left: "50%", transform: "translateX(-50%)",
        background: "radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 60%)",
      }} />

      <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}>
          <span className="section-badge">✦ Masterclass</span>
          <h2 className="section-title">Generative AI Insights</h2>
          <div className="gold-divider" style={{ margin: "20px auto 24px" }} />
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", marginBottom: "40px", maxWidth: "800px", margin: "0 auto 40px" }}>
            Catch my deep dive into the intersection of technology and finance. <br />
            <strong style={{ color: "var(--gold)" }}>Please observe: My specific session starts from 16:03 onwards.</strong>
          </p>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} style={{
          position: "relative",
          maxWidth: "900px",
          margin: "0 auto",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          border: "1px solid rgba(212,175,55,0.2)",
          boxShadow: "0 15px 50px rgba(0,0,0,0.5)"
        }}>
          {/* 16:9 Aspect Ratio Container */}
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
              src="https://www.youtube.com/embed/o76cLwYPOvw?start=963"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0, left: 0, width: "100%", height: "100%",
                background: "#000",
                border: "none"
              }}
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
