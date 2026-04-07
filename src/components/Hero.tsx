"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const roles = [
  "AI Trainer & Consultant",
  "ESG & Sustainability Leader",
  "Chartered Accountant",
  "Corporate Trainer",
  "CPA(US) Educator",
];

function TypingRoles() {
  const el = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      const current = roles[roleIdx % roles.length];
      if (!el.current) return;
      if (deleting) {
        el.current.textContent = current.slice(0, charIdx--);
        if (charIdx < 0) {
          deleting = false;
          roleIdx++;
          timer = setTimeout(tick, 400);
          return;
        }
      } else {
        el.current.textContent = current.slice(0, ++charIdx);
        if (charIdx === current.length) {
          deleting = true;
          timer = setTimeout(tick, 1800);
          return;
        }
      }
      timer = setTimeout(tick, deleting ? 40 : 70);
    }
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span ref={el} style={{
      background: "linear-gradient(135deg,#d4af37,#f0d060)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }} />
  );
}

// Particle canvas
function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);

    const N = 80;
    const particles = Array.from({ length: N }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    let raf: number;
    function draw() {
      ctx!.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(212,175,55,${p.alpha})`;
        ctx!.fill();
      });
      // Draw connections
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(212,175,55,${(1 - dist / 120) * 0.12})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(raf); };
  }, []);

  return (
    <canvas ref={canvasRef} style={{
      position: "absolute", inset: 0, width: "100%", height: "100%",
      pointerEvents: "none", zIndex: 0,
    }} />
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      background: "var(--gradient-hero)",
      paddingTop: "80px",
      paddingBottom: "80px",
    }}>
      <Particles />

      {/* Glow orbs */}
      <div className="orb" style={{
        width: 600, height: 600, top: "-10%", right: "-10%",
        background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)",
      }} />
      <div className="orb" style={{
        width: 500, height: 500, bottom: "-5%", left: "-10%",
        background: "radial-gradient(circle, rgba(0,212,170,0.08) 0%, transparent 70%)",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-grid">
          
          {/* Left Column: Text & Stats */}
          <motion.div variants={container} initial="hidden" animate="show" style={{ textAlign: "left" }}>
            <motion.div variants={item}>
              <span className="section-badge" style={{ marginBottom: "24px" }}>
                ✦ Empowering Future Finance
              </span>
            </motion.div>

            <motion.h1 variants={item} style={{ marginBottom: "16px", fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              CA Shailesh S Wadhawaniya
            </motion.h1>

            <motion.div variants={item} style={{
              fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
              marginBottom: "28px",
              color: "var(--text-secondary)",
              fontFamily: "'Space Grotesk', sans-serif",
              minHeight: "2em",
              fontWeight: 600
            }}>
              <TypingRoles />
              <span style={{ color: "var(--gold)", animation: "blink 1s step-end infinite" }}>|</span>
            </motion.div>

            <motion.blockquote variants={item} style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              marginBottom: "40px",
              borderLeft: "3px solid var(--gold)",
              paddingLeft: "24px",
            }}>
              &ldquo;Transforming businesses through the power of Generative AI, Data Analytics, and Sustainable ESG strategies.&rdquo;
            </motion.blockquote>

            <motion.div variants={item} style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "48px" }}>
              <a href="#about" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}>
                Explore My Journey ↓
              </a>
              <a href="mailto:wadhawaniya@gmail.com" className="btn-outline">
                Let&apos;s Connect
              </a>
            </motion.div>

            <motion.div variants={item} style={{
              display: "flex", gap: "32px", flexWrap: "wrap",
            }}>
              {[
                { num: "10k+", label: "Professionals AI Trained" },
                { num: "Global", label: "ESG Leader" },
                { num: "10+", label: "Years Practice" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{
                    fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
                    fontWeight: 800,
                    fontFamily: "'Space Grotesk', sans-serif",
                    background: "linear-gradient(135deg,#d4af37,#f0d060)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                    {s.num}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "4px" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Image */}
          <div className="hero-image-wrapper">
             <motion.div
               initial={{ opacity: 0, scale: 0.9, y: 30 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
               style={{ position: "relative", width: "100%", maxWidth: "480px", margin: "0 auto" }}
             >
               {/* Organic blob backlight */}
               <div className="blob-glow" style={{
                 position: "absolute", inset: "-15%",
                 background: "linear-gradient(135deg, rgba(212,175,55,0.4) 0%, rgba(0,212,170,0.2) 100%)",
                 filter: "blur(40px)", zIndex: 0,
                 borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
                 animation: "morph 8s ease-in-out infinite",
               }} />

               {/* Image container */}
               <div style={{
                 position: "relative", zIndex: 1, width: "100%", aspectRatio: "0.85",
                 borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%", // Organic blob shape
                 animation: "morph 8s ease-in-out infinite reverse",
                 overflow: "hidden",
                 border: "2px solid rgba(212,175,55,0.4)",
                 boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                 background: "#0a1628"
               }}>
                 <Image 
                   src="/images/shailesh_photo.jpeg"
                   alt="CA Shailesh S Wadhawaniya"
                   fill
                   style={{ objectFit: "cover", objectPosition: "center top" }}
                   priority
                   sizes="(max-width: 768px) 100vw, 50vw"
                 />
                 
                 {/* Gold overlay gradient at bottom to blend into dark theme */}
                 <div style={{
                   position: "absolute", bottom: 0, left: 0, right: 0, height: "30%",
                   background: "linear-gradient(to top, rgba(4,6,15,0.8), transparent)",
                 }} />
               </div>
             </motion.div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes morph {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          34% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
          67% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
          100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-grid > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center !important;
          }
          .hero-grid > div:first-child blockquote {
            text-align: center;
            border-left: none;
            padding-left: 0;
            border-bottom: 3px solid var(--gold);
            padding-bottom: 20px;
          }
          .hero-image-wrapper {
            order: -1;
            margin-bottom: 20px;
            max-width: 350px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
