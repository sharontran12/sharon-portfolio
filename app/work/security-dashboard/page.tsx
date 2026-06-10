import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Dashboard Redesign — Sharon",
};

export default function SecurityDashboard() {
  return (
    <>
      {/* HERO */}
      <div className="cs-hero">
        <Link href="/#work" className="cs-back">
          <svg viewBox="0 0 14 14"><polyline points="9,2 4,7 9,12"/></svg>
          All work
        </Link>

        <div className="cs-label">01 — Cisco · 2024</div>
        <h1 className="cs-title">Security Dashboard<br/>Redesign</h1>
        <p className="cs-oneliner">A component-level UX rebuild of Cisco&rsquo;s core threat triage dashboard — designed in Figma, shipped to production. Faster scans, fewer clicks, cleaner state.</p>

        <div className="cs-meta">
          <div className="cs-meta-item">
            <div className="meta-label">Role</div>
            <div className="meta-val">Lead Product Designer</div>
          </div>
          <div className="cs-meta-item">
            <div className="meta-label">Timeline</div>
            <div className="meta-val">Jan – Jun 2024</div>
          </div>
          <div className="cs-meta-item">
            <div className="meta-label">Platform</div>
            <div className="meta-val">Web · Enterprise</div>
          </div>
          <div className="cs-meta-item">
            <div className="meta-label">Team</div>
            <div className="meta-val">2 designers, 4 engineers, 1 PM</div>
          </div>
        </div>

        <div className="cs-stats">
          <div className="cs-stat"><span className="cs-stat-val">60%</span><span className="cs-stat-desc">reduction in triage time</span></div>
          <div className="cs-stat"><span className="cs-stat-val">11→1</span><span className="cs-stat-desc">tables consolidated</span></div>
          <div className="cs-stat"><span className="cs-stat-val">92%</span><span className="cs-stat-desc">task success rate (testing)</span></div>
          <div className="cs-stat"><span className="cs-stat-val">Q2</span><span className="cs-stat-desc">shipped on schedule</span></div>
        </div>
      </div>

      {/* HERO VISUAL */}
      <div style={{maxWidth:"1100px",margin:"0 auto",padding:"0 64px"}}>
        <div className="cs-hero-visual">
          <div className="cs-hero-visual-inner">
            <div className="mock-bar">
              <div className="md" style={{background:"#ff5f57"}}></div>
              <div className="md" style={{background:"#febc2e"}}></div>
              <div className="md" style={{background:"#28c840"}}></div>
              <span style={{marginLeft:"10px",fontFamily:"IBM Plex Mono,monospace",fontSize:"11px",color:"#888"}}>Cisco SecureX — Threat Dashboard</span>
            </div>
            <div className="mock-table-body">
              <div className="mock-tr"><span className="mock-badge" style={{background:"#E8EDF8",color:"#3B5BA5"}}>FINANCE</span><span className="mock-td">Firm will not accept unlimited liability provisions</span><span style={{fontFamily:"IBM Plex Mono,monospace",fontSize:"9px",color:"#A8A49A"}}>Acme Corp</span><span className="mock-date" style={{marginLeft:"16px"}}>Jan 01, 2025</span></div>
              <div className="mock-tr"><span className="mock-badge" style={{background:"#E0F4EC",color:"#2E7D52"}}>INFO SEC</span><span className="mock-td">All data must be encrypted at rest and in transit using AES-256</span><span style={{fontFamily:"IBM Plex Mono,monospace",fontSize:"9px",color:"#A8A49A"}}>GlobalTech</span><span className="mock-date" style={{marginLeft:"16px"}}>Feb 02, 2025</span></div>
              <div className="mock-tr"><span className="mock-badge" style={{background:"#F6EAE4",color:"#C04E2A"}}>PRIVACY</span><span className="mock-td">Personal data processing requires prior written consent</span><span style={{fontFamily:"IBM Plex Mono,monospace",fontSize:"9px",color:"#A8A49A"}}>Member Partners</span><span className="mock-date" style={{marginLeft:"16px"}}>Mar 03, 2025</span></div>
              <div className="mock-tr"><span className="mock-badge" style={{background:"#F0EDFC",color:"#6B5FD4"}}>AI</span><span className="mock-td">AI tools must not be used without explicit client approval</span><span style={{fontFamily:"IBM Plex Mono,monospace",fontSize:"9px",color:"#A8A49A"}}>DataFlow Inc</span><span className="mock-date" style={{marginLeft:"16px"}}>Apr 04, 2025</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* CASE STUDY BODY */}
      <div className="cs-body">
        {/* 01 Context */}
        <div className="cs-section">
          <div className="cs-section-label">01 — Context</div>
          <h2 className="cs-section-title">The problem with how security teams worked</h2>
          <p className="cs-p">Cisco&rsquo;s enterprise security teams were managing threat triage across <strong>11 separate data tables</strong> — each with its own filter logic, column layout, and state management. Analysts were context-switching constantly, losing track of priority alerts and duplicating review work.</p>
          <p className="cs-p">The core UX problem: the dashboard had grown organically across two years of feature additions. No one had stepped back to ask whether the whole thing made sense as a system.</p>
          <div className="cs-quote">
            <div className="cs-quote-text">&ldquo;I spend the first 20 minutes of every shift just figuring out what I already looked at yesterday.&rdquo;</div>
            <div className="cs-quote-attr">— Security Analyst, Cisco Enterprise, Research Interview</div>
          </div>
        </div>

        {/* 02 Research */}
        <div className="cs-section">
          <div className="cs-section-label">02 — Research</div>
          <h2 className="cs-section-title">Understanding where analysts got stuck</h2>
          <p className="cs-p">I ran <strong>8 contextual inquiry sessions</strong> with security analysts across three enterprise accounts, observing real triage workflows. Key methods: think-aloud sessions, workflow mapping, and a competitive audit of 4 similar tools.</p>
          <div className="cs-findings">
            <div className="cs-finding">
              <div className="finding-icon">🔍</div>
              <div className="finding-title">Context loss</div>
              <div className="finding-body">Analysts couldn&rsquo;t resume work mid-shift — no persistent filter state, no visual indication of &ldquo;reviewed&rdquo; items.</div>
            </div>
            <div className="cs-finding">
              <div className="finding-icon">📋</div>
              <div className="finding-title">Table fragmentation</div>
              <div className="finding-body">11 separate tables meant switching tabs to compare data. No unified view of risk across categories.</div>
            </div>
            <div className="cs-finding">
              <div className="finding-icon">⚡</div>
              <div className="finding-title">False urgency</div>
              <div className="finding-body">Critical and low-risk alerts looked identical. Visual hierarchy was flat — everything felt equally important.</div>
            </div>
            <div className="cs-finding">
              <div className="finding-icon">🔁</div>
              <div className="finding-title">Duplicate review</div>
              <div className="finding-body">Without team-shared state, multiple analysts would review the same alert independently, wasting 15–30 min/shift.</div>
            </div>
          </div>
        </div>

        {/* 03 Process */}
        <div className="cs-section">
          <div className="cs-section-label">03 — Process</div>
          <h2 className="cs-section-title">From 11 tables to one unified system</h2>
          <div className="cs-steps">
            <div className="cs-step">
              <div className="step-num">01</div>
              <div>
                <div className="step-title">Information architecture audit</div>
                <div className="step-body">Mapped every column across all 11 tables, categorized by frequency of use, and identified which data was truly redundant vs. context-specific. Found that 70% of columns appeared in 3+ tables.</div>
              </div>
            </div>
            <div className="cs-step">
              <div className="step-num">02</div>
              <div>
                <div className="step-title">Concept exploration</div>
                <div className="step-body">Generated 4 structural concepts ranging from tabbed consolidation to a single adaptive table with dynamic columns. Tested rough prototypes with 3 analysts before committing to a direction.</div>
              </div>
            </div>
            <div className="cs-step">
              <div className="step-num">03</div>
              <div>
                <div className="step-title">Iterative design in Figma</div>
                <div className="step-body">Built a component library for the table system — 40+ variants covering all states: empty, loading, filtered, bulk-select, inline review. Weekly design reviews with the engineering team.</div>
              </div>
            </div>
            <div className="cs-step">
              <div className="step-num">04</div>
              <div>
                <div className="step-title">Usability testing</div>
                <div className="step-body">3 rounds of moderated testing with 5 analysts each. Key tasks: locate a critical alert, bulk-dismiss low-risk items, resume work after a break. Iterated between each round.</div>
              </div>
            </div>
          </div>
          <div className="vis-placeholder" style={{height:"280px"}}>
            Add Figma exploration screenshots here
          </div>
          <div className="cs-visual-label">Early concept explorations — 4 structural approaches</div>
        </div>
      </div>

      {/* DARK BREAK — key design decisions */}
      <div className="cs-dark-break">
        <div className="cs-dark-inner">
          <div style={{fontFamily:"IBM Plex Mono,monospace",fontSize:"11px",letterSpacing:".2em",textTransform:"uppercase" as const,color:"rgba(244,241,235,.26)",display:"flex",alignItems:"center",gap:"14px",marginBottom:"28px"}}>
            04 — Solution
            <span style={{flex:1,height:"1px",background:"rgba(244,241,235,.1)",display:"block"}}></span>
          </div>
          <h2 style={{fontSize:"clamp(20px,2.2vw,28px)",fontWeight:700,letterSpacing:"-.025em",color:"rgba(244,241,235,.9)",marginBottom:"18px",lineHeight:1.2}}>Three decisions that made it work</h2>
          <div style={{display:"flex",flexDirection:"column" as const,gap:0}}>
            <div style={{display:"grid",gridTemplateColumns:"48px 1fr",gap:"20px",padding:"28px 0",borderBottom:"1px solid rgba(244,241,235,.07)"}}>
              <div style={{fontFamily:"IBM Plex Mono,monospace",fontSize:"11px",color:"rgba(244,241,235,.28)",paddingTop:"3px",letterSpacing:".08em"}}>01</div>
              <div>
                <div style={{fontSize:"15px",fontWeight:600,color:"rgba(244,241,235,.9)",marginBottom:"8px"}}>Unified adaptive table</div>
                <div style={{fontSize:"14px",color:"rgba(244,241,235,.55)",lineHeight:1.75}}>One table with a persistent category filter rail replaced all 11. The column set adapts based on selected category, so analysts never see irrelevant data.</div>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"48px 1fr",gap:"20px",padding:"28px 0",borderBottom:"1px solid rgba(244,241,235,.07)"}}>
              <div style={{fontFamily:"IBM Plex Mono,monospace",fontSize:"11px",color:"rgba(244,241,235,.28)",paddingTop:"3px",letterSpacing:".08em"}}>02</div>
              <div>
                <div style={{fontSize:"15px",fontWeight:600,color:"rgba(244,241,235,.9)",marginBottom:"8px"}}>Severity-first visual hierarchy</div>
                <div style={{fontSize:"14px",color:"rgba(244,241,235,.55)",lineHeight:1.75}}>Critical alerts now have a distinct visual treatment — left border accent, elevated row background, bold severity badge. Low-risk items are visually quieter, reducing false urgency.</div>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"48px 1fr",gap:"20px",padding:"28px 0"}}>
              <div style={{fontFamily:"IBM Plex Mono,monospace",fontSize:"11px",color:"rgba(244,241,235,.28)",paddingTop:"3px",letterSpacing:".08em"}}>03</div>
              <div>
                <div style={{fontSize:"15px",fontWeight:600,color:"rgba(244,241,235,.9)",marginBottom:"8px"}}>Shared review state</div>
                <div style={{fontSize:"14px",color:"rgba(244,241,235,.55)",lineHeight:1.75}}>Reviewed alerts now persist across sessions and team members. A &ldquo;reviewed by&rdquo; indicator shows who actioned each item, eliminating duplicate work across shifts.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BODY CONTINUED */}
      <div className="cs-body">
        {/* Before / After */}
        <div className="cs-section" style={{marginTop:"80px"}}>
          <div className="cs-section-label">05 — Before &amp; After</div>
          <h2 className="cs-section-title">What changed for analysts</h2>
          <div className="cs-compare">
            <div className="compare-card before">
              <div className="compare-label">Before</div>
              <div className="compare-body">
                <ul>
                  <li>11 separate tables, manual tab switching</li>
                  <li>No persistent filter or review state</li>
                  <li>Flat visual hierarchy — all alerts look the same</li>
                  <li>No team-shared status — duplicate reviews common</li>
                  <li>~20 min onboarding per shift to resume context</li>
                </ul>
              </div>
            </div>
            <div className="compare-card after">
              <div className="compare-label">After</div>
              <div className="compare-body">
                <ul>
                  <li>1 unified table with adaptive columns</li>
                  <li>Persistent filter and review state across sessions</li>
                  <li>Severity-first hierarchy — critical items surface immediately</li>
                  <li>Shared review state visible to whole team</li>
                  <li>&lt;3 min to resume context from previous shift</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="vis-placeholder" style={{height:"320px",marginTop:"32px"}}>
            Add final design screenshots here
          </div>
          <div className="cs-visual-label">Final design — unified dashboard with severity hierarchy</div>
        </div>

        {/* Outcomes */}
        <div className="cs-section">
          <div className="cs-section-label">06 — Outcomes</div>
          <h2 className="cs-section-title">Results after launch</h2>
          <p className="cs-p">The redesign shipped in Q2 2024 on schedule. We measured outcomes 8 weeks post-launch through a combination of analytics instrumentation and a follow-up survey with 24 analysts.</p>
          <div className="cs-outcomes">
            <div className="cs-outcome"><div className="outcome-val terra">60%</div><div className="outcome-label">Reduction in average triage time per shift</div></div>
            <div className="cs-outcome"><div className="outcome-val">92%</div><div className="outcome-label">Task success rate in post-launch usability testing</div></div>
            <div className="cs-outcome"><div className="outcome-val sage">11→1</div><div className="outcome-label">Tables consolidated into one unified system</div></div>
            <div className="cs-outcome"><div className="outcome-val">4.4/5</div><div className="outcome-label">Analyst satisfaction score (post-launch survey)</div></div>
          </div>
        </div>

        {/* Learnings */}
        <div className="cs-section">
          <div className="cs-section-label">07 — Learnings</div>
          <h2 className="cs-section-title">What I&rsquo;d do differently</h2>
          <div className="cs-learnings">
            <div className="learning-eyebrow">Reflections</div>
            <div className="learning-item">
              <div className="learning-num">01</div>
              <div className="learning-text"><strong>Involve engineers in IA decisions earlier.</strong> The adaptive column system required more state logic than anticipated. Earlier collaboration would have shaped a simpler implementation without losing the UX benefit.</div>
            </div>
            <div className="learning-item">
              <div className="learning-num">02</div>
              <div className="learning-text"><strong>Test with night-shift analysts specifically.</strong> Most of our research was done with day-shift teams. Post-launch feedback revealed night shift had different context-switching patterns we hadn&rsquo;t accounted for.</div>
            </div>
            <div className="learning-item">
              <div className="learning-num">03</div>
              <div className="learning-text"><strong>Severity hierarchy needs a shared language.</strong> &ldquo;Critical&rdquo; meant different things to different teams. Defining severity levels as a cross-functional decision — not a design decision — would have reduced post-launch confusion.</div>
            </div>
          </div>
        </div>
      </div>

      {/* NEXT PROJECT */}
      <div className="cs-next">
        <div>
          <div className="next-label">Next project</div>
          <div className="next-title">STIX/TAXII Threat Intelligence</div>
        </div>
        <Link href="/work/stix-taxii" className="next-cta">Open case study <span className="next-arrow">↗</span></Link>
      </div>
    </>
  );
}
