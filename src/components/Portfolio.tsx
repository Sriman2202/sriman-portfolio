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
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  Database,
  Brain,
  Sparkles,
  Menu,
  X,
} from "lucide-react";

import profile from "@/assets/profile-cutout.png";
import wns from "@/assets/wns-logo.png";
import iamneo from "@/assets/iamneo-logo.webp";
import appian from "@/assets/appian-logo.png";
import ashokLeyland from "@/assets/ashok-leyland-logo.png";
import hrDashboard from "@/assets/hr-analytics-dashboard.png";
import udemy from "@/assets/udemy-logo.png";

const RESUME = "/sriman-resume.pdf";
const RESUME_FILE_NAME = 'Sriman-S-Resume.pdf';
const LINKEDIN = "https://www.linkedin.com/in/srimanshanmugam";
const EMAIL = "srimanshanmugam22@gmail.com";

const openExternal = (url: string) => {
  try {
    window.open(url, "_top", "noopener,noreferrer");
  } catch {
    window.open(url, "_blank", "noopener,noreferrer");
  }
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
    <div
      className="absolute top-0 left-0 h-[3px] bg-accent-gradient z-50"
      style={{ width: `${p}%` }}
    />
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
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled || mobileOpen ? "bg-[hsl(220,68%,22%)] shadow-lg" : "bg-transparent"
      }`}
    >
      <ScrollProgress />
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          onClick={closeMobileMenu}
          className="text-white font-bold text-lg tracking-tight"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Sriman S.
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm text-white/90">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="hover:text-[hsl(185,90%,60%)] transition-colors"
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
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[hsl(220,68%,22%)] px-6 pb-4 shadow-lg">
          <ul className="space-y-1 pt-2 text-sm text-white/90">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  onClick={closeMobileMenu}
                  className="block rounded-lg px-3 py-3 transition-colors hover:bg-white/10 hover:text-[hsl(185,90%,60%)]"
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
      className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full bg-accent-gradient text-navy-deep shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen bg-hero overflow-hidden flex items-center">
      {/* orbs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[hsl(185,90%,50%)] opacity-20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[hsl(270,70%,55%)] opacity-20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-[hsl(45,90%,55%)] opacity-10 blur-3xl" />
      <div className="absolute inset-0 dot-grid opacity-[0.05]" />

      <div className="relative w-full max-w-5xl mx-auto px-6 py-24 pt-32 text-center flex flex-col items-center">
        <motion.div
          {...fadeUp}
          className="relative flex items-center justify-center h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] max-w-full"
        >
          {/* soft cyan glow halo */}
          <motion.div
            aria-hidden
            className="absolute h-[230px] w-[230px] sm:h-[300px] sm:w-[300px] rounded-full bg-[hsl(185,90%,50%)] blur-3xl"
            animate={{ opacity: [0.22, 0.45, 0.22], scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* filled cyan blob behind photo */}
          <motion.svg
            aria-hidden
            viewBox="0 0 200 200"
            className="absolute h-[230px] w-[230px] sm:h-[300px] sm:w-[300px]"
            animate={{ rotate: [0, 6, -4, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              fill="hsl(185,90%,50%)"
              fillOpacity="0.85"
              d="M44,-62.5C56,-54,63.5,-39,68,-23.5C72.5,-8,74,8,68.5,21.5C63,35,50.5,46,36.5,55C22.5,64,7,71,-9.5,72C-26,73,-43.5,68,-55,57C-66.5,46,-72,29,-73,12C-74,-5,-70.5,-22,-61.5,-34.5C-52.5,-47,-38,-55,-23.5,-61.5C-9,-68,5.5,-73,20.5,-73C35.5,-73,32,-71,44,-62.5Z"
              transform="translate(100 100)"
            />
          </motion.svg>

          {/* animated cyan outline blob (drawn path) */}
          <motion.svg
            aria-hidden
            viewBox="0 0 200 200"
            className="absolute h-[255px] w-[255px] sm:h-[330px] sm:w-[330px] drop-shadow-[0_0_14px_hsl(185,90%,60%)]"
            animate={{ rotate: [0, -8, 6, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.path
              fill="none"
              stroke="hsl(185,95%,65%)"
              strokeWidth="1.2"
              strokeLinecap="round"
              d="M50,-66C62,-56,68,-39,71,-22C74,-5,74,12,67,26C60,40,46,51,30,59C14,67,-4,72,-22,69C-40,66,-58,55,-66,40C-74,25,-72,6,-68,-12C-64,-30,-58,-47,-46,-57C-34,-67,-17,-70,1,-71C19,-72,38,-76,50,-66Z"
              transform="translate(100 100)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
          </motion.svg>

          {/* floating plus marks */}
          {[
            { top: "8%", left: "18%", delay: 0 },
            { top: "12%", right: "14%", delay: 0.6 },
            { bottom: "16%", left: "10%", delay: 1.2 },
            { bottom: "10%", right: "18%", delay: 0.3 },
            { top: "46%", right: "4%", delay: 0.9 },
          ].map((p, i) => (
            <motion.span
              key={i}
              aria-hidden
              className="absolute text-[hsl(185,95%,70%)] text-2xl font-light select-none"
              style={p as React.CSSProperties}
              animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5], rotate: [0, 90, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
            >
              +
            </motion.span>
          ))}

          {/* profile photo, floating */}
          <motion.img
            src={profile}
            alt="Sriman S"
            width={896}
            height={1200}
            className="relative h-[210px] sm:h-[260px] w-auto object-contain mask-fade-bottom select-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] z-10"
            draggable={false}
            fetchPriority="high"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.04 }}
          />
        </motion.div>
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 border border-emerald-400/40 px-4 py-1.5 text-xs font-medium text-emerald-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 pulse-dot" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to Work
        </motion.div>

        <motion.h1
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.15 }}
          className="mt-5 text-5xl md:text-7xl font-bold text-white tracking-tight"
        >
          Sriman S
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="mt-3 text-lg md:text-xl text-accent-gradient font-semibold"
        >
          Associate Technical Consultant
        </motion.p>
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.25 }}
          className="mt-5 max-w-2xl text-base md:text-lg text-white/75 leading-relaxed"
        >
          Building enterprise workflow solutions and helping organizations streamline business
          processes through low-code technology.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.3 }}
          className="mt-9 flex flex-wrap justify-center gap-3"
        >
          <a href={RESUME} download={RESUME_FILE_NAME} className="glass-pill rounded-full px-5 py-2.5 text-sm font-medium flex items-center gap-2 cursor-pointer">
            <Download className="h-4 w-4" /> Download Resume
          </a>
          <button type="button" onClick={() => openExternal(LINKEDIN)} className="glass-pill rounded-full px-5 py-2.5 text-sm font-medium flex items-center gap-2 cursor-pointer">
            <LinkedinIcon /> Connect on LinkedIn
          </button>
          <a href="#contact" className="glass-pill rounded-full px-5 py-2.5 text-sm font-medium flex items-center gap-2">
            <Mail className="h-4 w-4" /> Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div {...fadeUp} className="text-center mb-12">
      <p className="text-xs uppercase tracking-[0.25em] text-accent-gradient font-semibold">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary">{title}</h2>
      <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-accent-gradient" />
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="bg-[hsl(216,40%,96%)] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle eyebrow="Get to know me" title="About Me" />
        <motion.div
          {...fadeUp}
          className="bg-white rounded-2xl border border-border p-8 md:p-10 shadow-sm space-y-5 text-base md:text-lg leading-relaxed text-foreground/80"
        >
          <p>
            I am an Associate Technical Consultant with experience in enterprise
            application development, workflow automation, and business process optimization. My interest
            in technology began during childhood, driven by curiosity about how software applications are
            built and how they impact people's daily lives.
          </p>
          <p>
            This passion led me to pursue Computer Science Engineering and build a career in software
            development. I started my professional journey through campus placement at IAMNEO, where I
            gained experience in program management operations and stakeholder coordination. Shortly
            afterward, I joined WNS Vuram as an Associate Technical Consultant, where I work on
            Appian-based enterprise applications, workflow automation, and business process
            optimization.
          </p>
          <p>
            I aspire to grow into Technical Consulting, Business Analysis, and Program
            Management roles where I can combine technology, business understanding, and stakeholder
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
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="What drives me" title="Aspirations" />
        <motion.blockquote
          {...fadeUp}
          className="text-center text-xl md:text-2xl italic text-primary/80 max-w-3xl mx-auto"
        >
          "I am passionate about bridging the gap between business and technology."
        </motion.blockquote>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">
          {aspirations.map((a, i) => (
            <motion.div
              key={a.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.07 }}
              className="card-lift bg-[hsl(216,40%,96%)] border border-border rounded-2xl p-6 text-center"
            >
              <div className="mx-auto h-12 w-12 rounded-xl bg-accent-gradient flex items-center justify-center text-navy-deep">
                <a.icon className="h-6 w-6" />
              </div>
              <p className="mt-4 font-semibold text-primary">{a.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const skills = [
  {
    icon: Sparkles,
    title: "Appian",
    items: ["SAIL Interfaces", "Process Models", "Records", "Portals", "CDTs", "Integrations"],
  },
  {
    icon: Code2,
    title: "Technical Skills",
    items: ["SQL", "MySQL", "MariaDB", "Python", "HTML", "CSS", "MS Excel", "Power BI"],
  },
  {
    icon: Database,
    title: "Business Skills",
    items: [
      "Requirement Analysis",
      "Stakeholder Management",
      "Agile/Scrum",
      "Process Optimization",
      "Workflow Automation",
    ],
  },
  {
    icon: Brain,
    title: "AI Skills",
    items: ["AI-Assisted Development", "Prompt Engineering", "Workflow Documentation", "Codex", "Claude Code", "n8n"],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-[hsl(216,40%,96%)] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="My toolkit" title="Skills & Expertise" />
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.07 }}
              className="card-lift bg-white border border-border rounded-2xl p-7"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent-gradient flex items-center justify-center text-navy-deep">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-primary">{s.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="text-sm rounded-full bg-[hsl(216,40%,96%)] border border-border px-3 py-1.5 text-primary/80"
                  >
                    {it}
                  </span>
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
    logoClassName: "max-h-full max-w-full object-contain",
    period: "June 2025 – Present",
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
    logoClassName: "max-h-full max-w-full object-contain",
    period: "January 2025 – May 2025",
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
    logoClassName: "max-h-full max-w-full object-contain",
    period: "April 2023 – April 2024",
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
    <section id="experience" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle eyebrow="My journey" title="Experience" />
        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-3 md:left-5 top-2 bottom-2 w-px bg-border" />
          <div className="space-y-10">
            {experience.map((e, i) => (
              <motion.div
                key={e.company}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                className="relative"
              >
                <div className="absolute -left-[26px] md:-left-[34px] top-6 h-3 w-3 rounded-full bg-accent-gradient ring-4 ring-white" />
                <div className="card-lift bg-[hsl(216,40%,96%)] border border-border rounded-2xl p-6 md:p-7 flex gap-5">
                  <div className="shrink-0 h-16 w-16 rounded-xl bg-white border border-border p-2 flex items-center justify-center overflow-hidden">
                    <img src={e.logo} alt={e.company} className={e.logoClassName} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-lg md:text-xl font-bold text-primary">{e.role}</h3>
                      <span className="text-primary/60">·</span>
                      <span className="font-semibold text-primary/80">{e.company}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{e.period}</p>
                    <ul className="mt-4 space-y-2 text-sm md:text-base text-foreground/75">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
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
    color: "bg-blue-100 text-blue-700 border-blue-200",
    title: "Project Quality Governance Application",
    description:
      "Built an internal auditing tool for Delivery Managers to evaluate live projects against predefined criteria and generate performance scores.",
    bullets: [
      "Designed multi-step SAIL interfaces and portals for score input and review; implemented CDTs and process models to manage audit workflows end-to-end.",
      "Used SQL-backed records for data persistence and reporting; leveraged AI-assisted development to accelerate interface design.",
    ],
    tech: ["Appian", "SQL", "Process Models", "SAIL"],
  },
  {
    category: "POC Projects",
    color: "bg-purple-100 text-purple-700 border-purple-200",
    title: "Legal Entity Onboarding",
    description:
      "Developed a POC application to streamline onboarding of new legal entities (corporations, partnerships) by Investment Operations and Client Implementation teams.",
    bullets: [
      "Designed workflow forms and process flows covering entity registration, account setup, share issuance, and multi-stage review approvals across teams.",
    ],
    tech: ["Appian", "Workflow Automation"],
  },
  {
    category: "POC Projects",
    color: "bg-purple-100 text-purple-700 border-purple-200",
    title: "Delivery Management Workflow",
    description:
      "Built a POC workflow application to manage show promo requests across Production, Creative, and Media teams.",
    bullets: [
      "Automated a sequential approval chain — Production submits request → Creative team approves → Media team validates the final deliverable — reducing manual follow-ups.",
    ],
    tech: ["Appian", "Process Models"],
  },
  {
    category: "Personal Project",
    color: "bg-emerald-100 text-emerald-700 border-emerald-200",
    title: "Turf Booking Application",
    description:
      "Independently developed a slot-based turf booking app using AI-assisted development — zero manual coding involved.",
    bullets: [
      "Explored end-to-end app building using AI tools, reinforcing skills in requirement framing, prompt engineering, and iterative development.",
    ],
    tech: ["AI Tools"],
    link: "https://greenarena.lovable.app",
  },
  {
    category: "Data Analytics",
    color: "bg-amber-100 text-amber-700 border-amber-200",
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
    <section id="projects" className="bg-[hsl(216,40%,96%)] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle eyebrow="Selected work" title="Featured Projects" />
        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className="card-lift bg-white border border-border rounded-2xl p-7 md:p-8 relative"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-2 text-primary/60">
                  <Briefcase className="h-4 w-4" />
                  <h3 className="text-xl md:text-2xl font-bold text-primary">{p.title}</h3>
                </div>
                <span className={`text-xs font-semibold rounded-full px-3 py-1 border ${p.color}`}>
                  {p.category}
                </span>
              </div>
              <p className="mt-4 text-foreground/75 leading-relaxed">{p.description}</p>
              {p.image && (
                <a
                  href={p.image}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 block overflow-hidden rounded-xl border border-border"
                >
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    className="w-full h-auto"
                  />
                </a>
              )}
              <ul className="mt-4 space-y-2 text-sm text-foreground/70">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs rounded-md bg-[hsl(216,40%,96%)] border border-border px-2.5 py-1 text-primary/70 font-mono">
                    {t}
                  </span>
                ))}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors"
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
    verified: true,
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
    verified: true,
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-651f7df1-387d-4a63-bf99-709a1839fb32.jpg",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle eyebrow="Credentials" title="Certifications" />
        <div className="space-y-6">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.07 }}
              className="card-lift bg-[hsl(216,40%,96%)] border border-border rounded-2xl p-7 md:p-9 flex flex-col md:flex-row gap-6"
            >
              <div className="shrink-0 h-24 w-24 md:h-28 md:w-28 rounded-2xl bg-white border border-border p-3 flex items-center justify-center">
                <img src={c.logo} alt={c.logoAlt} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <Award className="h-5 w-5 text-accent" />
                  <h3 className="text-xl md:text-2xl font-bold text-primary">{c.title}</h3>
                </div>
                <p className="text-primary/70 mt-1">{c.issuer}</p>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
                  <span>
                    <strong className="text-primary/80">Awarded:</strong> {c.awarded}
                  </span>
                  {c.validThrough && (
                    <span>
                      <strong className="text-primary/80">Valid Through:</strong> {c.validThrough}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-foreground/75">{c.description}</p>
                <div className="mt-5 flex items-center gap-3 flex-wrap">
                  {c.verified && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Credential Verified
                    </span>
                  )}
                  {c.link && (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors"
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
    <section className="bg-[hsl(216,40%,96%)] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle eyebrow="Academics" title="Education" />
        <motion.div
          {...fadeUp}
          className="card-lift bg-white border border-border rounded-2xl p-7 md:p-9 flex gap-5 items-start"
        >
          <div className="shrink-0 h-14 w-14 rounded-xl bg-accent-gradient flex items-center justify-center text-navy-deep">
            <GraduationCap className="h-7 w-7" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary">Bachelor of Engineering</h3>
            <p className="text-primary/80 font-medium">Computer Science and Engineering</p>
            <p className="text-foreground/70 mt-1">Bannari Amman Institute of Technology</p>
            <p className="mt-3 inline-block rounded-md bg-[hsl(216,40%,96%)] border border-border px-3 py-1 text-sm font-semibold text-primary">
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
      `Name: ${f.get("name")}\nEmail: ${f.get("email")}\n\n${f.get("message")}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };
  return (
    <section id="contact" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="Reach out" title="Get In Touch" />
        <div className="grid md:grid-cols-5 gap-8">
          <motion.div {...fadeUp} className="md:col-span-2 space-y-5">
            <h3 className="text-2xl font-bold text-primary">Let's Connect</h3>
            <p className="text-foreground/75 leading-relaxed">
              I'm currently open to new opportunities and collaborations. Whether you have a
              question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="card-lift block bg-[hsl(216,40%,96%)] border border-border rounded-xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent-gradient flex items-center justify-center text-navy-deep">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-medium text-primary truncate">{EMAIL}</p>
                </div>
              </div>
            </a>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => openExternal(LINKEDIN)}
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
              >
                <LinkedinIcon /> LinkedIn
              </button>
              <a
                href={RESUME}
                download={RESUME_FILE_NAME}
                className="inline-flex items-center gap-2 rounded-full bg-accent-gradient text-navy-deep px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </div>
          </motion.div>
          <motion.form
            {...fadeUp}
            onSubmit={onSubmit}
            className="md:col-span-3 bg-[hsl(216,40%,96%)] border border-border rounded-2xl p-6 md:p-8 space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Field name="name" label="Name" placeholder="Your name" />
              <Field name="email" label="Email" type="email" placeholder="you@example.com" />
            </div>
            <Field name="subject" label="Subject" placeholder="What's this about?" />
            <div>
              <label className="block text-sm font-medium text-primary mb-1.5">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Your message…"
                className="w-full rounded-lg bg-white border border-border px-3.5 py-2.5 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-accent-gradient text-navy-deep font-semibold py-3 text-sm hover:opacity-90 transition"
            >
              Send Message
            </button>
            <p className="text-xs text-muted-foreground text-center">
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
      <label className="block text-sm font-medium text-primary mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-lg bg-white border border-border px-3.5 py-2.5 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[hsl(220,68%,14%)] text-white/70 py-8 px-6 text-center text-sm">
      © {new Date().getFullYear()} Sriman S. All rights reserved.
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

