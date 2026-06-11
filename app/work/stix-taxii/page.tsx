import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "STIX/TAXII Integration — Sharon",
};

export default function StixTaxii() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <div className="cs2-page-header">
        <Link href="/#work" className="cs2-back">
          <svg viewBox="0 0 14 14"><polyline points="9,2 4,7 9,12"/></svg>
          All work
        </Link>

        <div className="cs2-eyebrow">Cisco Secure Access · Nov – Dec 2025</div>
        <h1 className="cs2-title">STIX/TAXII Threat Intelligence Integration</h1>

        {/* THE HOOK */}
        <div className="cs2-hook">
          <p className="cs2-hook-text">
            Security teams were paying thousands for live threat intelligence — then copying every indicator into their tools <em>by hand.</em> I designed the end-to-end UX that eliminated this workflow entirely, shipped in 7 weeks, and positioned Cisco Secure Access ahead of Zscaler, Netskope, and Palo Alto Networks in onboarding experience.
          </p>
        </div>

        {/* Context strip */}
        <div className="cs2-context-strip">
          <div className="cs2-context-item">
            <span className="cs2-context-label">My Role</span>
            <span className="cs2-context-val">Sole UX Designer (end-to-end)</span>
          </div>
          <div className="cs2-context-div"/>
          <div className="cs2-context-item">
            <span className="cs2-context-label">Team</span>
            <span className="cs2-context-val">PM · Engineering · Docs</span>
          </div>
          <div className="cs2-context-div"/>
          <div className="cs2-context-item">
            <span className="cs2-context-label">Timeline</span>
            <span className="cs2-context-val">7 weeks · Nov – Dec 2025</span>
          </div>
          <div className="cs2-context-div"/>
          <div className="cs2-context-item">
            <span className="cs2-context-label">Tools</span>
            <span className="cs2-context-val">Figma · Miro</span>
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="cs2-body">
        <aside className="cs2-sidebar">
          <div className="cs2-sidebar-nav">
            <a href="#situation" className="cs2-sidenav-link">The Situation</a>
            <a href="#user" className="cs2-sidenav-link">Meet the User</a>
            <a href="#research" className="cs2-sidenav-link">Research</a>
            <a href="#journey" className="cs2-sidenav-link">Design Journey</a>
            <a href="#impact" className="cs2-sidenav-link">Impact</a>
            <a href="#learnings" className="cs2-sidenav-link">Learnings</a>
          </div>
        </aside>

        <main className="cs2-main">

          {/* ── 01 THE SITUATION ── */}
          <div className="cs2-section" id="situation">
            <div className="cs2-section-eyebrow">01 — The Situation</div>
            <h2 className="cs2-h2">Security teams were doing the robot's job</h2>
            <p className="cs2-p">
              Cisco Secure Access customers were subscribing to commercial STIX/TAXII threat intelligence feeds — live streams of malicious domains, IPs, and URLs — and then <strong>manually copying every single indicator into their security policy.</strong> Every day. For potentially thousands of IOCs.
            </p>

            {/* Before/After visual */}
            <div className="cs2-ba-grid">
              <div className="cs2-ba-card cs2-ba-before">
                <div className="cs2-ba-label">BEFORE</div>
                <div className="cs2-ba-icon">
                  <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#C04E2A" strokeWidth="1.5"/><path d="M14 20h12M20 14v12" stroke="#C04E2A" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <div className="cs2-ba-heading">Manual IOC Entry</div>
                <ul className="cs2-ba-list">
                  <li>Copy indicators from threat feed dashboard</li>
                  <li>Paste one-by-one into Destination Lists</li>
                  <li>No sync — data went stale immediately</li>
                  <li>Hours of repetitive work per admin, per week</li>
                </ul>
              </div>
              <div className="cs2-ba-card cs2-ba-after">
                <div className="cs2-ba-label">AFTER</div>
                <div className="cs2-ba-icon">
                  <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#3DBD6E" strokeWidth="1.5"/><path d="M13 20l5 5 9-10" stroke="#3DBD6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="cs2-ba-heading">Automated Feed Integration</div>
                <ul className="cs2-ba-list">
                  <li>Connect a TAXII server in a guided 3-step flow</li>
                  <li>IOCs auto-synced to Destination Lists in real time</li>
                  <li>Feed → policy rule chain visible and traceable</li>
                  <li>Limits surfaced inline — no silent failures</li>
                </ul>
              </div>
            </div>

            <div className="cs2-callout-quote">
              &ldquo;The business risk was real — customers were choosing competitors with native feed integrations. Every week without this feature was churn we couldn&apos;t afford.&rdquo;
              <span className="cs2-callout-attr">— PM requirement brief</span>
            </div>
          </div>

          {/* ── 02 MEET THE USER ── */}
          <div className="cs2-section" id="user">
            <div className="cs2-section-eyebrow">02 — Meet the User</div>
            <h2 className="cs2-h2">Kit, the IT Admin who just wants threats blocked</h2>
            <p className="cs2-p">
              Kit is an IT Admin managing organizational security posture. They&apos;re not a threat intelligence specialist — they shouldn&apos;t need to be. But every day, they&apos;re expected to speak a language built for protocol engineers.
            </p>

            {/* Persona card */}
            <div className="cs2-persona">
              <div className="cs2-persona-avatar">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="32" fill="#E8EEF5"/>
                  <circle cx="32" cy="26" r="10" fill="#B8C8DC"/>
                  <path d="M10 56c0-11 10-18 22-18s22 7 22 18" fill="#B8C8DC"/>
                </svg>
              </div>
              <div className="cs2-persona-body">
                <div className="cs2-persona-name">Kit — IT Admin</div>
                <div className="cs2-persona-quote">&ldquo;I know I need to block these threats. I just need to know the feed is actually working.&rdquo;</div>
                <div className="cs2-persona-goals">
                  <div className="cs2-persona-col">
                    <div className="cs2-persona-col-label">Goals</div>
                    <ul className="cs2-persona-list">
                      <li>Automate threat enforcement without manual upkeep</li>
                      <li>Trust that live feeds are actually being enforced</li>
                      <li>Stay within org limits without surprises</li>
                    </ul>
                  </div>
                  <div className="cs2-persona-col">
                    <div className="cs2-persona-col-label">Frustrations</div>
                    <ul className="cs2-persona-list">
                      <li>STIX/TAXII vocabulary is opaque and intimidating</li>
                      <li>No visibility into feed health or policy connection</li>
                      <li>Silent failures mean security gaps they don&apos;t know about</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── 03 RESEARCH ── */}
          <div className="cs2-section" id="research">
            <div className="cs2-section-eyebrow">03 — Research &amp; Discovery</div>
            <h2 className="cs2-h2">Three pain points driving every decision</h2>
            <p className="cs2-p">
              Research drew from customer request logs, PM-gathered requirements, and competitive analysis across Zscaler, Netskope, and Palo Alto Networks. Three themes emerged consistently:
            </p>

            <div className="cs2-num-cards">
              <div className="cs2-num-card">
                <div className="cs2-num-card-header">
                  <span className="cs2-num-card-n">1</span>
                  <span className="cs2-num-card-title">NO AUTOMATION</span>
                </div>
                <p className="cs2-num-card-body">Zero path to pipe live TAXII feeds into Secure Access. Admins spent hours on work that should have been instant — and the data was stale the moment they finished.</p>
              </div>
              <div className="cs2-num-card">
                <div className="cs2-num-card-header">
                  <span className="cs2-num-card-n">2</span>
                  <span className="cs2-num-card-title">VOCABULARY GAP</span>
                </div>
                <p className="cs2-num-card-body">Admins had no frame of reference for collection IDs, discovery URLs, or STIX bundles. Protocol language created confusion before a single field was configured.</p>
              </div>
              <div className="cs2-num-card">
                <div className="cs2-num-card-header">
                  <span className="cs2-num-card-n">3</span>
                  <span className="cs2-num-card-title">INVISIBLE LIMITS</span>
                </div>
                <p className="cs2-num-card-body">A 250k-destination cap and 5-feed alpha limit existed with no UX surface. If either was hit silently, enforcement would stop — and Kit would have no idea why.</p>
              </div>
            </div>

            {/* Competitive analysis placeholder */}
            <div className="cs2-placeholder">
              <div className="cs2-placeholder-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
              </div>
              <div className="cs2-placeholder-label">INSERT: Competitive analysis matrix</div>
              <div className="cs2-placeholder-desc">Side-by-side comparison of Zscaler, Netskope, Palo Alto, and Secure Access — showing feed setup UX, status visibility, and limit handling for each competitor.</div>
            </div>
          </div>

          {/* ── 04 DESIGN JOURNEY ── */}
          <div className="cs2-section" id="journey">
            <div className="cs2-section-eyebrow">04 — Design Journey</div>
            <h2 className="cs2-h2">From protocol to product in 7 weeks</h2>

            {/* Process flow */}
            <div className="cs2-flow-diagram">
              <p className="cs2-flow-label">Sprint rhythm — repeated weekly</p>
              <svg viewBox="0 0 660 72" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block'}}>
                <rect x="0" y="16" width="112" height="40" rx="20" fill="#2C2B28"/>
                <text x="56" y="41" textAnchor="middle" fontSize="11" fontWeight="600" fill="#F5F3EE" fontFamily="Inter,sans-serif">Understand</text>
                <line x1="112" y1="36" x2="138" y2="36" stroke="#C8C4BC" strokeWidth="1.5"/>
                <polygon points="138,32 145,36 138,40" fill="#C8C4BC"/>
                <rect x="145" y="16" width="112" height="40" rx="20" fill="#2C2B28"/>
                <text x="201" y="41" textAnchor="middle" fontSize="11" fontWeight="600" fill="#F5F3EE" fontFamily="Inter,sans-serif">Wireframe</text>
                <line x1="257" y1="36" x2="283" y2="36" stroke="#C8C4BC" strokeWidth="1.5"/>
                <polygon points="283,32 290,36 283,40" fill="#C8C4BC"/>
                <rect x="290" y="16" width="112" height="40" rx="20" fill="#2C2B28"/>
                <text x="346" y="41" textAnchor="middle" fontSize="11" fontWeight="600" fill="#F5F3EE" fontFamily="Inter,sans-serif">Design Review</text>
                <line x1="402" y1="36" x2="428" y2="36" stroke="#C8C4BC" strokeWidth="1.5"/>
                <polygon points="428,32 435,36 428,40" fill="#C8C4BC"/>
                <rect x="435" y="16" width="112" height="40" rx="20" fill="#2C2B28"/>
                <text x="491" y="41" textAnchor="middle" fontSize="11" fontWeight="600" fill="#F5F3EE" fontFamily="Inter,sans-serif">Eng Handoff</text>
                <line x1="547" y1="36" x2="573" y2="36" stroke="#3DBD6E" strokeWidth="1.5"/>
                <polygon points="573,32 580,36 573,40" fill="#3DBD6E"/>
                <rect x="580" y="16" width="80" height="40" rx="20" fill="#3DBD6E"/>
                <text x="620" y="41" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff" fontFamily="Inter,sans-serif">Ship ✓</text>
              </svg>
            </div>

            {/* AHA moment 1 */}
            <div className="cs2-aha">
              <div className="cs2-aha-marker">💡 Aha moment</div>
              <h3 className="cs2-aha-heading">The mental model gap was the real problem</h3>
              <p className="cs2-p">Before sketching a single screen, I mapped the complete mental model: TAXII server → collection → Destination List → Policy Rule. This wasn&apos;t just an IA exercise — it revealed that Kit&apos;s core confusion wasn&apos;t the UI. <strong>It was that nobody had ever shown them how a threat feed actually becomes an enforced block.</strong> This diagram became a persistent &ldquo;how this works&rdquo; explainer embedded directly into the setup flow.</p>
            </div>

            {/* Flow diagram */}
            <div className="cs2-flow-diagram">
              <p className="cs2-flow-label">The mental model I designed around</p>
              <svg viewBox="0 0 660 80" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block'}}>
                <rect x="0" y="10" width="130" height="52" rx="10" fill="#E8EEF5" stroke="#B8C8DC" strokeWidth="1"/>
                <text x="65" y="33" textAnchor="middle" fontSize="11" fontWeight="700" fill="#2C2B28" fontFamily="Inter,sans-serif">TAXII Server</text>
                <text x="65" y="50" textAnchor="middle" fontSize="9" fill="#66645F" fontFamily="Inter,sans-serif">Discovery URL · Collections</text>
                <line x1="130" y1="36" x2="155" y2="36" stroke="#C8C4BC" strokeWidth="1.5"/>
                <polygon points="155,32 162,36 155,40" fill="#C8C4BC"/>
                <text x="143" y="27" textAnchor="middle" fontSize="8" fill="#A09D97" fontFamily="Inter,sans-serif">auto-poll</text>
                <rect x="162" y="10" width="130" height="52" rx="10" fill="#EEF2FA" stroke="#B0BEE0" strokeWidth="1"/>
                <text x="227" y="33" textAnchor="middle" fontSize="11" fontWeight="700" fill="#2C2B28" fontFamily="Inter,sans-serif">Feed Config</text>
                <text x="227" y="50" textAnchor="middle" fontSize="9" fill="#3B5BA5" fontFamily="Inter,sans-serif">Guided setup · 3 of 5 feeds ●</text>
                <line x1="292" y1="36" x2="317" y2="36" stroke="#C8C4BC" strokeWidth="1.5"/>
                <polygon points="317,32 324,36 317,40" fill="#C8C4BC"/>
                <text x="305" y="27" textAnchor="middle" fontSize="8" fill="#A09D97" fontFamily="Inter,sans-serif">auto-create</text>
                <rect x="324" y="10" width="140" height="52" rx="10" fill="#EAF3EE" stroke="#A8D0B8" strokeWidth="1"/>
                <text x="394" y="33" textAnchor="middle" fontSize="11" fontWeight="700" fill="#2C2B28" fontFamily="Inter,sans-serif">Destination List</text>
                <text x="394" y="50" textAnchor="middle" fontSize="9" fill="#4A8E6C" fontFamily="Inter,sans-serif">Live IOCs · 250k cap visible ●</text>
                <line x1="464" y1="36" x2="489" y2="36" stroke="#C8C4BC" strokeWidth="1.5"/>
                <polygon points="489,32 496,36 489,40" fill="#C8C4BC"/>
                <text x="477" y="27" textAnchor="middle" fontSize="8" fill="#A09D97" fontFamily="Inter,sans-serif">attach</text>
                <rect x="496" y="10" width="100" height="52" rx="10" fill="#F3EEF8" stroke="#C8B4E0" strokeWidth="1"/>
                <text x="546" y="33" textAnchor="middle" fontSize="11" fontWeight="700" fill="#2C2B28" fontFamily="Inter,sans-serif">Policy Rule</text>
                <text x="546" y="50" textAnchor="middle" fontSize="9" fill="#66645F" fontFamily="Inter,sans-serif">Block / Allow</text>
                <line x1="596" y1="36" x2="621" y2="36" stroke="#3DBD6E" strokeWidth="1.5"/>
                <polygon points="621,32 628,36 621,40" fill="#3DBD6E"/>
                <rect x="628" y="18" width="32" height="36" rx="8" fill="#3DBD6E"/>
                <text x="644" y="41" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff" fontFamily="Inter,sans-serif">✓</text>
              </svg>
            </div>

            {/* Wireframe placeholder */}
            <div className="cs2-placeholder" style={{marginTop:28}}>
              <div className="cs2-placeholder-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              </div>
              <div className="cs2-placeholder-label">INSERT: Early wireframes — feed config flow</div>
              <div className="cs2-placeholder-desc">Low-fidelity wireframes showing the step 1 (discovery URL) → step 2 (collection selection) → step 3 (auth credentials) flow. Annotate how raw UUIDs were replaced with human-readable collection names.</div>
            </div>

            {/* AHA moment 2 */}
            <div className="cs2-aha" style={{marginTop:40}}>
              <div className="cs2-aha-marker">💡 Aha moment</div>
              <h3 className="cs2-aha-heading">Limits aren&apos;t constraints — they&apos;re features</h3>
              <p className="cs2-p">The 5-feed alpha cap and 250k destination limit felt like engineering footnotes. But when I modeled what silent failure looked like — enforcement just stops, Kit doesn&apos;t know why — I realized these limits had to be <strong>promoted to first-class UI elements.</strong> The inline &ldquo;3 of 5 feeds used&rdquo; counter and the per-list capacity bar weren&apos;t just good UX. They were the only thing standing between Kit and an unexplained security gap.</p>
            </div>

            {/* Key design decisions */}
            <div className="cs2-decision-cards" style={{marginTop:24}}>
              <div className="cs2-decision-card">
                <div className="cs2-decision-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                </div>
                <div className="cs2-decision-card-title">Guided config flow</div>
                <div className="cs2-decision-card-body">Step-confirmable form instead of a raw config screen. Collections shown as human-readable names, not raw UUIDs.</div>
              </div>
              <div className="cs2-decision-card">
                <div className="cs2-decision-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
                </div>
                <div className="cs2-decision-card-title">Traceable chain</div>
                <div className="cs2-decision-card-body">Feed → Destination List → Policy Rule made visible at every step so Kit always knew what was actually being enforced.</div>
              </div>
              <div className="cs2-decision-card">
                <div className="cs2-decision-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </div>
                <div className="cs2-decision-card-title">Proactive limits</div>
                <div className="cs2-decision-card-body">&ldquo;3 of 5 feeds used&rdquo; inline from step one. Per-list capacity bar with 80% warning threshold — proactive, not punitive.</div>
              </div>
              <div className="cs2-decision-card">
                <div className="cs2-decision-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div className="cs2-decision-card-title">Granular status</div>
                <div className="cs2-decision-card-body">Post-launch, "Integrated" masked per-feed failures. Feb 2026 iteration shipped per-feed health indicators — rebuilding trust through clarity.</div>
              </div>
            </div>

            {/* Final design placeholder */}
            <div className="cs2-placeholder" style={{marginTop:28}}>
              <div className="cs2-placeholder-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              </div>
              <div className="cs2-placeholder-label">INSERT: Final hi-fi screens — 3–4 key screens</div>
              <div className="cs2-placeholder-desc">Recommended: (1) Feed list overview with status indicators and feed counter, (2) Step 1 of config flow with discovery URL field, (3) Collection selection screen with human-readable names, (4) Feed detail showing Destination List auto-generated and limit bar.</div>
            </div>
          </div>

          {/* ── 05 IMPACT ── */}
          <div className="cs2-section" id="impact">
            <div className="cs2-section-eyebrow">05 — Impact &amp; Results</div>
            <h2 className="cs2-h2">Shipped on schedule. Benchmarked #1.</h2>

            <div className="cs2-ref-stats" style={{marginBottom:32}}>
              <div className="cs2-ref-stat">
                <div className="cs2-ref-stat-num">7 wks</div>
                <div className="cs2-ref-stat-label">Zero to Early Access, on schedule</div>
              </div>
              <div className="cs2-ref-stat">
                <div className="cs2-ref-stat-num">#1</div>
                <div className="cs2-ref-stat-label">Onboarding UX vs. Zscaler, Netskope &amp; Palo Alto</div>
              </div>
              <div className="cs2-ref-stat">
                <div className="cs2-ref-stat-num">v2</div>
                <div className="cs2-ref-stat-label">Post-launch status redesign shipped Feb 2026</div>
              </div>
            </div>

            <p className="cs2-p">The integration shipped in Early Access in December 2025. Cisco Secure Access surpassed competitors in onboarding UX for this feature type — a benchmark that directly supported competitive positioning and customer retention.</p>

            {/* Placeholder for missing metrics */}
            <div className="cs2-placeholder cs2-placeholder-warm">
              <div className="cs2-placeholder-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
              </div>
              <div className="cs2-placeholder-label">ADD: Quantitative metrics when available</div>
              <div className="cs2-placeholder-desc">To strengthen this section, add: (1) Setup time reduction vs. manual workflow — e.g. &ldquo;reduced feed onboarding from X hours to Y minutes,&rdquo; (2) EA adoption rate — number of orgs who enabled feeds in the first 30 days, (3) Support ticket volume before/after Feb 2026 status redesign.</div>
            </div>
          </div>

          {/* ── 06 LEARNINGS ── */}
          <div className="cs2-section" id="learnings">
            <div className="cs2-section-eyebrow">06 — Key Learnings</div>
            <h2 className="cs2-h2">What I&apos;d do differently — and what I&apos;d repeat</h2>

            <div className="cs2-num-cards">
              <div className="cs2-num-card">
                <div className="cs2-num-card-header">
                  <span className="cs2-num-card-n">1</span>
                  <span className="cs2-num-card-title">AUDIT LIMITS EARLY</span>
                </div>
                <p className="cs2-num-card-body">I discovered the 5-feed and 250k constraints mid-wireframe. Next time: a constraint audit at the start of every engagement. Backend limits that aren&apos;t in the UX are design debt, not engineering details.</p>
              </div>
              <div className="cs2-num-card">
                <div className="cs2-num-card-header">
                  <span className="cs2-num-card-n">2</span>
                  <span className="cs2-num-card-title">STATUS = TRUST</span>
                </div>
                <p className="cs2-num-card-body">The &ldquo;Integrated&rdquo; label felt complete. Users told us it wasn&apos;t. When stakes are operational, a misleading status erodes system confidence faster than any UI bug. Granularity isn&apos;t complexity — it&apos;s respect.</p>
              </div>
              <div className="cs2-num-card">
                <div className="cs2-num-card-header">
                  <span className="cs2-num-card-n">3</span>
                  <span className="cs2-num-card-title">TEACH WHILE CONFIGURING</span>
                </div>
                <p className="cs2-num-card-body">New capabilities require the UI to build vocabulary, not just expose settings. The setup flow that taught Kit what a TAXII collection maps to was as important as the collection field itself.</p>
              </div>
            </div>
          </div>

        </main>
      </div>
    </>
  );
}
