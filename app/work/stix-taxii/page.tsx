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
              {n:'02', label:'Research & Discovery', href:'#problem'},
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
            I designed the end-to-end UX for STIX/TAXII threat intelligence feed integration in Cisco Secure Access — a brand new capability that lets IT admins connect commercial, government, and open-source threat intelligence directly to their security policies. This feature shipped in early access and positioned Secure Access <strong>ahead of competitors like Zscaler and Netskope</strong> in onboarding experience.
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
          <div className="cs3-section-label">CONTEXT & USER PROBLEM</div>
          <h2 className="cs3-statement">Customers had the threat intel. They just had no way to use it.</h2>
          <p className="cs3-p">
            Customers are already subscribed to commercial, governmental, and open-source threat intelligence feeds. These feeds are served by TAXII servers and delivered in the STIX format — containing domains, URLs, and IPs classified as <strong>indicators of compromise (IOCs)</strong>: known-bad signals that security teams use to block malicious traffic.
          </p>
          <p className="cs3-p">
            But Secure Access had no direct path to ingest these feeds. Customers couldn&apos;t connect their threat intelligence sources to their security policies natively — creating a gap between the protection they were paying for and the posture they needed to maintain.
          </p>
          <div className="cs3-quote-block">
            <p>&ldquo;Customers are asking why they can&apos;t bring their own threat intel into Secure Access. Competitors already support this. We need to close this gap before it becomes a bigger retention problem.&rdquo;</p>
            <span>— PM requirement brief</span>
          </div>
        </section>

        {/* ── 02 RESEARCH & DISCOVERY ── */}
        <section className="cs3-section" id="problem">
          <div className="cs3-section-label">RESEARCH & DISCOVERY</div>
          <h2 className="cs3-statement">The admin shouldn&apos;t need a PhD in threat intel to do their job.</h2>
          <p className="cs3-p">
            Research was driven by customer request logs, PM-gathered requirements, and competitive analysis of Zscaler, Netskope, and Palo Alto Networks. Our primary user — &ldquo;Kit,&rdquo; an IT Admin responsible for managing organizational security posture — wasn&apos;t a threat intelligence specialist. But the problem kept landing in their lap.
          </p>

          <div className="cs3-findings">
            <div className="cs3-finding">
              <div className="cs3-finding-n">01</div>
              <div className="cs3-finding-body">
                <div className="cs3-finding-title">No automation path</div>
                <p className="cs3-finding-desc">Customers had live threat feeds but no direct way to pipe them into Secure Access. Every IOC had to be manually entered — a gap that grew more painful as feed volumes scaled.</p>
              </div>
            </div>
            <div className="cs3-finding">
              <div className="cs3-finding-n">02</div>
              <div className="cs3-finding-body">
                <div className="cs3-finding-title">High cognitive load</div>
                <p className="cs3-finding-desc">TAXII, STIX, collections, IOCs — the technical vocabulary of threat intelligence is dense. These concepts needed to be surfaced in a way that was easy to understand and navigate, without dumbing down the functionality.</p>
              </div>
            </div>
            <div className="cs3-finding">
              <div className="cs3-finding-n">03</div>
              <div className="cs3-finding-body">
                <div className="cs3-finding-title">Invisible limits</div>
                <p className="cs3-finding-desc">A 250k destination limit across all lists created real risk of silent enforcement failures. Admins needed awareness — not alarm — so they could act before feeds stopped working.</p>
              </div>
            </div>
          </div>

          <div className="cs3-problem-box">
            <div className="cs3-problem-label">PROBLEM STATEMENT</div>
            <p>How might we enable IT admins to seamlessly integrate their threat intelligence feeds into Secure Access — so their IOCs are automatically enforced as policy blocks, keeping end-users protected without manual effort?</p>
          </div>
        </section>

        {/* ── 03 SOLUTION ── */}
        <section className="cs3-section" id="solution">
          <div className="cs3-section-label">SOLUTION</div>
          <h2 className="cs3-statement">A feed integration that&hellip;</h2>

          <div className="cs3-solution-cards">
            <div className="cs3-solution-card">
              <div className="cs3-solution-visual cs3-solution-visual--light">
                <img src="/Status.png" alt="Status indicators" style={{height:'100%',width:'auto',display:'block'}}/>
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
          <h2 className="cs3-statement">From understanding the problem to shipping the solution.</h2>
          <p className="cs3-p">
            My process followed a cycle of Understand → Design Reviews → Handoff → Eng Dev → iterate for the next phase. Each decision below was made during ideation to reduce friction, surface the right information, and keep admins in control without overwhelming them.
          </p>

          <div className="cs2-decision-cards" style={{marginTop:32}}>
            <div className="cs2-decision-card">
              <div className="cs2-decision-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></div>
              <div className="cs2-decision-card-title">Configuration flow first</div>
              <div className="cs2-decision-card-body">I prioritized designing the feed setup — discovery URL, collection ID, auth credentials — as a guided, step-confirmable form rather than a raw config screen. Each step confirmed before moving forward reduced errors and removed the need for protocol knowledge.</div>
            </div>
            <div className="cs2-decision-card">
              <div className="cs2-decision-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg></div>
              <div className="cs2-decision-card-title">Destination List as the bridge</div>
              <div className="cs2-decision-card-body">Using existing Destination Lists as containers for IOCs was the key architectural decision. I designed the feed → list → policy rule chain to be visible and traceable in the UI, so admins always knew what was actually enforced — and why.</div>
            </div>
            <div className="cs2-decision-card">
              <div className="cs2-decision-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
              <div className="cs2-decision-card-title">Limit-aware design</div>
              <div className="cs2-decision-card-body">Rather than hiding the 250k destination cap, I designed inline awareness cues — a capacity bar, proactive warnings at 80% — so admins could take action before enforcement silently stopped. The goal was awareness, not alarm.</div>
            </div>
            <div className="cs2-decision-card">
              <div className="cs2-decision-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
              <div className="cs2-decision-card-title">Status at a glance — then iterated</div>
              <div className="cs2-decision-card-body">Early wireframes surfaced per-instance status inline. A post-launch review in Feb 2026 flagged that the global &ldquo;Integrated&rdquo; label was masking individual feed failures. I iterated to add per-feed health indicators — rebuilding trust through granularity.</div>
            </div>
          </div>


          <div className="cs2-flow-diagram" style={{marginTop:40}}>
            <p className="cs2-flow-label">The mental model I designed around</p>
            <svg viewBox="0 0 700 90" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block'}}>
              <rect x="0" y="14" width="140" height="56" rx="10" fill="#fff" stroke="#D8D4CC" strokeWidth="1.5"/>
              <text x="70" y="38" textAnchor="middle" fontSize="12" fontWeight="700" fill="#2C2B28" fontFamily="Hanken Grotesk,sans-serif">TAXII Server</text>
              <text x="70" y="55" textAnchor="middle" fontSize="10" fill="#A09D97" fontFamily="Hanken Grotesk,sans-serif">Discovery URL</text>
              <line x1="140" y1="42" x2="168" y2="42" stroke="#C8C4BC" strokeWidth="1.5"/>
              <polygon points="168,38 175,42 168,46" fill="#C8C4BC"/>
              <text x="155" y="34" textAnchor="middle" fontSize="8" fill="#C8C4BC" fontFamily="Hanken Grotesk,sans-serif">polls</text>
              <rect x="175" y="14" width="140" height="56" rx="10" fill="#fff" stroke="#D8D4CC" strokeWidth="1.5"/>
              <text x="245" y="38" textAnchor="middle" fontSize="12" fontWeight="700" fill="#2C2B28" fontFamily="Hanken Grotesk,sans-serif">Feed Config</text>
              <text x="245" y="55" textAnchor="middle" fontSize="10" fill="#A09D97" fontFamily="Hanken Grotesk,sans-serif">Guided 3-step setup</text>
              <line x1="315" y1="42" x2="343" y2="42" stroke="#C8C4BC" strokeWidth="1.5"/>
              <polygon points="343,38 350,42 343,46" fill="#C8C4BC"/>
              <text x="332" y="34" textAnchor="middle" fontSize="8" fill="#C8C4BC" fontFamily="Hanken Grotesk,sans-serif">syncs</text>
              <rect x="350" y="14" width="150" height="56" rx="10" fill="#fff" stroke="#D8D4CC" strokeWidth="1.5"/>
              <text x="425" y="38" textAnchor="middle" fontSize="12" fontWeight="700" fill="#2C2B28" fontFamily="Hanken Grotesk,sans-serif">Destination List</text>
              <text x="425" y="55" textAnchor="middle" fontSize="10" fill="#A09D97" fontFamily="Hanken Grotesk,sans-serif">Live IOCs · cap visible</text>
              <line x1="500" y1="42" x2="528" y2="42" stroke="#C8C4BC" strokeWidth="1.5"/>
              <polygon points="528,38 535,42 528,46" fill="#C8C4BC"/>
              <text x="517" y="34" textAnchor="middle" fontSize="8" fill="#C8C4BC" fontFamily="Hanken Grotesk,sans-serif">attaches</text>
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
