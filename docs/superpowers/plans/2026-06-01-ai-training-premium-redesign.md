# AI Training Premium Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the existing single-page site into a world-class AI Training and AI Consulting personal brand for CA Shailesh S Wadhawaniya.

**Architecture:** Keep the current Next.js App Router single-page architecture. Use Server Components for `layout.tsx` and `page.tsx`, Client Components only where Framer Motion, viewport detection, or interaction is needed, and global CSS for shared premium visual primitives. Add one lightweight verification script before implementation to lock the approved AI-first requirements without adding dependencies.

**Tech Stack:** Next.js 16.2.2, React 19.2.4, TypeScript, Framer Motion 12.38.0, CSS custom properties, `next/image`, Node.js verification script.

---

## Source Context

Approved spec: `docs/superpowers/specs/2026-06-01-ai-training-premium-redesign-design.md`

Relevant Next.js docs checked before planning:

- `node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/11-css.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/12-images.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/14-metadata-and-og-images.md`

Constraints:

- Do not add dependencies.
- Do not commit unrelated `.omx/` state files or unrelated image changes.
- Remove/reword generic `Corporate Training` copy as `AI Training`.
- Make AI Training and AI Consulting the dominant site focus.
- Keep decorative 3D/motion lightweight, readable, and accessible.

## File Structure

Create:

- `scripts/verify-ai-redesign.mjs` — dependency-free regression check for AI-first content, removed corporate-training copy, required CTA/sections, and reduced-motion CSS.
- `src/data/site.ts` — central content model for navigation, proof metrics, AI programs, consulting offers, AI framework, and conversion services.
- `src/components/AIFramework.tsx` — new signature methodology section: Assess -> Train -> Automate -> Govern -> Scale.

Modify:

- `src/app/layout.tsx` — AI Training/Consulting SEO metadata.
- `src/app/page.tsx` — AI-first page order and `AIFramework`.
- `src/app/globals.css` — premium AI visual utilities and reduced-motion support.
- `src/components/Navbar.tsx` — AI-first navigation and `Book AI Training` CTA.
- `src/components/Hero.tsx` — premium speaker-brand hero.
- `src/components/About.tsx` — AI-led profile narrative.
- `src/components/Expertise.tsx` — AI Training programs and AI Consulting pillars.
- `src/components/FeaturedVideo.tsx` — featured AI masterclass positioning.
- `src/components/Experience.tsx`, `Recognition.tsx`, `Publications.tsx`, `Education.tsx` — secondary credibility aligned to AI authority.
- `src/components/Contact.tsx` — AI Training / AI Consulting conversion section.

---

### Task 1: Add Requirement Verification Script First

**Files:**
- Create: `scripts/verify-ai-redesign.mjs`

- [ ] **Step 1: Create the failing verification script**

Create `scripts/verify-ai-redesign.mjs` with this complete content:

