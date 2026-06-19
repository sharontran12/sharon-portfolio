import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sharon — Product Designer",
  description: "Portfolio of Sharon, Product Designer at Cisco Secure Access.",
};

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">

        {/* Matcha cup */}
        <div className="hero-illo hero-illo-matcha" aria-hidden="true">
          <svg viewBox="0 0 88 100" xmlns="http://www.w3.org/2000/svg">
            {/* steam */}
            <path d="M32 22 Q29 14 32 8" stroke="#A09D97" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity=".5"/>
            <path d="M44 20 Q41 11 44 4"  stroke="#A09D97" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity=".5"/>
            <path d="M56 22 Q53 14 56 8"  stroke="#A09D97" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity=".5"/>
            {/* saucer */}
            <ellipse cx="44" cy="86" rx="34" ry="7" fill="#C8B89A" opacity=".6"/>
            {/* cup body */}
            <path d="M18 50 Q16 80 44 82 Q72 80 70 50 Z" fill="#E8EDE8"/>
            <path d="M18 50 Q16 80 44 82 Q72 80 70 50 Z" fill="none" stroke="#CCDACC" strokeWidth="1"/>
            {/* matcha fill */}
            <path d="M20 58 Q18 78 44 80 Q70 78 68 58 Z" fill="#8DBD7A" opacity=".85"/>
            {/* rim */}
            <ellipse cx="44" cy="50" rx="26" ry="6" fill="#F0F4F0" stroke="#CCDACC" strokeWidth="1"/>
            {/* handle */}
            <path d="M70 58 Q82 58 82 66 Q82 74 70 72" stroke="#C8B89A" strokeWidth="2.8" fill="none" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Flower */}
        <div className="hero-illo hero-illo-flower" aria-hidden="true">
          <svg viewBox="0 0 76 90" xmlns="http://www.w3.org/2000/svg">
            {/* stem */}
            <line x1="38" y1="90" x2="38" y2="58" stroke="#8B7A5E" strokeWidth="2" strokeLinecap="round"/>
            <path d="M38 72 Q28 64 22 67" stroke="#7DAF7A" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
            <path d="M38 66 Q48 58 54 61" stroke="#7DAF7A" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
            {/* outer petals */}
            <ellipse cx="38" cy="38" rx="9" ry="16" fill="#F0C8CC" transform="rotate(0 38 52)"/>
            <ellipse cx="38" cy="38" rx="9" ry="16" fill="#EDB8BD" transform="rotate(60 38 52)"/>
            <ellipse cx="38" cy="38" rx="9" ry="16" fill="#F0C8CC" transform="rotate(120 38 52)"/>
            <ellipse cx="38" cy="38" rx="9" ry="16" fill="#EDB8BD" transform="rotate(180 38 52)"/>
            <ellipse cx="38" cy="38" rx="9" ry="16" fill="#F0C8CC" transform="rotate(240 38 52)"/>
            <ellipse cx="38" cy="38" rx="9" ry="16" fill="#EDB8BD" transform="rotate(300 38 52)"/>
            {/* center */}
            <circle cx="38" cy="52" r="9"  fill="#F4C2A1"/>
            <circle cx="38" cy="52" r="5.5" fill="#EBA882"/>
            <circle cx="35.5" cy="50" r="1.2" fill="#C87050" opacity=".7"/>
            <circle cx="38"   cy="48" r="1.2" fill="#C87050" opacity=".7"/>
            <circle cx="40.5" cy="50" r="1.2" fill="#C87050" opacity=".7"/>
          </svg>
        </div>

        {/* Paddle / kayak */}
        <div className="hero-illo hero-illo-paddle" aria-hidden="true">
          <svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
            {/* water */}
            <path d="M4 64 Q18 58 32 64 Q46 70 60 64 Q74 58 88 64 Q96 67 100 64" stroke="#A8C8D8" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity=".6"/>
            <path d="M0 72 Q14 66 28 72 Q42 78 56 72 Q70 66 84 72 Q92 75 100 72" stroke="#A8C8D8" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity=".4"/>
            {/* kayak hull */}
            <path d="M18 60 Q50 52 82 60 Q50 68 18 60 Z" fill="#C04E2A" opacity=".85"/>
            <path d="M18 60 Q50 56 82 60" stroke="#A03A1A" strokeWidth="1" fill="none" opacity=".5"/>
            {/* cockpit */}
            <ellipse cx="50" cy="59" rx="12" ry="4" fill="#8B4513" opacity=".6"/>
            {/* paddler silhouette */}
            <circle cx="50" cy="50" r="5" fill="#2C2B28" opacity=".75"/>
            <path d="M50 55 L50 62" stroke="#2C2B28" strokeWidth="2" strokeLinecap="round" opacity=".75"/>
            {/* paddle */}
            <line x1="22" y1="44" x2="78" y2="44" stroke="#8B7A5E" strokeWidth="2" strokeLinecap="round"/>
            <ellipse cx="20" cy="44" rx="7" ry="11" fill="#6B9CB8" opacity=".8" transform="rotate(-15 20 44)"/>
            <ellipse cx="80" cy="44" rx="7" ry="11" fill="#6B9CB8" opacity=".8" transform="rotate(15 80 44)"/>
          </svg>
        </div>

        {/* Sprig / leaf */}
        <div className="hero-illo hero-illo-sprig" aria-hidden="true">
          <svg viewBox="0 0 64 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 78 Q30 55 22 40" stroke="#8B7A5E" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <path d="M22 40 Q8 22 12 8 Q26 12 28 30 Q30 38 22 40 Z" fill="#7AAF6A" opacity=".85"/>
            <path d="M16 26 Q14 20 12 18" stroke="#5A8A4A" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            <path d="M20 20 Q18 14 16 11" stroke="#5A8A4A" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            <path d="M32 78 Q34 55 44 38" stroke="#8B7A5E" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <path d="M44 38 Q58 20 54 6 Q40 10 38 28 Q36 36 44 38 Z" fill="#8DBD7A" opacity=".85"/>
            <path d="M48 24 Q50 18 52 16" stroke="#5A9A48" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          </svg>
        </div>

        <div className="hero-content">
          <h1 className="hero-name">
            Hello, I&apos;m Sharon Tran.
          </h1>
          <p className="hero-tagline">A product designer who makes complex workflows <em>feel</em> simple.</p>
          <p className="hero-sub">Designer by day, flower farmer by night.</p>
          <p className="hero-location-line">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1C4.79 1 3 2.79 3 5c0 3 4 8 4 8s4-5 4-8c0-2.21-1.79-4-4-4zm0 5.5A1.5 1.5 0 1 1 7 3a1.5 1.5 0 0 1 0 3z" fill="currentColor"/>
            </svg>
            Bay Area · Open to new opportunities
          </p>
        </div>
      </section>

      {/* ── WORK ── */}
      <section id="work" className="work-section">
        <div className="work-header">
          <div className="work-badge">💼 Case Studies</div>
          <h2 className="work-heading">What I&apos;ve designed recently</h2>
        </div>

        {/* Card 01 — STIX/TAXII */}
        <div className="proj-card">
          <div className="proj-info">
            <div className="proj-company">Cisco Secure Access</div>
            <h3 className="proj-title">STIX/TAXII Threat Intelligence Integration</h3>
            <p className="proj-desc">
              Designed end-to-end UX for automated threat intelligence ingestion — eliminating manual IOC entry and shipping in 7 weeks.
            </p>
            <div className="proj-tags">
              <span className="proj-tag">0 to 1 Design</span>
              <span className="proj-tag">Security</span>
            </div>
            <div className="proj-metrics">
              <div>
                <div className="proj-metric-val">7 wks</div>
                <div className="proj-metric-label">Zero to ship</div>
              </div>
              <div>
                <div className="proj-metric-val">#1</div>
                <div className="proj-metric-label">vs. Zscaler & Netskope</div>
              </div>
            </div>
            <div className="proj-actions">
              <Link href="/work/stix-taxii" className="proj-cta-primary">View Case Study</Link>
            </div>
          </div>
          <div className="proj-visual proj-visual--img">
            <img src="/mock-stix.png" alt="Cisco Secure Access — Third-party integrations" className="proj-mock-img"/>
          </div>
        </div>

        {/* Card 02 — Security Dashboard */}
        <div className="proj-card">
          <div className="proj-info">
            <div className="proj-company">Cisco Secure Access</div>
            <h3 className="proj-title">Security Dashboard Redesign</h3>
            <p className="proj-desc">
              Redesigned the primary security operations dashboard to improve clarity and reduce time-to-action across 50k+ enterprise users.
            </p>
            <div className="proj-tags">
              <span className="proj-tag">Dashboard</span>
              <span className="proj-tag">Enterprise UX</span>
              <span className="proj-tag">Research</span>
            </div>
            <div className="proj-metrics">
              <div>
                <div className="proj-metric-val">50k+</div>
                <div className="proj-metric-label">Users impacted</div>
              </div>
              <div>
                <div className="proj-metric-val">↓40%</div>
                <div className="proj-metric-label">Time to action</div>
              </div>
            </div>
            <div className="proj-actions">
              <Link href="/work/security-dashboard" className="proj-cta-primary">View Case Study</Link>
            </div>
          </div>
          <div className="proj-visual">
            <div className="mock-browser" style={{width:'90%'}}>
              <div className="mock-browser-bar">
                <div className="mock-dot" style={{background:'#FF5F57'}}/>
                <div className="mock-dot" style={{background:'#FEBC2E'}}/>
                <div className="mock-dot" style={{background:'#28C840'}}/>
              </div>
              <div className="mock-browser-body">
                <div style={{fontSize:9,fontFamily:'IBM Plex Mono',letterSpacing:'.1em',textTransform:'uppercase',color:'#B4B1AB',marginBottom:10}}>Security Overview</div>
                {[
                  {name:'Blocked — Malware C2', status:'Critical', col:'#C04E2A', bg:'#FAEAE4'},
                  {name:'Allowed — Suspicious DNS', status:'Warning', col:'#FEBC2E', bg:'#FFF8E6'},
                  {name:'Policy Updated', status:'Info', col:'#3B5BA5', bg:'#E6EBFA'},
                  {name:'Threat Score: Low', status:'Clear', col:'#28C840', bg:'#E6F9E6'},
                ].map((r,i) => (
                  <div key={i} className="mock-row">
                    <span className="mock-badge-pill" style={{background:r.bg,color:r.col}}>{r.status}</span>
                    <span className="mock-text">{r.name}</span>
                    <span className="mock-ts">5m ago</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="about-section">
        <div className="about-label">About</div>
        <div className="about-body">
          <p>
            I&apos;m a product designer at <strong>Cisco Secure Access</strong> focused on making enterprise security tools approachable. I work across the full UX spectrum — research, information architecture, interaction design, and engineering handoff.
          </p>
          <p>
            I care about the gap between complexity and clarity. The best security UX is invisible: it keeps people safe without asking them to become experts first.
          </p>
        </div>
      </section>
    </>
  );
}
