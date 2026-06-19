import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "STIX/TAXII Integration — Sharon",
};

export default function StixTaxii() {
  return (
    <div className="cs3-layout">

      {/* ── TOP SPLIT: sidebar + hero side by side ── */}
      <div className="cs3-top">

        {/* LEFT: Sidebar */}
        <aside className="cs3-sidebar">
          <Link href="/#work" className="cs3-back">← Home</Link>

          <div className="cs3-toc">
            <div className="cs3-toc-label">TABLE OF CONTENTS</div>
            {[
              {n:'01', label:'Context', href:'#context'},
              {n:'02', label:'User problem', href:'#problem'},
              {n:'03', label:'Solution', href:'#solution'},
              {n:'04', label:'Design decisions', href:'#decisions'},
              {n:'05', label:'Final design', href:'#final'},
              {n:'06', label:'Impact', href:'#impact'},
            ].map(item => (
              <a key={item.href} href={item.href} className="cs3-toc-item">
                <span className="cs3-toc-n">{item.n}.</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          <a href="#top" className="cs3-toc-bottom">↑ Back to top</a>
        </aside>

        {/* RIGHT: Hero image */}
        <div className="cs3-hero">
          <img src="/mock-stix.png" alt="Cisco Secure Access — Threat Intelligence Feeds" className="cs3-hero-img"/>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="cs3-content" id="top">

        {/* Above fold */}
        <div className="cs3-above-fold">
          <div className="cs3-tags">
            <span className="cs3-tag">CISCO SECURE ACCESS</span>
            <span className="cs3-tag">SHIPPED</span>
          </div>

          <h1 className="cs3-title">STIX/TAXII Threat Intelligence Integration</h1>
          <p className="cs3-desc">
            Designed end-to-end UX for automating threat intelligence feed ingestion — eliminating manual IOC entry
            and positioning Cisco Secure Access <strong>ahead of Zscaler, Netskope, and Palo Alto Networks</strong> in onboarding experience.
            Shipped in 7 weeks.
          </p>

          <div className="cs3-meta-strip">
            <div className="cs3-meta-item">
              <div className="cs3-meta-label">ROLE</div>
              <div className="cs3-meta-val">Sole Product Designer</div>
            </div>
            <div className="cs3-meta-item">
              <div className="cs3-meta-label">TEAM</div>
              <div className="cs3-meta-val">1 PM · 3 Engineers · 1 Designer (me!)</div>
            </div>
            <div className="cs3-meta-item">
              <div className="cs3-meta-label">TIMELINE</div>
              <div className="cs3-meta-val">Nov – Dec 2025 (7 weeks)</div>
            </div>
            <div className="cs3-meta-item">
              <div className="cs3-meta-label">SKILLS</div>
              <div className="cs3-meta-val">0→1 Design · Systems Thinking · Figma · Miro</div>
            </div>
          </div>
        </div>

        {/* ── 01 CONTEXT ── */}
        <section className="cs3-section" id="context">
          <div className="cs3-section-label">CONTEXT</div>
          <h2 className="cs3-statement">Security teams paying for live threat intel — then copying it by hand.</h2>
          <p className="cs3-p">
            Cisco Secure Access customers subscribe to commercial STIX/TAXII threat feeds — live streams of malicious domains, IPs, and URLs. But there was no integration path: every indicator had to be <strong>manually copied into security policy, every day, for potentially thousands of IOCs.</strong> The data was stale the moment the admin finished.
          </p>
          <p className="cs3-p">
            Competitors had already solved this. Every week without a native integration was a retention risk.
          </p>
          <div className="cs3-quote-block">
            <p>&ldquo;The business risk was real — customers were choosing competitors with native feed integrations. Every week without this feature was churn we couldn&apos;t afford.&rdquo;</p>
            <span>— PM requirement brief</span>
          </div>
        </section>

        {/* ── 02 USER PROBLEM ── */}
        <section className="cs3-section" id="problem">
          <div className="cs3-section-label">USER PROBLEM</div>
          <h2 className="cs3-statement">It&apos;s difficult and time-consuming to keep threat intelligence in sync with security policy.</h2>
          <p className="cs3-p">
            IT admins aren&apos;t threat intelligence specialists — they shouldn&apos;t need to be. But without automation, they were expected to manually maintain hundreds to thousands of indicators, understand opaque TAXII protocol vocabulary, and somehow know when their data went stale.
          </p>

          <div className="cs2-ba-grid">
            <div className="cs2-ba-card cs2-ba-before">
              <div className="cs2-ba-label">BEFORE</div>
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
              <div className="cs2-ba-heading">Automated Feed Integration</div>
              <ul className="cs2-ba-list">
                <li>Connect a TAXII server in a guided 3-step flow</li>
                <li>IOCs auto-synced to Destination Lists in real time</li>
                <li>Feed → policy rule chain visible and traceable</li>
                <li>Limits surfaced inline — no silent failures</li>
              </ul>
            </div>
          </div>

          <div className="cs3-problem-box">
            <div className="cs3-problem-label">PROBLEM STATEMENT</div>
            <p>How might we allow users to efficiently connect and trust their threat intelligence feeds — without needing to understand TAXII protocol internals?</p>
          </div>
        </section>

        {/* ── 03 SOLUTION ── */}
        <section className="cs3-section" id="solution">
          <div className="cs3-section-label">SOLUTION</div>
          <h2 className="cs3-statement">A feed integration that&hellip;</h2>

          <div className="cs3-solution-cards">
            <div className="cs3-solution-card">
              <div className="cs3-solution-visual">
                <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%'}}>
                  <rect width="200" height="120" rx="8" fill="#1E2329"/>
                  <rect x="12" y="12" width="176" height="28" rx="6" fill="#2C333D"/>
                  <circle cx="22" cy="26" r="5" fill="#C04E2A" opacity=".8"/>
                  <text x="32" y="30" fontSize="8" fontWeight="600" fill="#E8EEF5" fontFamily="Hanken Grotesk,sans-serif">AlienVault OTX</text>
                  <rect x="150" y="19" width="32" height="14" rx="7" fill="rgba(61,189,110,.2)"/>
                  <text x="166" y="29" fontSize="7" fill="#3DBD6E" textAnchor="middle" fontFamily="Hanken Grotesk,sans-serif">Active</text>
                  <rect x="12" y="48" width="176" height="28" rx="6" fill="#2C333D"/>
                  <circle cx="22" cy="62" r="5" fill="#FEBC2E" opacity=".8"/>
                  <text x="32" y="66" fontSize="8" fontWeight="600" fill="#E8EEF5" fontFamily="Hanken Grotesk,sans-serif">MISP Feed</text>
                  <rect x="145" y="55" width="37" height="14" rx="7" fill="rgba(254,188,46,.15)"/>
                  <text x="163" y="65" fontSize="7" fill="#FEBC2E" textAnchor="middle" fontFamily="Hanken Grotesk,sans-serif">Syncing</text>
                  <rect x="12" y="84" width="176" height="28" rx="6" fill="#2C333D"/>
                  <circle cx="22" cy="98" r="5" fill="#3DBD6E" opacity=".8"/>
                  <text x="32" y="102" fontSize="8" fontWeight="600" fill="#E8EEF5" fontFamily="Hanken Grotesk,sans-serif">Cisco Talos</text>
                  <rect x="150" y="91" width="32" height="14" rx="7" fill="rgba(61,189,110,.2)"/>
                  <text x="166" y="101" fontSize="7" fill="#3DBD6E" textAnchor="middle" fontFamily="Hanken Grotesk,sans-serif">Active</text>
                </svg>
              </div>
              <div className="cs3-solution-card-label">Live feed status at a glance</div>
              <p className="cs3-solution-card-desc">No digging through logs to know if your intel is actually working.</p>
            </div>

            <div className="cs3-solution-card">
              <div className="cs3-solution-visual">
                <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%'}}>
                  <rect width="200" height="120" rx="8" fill="#1E2329"/>
                  <text x="100" y="22" fontSize="8" fontWeight="600" fill="#A09D97" textAnchor="middle" letterSpacing="2" fontFamily="Hanken Grotesk,sans-serif">STEP 1 OF 3</text>
                  <rect x="12" y="30" width="176" height="14" rx="3" fill="#2C333D"/>
                  <text x="20" y="41" fontSize="7" fill="#66645F" fontFamily="Hanken Grotesk,sans-serif">Discovery URL</text>
                  <rect x="12" y="50" width="176" height="22" rx="5" fill="#2C333D" stroke="#3B5BA5" strokeWidth="1"/>
                  <text x="20" y="64" fontSize="8" fill="#E8EEF5" fontFamily="Hanken Grotesk,sans-serif">https://otx.alienvault.com/taxii/</text>
                  <text x="20" y="88" fontSize="7" fill="#66645F" fontFamily="Hanken Grotesk,sans-serif">Collections found</text>
                  <rect x="12" y="94" width="80" height="16" rx="4" fill="#2C333D"/>
                  <text x="20" y="105" fontSize="7" fill="#3DBD6E" fontFamily="Hanken Grotesk,sans-serif">✓ 4 collections</text>
                  <rect x="130" y="94" width="58" height="16" rx="8" fill="#3B5BA5"/>
                  <text x="159" y="105" fontSize="7" fontWeight="600" fill="#fff" textAnchor="middle" fontFamily="Hanken Grotesk,sans-serif">Next →</text>
                </svg>
              </div>
              <div className="cs3-solution-card-label">Guided setup — no protocol knowledge needed</div>
              <p className="cs3-solution-card-desc">3-step flow auto-discovers collections. Human-readable names replace raw UUIDs throughout.</p>
            </div>

            <div className="cs3-solution-card">
              <div className="cs3-solution-visual">
                <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%'}}>
                  <rect width="200" height="120" rx="8" fill="#1E2329"/>
                  <text x="12" y="22" fontSize="7" fill="#A09D97" letterSpacing="1.5" fontFamily="Hanken Grotesk,sans-serif">FEED CAPACITY</text>
                  <rect x="12" y="30" width="176" height="8" rx="4" fill="#2C333D"/>
                  <rect x="12" y="30" width="105" height="8" rx="4" fill="#3B5BA5"/>
                  <text x="12" y="50" fontSize="7" fill="#66645F" fontFamily="Hanken Grotesk,sans-serif">3 of 5 feeds used</text>
                  <text x="188" y="50" fontSize="7" fill="#3B5BA5" textAnchor="end" fontFamily="Hanken Grotesk,sans-serif">2 remaining</text>
                  <text x="12" y="72" fontSize="7" fill="#A09D97" letterSpacing="1.5" fontFamily="Hanken Grotesk,sans-serif">DESTINATION LIST</text>
                  <rect x="12" y="80" width="176" height="8" rx="4" fill="#2C333D"/>
                  <rect x="12" y="80" width="148" height="8" rx="4" fill="#FEBC2E" opacity=".7"/>
                  <text x="12" y="100" fontSize="7" fill="#FEBC2E" fontFamily="Hanken Grotesk,sans-serif">⚠ 211k / 250k destinations</text>
                  <text x="188" y="100" fontSize="7" fill="#FEBC2E" textAnchor="end" fontFamily="Hanken Grotesk,sans-serif">84%</text>
                </svg>
              </div>
              <div className="cs3-solution-card-label">Limits surfaced inline — no silent failures</div>
              <p className="cs3-solution-card-desc">Feed and destination caps are first-class UI elements with proactive warnings before enforcement stops.</p>
            </div>
          </div>
        </section>

        {/* ── 04 DESIGN DECISIONS ── */}
        <section className="cs3-section" id="decisions">
          <div className="cs3-section-label">DESIGN DECISIONS</div>
          <h2 className="cs3-statement">I needed to figure out how to make TAXII feel like a product, not a protocol.</h2>
          <p className="cs3-p">
            Before sketching a screen, I mapped the complete mental model: TAXII server → collection → Destination List → Policy Rule. This revealed the core confusion — nobody had ever shown Kit how a threat feed actually becomes an enforced block.
          </p>

          <div className="cs2-flow-diagram">
            <p className="cs2-flow-label">The mental model I designed around</p>
            <svg viewBox="0 0 700 90" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block'}}>
              {/* Box 1 */}
              <rect x="0" y="14" width="140" height="56" rx="10" fill="#fff" stroke="#D8D4CC" strokeWidth="1.5"/>
              <text x="70" y="38" textAnchor="middle" fontSize="12" fontWeight="700" fill="#2C2B28" fontFamily="Hanken Grotesk,sans-serif">TAXII Server</text>
              <text x="70" y="55" textAnchor="middle" fontSize="10" fill="#A09D97" fontFamily="Hanken Grotesk,sans-serif">Discovery URL</text>
              {/* Arrow 1 */}
              <line x1="140" y1="42" x2="168" y2="42" stroke="#C8C4BC" strokeWidth="1.5"/>
              <polygon points="168,38 175,42 168,46" fill="#C8C4BC"/>
              <text x="155" y="34" textAnchor="middle" fontSize="8" fill="#C8C4BC" fontFamily="Hanken Grotesk,sans-serif">polls</text>
              {/* Box 2 */}
              <rect x="175" y="14" width="140" height="56" rx="10" fill="#fff" stroke="#D8D4CC" strokeWidth="1.5"/>
              <text x="245" y="38" textAnchor="middle" fontSize="12" fontWeight="700" fill="#2C2B28" fontFamily="Hanken Grotesk,sans-serif">Feed Config</text>
              <text x="245" y="55" textAnchor="middle" fontSize="10" fill="#A09D97" fontFamily="Hanken Grotesk,sans-serif">Guided 3-step setup</text>
              {/* Arrow 2 */}
              <line x1="315" y1="42" x2="343" y2="42" stroke="#C8C4BC" strokeWidth="1.5"/>
              <polygon points="343,38 350,42 343,46" fill="#C8C4BC"/>
              <text x="332" y="34" textAnchor="middle" fontSize="8" fill="#C8C4BC" fontFamily="Hanken Grotesk,sans-serif">syncs</text>
              {/* Box 3 */}
              <rect x="350" y="14" width="150" height="56" rx="10" fill="#fff" stroke="#D8D4CC" strokeWidth="1.5"/>
              <text x="425" y="38" textAnchor="middle" fontSize="12" fontWeight="700" fill="#2C2B28" fontFamily="Hanken Grotesk,sans-serif">Destination List</text>
              <text x="425" y="55" textAnchor="middle" fontSize="10" fill="#A09D97" fontFamily="Hanken Grotesk,sans-serif">Live IOCs · cap visible</text>
              {/* Arrow 3 */}
              <line x1="500" y1="42" x2="528" y2="42" stroke="#C8C4BC" strokeWidth="1.5"/>
              <polygon points="528,38 535,42 528,46" fill="#C8C4BC"/>
              <text x="517" y="34" textAnchor="middle" fontSize="8" fill="#C8C4BC" fontFamily="Hanken Grotesk,sans-serif">attaches</text>
              {/* Box 4 */}
              <rect x="535" y="14" width="130" height="56" rx="10" fill="#2C2B28" stroke="#2C2B28" strokeWidth="1.5"/>
              <text x="600" y="38" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff" fontFamily="Hanken Grotesk,sans-serif">Policy Rule</text>
              <text x="600" y="55" textAnchor="middle" fontSize="10" fill="#A09D97" fontFamily="Hanken Grotesk,sans-serif">Block / Allow</text>
            </svg>
          </div>

          <div className="cs2-placeholder" style={{marginTop:28}}>
            <div className="cs2-placeholder-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
            </div>
            <div className="cs2-placeholder-label">INSERT: Wireframes — feed config flow</div>
            <div className="cs2-placeholder-desc">Step 1 (discovery URL) → Step 2 (collection selection) → Step 3 (auth).</div>
          </div>

          <div className="cs2-decision-cards" style={{marginTop:32}}>
            <div className="cs2-decision-card">
              <div className="cs2-decision-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></div>
              <div className="cs2-decision-card-title">Guided config flow</div>
              <div className="cs2-decision-card-body">Step-confirmable form instead of a raw config screen. Collections shown as human-readable names, not raw UUIDs.</div>
            </div>
            <div className="cs2-decision-card">
              <div className="cs2-decision-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg></div>
              <div className="cs2-decision-card-title">Traceable chain</div>
              <div className="cs2-decision-card-body">Feed → Destination List → Policy Rule made visible at every step so Kit always knew what was actually enforced.</div>
            </div>
            <div className="cs2-decision-card">
              <div className="cs2-decision-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
              <div className="cs2-decision-card-title">Proactive limits</div>
              <div className="cs2-decision-card-body">&ldquo;3 of 5 feeds used&rdquo; from step one. Per-list capacity bar with 80% warning — proactive, not punitive.</div>
            </div>
            <div className="cs2-decision-card">
              <div className="cs2-decision-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
              <div className="cs2-decision-card-title">Granular status</div>
              <div className="cs2-decision-card-body">Post-launch, &ldquo;Integrated&rdquo; masked per-feed failures. Feb 2026 shipped per-feed health indicators — rebuilding trust through clarity.</div>
            </div>
          </div>
        </section>

        {/* ── 05 FINAL DESIGN ── */}
        <section className="cs3-section" id="final">
          <div className="cs3-section-label">FINAL DESIGN</div>
          <h2 className="cs3-statement">The shipped experience.</h2>
          <p className="cs3-p">After weekly design reviews and engineering alignment, the integration shipped to Early Access in December 2025.</p>
          <div className="cs2-placeholder" style={{marginTop:28}}>
            <div className="cs2-placeholder-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></div>
            <div className="cs2-placeholder-label">INSERT: Final hi-fi screens (3–4 key screens)</div>
            <div className="cs2-placeholder-desc">Feed list overview, Step 1 config flow, collection selection, feed detail with limit bar.</div>
          </div>
        </section>

        {/* ── 06 IMPACT ── */}
        <section className="cs3-section" id="impact">
          <div className="cs3-section-label">IMPACT</div>
          <h2 className="cs3-statement">Shipped on schedule. Benchmarked #1.</h2>
          <div className="cs2-ref-stats" style={{marginBottom:32}}>
            <div className="cs2-ref-stat"><div className="cs2-ref-stat-num">7 wks</div><div className="cs2-ref-stat-label">Zero to Early Access, on schedule</div></div>
            <div className="cs2-ref-stat"><div className="cs2-ref-stat-num">#1</div><div className="cs2-ref-stat-label">Onboarding UX vs. Zscaler, Netskope &amp; Palo Alto</div></div>
            <div className="cs2-ref-stat"><div className="cs2-ref-stat-num">v2</div><div className="cs2-ref-stat-label">Post-launch status redesign shipped Feb 2026</div></div>
          </div>
          <div className="cs3-section-label" style={{marginTop:48}}>KEY LEARNINGS</div>
          <div className="cs2-num-cards" style={{marginTop:16}}>
            <div className="cs2-num-card">
              <div className="cs2-num-card-header"><span className="cs2-num-card-n">1</span><span className="cs2-num-card-title">AUDIT LIMITS EARLY</span></div>
              <p className="cs2-num-card-body">I discovered the 5-feed and 250k constraints mid-wireframe. Next time: a constraint audit at the start. Backend limits not in the UX are design debt.</p>
            </div>
            <div className="cs2-num-card">
              <div className="cs2-num-card-header"><span className="cs2-num-card-n">2</span><span className="cs2-num-card-title">STATUS = TRUST</span></div>
              <p className="cs2-num-card-body">When stakes are operational, a misleading status erodes system confidence faster than any UI bug. Granularity isn&apos;t complexity — it&apos;s respect.</p>
            </div>
            <div className="cs2-num-card">
              <div className="cs2-num-card-header"><span className="cs2-num-card-n">3</span><span className="cs2-num-card-title">TEACH WHILE CONFIGURING</span></div>
              <p className="cs2-num-card-body">New capabilities require the UI to build vocabulary, not just expose settings. Teaching Kit what a TAXII collection maps to was as important as the field itself.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