```js
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), "utf8");
const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
};

const requiredFiles = [
  "src/data/site.ts",
  "src/components/AIFramework.tsx",
  "src/components/Hero.tsx",
  "src/components/Expertise.tsx",
  "src/components/Contact.tsx",
  "src/app/page.tsx",
  "src/app/globals.css",
];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) fail(`${file} must exist`);
}

const searchableFiles = [
  "src/app/layout.tsx",
  "src/app/page.tsx",
  "src/app/globals.css",
  "src/components/Navbar.tsx",
  "src/components/Hero.tsx",
  "src/components/About.tsx",
  "src/components/Expertise.tsx",
  "src/components/FeaturedVideo.tsx",
  "src/components/Experience.tsx",
  "src/components/Recognition.tsx",
  "src/components/Publications.tsx",
  "src/components/Education.tsx",
  "src/components/Contact.tsx",
  "src/components/AIFramework.tsx",
  "src/data/site.ts",
].filter((file) => existsSync(join(root, file)));

const corpus = searchableFiles.map((file) => `${file}\n${read(file)}`).join("\n\n");

const requiredPhrases = [
  "The AI Mentor for Modern Finance Professionals",
  "Book AI Training",
  "Request AI Consulting",
  "AI Training Programs",
  "AI Consulting",
  "Assess",
  "Train",
  "Automate",
  "Govern",
  "Scale",
  "prefers-reduced-motion",
];

for (const phrase of requiredPhrases) {
  if (!corpus.includes(phrase)) fail(`Missing required phrase: ${phrase}`);
}

if (/Corporate Training/i.test(corpus)) {
  fail("Generic 'Corporate Training' wording must be removed or replaced with AI Training");
}

const aiTrainingMatches = corpus.match(/AI Training/g) ?? [];
if (aiTrainingMatches.length < 8) {
  fail(`AI Training should be dominant; found ${aiTrainingMatches.length} exact mentions`);
}

const page = existsSync(join(root, "src/app/page.tsx")) ? read("src/app/page.tsx") : "";
const heroIndex = page.indexOf("<Hero />");
const expertiseIndex = page.indexOf("<Expertise />");
const frameworkIndex = page.indexOf("<AIFramework />");
const recognitionIndex = page.indexOf("<Recognition />");

if (heroIndex === -1 || expertiseIndex === -1 || frameworkIndex === -1) {
  fail("page.tsx must render Hero, Expertise, and AIFramework sections");
}

if (recognitionIndex !== -1 && frameworkIndex !== -1 && frameworkIndex > recognitionIndex) {
  fail("AIFramework should appear before secondary recognition content");
}

if (process.exitCode) process.exit(process.exitCode);
console.log("AI redesign verification passed");
```

- [ ] **Step 2: Run the verification script and confirm RED**

Run:

```powershell
node scripts/verify-ai-redesign.mjs
```

Expected: fails because `src/data/site.ts`, `src/components/AIFramework.tsx`, required phrases, and reduced-motion content are not all present yet.

- [ ] **Step 3: Commit the RED check**

```powershell
git add -- scripts/verify-ai-redesign.mjs
git commit -m "test: add AI redesign verification"
```

---

### Task 2: Centralize AI-First Site Content

**Files:**
- Create: `src/data/site.ts`

- [ ] **Step 1: Create central data file**

Create `src/data/site.ts` with this complete content:

```ts
export const navLinks = [
  { href: "#ai-training", label: "AI Training" },
  { href: "#ai-consulting", label: "Consulting" },
  { href: "#framework", label: "Framework" },
  { href: "#masterclass", label: "Masterclass" },
  { href: "#recognition", label: "Proof" },
  { href: "#contact", label: "Contact" },
];

export const proofMetrics = [
  { value: "10,000+", label: "professionals trained" },
  { value: "ICAI", label: "national faculty" },
  { value: "AI + Finance", label: "specialized focus" },
  { value: "CA-led", label: "trusted advisory lens" },
];

export const aiPrograms = [
  {
    title: "GenAI for Chartered Accountants",
    audience: "CAs, CA students, and finance professionals",
    outcome: "Use AI for research, drafting, review, analysis, client communication, and daily professional productivity.",
    accent: "#d4af37",
  },
  {
    title: "AI Training for Finance Teams",
    audience: "Finance teams, CFO offices, and business leaders",
    outcome: "Build practical AI fluency for reporting, analytics, automation, compliance support, and decision workflows.",
    accent: "#00d4aa",
  },
  {
    title: "AI Automation for CA Firms",
    audience: "CA firms and professional practices",
    outcome: "Identify repeatable workflows and convert them into safe, scalable AI-assisted systems.",
    accent: "#7c5cbf",
  },
  {
    title: "AI Governance for Finance",
    audience: "Leaders handling sensitive financial workflows",
    outcome: "Adopt AI responsibly with practical controls, review loops, documentation habits, and risk awareness.",
    accent: "#0096ff",
  },
];

export const consultingOffers = [
  "AI adoption roadmap for CA firms and finance teams",
  "Workflow automation opportunity mapping",
  "Prompt systems and AI productivity playbooks",
  "AI tool selection for finance use cases",
  "Responsible AI controls for sensitive finance work",
  "Custom AI Training workshops for institutions and professional bodies",
];

export const frameworkSteps = [
  { step: "01", title: "Assess", text: "Map current finance workflows, skills, risks, and high-value AI opportunities." },
  { step: "02", title: "Train", text: "Build practical AI capability through role-based workshops and guided practice." },
  { step: "03", title: "Automate", text: "Convert repeatable tasks into AI-assisted workflows with human review built in." },
  { step: "04", title: "Govern", text: "Set usage rules, documentation habits, quality checks, and risk controls." },
  { step: "05", title: "Scale", text: "Turn early wins into repeatable playbooks across teams, firms, and institutions." },
];

export const brandPillars = [
  "AI Training",
  "AI Consulting",
  "GenAI for CAs",
  "Finance Automation",
  "Responsible AI",
  "ICAI Faculty",
];

export const contactServices = [
  "AI Training Programs",
  "AI Consulting for CA Firms",
  "GenAI Workshops for Finance Teams",
  "AI Adoption Roadmaps",
  "AI Governance Sessions",
  "Featured Masterclass / Keynote",
];
```

