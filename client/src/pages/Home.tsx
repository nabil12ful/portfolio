// Style reminder: Laravel Command Center — asymmetric editorial layout, emerald runtime accents, technical texture.

import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Braces, ChevronRight, Code2, Database, ExternalLink, Github, Globe2, Layers3, Linkedin, Mail, MapPin, Menu, Network, Phone, Quote, Radio, Server, ShieldCheck, Sparkles, Terminal as TerminalIcon, UserRound, Workflow, X, Zap } from "lucide-react";
import Terminal from "@/components/Terminal";
import { contact, copy, experiences, Lang, projects, skillGroups, stats, text } from "@/lib/portfolio-data";

const skillIcons = { backend: Code2, data: Database, frontend: Layers3, security: ShieldCheck, realtime: Radio };
const hideBrokenImage = (event: React.SyntheticEvent<HTMLImageElement>) => { event.currentTarget.style.display = "none"; };

export default function Home() {
  const [lang, setLang] = useState<Lang>(() => (typeof window !== "undefined" && window.localStorage.getItem("nabil-lang") === "ar" ? "ar" : "en"));
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem("nabil-lang", lang);
  }, [lang]);

  const switchLanguage = () => setLang((current) => current === "en" ? "ar" : "en");

  return (
    <div className="site-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Nabil Hamada home">
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030822498/SjeLwCuNaaqEJDDU.png" alt="" className="brand-mark" onError={hideBrokenImage} />
          <span className="brand-copy"><strong>NABIL</strong><em>H.</em><small>FULL-STACK / LARAVEL</small></span>
        </a>
        <nav className={`main-nav ${mobileMenu ? "is-open" : ""}`} aria-label={lang === "ar" ? "التنقل الرئيسي" : "Primary navigation"}>
          {Object.entries(copy.nav).map(([key, value]) => <a key={key} href={`#${key}`} onClick={() => setMobileMenu(false)}>{text(value, lang)}</a>)}
        </nav>
        <div className="header-actions">
          <button className="language-toggle" onClick={switchLanguage} aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}><Globe2 size={15} /><span>{lang === "en" ? "عربي" : "EN"}</span></button>
          <a className="header-github" href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
          <button className="menu-toggle" onClick={() => setMobileMenu((open) => !open)} aria-label={mobileMenu ? "Close menu" : "Open menu"}>{mobileMenu ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030822498/yABXXqhPxKDHxjrI.png" alt="" className="hero-art" aria-hidden="true" />
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> {text(copy.hero.eyebrow, lang)}</div>
            <h1 id="hero-title">{text(copy.hero.headline, lang)}</h1>
            <p className="hero-description">{text(copy.hero.description, lang)}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">{text(copy.hero.viewWork, lang)} <ArrowDownRight size={17} /></a>
              <a className="button button-quiet" href={contact.resume} download>{text(copy.hero.download, lang)} <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-meta"><span><MapPin size={14} /> {text(copy.hero.basedIn, lang)}</span><span className="meta-divider" /><span><span className="status-dot" /> {text(copy.hero.status, lang)}</span></div>
          </div>
          <div className="hero-terminal"><div className="section-rail"><span>00</span><i /></div><Terminal lang={lang} /></div>
          <div className="hero-footnote"><span>PHP</span><span>/</span><span>LARAVEL</span><span>/</span><span>MYSQL</span><span>/</span><span>DOCKER</span></div>
        </section>

        <section className="stats-strip" aria-label={lang === "ar" ? "إحصائيات مهنية" : "Professional stats"}>
          {stats.map((stat) => <div className="stat-item" key={stat.label.en}><strong>{stat.value}</strong><span>{text(stat.label, lang)}</span></div>)}
        </section>

        <section className="about-section content-section" id="about" aria-labelledby="about-title">
          <div className="section-rail"><span>{text(copy.about.kicker, lang)}</span><i /></div>
          <div className="about-layout">
            <div className="section-heading"><span className="micro-label">NABIL HAMADA / 2026</span><h2 id="about-title">{text(copy.about.title, lang)}</h2></div>
            <div className="about-copy"><Quote size={25} className="quote-mark" /><p>{text(copy.about.body, lang)}</p><div className="about-tags"><span>Enterprise systems</span><span>Secure by design</span><span>Built to scale</span></div></div>
            <div className="system-map-card"><img src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030822498/xqpMYZyitfsMRVGN.png" alt="" aria-hidden="true" /><div className="system-map-caption"><Network size={17} /><span>{lang === "ar" ? "تفكير من النظام إلى الإشارة" : "Thinking from system to signal"}</span></div></div>
          </div>
        </section>

        <section className="skills-section content-section" id="skills" aria-labelledby="skills-title">
          <div className="section-rail"><span>{text(copy.skills.kicker, lang)}</span><i /></div>
          <div className="section-intro"><div><span className="micro-label">STACK / PRACTICE / DELIVERY</span><h2 id="skills-title">{text(copy.skills.title, lang)}</h2></div><div className="intro-mark"><Braces size={36} /><span>01—05</span></div></div>
          <div className="skills-list">
            {skillGroups.map((group, index) => { const Icon = skillIcons[group.id as keyof typeof skillIcons] ?? Code2; return <div className={`skill-row accent-${group.accent}`} key={group.id}><div className="skill-index">0{index + 1}</div><div className="skill-name"><Icon size={19} /><h3>{text(group.label, lang)}</h3></div><div className="skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div><ChevronRight size={18} className="skill-arrow" /></div>; })}
          </div>
        </section>

        <section className="experience-section content-section" id="experience" aria-labelledby="experience-title">
          <div className="section-rail"><span>{text(copy.experience.kicker, lang)}</span><i /></div>
          <div className="section-intro"><div><span className="micro-label">CAREER / OWNERSHIP / LEADERSHIP</span><h2 id="experience-title">{text(copy.experience.title, lang)}</h2></div><div className="experience-note"><Workflow size={18} /><span>{lang === "ar" ? "كل محطة تضيف طبقة جديدة من المسؤولية." : "Each chapter adds another layer of ownership."}</span></div></div>
          <div className="timeline">
            {experiences.map((experience, index) => <article className="timeline-item" key={experience.company}><div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span><i /></div><div className="timeline-main"><div className="timeline-meta"><span>{experience.period}</span><span>{text(experience.location, lang)}</span></div><h3>{experience.company}</h3><h4>{text(experience.role, lang)}</h4><ul>{experience.highlights[lang].map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div></article>)}
          </div>
        </section>

        <section className="projects-section content-section" id="projects" aria-labelledby="projects-title">
          <div className="section-rail"><span>{text(copy.projects.kicker, lang)}</span><i /></div>
          <div className="section-intro projects-intro"><div><span className="micro-label">SYSTEMS / SHIPPED / LEARNED</span><h2 id="projects-title">{text(copy.projects.title, lang)}</h2><p>{text(copy.projects.note, lang)}</p></div><div className="project-count"><span>05</span><small>{lang === "ar" ? "أنظمة مختارة" : "selected systems"}</small></div></div>
          <div className="projects-grid">
            {projects.map((project, index) => <article className={`project-card ${index === 0 ? "project-featured" : ""}`} key={project.title}><div className="project-topline"><span>{project.number}</span><span>{text(project.type, lang)}</span></div><div className="project-icon"><Server size={18} /></div><h3>{project.title}</h3><p>{text(project.description, lang)}</p><div className="project-signal"><Zap size={14} /><span>{text(project.signal, lang)}</span></div><div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="project-corner"><ArrowUpRight size={18} /></div></article>)}
          </div>
        </section>

        <section className="contact-section content-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-panel"><div className="contact-orbit" aria-hidden="true"><span /><span /><span /></div><div className="section-rail"><span>{text(copy.contact.kicker, lang)}</span><i /></div><div className="contact-content"><div><span className="micro-label">LET’S BUILD WITH INTENT</span><h2 id="contact-title">{text(copy.contact.title, lang)}</h2><p>{text(copy.contact.body, lang)}</p></div><a className="button button-primary contact-cta" href={`mailto:${contact.email}`}>{text(copy.contact.email, lang)} <Mail size={17} /></a></div><div className="contact-links"><a href={`mailto:${contact.email}`}><Mail size={15} /> {contact.email}</a><a href={contact.github} target="_blank" rel="noreferrer"><Github size={15} /> github.com/nabil12ful</a><a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> linkedin.com/in/nabil7amada</a><a href={`tel:${contact.phone}`}><Phone size={15} /> {contact.phone}</a></div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><img src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030822498/SjeLwCuNaaqEJDDU.png" alt="" onError={hideBrokenImage} /><span>NABIL HAMADA / <strong>FULL-STACK</strong></span></div><p>{text(copy.footer.built, lang)}</p><a href="#top">{text(copy.footer.back, lang)} <ArrowUpRight size={14} /></a></footer>
    </div>
  );
}
