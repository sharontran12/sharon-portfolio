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

        {/* Flower */}
        <div className="artifact art-flower">
          <svg viewBox="0 0 170 210" xmlns="http://www.w3.org/2000/svg">
            <rect width="170" height="210" rx="14" fill="#F5EDE8"/>
            <line x1="85" y1="210" x2="85" y2="135" stroke="#8B7A5E" strokeWidth="2.5"/>
            <path d="M85 165 Q68 148 58 152" stroke="#7DAF7A" strokeWidth="2" fill="none"/>
            <path d="M85 155 Q102 138 112 142" stroke="#7DAF7A" strokeWidth="2" fill="none"/>
            <ellipse cx="85" cy="100" rx="16" ry="24" fill="#F0C8CC" transform="rotate(0 85 120)"/>
            <ellipse cx="85" cy="100" rx="16" ry="24" fill="#EDB8BD" transform="rotate(45 85 120)"/>
            <ellipse cx="85" cy="100" rx="16" ry="24" fill="#F0C8CC" transform="rotate(90 85 120)"/>
            <ellipse cx="85" cy="100" rx="16" ry="24" fill="#EDB8BD" transform="rotate(135 85 120)"/>
            <ellipse cx="85" cy="100" rx="16" ry="24" fill="#F0C8CC" transform="rotate(180 85 120)"/>
            <ellipse cx="85" cy="100" rx="16" ry="24" fill="#EDB8BD" transform="rotate(225 85 120)"/>
            <ellipse cx="85" cy="100" rx="16" ry="24" fill="#F0C8CC" transform="rotate(270 85 120)"/>
            <ellipse cx="85" cy="100" rx="16" ry="24" fill="#EDB8BD" transform="rotate(315 85 120)"/>
            <ellipse cx="85" cy="108" rx="11" ry="17" fill="#FBDDE0" transform="rotate(22 85 120)"/>
            <ellipse cx="85" cy="108" rx="11" ry="17" fill="#F9CFD3" transform="rotate(67 85 120)"/>
            <ellipse cx="85" cy="108" rx="11" ry="17" fill="#FBDDE0" transform="rotate(112 85 120)"/>
            <ellipse cx="85" cy="108" rx="11" ry="17" fill="#F9CFD3" transform="rotate(157 85 120)"/>
            <ellipse cx="85" cy="108" rx="11" ry="17" fill="#FBDDE0" transform="rotate(202 85 120)"/>
            <ellipse cx="85" cy="108" rx="11" ry="17" fill="#F9CFD3" transform="rotate(247 85 120)"/>
            <circle cx="85" cy="120" r="14" fill="#F4C2A1"/>
            <circle cx="85" cy="120" r="9"  fill="#EBA882"/>
            <circle cx="81" cy="117" r="1.5" fill="#C87050" opacity=".7"/>
            <circle cx="85" cy="115" r="1.5" fill="#C87050" opacity=".7"/>
            <circle cx="89" cy="117" r="1.5" fill="#C87050" opacity=".7"/>
            <circle cx="88" cy="122" r="1.5" fill="#C87050" opacity=".7"/>
            <circle cx="82" cy="122" r="1.5" fill="#C87050" opacity=".7"/>
          </svg>
        </div>

        {/* Color palette */}
        <div className="artifact art-design">
          <svg viewBox="0 0 155 185" xmlns="http://www.w3.org/2000/svg">
            <rect width="155" height="185" rx="14" fill="#E8EEF5"/>
            <ellipse cx="78" cy="100" rx="52" ry="44" fill="#FAFAFA" stroke="#DDD" strokeWidth="1"/>
            <ellipse cx="100" cy="82" rx="12" ry="12" fill="#FAFAFA" stroke="#DDD" strokeWidth="1"/>
            <circle cx="58" cy="88"  r="11" fill="#F4A261"/>
            <circle cx="82" cy="78"  r="11" fill="#E76F51"/>
            <circle cx="104" cy="90" r="11" fill="#2A9D8F"/>
            <circle cx="100" cy="115" r="11" fill="#E9C46A"/>
            <circle cx="72" cy="118" r="11" fill="#264653"/>
            <circle cx="52" cy="108" r="11" fill="#A8DADC"/>
            <circle cx="100" cy="82" r="7" fill="#E8EEF5"/>
            <line x1="115" y1="55" x2="75" y2="95" stroke="#8B7A5E" strokeWidth="3" strokeLinecap="round"/>
            <ellipse cx="118" cy="52" rx="5" ry="9" fill="#C87050" transform="rotate(-45 118 52)"/>
            <ellipse cx="72" cy="98" rx="3" ry="6" fill="#E76F51" transform="rotate(-45 72 98)"/>
          </svg>
        </div>

        {/* Matcha */}
        <div className="artifact art-matcha">
          <svg viewBox="0 0 140 165" xmlns="http://www.w3.org/2000/svg">
            <rect width="140" height="165" rx="14" fill="#E8F0E8"/>
            <ellipse cx="70" cy="138" rx="46" ry="9" fill="#C8B89A"/>
            <ellipse cx="70" cy="135" rx="40" ry="6" fill="#D4C4A8"/>
            <path d="M34 80 Q30 130 70 132 Q110 130 106 80 Z" fill="#F0F5F0"/>
            <path d="M34 80 Q30 130 70 132 Q110 130 106 80 Z" fill="none" stroke="#CCDACC" strokeWidth="1.5"/>
            <path d="M36 88 Q34 120 70 122 Q106 120 104 88 Z" fill="#7AB87A"/>
            <ellipse cx="70" cy="90" rx="30" ry="7" fill="#A8D4A8" opacity=".7"/>
            <path d="M52 90 Q70 82 88 90" stroke="#5A9A5A" strokeWidth="1.5" fill="none"/>
            <path d="M58 87 Q70 84 82 87" stroke="#5A9A5A" strokeWidth="1" fill="none"/>
            <path d="M106 90 Q122 90 122 105 Q122 120 106 118" stroke="#C8B89A" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
            <ellipse cx="70" cy="80" rx="36" ry="7" fill="#F5F8F5" stroke="#CCDACC" strokeWidth="1"/>
            <path d="M56 72 Q52 62 56 54" stroke="#AACCAA" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity=".6"/>
            <path d="M70 70 Q66 58 70 50" stroke="#AACCAA" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity=".6"/>
            <path d="M84 72 Q80 62 84 54" stroke="#AACCAA" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity=".6"/>
          </svg>
        </div>

        {/* Plant */}
        <div className="artifact art-plant">
          <svg viewBox="0 0 155 185" xmlns="http://www.w3.org/2000/svg">
            <rect width="155" height="185" rx="14" fill="#EAF0E8"/>
            <path d="M52 158 L48 175 L107 175 L103 158 Z" fill="#C47A55"/>
            <rect x="46" y="152" width="63" height="10" rx="4" fill="#D4895E"/>
            <ellipse cx="77" cy="156" rx="28" ry="5" fill="#6B4F3A"/>
            <path d="M77 155 Q72 130 55 110" stroke="#5A8A4A" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M77 155 Q80 125 95 105" stroke="#5A8A4A" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M77 155 Q75 135 70 118" stroke="#5A8A4A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <path d="M55 110 Q30 90 35 65 Q55 68 68 88 Q72 95 65 108 Z" fill="#5A9A4A"/>
            <path d="M46 90 Q42 84 38 82" stroke="#4A8A3A" strokeWidth="1.5" fill="none"/>
            <path d="M52 82 Q50 75 48 72" stroke="#4A8A3A" strokeWidth="1.5" fill="none"/>
            <path d="M95 105 Q122 88 118 62 Q98 63 84 84 Q80 91 88 104 Z" fill="#6AAB58"/>
            <path d="M108 85 Q112 79 114 76" stroke="#5A9A48" strokeWidth="1.5" fill="none"/>
            <path d="M102 78 Q105 72 106 68" stroke="#5A9A48" strokeWidth="1.5" fill="none"/>
            <path d="M70 118 Q58 105 62 90 Q72 92 74 108 Z" fill="#7ABB68"/>
          </svg>
        </div>

        {/* Vinyl */}
        <div className="artifact art-vinyl">
          <svg viewBox="0 0 118 118" xmlns="http://www.w3.org/2000/svg">
            <rect width="118" height="118" rx="12" fill="#1E1E1E"/>
            <circle cx="59" cy="59" r="46" fill="#111"/>
            <circle cx="59" cy="59" r="40" fill="none" stroke="#2A2A2A" strokeWidth="3"/>
            <circle cx="59" cy="59" r="33" fill="none" stroke="#2A2A2A" strokeWidth="2"/>
            <circle cx="59" cy="59" r="26" fill="none" stroke="#2A2A2A" strokeWidth="2"/>
            <circle cx="59" cy="59" r="19" fill="none" stroke="#2A2A2A" strokeWidth="1.5"/>
            <circle cx="59" cy="59" r="13" fill="#C04E2A"/>
            <circle cx="59" cy="59" r="4"  fill="#1E1E1E"/>
            <circle cx="59" cy="59" r="46" fill="none" stroke="rgba(255,255,255,.05)" strokeWidth="1"/>
          </svg>
        </div>

        {/* Cassette */}
        <div className="artifact art-cassette">
          <svg viewBox="0 0 130 90" xmlns="http://www.w3.org/2000/svg">
            <rect width="130" height="90" rx="12" fill="#F5F0E8"/>
            <rect x="10" y="15" width="110" height="62" rx="8" fill="#2A2A3A"/>
            <rect x="14" y="19" width="102" height="54" rx="6" fill="#3A3A4A"/>
            <rect x="28" y="26" width="74" height="36" rx="5" fill="#1A1A2A"/>
            <circle cx="47" cy="44" r="13" fill="#2A2A3A"/>
            <circle cx="47" cy="44" r="9"  fill="#4A4A5A"/>
            <circle cx="47" cy="44" r="5"  fill="#1A1A2A"/>
            <circle cx="47" cy="44" r="2.5" fill="#888"/>
            <circle cx="83" cy="44" r="13" fill="#2A2A3A"/>
            <circle cx="83" cy="44" r="9"  fill="#4A4A5A"/>
            <circle cx="83" cy="44" r="5"  fill="#1A1A2A"/>
            <circle cx="83" cy="44" r="2.5" fill="#888"/>
            <path d="M52 44 Q65 38 78 44" stroke="#888" strokeWidth="1.5" fill="none"/>
            <rect x="14" y="55" width="102" height="14" rx="0" fill="#C04E2A" opacity=".85"/>
            <text x="65" y="65" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="7" fill="rgba(255,255,255,.8)" letterSpacing="2">SHARON MIX</text>
            <circle cx="18" cy="22" r="3" fill="#2A2A3A"/>
            <circle cx="112" cy="22" r="3" fill="#2A2A3A"/>
            <circle cx="18" cy="71" r="3" fill="#2A2A3A"/>
            <circle cx="112" cy="71" r="3" fill="#2A2A3A"/>
          </svg>
        </div>

        {/* Center text */}
        <div className="hero-content">
          <h1 className="hero-name">Hi there! I&apos;m Sharon</h1>
          <p className="hero-sub">
            BFA Digital Media Art &amp; BA Design student<br/>
            <strong>@ San Jose State University</strong>, emphasis on interaction design &amp; experience design.
          </p>
          <p className="hero-sub" style={{marginTop:16}}>Previously @ <strong>Cisco, IBM</strong></p>
          <div className="available">
            <span className="available-dot"/>
            Available for work
          </div>
          <Link href="/#work" className="hero-cta" style={{marginTop:28}}>See my work ↗</Link>
        </div>

        {/* Contact strip */}
        <div className="hero-footer">
          <div className="hero-footer-left">
            <span className="hero-contact-label">Get in touch</span>
            <div className="hero-contact-links">
              <a href="mailto:hello@sharon.design">hello@sharon.design</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
          <span className="hero-location">San Francisco, CA</span>
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
              <span className="proj-tag">Automation</span>
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
              <a href="#" className="proj-cta-secondary">View Live (In App) →</a>
            </div>
          </div>
          <div className="proj-visual">
            {/* STIX flow mockup */}
            <div className="mock-browser" style={{width:'90%'}}>
              <div className="mock-browser-bar">
                <div className="mock-dot" style={{background:'#FF5F57'}}/>
                <div className="mock-dot" style={{background:'#FEBC2E'}}/>
                <div className="mock-dot" style={{background:'#28C840'}}/>
              </div>
              <div className="mock-browser-body">
                <div style={{fontSize:9,fontFamily:'IBM Plex Mono',letterSpacing:'.1em',textTransform:'uppercase',color:'#B4B1AB',marginBottom:10}}>Threat Intelligence Feeds</div>
                {[
                  {name:'AlienVault OTX', status:'Connected', col:'#28C840', bg:'#E6F9E6'},
                  {name:'MISP Feed', status:'Syncing', col:'#FEBC2E', bg:'#FFF8E6'},
                  {name:'Cisco Talos', status:'Connected', col:'#28C840', bg:'#E6F9E6'},
                  {name:'Emerging Threats', status:'3 of 5', col:'#3B5BA5', bg:'#E6EBFA'},
                ].map((r,i) => (
                  <div key={i} className="mock-row">
                    <span className="mock-badge-pill" style={{background:r.bg,color:r.col}}>{r.status}</span>
                    <span className="mock-text">{r.name}</span>
                    <span className="mock-ts">2h ago</span>
                  </div>
                ))}
              </div>
            </div>
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