- [ ] **Step 2: Run lint**

```powershell
npm run lint
```

Expected: lint passes or only reports issues from later not-yet-created imports. Fix syntax errors in `src/data/site.ts` if any appear.

- [ ] **Step 3: Commit data model**

```powershell
git add -- src/data/site.ts
git commit -m "feat: add AI-first site content model"
```

---

### Task 3: Update Global Premium Visual System

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Append shared premium AI CSS**

Append this exact block to `src/app/globals.css`:

```css
/* Premium AI redesign utilities */
:root {
  --ai-blue: #0096ff;
  --ai-cyan: #8ffff0;
  --luxury-black: #02030a;
  --panel-deep: rgba(8, 13, 28, 0.72);
  --panel-gold: rgba(212, 175, 55, 0.08);
  --line-gold: rgba(212, 175, 55, 0.28);
  --line-cyan: rgba(0, 212, 170, 0.26);
}

.ai-section-shell { position: relative; overflow: hidden; isolation: isolate; }

.ai-grid-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -2;
  background:
    linear-gradient(rgba(212, 175, 55, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 170, 0.04) 1px, transparent 1px);
  background-size: 54px 54px;
  mask-image: radial-gradient(circle at 50% 25%, black, transparent 72%);
}

.luxury-panel {
  background:
    linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.018)),
    radial-gradient(circle at 15% 0%, rgba(212,175,55,0.12), transparent 34%);
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 24px 80px rgba(0,0,0,0.36);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--gold);
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.eyebrow::before {
  content: "";
  width: 34px;
  height: 1px;
  background: var(--gradient-gold);
}

.ai-gradient-text {
  background: linear-gradient(135deg, #ffffff 8%, #f0d060 48%, #8ffff0 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tilt-card { transform-style: preserve-3d; perspective: 1000px; }

.float-orbit {
  position: absolute;
  border-radius: 999px;
  border: 1px solid rgba(212,175,55,0.22);
  box-shadow: inset 0 0 30px rgba(212,175,55,0.08), 0 0 34px rgba(0,212,170,0.08);
  pointer-events: none;
}

.skip-link {
  position: absolute;
  left: 16px;
  top: -60px;
  z-index: 2000;
  background: var(--gold);
  color: #050814;
  padding: 10px 14px;
  border-radius: 999px;
  font-weight: 800;
  text-decoration: none;
  transition: top 0.2s ease;
}

.skip-link:focus { top: 16px; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.001ms !important;
  }
}
```

- [ ] **Step 2: Run partial verification**

```powershell
node scripts/verify-ai-redesign.mjs
```

Expected: still fails, but the `prefers-reduced-motion` failure should be gone.

- [ ] **Step 3: Commit CSS utilities**

```powershell
git add -- src/app/globals.css
git commit -m "style: add premium AI visual utilities"
```

---

### Task 4: Update Metadata and Page Composition

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace metadata in `src/app/layout.tsx`**

Replace the exported `metadata` object with:

