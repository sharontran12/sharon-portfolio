"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.querySelectorAll<HTMLElement>(".cutout").forEach((el) => {
      let sx = 0, sy = 0, ox = 0, oy = 0, on = false;

      const getTransform = (el: HTMLElement) => {
        const m = window.getComputedStyle(el).transform;
        if (!m || m === "none") return { x: 0, y: 0, rot: 0 };
        const vals = m.match(/matrix\((.+)\)/);
        if (!vals) return { x: 0, y: 0, rot: 0 };
        const v = vals[1].split(",").map(parseFloat);
        return { x: v[4], y: v[5], rot: Math.round(Math.atan2(v[1], v[0]) * (180 / Math.PI)) };
      };

      el.addEventListener("mousedown", (e) => {
        e.preventDefault();
        on = true;
        const hero = el.closest(".hero") as HTMLElement;
        const r = hero.getBoundingClientRect();
        const er = el.getBoundingClientRect();
        ox = er.left - r.left;
        oy = er.top - r.top;
        sx = e.clientX;
        sy = e.clientY;
        const { rot } = getTransform(el);
        el.style.cssText += `;position:absolute;left:${ox}px;top:${oy}px;transform:rotate(${rot}deg);z-index:99;animation:none;transition:none`;
      });

      document.addEventListener("mousemove", (e) => {
        if (!on) return;
        el.style.left = ox + e.clientX - sx + "px";
        el.style.top = oy + e.clientY - sy + "px";
      });

      document.addEventListener("mouseup", () => {
        on = false;
        el.style.zIndex = "";
      });
    });
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero" id="canvas">
        <div className="hero-text">
          <div className="hero-lines">
            <span>designer. product thinker.</span>
            <span>matcha drinker. plant parent.</span>
            <span>mostly just curious and building things.</span>
          </div>
        </div>

        {/* Matcha cup */}
        <div className="cutout c-matcha">
          <svg viewBox="0 0 130 150" xmlns="http://www.w3.org/2000/svg" fill="none">
            <ellipse cx="65" cy="32" rx="44" ry="14" fill="#C8E0C0"/>
            <path d="M21 32 Q18 90 30 108 Q45 122 65 124 Q85 122 100 108 Q112 90 109 32Z" fill="#B5D4A8"/>
            <path d="M21 32 Q18 90 30 108 Q45 122 65 124 Q85 122 100 108 Q112 90 109 32Z" fill="url(#mg1)"/>
            <ellipse cx="65" cy="32" rx="36" ry="9" fill="rgba(255,255,255,0.45)" filter="url(#blur1)"/>
            <path d="M55 28 Q65 22 75 28 Q72 36 65 34 Q58 32 55 28Z" fill="rgba(255,255,255,0.35)" filter="url(#blur1)"/>
            <ellipse cx="65" cy="132" rx="52" ry="12" fill="#D4C8A0"/>
            <ellipse cx="65" cy="132" rx="46" ry="9" fill="#E0D4B4"/>
            <defs>
              <linearGradient id="mg1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(0,0,0,0)"/>
                <stop offset="100%" stopColor="rgba(0,0,0,0.1)"/>
              </linearGradient>
              <filter id="blur1"><feGaussianBlur stdDeviation="2"/></filter>
            </defs>
          </svg>
        </div>

        {/* Pencil */}
        <div className="cutout c-pencil">
          <svg viewBox="0 0 22 140" xmlns="http://www.w3.org/2000/svg" fill="none">
            <rect x="3" y="0" width="16" height="13" rx="2" fill="#F4A8B0"/>
            <rect x="3" y="13" width="16" height="10" fill="#C8C0B0"/>
            <rect x="3" y="16" width="16" height="2" fill="#B8B0A0" opacity=".5"/>
            <rect x="3" y="23" width="16" height="92" fill="#F0CE3C"/>
            <rect x="3" y="23" width="4" height="92" fill="rgba(255,255,255,0.18)"/>
            <path d="M3 115 L11 135 L19 115Z" fill="#D4A060"/>
            <path d="M8 130 L11 140 L14 130Z" fill="#444"/>
          </svg>
        </div>

        {/* Flower */}
        <div className="cutout c-flower">
          <svg viewBox="0 0 150 160" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path d="M75 150 Q72 120 68 100 Q66 88 70 80" stroke="#5A8A4A" strokeWidth="3" strokeLinecap="round"/>
            <path d="M68 108 Q50 100 44 88 Q58 84 68 96Z" fill="#4A9448"/>
            <path d="M70 92 Q88 86 92 74 Q80 72 70 82Z" fill="#3D8840"/>
            <ellipse cx="75" cy="62" rx="18" ry="28" fill="#F4B8C8" transform="rotate(-30 75 62)" opacity=".9"/>
            <ellipse cx="75" cy="62" rx="18" ry="28" fill="#F0A8BC" transform="rotate(30 75 62)" opacity=".9"/>
            <ellipse cx="75" cy="62" rx="18" ry="28" fill="#ECA0B4" transform="rotate(90 75 62)" opacity=".85"/>
            <ellipse cx="75" cy="62" rx="18" ry="28" fill="#F4B8C8" transform="rotate(-90 75 62)" opacity=".85"/>
            <ellipse cx="75" cy="62" rx="18" ry="28" fill="#F0AEC0" transform="rotate(150 75 62)" opacity=".8"/>
            <ellipse cx="75" cy="62" rx="18" ry="28" fill="#ECA8B8" transform="rotate(-150 75 62)" opacity=".8"/>
            <ellipse cx="75" cy="62" rx="13" ry="20" fill="#F8C8D8" transform="rotate(15 75 62)"/>
            <ellipse cx="75" cy="62" rx="13" ry="20" fill="#F4C0D0" transform="rotate(-45 75 62)"/>
            <ellipse cx="75" cy="62" rx="13" ry="20" fill="#F8C8D8" transform="rotate(75 75 62)"/>
            <circle cx="75" cy="62" r="12" fill="#FDDCE8"/>
            <circle cx="75" cy="62" r="7" fill="#F9CCD8"/>
            <circle cx="74" cy="61" r="4" fill="#F0B4C4"/>
          </svg>
        </div>

        {/* Cassette */}
        <div className="cutout c-cassette">
          <svg viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg" fill="none">
            <rect x="2" y="8" width="146" height="84" rx="8" fill="#2A2420"/>
            <rect x="2" y="8" width="146" height="84" rx="8" fill="url(#cg1)"/>
            <rect x="14" y="20" width="122" height="48" rx="4" fill="#E8E0D0"/>
            <circle cx="46" cy="58" r="16" fill="#1A1614"/>
            <circle cx="46" cy="58" r="10" fill="#2A2420"/>
            <circle cx="46" cy="58" r="5" fill="#3A3430"/>
            <circle cx="104" cy="58" r="16" fill="#1A1614"/>
            <circle cx="104" cy="58" r="10" fill="#2A2420"/>
            <circle cx="104" cy="58" r="5" fill="#3A3430"/>
            <rect x="24" y="26" width="60" height="3" rx="1.5" fill="#888070"/>
            <rect x="24" y="32" width="40" height="2.5" rx="1.25" fill="#AAA090"/>
            <rect x="30" y="50" width="90" height="12" rx="3" fill="#1A1614" opacity=".7"/>
            <rect x="34" y="54" width="82" height="4" rx="2" fill="#3A3020" opacity=".8"/>
            <rect x="2" y="28" width="6" height="10" rx="2" fill="#1A1614"/>
            <rect x="142" y="28" width="6" height="10" rx="2" fill="#1A1614"/>
            <rect x="14" y="20" width="122" height="5" rx="2" fill="#C04E2A" opacity=".7"/>
            <defs>
              <linearGradient id="cg1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255,255,255,0.08)"/>
                <stop offset="100%" stopColor="rgba(0,0,0,0.2)"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Plant */}
        <div className="cutout c-plant">
          <svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path d="M28 120 Q26 148 50 150 Q74 148 72 120Z" fill="#C8B890"/>
            <rect x="22" y="112" width="56" height="10" rx="4" fill="#D4C8A0"/>
            <path d="M50 118 Q48 90 42 70" stroke="#548844" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M50 118 Q52 88 60 72" stroke="#548844" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M50 118 Q50 95 50 78" stroke="#548844" strokeWidth="2" strokeLinecap="round"/>
            <ellipse cx="38" cy="56" rx="22" ry="16" fill="#4A9448" transform="rotate(-20 38 56)"/>
            <ellipse cx="38" cy="56" rx="6" ry="4" fill="#3A8038" transform="rotate(-20 38 56)" opacity=".6"/>
            <ellipse cx="32" cy="52" rx="4" ry="3" fill="#3A8038" transform="rotate(-20 38 56)" opacity=".5"/>
            <ellipse cx="62" cy="60" rx="20" ry="14" fill="#3D8840" transform="rotate(15 62 60)"/>
            <ellipse cx="62" cy="60" rx="5" ry="3.5" fill="#2D7830" transform="rotate(15 62 60)" opacity=".6"/>
            <ellipse cx="50" cy="68" rx="18" ry="13" fill="#56A060" transform="rotate(-5 50 68)"/>
          </svg>
        </div>

        {/* Polaroid */}
        <div className="cutout c-polaroid">
          <svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg" fill="none">
            <rect x="0" y="0" width="120" height="140" rx="3" fill="white"/>
            <rect x="8" y="8" width="104" height="90" rx="2" fill="#F0E8E8"/>
            <rect x="8" y="8" width="104" height="90" rx="2" fill="url(#pg1)"/>
            <circle cx="60" cy="50" r="22" fill="rgba(240,180,196,0.7)"/>
            <circle cx="60" cy="50" r="14" fill="rgba(248,200,212,0.8)"/>
            <circle cx="60" cy="50" r="8" fill="rgba(252,220,228,0.9)"/>
            <rect x="8" y="8" width="104" height="90" rx="2" fill="url(#pg2)"/>
            <defs>
              <radialGradient id="pg1" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#F8D4DC"/>
                <stop offset="100%" stopColor="#ECC0D0"/>
              </radialGradient>
              <radialGradient id="pg2" cx="50%" cy="50%">
                <stop offset="60%" stopColor="transparent"/>
                <stop offset="100%" stopColor="rgba(0,0,0,0.06)"/>
              </radialGradient>
            </defs>
            <text x="60" y="122" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontStyle="italic" fontSize="11" fill="#9A9488">peonies</text>
          </svg>
        </div>

        {/* Vinyl */}
        <div className="cutout c-vinyl">
          <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
            <circle cx="60" cy="60" r="58" fill="#1A1410"/>
            <circle cx="60" cy="60" r="52" fill="none" stroke="#2A2418" strokeWidth="1.5"/>
            <circle cx="60" cy="60" r="46" fill="none" stroke="#2A2418" strokeWidth="1.5"/>
            <circle cx="60" cy="60" r="40" fill="none" stroke="#2A2418" strokeWidth="1.5"/>
            <circle cx="60" cy="60" r="34" fill="none" stroke="#2A2418" strokeWidth="1.5"/>
            <circle cx="60" cy="60" r="24" fill="#2E7D52"/>
            <circle cx="60" cy="60" r="20" fill="#267048"/>
            <rect x="44" y="52" width="32" height="2.5" rx="1.25" fill="rgba(255,255,255,0.6)"/>
            <rect x="48" y="57" width="24" height="2" rx="1" fill="rgba(255,255,255,0.4)"/>
            <rect x="46" y="62" width="28" height="2" rx="1" fill="rgba(255,255,255,0.35)"/>
            <circle cx="60" cy="60" r="5" fill="#1A1410"/>
            <ellipse cx="40" cy="35" rx="12" ry="6" fill="rgba(255,255,255,0.04)" transform="rotate(-30 40 35)"/>
          </svg>
        </div>

        {/* Stamp */}
        <div className="cutout c-stamp">
          <svg viewBox="0 0 90 110" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path d="M10 0 Q12 3 14 0 Q16 3 18 0 Q20 3 22 0 Q24 3 26 0 Q28 3 30 0 Q32 3 34 0 Q36 3 38 0 Q40 3 42 0 Q44 3 46 0 Q48 3 50 0 Q52 3 54 0 Q56 3 58 0 Q60 3 62 0 Q64 3 66 0 Q68 3 70 0 Q72 3 74 0 Q76 3 78 0 Q80 3 82 0 L82 0 Q85 2 82 4 Q85 6 82 8 Q85 10 82 12 Q85 14 82 16 Q85 18 82 20 Q85 22 82 24 Q85 26 82 28 Q85 30 82 32 Q85 34 82 36 Q85 38 82 40 Q85 42 82 44 Q85 46 82 48 Q85 50 82 52 Q85 54 82 56 Q85 58 82 60 Q85 62 82 64 Q85 66 82 68 Q85 70 82 72 Q85 74 82 76 Q85 78 82 80 Q85 82 82 84 Q85 86 82 88 Q85 90 82 92 Q85 94 82 96 Q85 98 82 100 Q85 102 82 104 Q85 106 82 108 L82 108 Q80 111 78 108 Q76 111 74 108 Q72 111 70 108 Q68 111 66 108 Q64 111 62 108 Q60 111 58 108 Q56 111 54 108 Q52 111 50 108 Q48 111 46 108 Q44 111 42 108 Q40 111 38 108 Q36 111 34 108 Q32 111 30 108 Q28 111 26 108 Q24 111 22 108 Q20 111 18 108 Q16 111 14 108 Q12 111 10 108 L10 108 Q7 106 10 104 Q7 102 10 100 Q7 98 10 96 Q7 94 10 92 Q7 90 10 88 Q7 86 10 84 Q7 82 10 80 Q7 78 10 76 Q7 74 10 72 Q7 70 10 68 Q7 66 10 64 Q7 62 10 60 Q7 58 10 56 Q7 54 10 52 Q7 50 10 48 Q7 46 10 44 Q7 42 10 40 Q7 38 10 36 Q7 34 10 32 Q7 30 10 28 Q7 26 10 24 Q7 22 10 20 Q7 18 10 16 Q7 14 10 12 Q7 10 10 8 Q7 6 10 4 Q7 2 10 0Z" fill="#F5F0E8"/>
            <rect x="12" y="8" width="66" height="94" rx="1" fill="#E8E0D0"/>
            <rect x="16" y="12" width="58" height="62" rx="1" fill="url(#sg1)"/>
            <circle cx="45" cy="40" r="14" fill="#E8C8D0" opacity=".7"/>
            <path d="M45 26 Q40 34 45 42 Q50 34 45 26Z" fill="#4A9448"/>
            <path d="M35 32 Q42 36 42 44 Q35 42 35 32Z" fill="#3D8840"/>
            <path d="M55 32 Q48 36 48 44 Q55 42 55 32Z" fill="#3D8840"/>
            <circle cx="45" cy="40" r="7" fill="#F4C0CC"/>
            <circle cx="45" cy="40" r="4" fill="#F0B0C0"/>
            <text x="45" y="82" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#6A665A">SAN JOSE</text>
            <text x="45" y="92" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#A8A49A">DESIGNER · CA</text>
            <defs>
              <linearGradient id="sg1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#EEE8D8"/>
                <stop offset="100%" stopColor="#E0D8C8"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* WORK */}
      <section className="work-section" id="work">
        <div className="work-label">Featured Work</div>

        <div className="proj-row">
          <div className="proj-meta">
            <div className="proj-num">01 — Cisco</div>
            <h3 className="proj-title">Security Dashboard<br/>Redesign</h3>
            <p className="proj-desc">A component-level UX rebuild of the core threat triage dashboard — designed in Figma, then shipped to production. Faster scans, fewer clicks, cleaner state.</p>
            <div className="proj-stat"><span className="stat-val">60%</span><span className="stat-desc">reduction in triage time</span></div>
            <Link href="/work/security-dashboard" className="proj-cta">Open case study <span className="cta-arrow">↗</span></Link>
          </div>
          <div className="proj-visual" style={{background:"linear-gradient(145deg,#163352,#0D2540)"}}>
            <div className="v-inner">
              <div className="mock-laptop">
                <div className="ml-bar">
                  <div className="ml-dot" style={{background:"#ff5f57"}}></div>
                  <div className="ml-dot" style={{background:"#febc2e"}}></div>
                  <div className="ml-dot" style={{background:"#28c840"}}></div>
                </div>
                <div className="ml-body">
                  <div className="ml-row"><span className="ml-badge" style={{background:"#E8EDF8",color:"#3B5BA5"}}>FINANCE</span><span className="ml-text">Firm will not accept unlimited liability provisions</span><span className="ml-date">Jan 01</span></div>
                  <div className="ml-row"><span className="ml-badge" style={{background:"#E0F4EC",color:"#2E7D52"}}>INFO SEC</span><span className="ml-text">All data must be encrypted at rest and in transit</span><span className="ml-date">Feb 02</span></div>
                  <div className="ml-row"><span className="ml-badge" style={{background:"#F6EAE4",color:"#C04E2A"}}>PRIVACY</span><span className="ml-text">Personal data processing requires prior written consent</span><span className="ml-date">Mar 03</span></div>
                  <div className="ml-row"><span className="ml-badge" style={{background:"#F0EDFC",color:"#6B5FD4"}}>AI</span><span className="ml-text">AI tools must not be used without explicit approval</span><span className="ml-date">Apr 04</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="proj-divider"></div>

        <div className="proj-row flip">
          <div className="proj-meta">
            <div className="proj-num">02 — Cisco</div>
            <h3 className="proj-title">AI Assistant<br/>Onboarding</h3>
            <p className="proj-desc">Designed the complete first-run experience for a new AI surface — from zero to launch. Research, information architecture, and interaction design.</p>
            <div className="proj-stat"><span className="stat-val">0→1</span><span className="stat-desc">shipped in Q3 2024</span></div>
            <a href="#" className="proj-cta">Open case study <span className="cta-arrow">↗</span></a>
          </div>
          <div className="proj-visual" style={{background:"linear-gradient(145deg,#C8E6DA,#A8D4C0)"}}>
            <div className="v-inner">
              <div className="mock-phone">
                <div className="ph-pill"><div className="ph-notch"></div></div>
                <div className="ph-body">
                  <div className="ph-heading">Set up AI Assist</div>
                  <div className="ph-step"><div className="ph-step-num">1</div><div className="ph-step-text">Connect your workspace</div></div>
                  <div className="ph-step"><div className="ph-step-num" style={{background:"#E8EDF8",color:"#3B5BA5"}}>2</div><div className="ph-step-text" style={{color:"var(--ink-light)"}}>Set your preferences</div></div>
                  <div className="ph-step"><div className="ph-step-num" style={{background:"#E8EDF8",color:"#3B5BA5"}}>3</div><div className="ph-step-text" style={{color:"var(--ink-light)"}}>Invite your team</div></div>
                  <div className="ph-card" style={{background:"#E8EDF8"}}><div className="ph-card-title">✦ Workspace linked</div><div className="ph-card-sub">Cisco connected · 3 tools synced</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="proj-divider"></div>

        <div className="proj-row">
          <div className="proj-meta">
            <div className="proj-num">03 — Cisco</div>
            <h3 className="proj-title">STIX/TAXII Threat<br/>Intelligence</h3>
            <p className="proj-desc">Designed the end-to-end UX for automated threat intelligence feed integration — eliminating manual IOC entry and shipping in 7 weeks.</p>
            <div className="proj-stat"><span className="stat-val">7wks</span><span className="stat-desc">zero to Early Access</span></div>
            <Link href="/work/stix-taxii" className="proj-cta">Open case study <span className="cta-arrow">↗</span></Link>
          </div>
          <div className="proj-visual" style={{background:"linear-gradient(145deg,#EDE4D4,#DDD0BC)"}}>
            <div className="v-collage">
              <div className="vc">🗺️</div><div className="vc">🌿</div>
              <div className="vc">✏️</div><div className="vc">📐</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">
        <div>
          <div className="about-label">About</div>
          <div className="about-name">Sharon.</div>
          <div className="about-chips">
            <span className="about-chip">San Jose, CA</span>
            <span className="about-chip">Open to work</span>
            <span className="about-chip">0 → 1 startup roles</span>
            <span className="about-chip">Remote-friendly</span>
          </div>
        </div>
        <div>
          <div className="about-body">
            <p>I&apos;m a Product Designer with a background in <strong>Digital Arts &amp; Interaction Design</strong> from SJSU — currently at Cisco, designing security and AI experiences people actually enjoy using.</p>
            <p>Before Cisco I worked at <strong>IBM and Adobe</strong>, and I&apos;ve spent the last <strong>9 years leading TeensReach</strong> at San Jose Public Library — a program that shaped how I think about designing for real humans, not edge cases.</p>
            <p>Outside of work I maintain a gardening Instagram and make a very decent matcha. I&apos;m looking for a <strong>startup where design shapes the product from day one</strong> — 0-to-1 problems, scrappy teams, work that matters.</p>
          </div>
          <a href="mailto:hello@sharon.design" className="about-cta">Say hello →</a>
        </div>
      </section>
    </>
  );
}
