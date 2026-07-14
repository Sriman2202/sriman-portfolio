import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  ArrowUp,
  ExternalLink,
  Lightbulb,
  Target,
  Users,
  Zap,
  GraduationCap,
  Award,
  Database,
  Menu,
  X,
  BarChart3,
  ClipboardList,
  RefreshCw,
  TrendingUp,
  Workflow,
  FileText,
  Terminal,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiMysql,
  SiMariadb,
  SiPython,
  SiGit,
  SiGithub,
  SiN8N,
  SiClaudecode,
  SiModelcontextprotocol,
} from "react-icons/si";
import { PiMicrosoftExcelLogo } from "react-icons/pi";

import profile from "@/assets/profile-cutout.png";
import wns from "@/assets/wns-logo-transparent.png";
import iamneo from "@/assets/iamneo-logo-transparent.png";
import appian from "@/assets/appian-logo.png";
import ashokLeyland from "@/assets/ashok-leyland-logo-transparent.png";
import hrDashboard from "@/assets/hr-analytics-dashboard.png";
import udemy from "@/assets/udemy-logo.png";

const RESUME = "/sriman-resume.pdf";
const RESUME_FILE_NAME = "Sriman-S-Resume.pdf";
const LINKEDIN = "https://www.linkedin.com/in/srimanshanmugam";
const EMAIL = "srimanshanmugam22@gmail.com";

const openExternal = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="absolute top-0 left-0 h-[2px] bg-signal z-50" style={{ width: `${p}%` }} />
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = ["About", "Skills", "Experience", "Projects", "Certifications", "Contact"];
  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-ink/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <ScrollProgress />
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          onClick={closeMobileMenu}
          className="font-display text-lg font-semibold text-white"
        >
          Sriman S.
        </a>
        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-white/70">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="link-underline pb-1 hover:text-white transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center border border-white/20 text-white transition hover:bg-white/10"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-ink px-6 pb-4">
          <ul className="space-y-1 pt-2 font-mono text-xs uppercase tracking-widest text-white/70">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  onClick={closeMobileMenu}
                  className="block px-3 py-3 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 h-11 w-11 bg-signal text-white shadow-xl flex items-center justify-center hover:bg-ink transition-colors"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

const journey = [
  { label: "Iamneo", period: "2025", active: false },
  { label: "WNS Vuram", period: "Present", active: true },
];