```ts
export const metadata: Metadata = {
  title: "CA Shailesh S Wadhawaniya | AI Trainer & AI Consultant for Finance",
  description:
    "World-class AI Training and AI Consulting for CAs, CA firms, finance teams, and institutions. Learn practical GenAI, automation, and responsible AI adoption from a National-Level ICAI Faculty.",
  keywords: [
    "CA Shailesh Wadhawaniya",
    "AI Training for Chartered Accountants",
    "AI Consultant for Finance",
    "GenAI for CAs",
    "AI Training India",
    "AI Workshops for Finance Teams",
    "ICAI AI Faculty",
    "Finance Automation Consultant",
  ],
  authors: [{ name: "CA Shailesh S Wadhawaniya" }],
  openGraph: {
    title: "CA Shailesh S Wadhawaniya | The AI Mentor for Modern Finance Professionals",
    description:
      "AI Training and AI Consulting for CAs, firms, finance teams, and institutions ready to adopt AI practically and responsibly.",
    type: "website",
  },
};
```

- [ ] **Step 2: Update `src/app/page.tsx`**

Add:

```ts
import AIFramework from "@/components/AIFramework";
```

Render the page body in this order:

```tsx
<>
  <a className="skip-link" href="#main-content">Skip to content</a>
  <Navbar />
  <main id="main-content">
    <Hero />
    <Expertise />
    <AIFramework />
    <FeaturedVideo />
    <About />
    <Experience />
    <Recognition />
    <Publications />
    <Education />
    <Contact />
  </main>
</>
```

- [ ] **Step 3: Delay commit until Task 5**

Expected: lint may fail until `AIFramework` exists. Commit page shell changes together with Task 5.

---

### Task 5: Add Signature AI Framework Section

**Files:**
- Create: `src/components/AIFramework.tsx`

- [ ] **Step 1: Create `AIFramework` component**

Create `src/components/AIFramework.tsx` with this complete content:

```tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { frameworkSteps } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function AIFramework() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-90px" });

  return (
    <section id="framework" className="section ai-section-shell ai-grid-bg" ref={ref}>
      <div className="orb" style={{ width: 520, height: 520, top: "5%", right: "-12%", background: "radial-gradient(circle, rgba(0,212,170,0.08) 0%, transparent 70%)" }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 58px" }}>
          <span className="eyebrow">Signature Framework</span>
          <h2 className="section-title" style={{ marginTop: 18 }}>AI Transformation Framework</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            A practical path for finance professionals and firms to move from curiosity to confident AI adoption.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 18 }} className="framework-grid">
          {frameworkSteps.map((item, index) => (
            <motion.div key={item.title} custom={index} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="luxury-panel tilt-card" style={{ borderRadius: 22, padding: "26px 20px", minHeight: 250, position: "relative", overflow: "hidden" }}>
              <div style={{ color: "rgba(212,175,55,0.2)", fontFamily: "'Space Grotesk', sans-serif", fontSize: "3rem", fontWeight: 800, lineHeight: 1 }}>{item.step}</div>
              <h3 style={{ color: "var(--gold)", fontFamily: "'Space Grotesk', sans-serif", margin: "18px 0 10px", fontSize: "1.15rem" }}>{item.title}</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.65 }}>{item.text}</p>
              <div style={{ position: "absolute", width: 90, height: 90, borderRadius: "50%", right: -34, bottom: -34, border: "1px solid rgba(0,212,170,0.2)" }} />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1080px) {
          .framework-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 720px) {
          .framework-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
```

- [ ] **Step 2: Run lint**

```powershell
npm run lint
```

Expected: lint passes or reports fixable syntax/import issues.

- [ ] **Step 3: Commit page shell and framework together**

```powershell
git add -- src/app/layout.tsx src/app/page.tsx src/components/AIFramework.tsx
git commit -m "feat: add AI transformation framework"
```

---

### Task 6: Redesign Navbar and Hero Around Premium AI Brand

**Files:**
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Hero.tsx`

- [ ] **Step 1: Update Navbar**

In `src/components/Navbar.tsx`, import:

```ts
import { navLinks } from "@/data/site";
```

Replace local `links` usage with `navLinks`, and set the desktop CTA to:

```tsx
<a href="mailto:wadhawaniya@gmail.com?subject=Book%20AI%20Training" className="btn-primary" style={{ padding: "10px 22px", fontSize: "0.82rem" }}>
  Book AI Training
