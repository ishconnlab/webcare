import type { PortfolioData } from "../types";

export function generatePortfolioHTML(data: PortfolioData): string {
  const p = data.personalInfo;
  const t = data.theme;
  const year = new Date().getFullYear();

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${p.name || "Portfolio"} | ${p.role || "Professional"}</title>
<meta name="description" content="${p.bio ? p.bio.slice(0, 160) : "Professional portfolio website"}">
<meta name="robots" content="index, follow">
<meta property="og:title" content="${p.name || "Portfolio"} | ${p.role || "Professional"}">
<meta property="og:description" content="${p.bio ? p.bio.slice(0, 160) : "Professional portfolio website"}">
<meta name="twitter:card" content="summary_large_image">
<style>
:root {
  --primary: ${t.primary};
  --secondary: ${t.secondary};
  --accent: ${t.accent};
  --font: ${t.font};
  --heading: ${t.headingFont};
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: var(--font); color: #1a1a2e; background: #fff; line-height: 1.6; -webkit-font-smoothing: antialiased; }
h1, h2, h3, h4 { font-family: var(--heading); line-height: 1.2; }
a { color: var(--primary); text-decoration: none; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }

.hero { background: linear-gradient(135deg, var(--primary), var(--secondary)); color: #fff; padding: 80px 0; }
.hero-inner { display: flex; align-items: center; gap: 32px; }
.hero-avatar { width: 96px; height: 96px; border-radius: 50%; border: 3px solid rgba(255,255,255,0.3); object-fit: cover; flex-shrink: 0; }
.hero-text { flex: 1; }
.hero-name { font-size: 2.5rem; font-weight: 900; margin-bottom: 4px; }
.hero-role { font-size: 1.2rem; opacity: 0.8; }
.hero-bio { margin-top: 20px; font-size: 0.95rem; opacity: 0.85; max-width: 600px; line-height: 1.7; }

.section { padding: 64px 0; border-bottom: 1px solid #f0f0f0; }
.section-title { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: var(--primary); margin-bottom: 24px; }

.skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.skill-item { }
.skill-header { display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 6px; }
.skill-name { font-weight: 600; color: #1a1a2e; }
.skill-pct { color: #999; }
.skill-bar { height: 8px; background: #f0f0f0; border-radius: 4px; overflow: hidden; }
.skill-fill { height: 100%; border-radius: 4px; background: var(--primary); transition: width 0.6s ease; }

.projects-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.project-card { padding: 20px; border: 1px solid #eee; border-radius: 12px; transition: box-shadow 0.2s; }
.project-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
.project-title { font-size: 1rem; font-weight: 700; color: #1a1a2e; }
.project-desc { font-size: 0.85rem; color: #666; margin-top: 6px; }
.project-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; }
.project-tag { padding: 2px 10px; background: #f5f5f5; color: #666; font-size: 0.75rem; border-radius: 4px; }
.project-links { display: flex; gap: 16px; margin-top: 12px; }
.project-link { font-size: 0.85rem; font-weight: 500; }

.timeline { }
.timeline-item { position: relative; padding-left: 20px; border-left: 2px solid var(--primary); padding-bottom: 20px; }
.timeline-dot { position: absolute; left: -5px; top: 4px; width: 8px; height: 8px; border-radius: 50%; background: var(--primary); }
.timeline-role { font-weight: 700; font-size: 0.95rem; color: #1a1a2e; }
.timeline-meta { font-size: 0.85rem; color: #999; }
.timeline-desc { font-size: 0.85rem; color: #666; margin-top: 4px; }

.services-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }
.service-card { padding: 20px; border: 1px solid #eee; border-radius: 12px; text-align: center; }
.service-title { font-weight: 700; font-size: 0.95rem; color: #1a1a2e; }
.service-desc { font-size: 0.85rem; color: #666; margin-top: 4px; }

.contact { background: linear-gradient(135deg, var(--primary), var(--secondary)); color: #fff; text-align: center; }
.contact-info { display: flex; flex-direction: column; gap: 8px; font-size: 0.95rem; }
.contact-socials { display: flex; justify-content: center; gap: 20px; margin-top: 20px; }
.contact-socials a { color: rgba(255,255,255,0.8); font-size: 0.85rem; text-transform: capitalize; }
.contact-socials a:hover { color: #fff; }

.footer { padding: 24px 0; text-align: center; font-size: 0.8rem; color: #999; border-top: 1px solid #eee; }

@media (max-width: 768px) {
  .hero-inner { flex-direction: column; text-align: center; }
  .hero-name { font-size: 1.8rem; }
  .hero-bio { margin-left: auto; margin-right: auto; }
  .skills-grid, .projects-grid, .services-grid { grid-template-columns: 1fr; }
}
</style>
</head>
<body>
${renderHero(data)}
${data.sections.skills && data.skills.length > 0 ? renderSkills(data) : ""}
${data.sections.projects && data.projects.length > 0 ? renderProjects(data) : ""}
${data.sections.experience && data.experience.length > 0 ? renderExperience(data) : ""}
${data.sections.education && data.education.length > 0 ? renderEducation(data) : ""}
${data.sections.services && data.services.length > 0 ? renderServices(data) : ""}
${data.sections.contact ? renderContact(data) : ""}
<footer class="footer"><div class="container">&copy; ${year} ${p.name || "Portfolio"}. All rights reserved.</div></footer>
</body>
</html>`;
}

function renderHero(data: PortfolioData) {
  const p = data.personalInfo;
  return `<section class="hero">
  <div class="container">
    <div class="hero-inner">
      ${p.profileImage ? `<img src="${p.profileImage}" alt="${p.name}" class="hero-avatar">` : ""}
      <div class="hero-text">
        ${p.name ? `<h1 class="hero-name">${escapeHtml(p.name)}</h1>` : ""}
        ${p.role ? `<p class="hero-role">${escapeHtml(p.role)}</p>` : ""}
        ${p.bio ? `<p class="hero-bio">${escapeHtml(p.bio)}</p>` : ""}
      </div>
    </div>
  </div>
</section>`;
}

function renderSkills(data: PortfolioData) {
  return `<section class="section">
  <div class="container">
    <h2 class="section-title">Skills</h2>
    <div class="skills-grid">
      ${data.skills.map((s) => `<div class="skill-item">
        <div class="skill-header"><span class="skill-name">${escapeHtml(s.name)}</span><span class="skill-pct">${s.level}%</span></div>
        <div class="skill-bar"><div class="skill-fill" style="width:${s.level}%"></div></div>
      </div>`).join("")}
    </div>
  </div>
</section>`;
}

function renderProjects(data: PortfolioData) {
  return `<section class="section">
  <div class="container">
    <h2 class="section-title">Projects</h2>
    <div class="projects-grid">
      ${data.projects.map((pr) => `<div class="project-card">
        <h3 class="project-title">${escapeHtml(pr.title)}</h3>
        <p class="project-desc">${escapeHtml(pr.description)}</p>
        ${pr.tags.length > 0 ? `<div class="project-tags">${pr.tags.map((t) => `<span class="project-tag">${escapeHtml(t)}</span>`).join("")}</div>` : ""}
        <div class="project-links">
          ${pr.liveUrl ? `<a href="${pr.liveUrl}" class="project-link" target="_blank" rel="noopener">Live &rarr;</a>` : ""}
          ${pr.githubUrl ? `<a href="${pr.githubUrl}" class="project-link" style="color:#999" target="_blank" rel="noopener">GitHub &rarr;</a>` : ""}
        </div>
      </div>`).join("")}
    </div>
  </div>
</section>`;
}

function renderExperience(data: PortfolioData) {
  return `<section class="section">
  <div class="container">
    <h2 class="section-title">Experience</h2>
    <div class="timeline">
      ${data.experience.map((e) => `<div class="timeline-item">
        <div class="timeline-dot"></div>
        <p class="timeline-role">${escapeHtml(e.role)}</p>
        <p class="timeline-meta">${escapeHtml(e.company)} &middot; ${e.startDate} - ${e.current ? "Present" : e.endDate}</p>
        ${e.description ? `<p class="timeline-desc">${escapeHtml(e.description)}</p>` : ""}
      </div>`).join("")}
    </div>
  </div>
</section>`;
}

function renderEducation(data: PortfolioData) {
  return `<section class="section">
  <div class="container">
    <h2 class="section-title">Education</h2>
    ${data.education.map((e) => `<div style="margin-bottom:16px">
      <p style="font-weight:700;font-size:0.95rem;color:#1a1a2e">${escapeHtml(e.degree)} in ${escapeHtml(e.field)}</p>
      <p style="font-size:0.85rem;color:#999">${escapeHtml(e.institution)} &middot; ${e.startDate} - ${e.endDate}</p>
    </div>`).join("")}
  </div>
</section>`;
}

function renderServices(data: PortfolioData) {
  return `<section class="section">
  <div class="container">
    <h2 class="section-title">Services</h2>
    <div class="services-grid">
      ${data.services.map((s) => `<div class="service-card">
        <h3 class="service-title">${escapeHtml(s.title)}</h3>
        <p class="service-desc">${escapeHtml(s.description)}</p>
      </div>`).join("")}
    </div>
  </div>
</section>`;
}

function renderContact(data: PortfolioData) {
  const c = data.contact;
  return `<section class="section contact">
  <div class="container">
    <h2 class="section-title" style="color:rgba(255,255,255,0.8)">Get In Touch</h2>
    <div class="contact-info">
      ${c.email ? `<p>${escapeHtml(c.email)}</p>` : ""}
      ${c.phone ? `<p>${escapeHtml(c.phone)}</p>` : ""}
      ${c.location ? `<p style="opacity:0.7">${escapeHtml(c.location)}</p>` : ""}
    </div>
    ${data.socialLinks.length > 0 ? `<div class="contact-socials">${data.socialLinks.map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${escapeHtml(s.platform)}</a>`).join("")}</div>` : ""}
  </div>
</section>`;
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
  return text.replace(/[&<>"']/g, (c) => map[c]);
}