function JourneyFlow() {
  return (
    <div className="mt-10 w-full max-w-xl overflow-x-auto">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50 mb-5">
        // career path
      </p>
      <div className="flex items-start min-w-max">
        {journey.map((n, i) => (
          <div
            key={n.label}
            className={`flex items-center ${i === journey.length - 1 ? "" : "flex-1"}`}
          >
            <div className="flex flex-col items-center gap-2 shrink-0">
              <span className="relative flex h-3 w-3">
                {n.active && (
                  <span className="absolute inline-flex h-full w-full rounded-full bg-signal pulse-dot" />
                )}
                <span
                  className={`relative inline-flex h-3 w-3 rounded-full ${n.active ? "bg-signal" : "bg-blueprint-bright"}`}
                />
              </span>
              <span
                className={`font-mono text-[11px] whitespace-nowrap ${n.active ? "text-signal" : "text-white/70"}`}
              >
                {n.label}
              </span>
              <span className="font-mono text-[10px] text-white/50">{n.period}</span>
            </div>
            {i < journey.length - 1 && (
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
                className="h-px flex-1 bg-blueprint-bright/40 mx-2 mt-[-22px]"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen bg-ink blueprint-grid-dark overflow-hidden flex items-center"
    >
      <div className="relative w-full max-w-5xl mx-auto px-6 py-24 pt-32 text-center flex flex-col items-center">
        <motion.div
          {...fadeUp}
          className="relative flex items-center justify-center h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] max-w-full"
        >
          <div
            aria-hidden
            className="absolute h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] rounded-full bg-blueprint-bright/20 blur-3xl"
          />
          <svg
            aria-hidden
            viewBox="0 0 200 200"
            className="absolute h-[220px] w-[220px] sm:h-[280px] sm:w-[280px]"
          >
            <motion.circle
              cx="100"
              cy="100"
              r="92"
              fill="none"
              stroke="hsl(212,70%,58%)"
              strokeWidth="1.25"
              strokeDasharray="5 7"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </svg>
          <motion.img
            src={profile}
            alt="Sriman S"
            width={896}
            height={1200}
            className="relative h-[220px] sm:h-[270px] w-auto object-contain mask-fade-bottom select-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-10"
            draggable={false}
            fetchPriority="high"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="absolute top-2 left-2 h-3 w-3 border-t-2 border-l-2 border-signal/70" />
          <span className="absolute top-2 right-2 h-3 w-3 border-t-2 border-r-2 border-signal/70" />
          <span className="absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2 border-signal/70" />
          <span className="absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-signal/70" />
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mt-6 inline-flex items-center gap-2.5 border border-signal/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-signal"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full bg-signal pulse-dot" />
            <span className="relative inline-flex h-1.5 w-1.5 bg-signal" />
          </span>
          Status: Open to work
        </motion.div>

        <motion.h1
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.15 }}
          className="mt-5 font-display text-5xl md:text-7xl font-semibold text-white tracking-tight"
        >
          Sriman S
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="mt-3 font-mono text-sm md:text-base uppercase tracking-[0.15em] text-blueprint-bright"
        >
          Associate Technical Consultant
        </motion.p>
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.25 }}
          className="mt-5 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed"
        >
          Building enterprise workflow solutions and helping organizations streamline business
          processes through low-code technology.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.3 }}
          className="mt-9 flex flex-wrap justify-center gap-3"
        >
          <a
            href={RESUME}
            download={RESUME_FILE_NAME}
            className="inline-flex items-center gap-2 border border-white/25 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-white hover:bg-white hover:text-ink transition-colors cursor-pointer"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
          <button
            type="button"
            onClick={() => openExternal(LINKEDIN)}
            className="inline-flex items-center gap-2 border border-white/25 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-white hover:bg-white hover:text-ink transition-colors cursor-pointer"
          >
            <LinkedinIcon /> Connect on LinkedIn
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-signal/50 bg-signal/10 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-signal hover:bg-signal hover:text-white transition-colors"
          >
            <Mail className="h-4 w-4" /> Contact Me
          </a>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.35 }}
          className="flex justify-center"
        >
          <JourneyFlow />
        </motion.div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div {...fadeUp} className="mb-14">
      <div className="flex items-center gap-2.5">
        <span className="h-2 w-2 bg-signal shrink-0" />
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-soft">{eyebrow}</p>
      </div>
      <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-ink tracking-tight">
        {title}
      </h2>
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="bg-canvas py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle eyebrow="Get to know me" title="About Me" />
        <motion.div
          {...fadeUp}
          className="record-card p-8 md:p-10 space-y-5 text-base md:text-lg leading-relaxed text-ink-soft"
        >
          <p>
            I am an Associate Technical Consultant with experience in enterprise application
            development, workflow automation, and business process optimization. My interest in
            technology began during childhood, driven by curiosity about how software applications
            are built and how they impact people's daily lives.
          </p>
          <p>
            This passion led me to pursue Computer Science Engineering and build a career in
            software development. I started my professional journey through campus placement at
            IAMNEO, where I gained experience in program management operations and stakeholder
            coordination. Shortly afterward, I joined WNS Vuram as an Associate Technical
            Consultant, where I work on Appian-based enterprise applications, workflow automation,
            and business process optimization.
          </p>
          <p>
            I aspire to grow into Technical Consulting, Business Analysis, and Program Management
            roles where I can combine technology, business understanding, and stakeholder
            collaboration to drive meaningful outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const aspirations = [
  { icon: Lightbulb, title: "Technical Consulting" },
  { icon: Target, title: "Business Analysis" },
  { icon: Users, title: "Program Management" },
  { icon: Zap, title: "Digital Transformation Leadership" },
];