</a>
```

- [ ] **Step 2: Replace Hero**

Replace `src/components/Hero.tsx` with a component that visibly includes:

```tsx
<span className="eyebrow">AI Training & AI Consulting</span>
<h1 className="ai-gradient-text">The AI Mentor for Modern Finance Professionals</h1>
<a className="btn-primary" href="mailto:wadhawaniya@gmail.com?subject=Book%20AI%20Training">Book AI Training</a>
<a className="btn-outline" href="mailto:wadhawaniya@gmail.com?subject=Request%20AI%20Consulting">Request AI Consulting</a>
```

It must import and render:

```ts
import { brandPillars, proofMetrics } from "@/data/site";
```

It must keep:

```tsx
<Image src="/images/shailesh_photo.jpeg" alt="CA Shailesh S Wadhawaniya - AI Trainer and AI Consultant" fill priority />
```

It must keep lightweight decorative 3D using `.float-orbit`, `.luxury-panel`, and transform/perspective CSS rather than new dependencies.

- [ ] **Step 3: Verify and commit**

```powershell
node scripts/verify-ai-redesign.mjs
npm run lint
git add -- src/components/Navbar.tsx src/components/Hero.tsx
git commit -m "feat: redesign AI training hero"
```

Expected: verification may still fail until Expertise/Contact are updated; lint must pass.

---

### Task 7: Convert Expertise Into AI Training and Consulting Offers

**Files:**
- Modify: `src/components/Expertise.tsx`

- [ ] **Step 1: Update section identity**

In `Expertise.tsx`, import:

```ts
import { aiPrograms, consultingOffers } from "@/data/site";
```

The section must use:

```tsx
<section id="ai-training" className="section ai-section-shell">
```

The intro must visibly render:

```tsx
<span className="section-badge">✦ AI Training Programs</span>
<h2 className="section-title">Practical AI Training for Finance Professionals</h2>
<p className="section-subtitle">
  Built for CAs, CA firms, finance teams, and institutions that need practical GenAI capability instead of generic AI theory.
</p>
```

- [ ] **Step 2: Render program and consulting grids**

Map `aiPrograms` as the primary card grid. Each card must show `title`, `audience`, and `outcome`.

Add a second block:

```tsx
<section id="ai-consulting" aria-label="AI Consulting">
  <h3>AI Consulting</h3>
  {consultingOffers.map((offer) => <li key={offer}>{offer}</li>)}
</section>
```

- [ ] **Step 3: Verify and commit**

```powershell
node scripts/verify-ai-redesign.mjs
npm run lint
git add -- src/components/Expertise.tsx
git commit -m "feat: focus expertise on AI training programs"
```

Expected: verification may still fail until Contact is updated; lint must pass.

---

### Task 8: Reposition Supporting Sections Around AI Authority

**Files:**
- Modify: `src/components/About.tsx`
- Modify: `src/components/FeaturedVideo.tsx`
- Modify: `src/components/Experience.tsx`
- Modify: `src/components/Recognition.tsx`
- Modify: `src/components/Publications.tsx`
- Modify: `src/components/Education.tsx`

- [ ] **Step 1: Update required visible copy**

Apply these exact visible phrases:

```tsx
// About.tsx
<span className="section-badge">✦ AI-Led Profile</span>
<h2 className="section-title">AI Training Backed by Finance Depth</h2>
```

```tsx
// About.tsx first paragraph
I help CAs, CA firms, finance teams, and institutions move from AI curiosity to practical AI capability through focused AI Training, AI Consulting, and finance-specific adoption playbooks.
```

```tsx
// FeaturedVideo.tsx
Featured AI Masterclass
Watch how complex AI ideas are translated into practical finance workflows.
```

```tsx
// Experience.tsx
Experience that strengthens AI advisory credibility
```

```tsx
// Recognition.tsx
ICAI-recognized AI faculty credibility
```

```tsx
// Publications.tsx
Future finance thought leadership
```

```tsx
// Education.tsx
Credentials behind responsible AI guidance
```

- [ ] **Step 2: Preserve existing detail**

Do not delete the existing credentials, publications, and education data unless the text is duplicative. Reframe them as secondary proof beneath the AI Training and Consulting story.

- [ ] **Step 3: Verify and commit**

```powershell
node scripts/verify-ai-redesign.mjs
npm run lint
git add -- src/components/About.tsx src/components/FeaturedVideo.tsx src/components/Experience.tsx src/components/Recognition.tsx src/components/Publications.tsx src/components/Education.tsx
git commit -m "feat: align supporting sections to AI authority"
```

Expected: verification may still fail until Contact is updated; lint must pass.

---

### Task 9: Update Contact Into AI Conversion Section

**Files:**
- Modify: `src/components/Contact.tsx`

- [ ] **Step 1: Import AI service list**

```ts
import { contactServices } from "@/data/site";
```

Replace the local `services` array with `contactServices`.

- [ ] **Step 2: Replace contact headline and CTA copy**

The section must visibly render:

```tsx
<span className="section-badge">✦ Book AI Training</span>
<h2 className="section-title">Bring Practical AI Into Your Finance Workflow</h2>
<p className="section-subtitle" style={{ margin: "0 auto" }}>
  Book AI Training, request AI Consulting, or plan a focused GenAI session for your CA firm, finance team, or institution.
</p>
```

Primary CTA:

```tsx
<a href="mailto:wadhawaniya@gmail.com?subject=Book%20AI%20Training" className="btn-primary" style={{ width: "100%", justifyContent: "center", marginBottom: "12px" }}>
  Book AI Training
</a>
```

Secondary CTA:

```tsx
<a href="mailto:wadhawaniya@gmail.com?subject=Request%20AI%20Consulting" className="btn-outline" style={{ width: "100%", justifyContent: "center" }}>
  Request AI Consulting
</a>
```

- [ ] **Step 3: Confirm forbidden wording is gone**

```powershell
Select-String -Path src\**\*.tsx,src\**\*.ts -Pattern "Corporate Training"
```

Expected: no output.

- [ ] **Step 4: Verify and commit**

```powershell
node scripts/verify-ai-redesign.mjs
npm run lint
git add -- src/components/Contact.tsx
git commit -m "feat: focus contact on AI training conversion"
```

Expected: `AI redesign verification passed` and lint exit code 0.

---

### Task 10: Final Verification and Production Build

**Files:**
- No code changes expected unless verification fails.

- [ ] **Step 1: Run full requirement verification**

```powershell
node scripts/verify-ai-redesign.mjs
```

Expected:

```text
AI redesign verification passed
```

- [ ] **Step 2: Run lint**

```powershell
npm run lint
```

Expected: exit code 0.

- [ ] **Step 3: Run production build**

```powershell
npm run build
```

Expected: exit code 0 and successful Next.js production build.

- [ ] **Step 4: Inspect changed files**

```powershell
git status --short
git diff --stat HEAD
```

Expected: only intended task files are modified/untracked. Existing unrelated `.omx/` and image changes may still appear but must not be included in task commits unless explicitly requested.

- [ ] **Step 5: Commit any final fixes**

If final verification required small fixes, commit them:

```powershell
git add -- src scripts docs/superpowers/plans/2026-06-01-ai-training-premium-redesign.md
git commit -m "chore: finalize AI training redesign"
```

Do not commit unrelated `.omx/` state files or unrelated image changes.

---

## Self-Review

Spec coverage:

- AI Training and AI Consulting dominance: Tasks 2, 6, 7, 9.
- Premium Speaker Brand visual direction: Tasks 3, 6.
- Lightweight 3D/motion: Tasks 3, 5, 6.
- Remove Corporate Training wording: Tasks 1 and 9.
- Signature framework: Task 5.
- Supporting proof sections: Task 8.
- Accessibility/reduced motion: Task 3 and final verification.
- Build/lint verification: Task 10.

Placeholder scan:

- No TBD, TODO, “implement later”, or open-ended placeholder steps remain.

Type consistency:

- `navLinks`, `proofMetrics`, `aiPrograms`, `consultingOffers`, `frameworkSteps`, `brandPillars`, and `contactServices` are defined in Task 2 and referenced consistently later.

Execution notes:

- This plan intentionally avoids new dependencies and heavy WebGL.
- The verification script creates a failing RED state before implementation and a final GREEN proof after implementation.