function Aspirations() {
  return (
    <section className="bg-canvas-alt py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="What drives me" title="Aspirations" />
        <motion.blockquote
          {...fadeUp}
          className="text-xl md:text-2xl italic text-ink-soft max-w-3xl"
        >
          "I am passionate about bridging the gap between business and technology."
        </motion.blockquote>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">
          {aspirations.map((a, i) => (
            <motion.div
              key={a.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.07 }}
              className="group record-card p-6"
            >
              <div className="h-11 w-11 bg-ink flex items-center justify-center text-signal transition-colors duration-300 group-hover:bg-signal group-hover:text-white">
                <a.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 font-semibold text-ink">{a.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

type SkillItem = { name: string; icon?: IconType; img?: string; color?: string };

const skills: { title: string; items: SkillItem[] }[] = [
  {
    title: "Technical Skills",
    items: [
      { name: "Appian", img: appian },
      { name: "SQL", icon: Database },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MariaDB", icon: SiMariadb, color: "#003545" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "MS Excel", icon: PiMicrosoftExcelLogo, color: "#217346" },
      { name: "Power BI", icon: BarChart3 },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "n8n", icon: SiN8N, color: "#EA4B71" },
    ],
  },
  {
    title: "Business Skills",
    items: [
      { name: "Requirement Analysis", icon: ClipboardList },
      { name: "Stakeholder Management", icon: Users },
      { name: "Agile/Scrum", icon: RefreshCw },
      { name: "Process Optimization", icon: TrendingUp },
      { name: "Workflow Automation", icon: Workflow },
      { name: "Workflow Documentation", icon: FileText },
    ],
  },
  {
    title: "AI Skills",
    items: [
      { name: "Codex", icon: Terminal },
      { name: "Claude Code", icon: SiClaudecode, color: "#DA7756" },
      { name: "MCP", icon: SiModelcontextprotocol },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-canvas py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="My toolkit" title="Skills & Expertise" />
        <div className="space-y-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.07 }}
              className="record-card p-7 md:p-8"
            >
              <p className="font-mono text-sm text-blueprint mb-7">
                <span className="text-ink-soft/50">// </span>
                {s.title}
              </p>
              <div className="flex flex-wrap gap-x-10 gap-y-8">
                {s.items.map((it) => (
                  <div key={it.name} className="flex flex-col items-center gap-2.5 w-20 sm:w-24">
                    <div className="tile-icon h-12 w-12 flex items-center justify-center">
                      {it.img ? (
                        <img src={it.img} alt="" className="h-12 w-12 object-contain" />
                      ) : it.icon ? (
                        <it.icon
                          className="h-11 w-11 text-ink"
                          style={it.color ? { color: it.color } : undefined}
                        />
                      ) : null}
                    </div>
                    <span className="text-sm text-center text-ink-soft">{it.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const experience = [
  {
    logo: wns,
    role: "Associate Technical Consultant",
    company: "WNS Vuram",
    period: "June 2025 – Present",
    current: true,
    bullets: [
      "Application Development: Developed and enhanced low-code enterprise applications using the Appian platform, building workflows, process models, and business rules to automate end-to-end processes.",
      "UI/UX Design: Designed and configured responsive, user-friendly interfaces, reports, and dashboards using Appian SAIL components, ensuring a seamless user experience across devices.",
      "Data Management: Configured and managed application data models, including the creation of Custom Data Types (CDTs), data store mappings, and entity-backed Record Types for efficient data retrieval.",
      "Performance & Optimization: Participated in application testing, troubleshooting, debugging, and workflow optimization activities to improve application performance, stability, and process execution efficiency.",
      "Agile Collaboration: Collaborated closely with Business Analysts and cross-functional teams to understand functional requirements, resolve issues, and support Agile sprint delivery in enterprise environments.",
      "Defect Resolution: Actively resolved JIRA-tracked bugs and supported unit testing, ensuring high-quality deliverables and smooth deployment across environments.",
      "Application Support: Provided enterprise application support, issue analysis, and troubleshooting for workflow-based business applications.",
    ],
  },
  {
    logo: iamneo,
    role: "Program Management Specialist Trainee",
    company: "Iamneo",
    period: "January 2025 – May 2025",
    current: false,
    bullets: [
      "Coordinated with internal teams and stakeholders to support assessment delivery across multiple universities.",
      "Managed content validation, quality checks, and packaging activities while ensuring timely completion of project milestones.",
      "Maintained operational trackers, documentation, and status updates for ongoing programs.",
      "Assisted in stakeholder communication and follow-ups to ensure smooth execution of assessment activities.",
      "Participated in issue tracking, resolution coordination, and process improvement initiatives.",
      "Worked with cross-functional teams to ensure adherence to timelines and quality standards.",
      "Prepared reports and maintained records to support program monitoring and execution.",
    ],
  },
  {
    logo: ashokLeyland,
    role: "Student Intern – SmartGPT (Document Management Solution)",
    company: "Ashok Leyland Ltd",
    period: "April 2023 – April 2024",
    current: false,
    bullets: [
      "Collaborated with a multidisciplinary team in the Research and Development department",
      "Designed and developed an AI chatbot tailored to Ashok Leyland's organizational data",
      "Contributed across all phases of the project from conception to testing",
      "Worked on document management and intelligent retrieval workflows",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="bg-canvas-alt py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle eyebrow="My journey" title="Experience" />
        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-3 md:left-5 top-2 bottom-2 w-px bg-blueprint/40" />
          <div className="space-y-10">
            {experience.map((e, i) => (
              <motion.div
                key={e.company}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                className="relative"
              >
                <span
                  className={`absolute -left-[29px] md:-left-[37px] top-6 h-3 w-3 ${
                    e.current ? "bg-signal" : "bg-blueprint"
                  }`}
                />
                <div className="record-card p-6 md:p-7 flex flex-col sm:flex-row gap-5">
                  <div className="shrink-0 inline-flex h-14 items-center justify-center sm:justify-start">
                    <img
                      src={e.logo}
                      alt={e.company}
                      className="h-full w-auto max-w-[110px] object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-lg md:text-xl font-semibold text-ink font-display">
                        {e.role}
                      </h3>
                      <span className="text-ink-soft/50">·</span>
                      <span className="font-medium text-ink-soft">{e.company}</span>
                      {e.current && (
                        <span className="font-mono text-[11px] uppercase tracking-wider text-signal-text">
                          [active]
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-xs text-ink-soft/70 mt-1.5">{e.period}</p>
                    <ul className="mt-4 space-y-2 text-sm md:text-base text-ink-soft">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5">
                          <span className="mt-2 h-1 w-1 shrink-0 bg-blueprint" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    category: "Internal Application Development",
    title: "Project Quality Governance Application",
    description:
      "Built an internal auditing tool for Delivery Managers to evaluate live projects against predefined criteria and generate performance scores.",
    bullets: [
      "Designed multi-step SAIL interfaces and portals for score input and review; implemented CDTs and process models to manage audit workflows end-to-end.",
      "Used SQL-backed records for data persistence and reporting; leveraged AI-assisted development to accelerate interface design.",
    ],
    tech: ["Appian", "SQL", "AI Tools"],
  },
  {
    category: "POC Project",
    title: "Legal Entity Onboarding",
    description:
      "Developed a POC application to streamline onboarding of new legal entities (corporations, partnerships) by Investment Operations and Client Implementation teams.",
    bullets: [
      "Designed workflow forms and process flows covering entity registration, account setup, share issuance, and multi-stage review approvals across teams.",
    ],
    tech: ["Appian", "SQL", "AI Tools"],
  },
  {
    category: "POC Project",
    title: "Delivery Management Workflow",
    description:
      "Built a POC workflow application to manage show promo requests across Production, Creative, and Media teams.",
    bullets: [
      "Automated a sequential approval chain — Production submits request → Creative team approves → Media team validates the final deliverable — reducing manual follow-ups.",
    ],
    tech: ["Appian", "SQL", "AI Tools"],
  },
  {
    category: "Personal Project",
    title: "Turf Booking Application",
    description:
      "Developed a slot-based turf booking application using AI-assisted development tools, focusing on requirement framing, prompt iteration, logic validation, and end-to-end workflow design.",
    bullets: [
      "Explored end-to-end app building using AI tools, reinforcing skills in requirement framing, prompt engineering, and iterative development.",
    ],
    tech: ["AI Tools"],
    link: "https://greenarena.lovable.app",
  },
  {
    category: "Data Analytics",
    title: "HR Analytics Dashboard",
    description:
      "Built an interactive HR Analytics Dashboard in Power BI providing insights into workforce composition, attrition trends, and employee engagement metrics.",
    bullets: [
      "Visualized Total Employees, Active Employees, Attrition Count & Attrition Rate alongside employee distribution across departments.",
      "Analyzed attrition by salary slab, job satisfaction, gender, age group, and experience to surface key workforce trends.",
      "Applied data cleaning & transformation, authored DAX measures, and designed a clean, business-ready dashboard layout.",
    ],
    tech: ["Power BI", "DAX", "Data Visualization", "Business Intelligence"],
    image: hrDashboard,
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-canvas py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle eyebrow="Selected work" title="Featured Projects" />
        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className="group record-card p-7 md:p-8"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <h3 className="text-xl md:text-2xl font-display font-semibold text-ink">
                  {p.title}
                </h3>
                <span className="font-mono text-[11px] uppercase tracking-wider text-blueprint">
                  [{p.category}]
                </span>
              </div>
              <p className="mt-4 text-ink-soft leading-relaxed">{p.description}</p>
              {p.image && (
                <a
                  href={p.image}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 block overflow-hidden border border-border"
                >
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </a>
              )}
              <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-blueprint" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs border border-border px-2.5 py-1 text-ink-soft"
                  >
                    {t}
                  </span>
                ))}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline pb-0.5 ml-auto inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink font-semibold"
                  >
                    View App <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

const certifications = [
  {
    logo: appian,
    logoAlt: "Appian",
    title: "Appian Certified Associate Developer",
    issuer: "Appian Corporation",
    awarded: "May 2026",
    validThrough: "November 2027",
    description:
      "Certified in Appian application development, workflow automation, process modeling, and enterprise solution delivery.",
    link: "https://community.appian.com/members/srimans634750?badge=cert&now=639153176207099277",
  },
  {
    logo: udemy,
    logoAlt: "Udemy",
    title: "PL-300: Microsoft Power BI Data Analyst",
    issuer: "Udemy",
    awarded: "June 2026",
    validThrough: null as string | null,
    description:
      "Completed comprehensive training on Microsoft Power BI data analysis, including data modeling, DAX measures, visualization design, and dashboard development.",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-651f7df1-387d-4a63-bf99-709a1839fb32.jpg",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="bg-canvas-alt py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle eyebrow="Credentials" title="Certifications" />
        <div className="space-y-6">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.07 }}
              className="record-card p-7 md:p-9 flex flex-col md:flex-row gap-6"
            >
              <div className="shrink-0 h-24 w-24 md:h-28 md:w-28 bg-card border border-border p-3 flex items-center justify-center">
                <img
                  src={c.logo}
                  alt={c.logoAlt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <Award className="h-5 w-5 text-signal" />
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-ink">
                    {c.title}
                  </h3>
                </div>
                <p className="text-ink-soft mt-1">{c.issuer}</p>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-ink-soft/80">
                  <span>
                    <strong className="text-ink-soft">Awarded:</strong> {c.awarded}
                  </span>
                  {c.validThrough && (
                    <span>
                      <strong className="text-ink-soft">Valid Through:</strong> {c.validThrough}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-ink-soft">{c.description}</p>
                <div className="mt-5 flex items-center gap-4 flex-wrap">
                  {c.link && (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline pb-0.5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink font-semibold"
                    >
                      View Certificate <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="bg-canvas py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle eyebrow="Academics" title="Education" />
        <motion.div {...fadeUp} className="record-card p-7 md:p-9 flex gap-5 items-start">
          <div className="shrink-0 h-14 w-14 bg-ink flex items-center justify-center text-signal">
            <GraduationCap className="h-7 w-7" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-display font-semibold text-ink">Bachelor of Engineering</h3>
            <p className="text-ink-soft font-medium">Computer Science and Engineering</p>
            <p className="text-ink-soft/80 mt-1">Bannari Amman Institute of Technology</p>
            <p className="mt-3 inline-block font-mono text-sm border border-border px-3 py-1 text-ink">
              CGPA: 7.55
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(f.get("subject") || "Portfolio inquiry"));
    const body = encodeURIComponent(
      `Name: ${f.get("name")}\nEmail: ${f.get("email")}\n\n${f.get("message")}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };
  return (
    <section id="contact" className="bg-canvas-alt py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="Reach out" title="Get In Touch" />
        <div className="grid md:grid-cols-5 gap-8">
          <motion.div {...fadeUp} className="md:col-span-2 space-y-5">
            <h3 className="text-2xl font-display font-semibold text-ink">Let's Connect</h3>
            <p className="text-ink-soft leading-relaxed">
              I'm currently open to new opportunities and collaborations. Whether you have a
              question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href={`mailto:${EMAIL}`} className="record-card block p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-ink flex items-center justify-center text-signal">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-ink-soft/70">
                    Email
                  </p>
                  <p className="font-medium text-ink truncate">{EMAIL}</p>
                </div>
              </div>
            </a>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => openExternal(LINKEDIN)}
                className="inline-flex items-center gap-2 border border-ink bg-ink text-canvas px-5 py-2.5 font-mono text-xs uppercase tracking-wider hover:bg-transparent hover:text-ink transition-colors"
              >
                <LinkedinIcon /> LinkedIn
              </button>
              <a
                href={RESUME}
                download={RESUME_FILE_NAME}
                className="inline-flex items-center gap-2 border border-signal text-signal-text px-5 py-2.5 font-mono text-xs uppercase tracking-wider hover:bg-signal hover:text-white transition-colors"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </div>
          </motion.div>
          <motion.form
            {...fadeUp}
            onSubmit={onSubmit}
            className="md:col-span-3 record-card p-6 md:p-8 space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Field name="name" label="Name" placeholder="Your name" />
              <Field name="email" label="Email" type="email" placeholder="you@example.com" />
            </div>
            <Field name="subject" label="Subject" placeholder="What's this about?" />
            <div>
              <label className="block font-mono text-xs uppercase tracking-wider text-ink-soft mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Your message…"
                className="w-full bg-card border border-border px-3.5 py-2.5 text-sm outline-none focus:border-blueprint focus:ring-2 focus:ring-blueprint/20 transition"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-ink text-canvas font-mono text-xs uppercase tracking-wider py-3.5 hover:bg-signal transition-colors"
            >
              Send Message →
            </button>
            <p className="text-xs text-ink-soft/70 text-center">
              Clicking "Send Message" will open your email app with the message pre-filled.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block font-mono text-xs uppercase tracking-wider text-ink-soft mb-1.5">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full bg-card border border-border px-3.5 py-2.5 text-sm outline-none focus:border-blueprint focus:ring-2 focus:ring-blueprint/20 transition"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative bg-ink text-white/60 py-10 px-6">
      <div className="absolute top-0 inset-x-0 h-px bg-blueprint-bright/50" />
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center font-mono text-xs">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => openExternal(LINKEDIN)}
            aria-label="LinkedIn"
            className="h-9 w-9 border border-white/15 flex items-center justify-center text-white/70 hover:text-signal hover:border-signal/60 transition"
          >
            <LinkedinIcon />
          </button>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email"
            className="h-9 w-9 border border-white/15 flex items-center justify-center text-white/70 hover:text-signal hover:border-signal/60 transition"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Sriman S. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Aspirations />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
