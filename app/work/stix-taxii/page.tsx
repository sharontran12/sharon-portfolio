import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "STIX/TAXII Integration — Sharon",
};

export default function StixTaxii() {
  return (
    <>
      <div className="page">
        <Link href="/#work" className="back">
          <svg viewBox="0 0 14 14"><polyline points="9,2 4,7 9,12"/></svg>
          All work
        </Link>

        <div className="nda-pill">🔒 <strong>NDA project</strong> — visuals abstracted, details generalized</div>

        <div className="hero-eyebrow">Cisco Secure Access &nbsp;·&nbsp; Nov – Dec 2025</div>
        <h1 className="hero-title">From Manual to Automated: Designing STIX/TAXII Threat Intelligence</h1>
        <p className="hero-sub">Security teams were paying thousands for live threat intelligence — then copying it by hand. I designed the end-to-end UX that eliminated that workflow entirely, shipping in 7 weeks.</p>

        <div className="meta-row">
          <div className="meta-col">
            <div className="meta-label">Role</div>
            <div className="meta-val">UX Designer</div>
            <div className="meta-sub">Sole designer</div>
          </div>
          <div className="meta-col">
            <div className="meta-label">Responsibilities</div>
            <div className="meta-val">End-to-end UX</div>
            <div className="meta-sub">Research · IA · Wireframes · Handoff</div>
          </div>
          <div className="meta-col">
            <div className="meta-label">Collaborators</div>
            <div className="meta-val">PM · Engineering · Docs</div>
            <div className="meta-sub">Cisco Secure Access team</div>
          </div>
          <div className="meta-col">
            <div className="meta-label">Timeline</div>
            <div className="meta-val">7 weeks</div>
            <div className="meta-sub">Nov 7 – Dec 23, 2025</div>
          </div>
        </div>
      </div>

      {/* COVER — full bleed */}
      <div className="cover-wrap">
        <svg viewBox="0 0 800 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="40" width="160" height="80" rx="10" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="1.5"/>
          <text x="100" y="76" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10" fill="rgba(255,255,255,.4)" letterSpacing="2">TAXII SERVER</text>
          <text x="100" y="96" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9" fill="rgba(255,255,255,.22)">feed source</text>
          <line x1="180" y1="80" x2="268" y2="80" stroke="rgba(255,255,255,.2)" strokeWidth="1.5" strokeDasharray="5,4"/>
          <polygon points="266,75 278,80 266,85" fill="rgba(255,255,255,.2)"/>
          <rect x="278" y="40" width="160" height="80" rx="10" fill="none" stroke="rgba(59,91,165,.85)" strokeWidth="1.5"/>
          <text x="358" y="76" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10" fill="rgba(255,255,255,.4)" letterSpacing="2">CONFIG UI</text>
          <text x="358" y="96" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9" fill="rgba(255,255,255,.22)">designed by Sharon</text>
          <line x1="438" y1="80" x2="526" y2="80" stroke="rgba(255,255,255,.2)" strokeWidth="1.5" strokeDasharray="5,4"/>
          <polygon points="524,75 536,80 524,85" fill="rgba(255,255,255,.2)"/>
          <rect x="536" y="40" width="160" height="80" rx="10" fill="none" stroke="rgba(74,142,108,.85)" strokeWidth="1.5"/>
          <text x="616" y="76" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10" fill="rgba(255,255,255,.4)" letterSpacing="2">DEST. LIST</text>
          <text x="616" y="96" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9" fill="rgba(255,255,255,.22)">→ policy enforcement</text>
        </svg>
        <div className="cover-nda">
          <span style={{fontSize:"20px"}}>🔒</span>
          <div className="cover-nda-text">Screens omitted — NDA</div>
        </div>
      </div>

      <div className="page">
        {/* OVERVIEW */}
        <div className="section" style={{borderTop:"none",marginTop:"72px"}}>
          <div className="section-tag">Overview</div>
          <h2 className="section-h2">Empowering IT admins with automated threat intelligence</h2>
          <p>I designed the <strong>end-to-end UX for STIX/TAXII threat intelligence feed integration</strong> in Cisco Secure Access — a brand-new capability that lets IT admins connect commercial, government, and open-source threat intelligence directly to their security policies. This feature shipped in Early Access and positioned Secure Access ahead of competitors like Zscaler and Netskope in onboarding experience.</p>
          <ul className="goals">
            <li><span>1.</span><span>Automate the connection between threat intelligence feeds and security policy enforcement — eliminating manual IOC entry.</span></li>
            <li><span>2.</span><span>Translate deep protocol complexity (STIX 2.1, TAXII 2.1) into a workflow any IT admin can navigate without a security engineering background.</span></li>
            <li><span>3.</span><span>Design around real system constraints — a 250k destination cap and a 5-feed alpha limit — as first-class UX elements, not footnotes.</span></li>
          </ul>
          <div className="problem-block">
            <div className="problem-tag">Problem to solve</div>
            <div className="problem-statement">Security teams were paying for premium threat intelligence subscriptions and manually copying indicator data into Secure Access. There was no automated path — and competitors were building one.</div>
          </div>
        </div>

        {/* RESEARCH */}
        <div className="section">
          <div className="section-tag">Research</div>
          <h2 className="section-h2">Gathering insights</h2>
          <p>Research was driven by <strong>customer request logs, PM-gathered requirements</strong>, and a competitive analysis of Zscaler, Netskope, and Palo Alto Networks. The primary user was &ldquo;Kit&rdquo; — an IT admin managing organizational security posture who needed to act on threat intelligence without deep protocol knowledge.</p>
          <p>I expected the design challenge to be about technical flow. What I discovered was a vocabulary problem: Kit didn&rsquo;t know what a TAXII collection was, how it mapped to Secure Access, or what would happen after a feed was connected. <strong>This wasn&rsquo;t a configuration problem — it was an education problem.</strong></p>
          <div className="h3">Emerging themes</div>
          <div className="themes">
            <div className="theme">
              <div className="theme-num">01</div>
              <div className="theme-title">Vocabulary gap</div>
              <div className="theme-body">&ldquo;Collection ID,&rdquo; &ldquo;discovery URL,&rdquo; &ldquo;STIX observable&rdquo; — jargon to most admins. The interface needed to translate, not expose, the underlying protocol.</div>
            </div>
            <div className="theme">
              <div className="theme-num">02</div>
              <div className="theme-title">Invisible connection</div>
              <div className="theme-body">Admins couldn&rsquo;t see how a feed connected to their actual security policy. The path from &ldquo;add feed&rdquo; to &ldquo;threat is blocked&rdquo; was completely opaque.</div>
            </div>
            <div className="theme">
              <div className="theme-num">03</div>
              <div className="theme-title">Silent constraints</div>
              <div className="theme-body">A 250k destination hard cap and 5-feed alpha limit existed in the backend. No design existed around either. If hit, enforcement would stop silently.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Research placeholder — full bleed */}
      <div className="img-block">
        <div className="img-block-label">Research synthesis</div>
        <div className="img-placeholder">
          <div className="img-placeholder-icon">📋</div>
          <div className="img-placeholder-main">Add: User persona &ldquo;Kit&rdquo; · Pain point synthesis map · Competitive audit</div>
          <div className="img-placeholder-sub">Anonymized customer quotes from request logs · Zscaler / Netskope / Palo Alto comparison</div>
          <div className="img-nda-tag">No NDA risk — research artifacts only</div>
        </div>
      </div>

      <div className="page">
        <div className="hmw">
          <div className="hmw-tag">How might we</div>
          <div className="hmw-text">How might we automate threat intelligence ingestion while making the feed → enforcement path so clear that any IT admin can set it up <em>and trust it?</em></div>
        </div>

        {/* IDEATION */}
        <div className="section">
          <div className="section-tag">Ideation</div>
          <h2 className="section-h2">Multiple iterations</h2>
          <p>To meet the 7-week timeline I prioritized a tight weekly loop: understand → wireframe → design review with engineering → update → repeat. Two constraints forced the hardest design decisions of the project.</p>
          <div className="h3">Constraint 01 — The status trap</div>
          <p>My first instinct was a single &ldquo;Integrated&rdquo; status label — visually simple, tested well in concept, and shipped. Then real users flagged that &ldquo;Integrated&rdquo; was meaningless when one of their five feeds was silently failing due to a credentials expiry. <strong>I had optimized for visual simplicity at the cost of actionable truth.</strong> The February 2026 iteration added per-feed health indicators that distinguished connection failures from content issues.</p>
          <div className="h3">Constraint 02 — The 250k limit</div>
          <p>Engineering flagged a 250,000 destination cap per org. If an admin added three high-volume feeds and hit the cap, policy enforcement would stop silently. My early wireframes ignored this entirely. Once I understood the stakes, <strong>I redesigned the capacity system</strong> with inline progress indicators, a warning threshold at 80%, and a direct action path to resolve before enforcement broke.</p>
        </div>
      </div>

      {/* Wireframe placeholder */}
      <div className="img-block">
        <div className="img-block-label">Wireframes &amp; iteration</div>
        <div className="img-placeholder" style={{minHeight:"300px"}}>
          <div className="img-placeholder-icon">🖊</div>
          <div className="img-placeholder-main">Add: Early wireframes · Iteration comparisons · Status design evolution</div>
          <div className="img-placeholder-sub">Mental model diagram · 250k limit indicator · Per-feed status states</div>
          <div className="img-nda-tag">Blur or crop content to satisfy NDA — layout and hierarchy are safe to show</div>
        </div>
      </div>

      <div className="page">
        <div className="steps">
          <div className="step">
            <div className="step-n">01</div>
            <div>
              <div className="step-title">Mental model before screens</div>
              <div className="step-body">Before any UI, I mapped the flow: TAXII server → collection → Destination List → Policy Rule. This became a persistent &ldquo;how this works&rdquo; diagram visible during setup — not buried in documentation pages.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-n">02</div>
            <div>
              <div className="step-title">Guided configuration, not a raw form</div>
              <div className="step-body">Setup became a step-confirmable guided process. Discovery URL first, then collection selection (rendered as human-readable names, not IDs), then auth credentials. No raw JSON or protocol strings ever surfaced to the user.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-n">03</div>
            <div>
              <div className="step-title">Making the bridge visible</div>
              <div className="step-body">The most critical decision: making feed → Destination List → Policy Rule explicit and traceable. Each feed auto-creates a named list. The UI shows exactly which policies enforce IOCs from each feed, and you can navigate directly to add or remove rules.</div>
            </div>
          </div>
          <div className="step">
            <div className="step-n">04</div>
            <div>
              <div className="step-title">Engineering reviews as design input</div>
              <div className="step-body">Weekly reviews with engineering weren&rsquo;t handoff checkpoints — they were where the most consequential constraints surfaced. The 250k cap and 5-feed alpha limit both came from these sessions and became first-class design elements.</div>
            </div>
          </div>
        </div>

        {/* USER TESTING */}
        <div className="section">
          <div className="section-tag">User Testing</div>
          <h2 className="section-h2">Testing the solution</h2>
          <p>Design reviews and iterative testing with PM and engineering stakeholders validated the core flow and surfaced two significant issues with the status design. Post-launch feedback in February 2026 confirmed the need for per-feed granularity.</p>
          <div className="h3">Key learnings</div>
          <div className="ia-grid">
            <div className="ia-item">
              <div className="ia-label">Finding</div>
              <div className="ia-title">Single &ldquo;Integrated&rdquo; status</div>
              <div className="ia-insight">Users couldn&rsquo;t diagnose which feed had a problem — the label masked per-feed health entirely.</div>
              <div className="ia-action"><strong>Action:</strong> Redesigned to per-feed granular status: Connected, Syncing, Credentials issue, Content warning.</div>
            </div>
            <div className="ia-item">
              <div className="ia-label">Finding</div>
              <div className="ia-title">Capacity limit invisibility</div>
              <div className="ia-insight">Admins had no awareness of how close they were to the 250k destination cap until enforcement silently stopped.</div>
              <div className="ia-action"><strong>Action:</strong> Added inline progress bar per list, warning threshold at 80%, and a direct clean-up action path.</div>
            </div>
            <div className="ia-item">
              <div className="ia-label">Finding</div>
              <div className="ia-title">Alpha limit surprise</div>
              <div className="ia-insight">The 5-feed alpha constraint was unknown to users until they tried to add a sixth feed and hit a generic error.</div>
              <div className="ia-action"><strong>Action:</strong> Surfaced the limit inline with a usage counter (&ldquo;3 of 5 feeds used&rdquo;) from the first setup step.</div>
            </div>
            <div className="ia-item">
              <div className="ia-label">Finding</div>
              <div className="ia-title">Collection ID confusion</div>
              <div className="ia-insight">Users couldn&rsquo;t identify which collection to select when presented with raw UUIDs from the TAXII server response.</div>
              <div className="ia-action"><strong>Action:</strong> Resolved collections to human-readable display names with the UUID available on hover for power users.</div>
            </div>
          </div>
        </div>

        {/* FINAL DESIGN */}
        <div className="section">
          <div className="section-tag">Final Design</div>
          <h2 className="section-h2">The MVP</h2>
          <p>The shipped design landed in Early Access in late December 2025 — on schedule. Five features formed the complete integration experience.</p>
          <div className="features">
            <div className="feature">
              <div className="feature-n">01</div>
              <div>
                <div className="feature-title">Guided feed configuration</div>
                <div className="feature-body">Connect any TAXII 2.1 server in a step-confirmable flow — discovery URL, collection selection (human-readable names), basic auth credentials. Alpha limit surfaced inline with a usage indicator.</div>
              </div>
            </div>
            <div className="feature">
              <div className="feature-n">02</div>
              <div>
                <div className="feature-title">Auto-generated Destination Lists</div>
                <div className="feature-body">Each feed automatically creates and populates a named Destination List with live IOCs. The list name mirrors the feed name for clear traceability. No manual entry required.</div>
              </div>
            </div>
            <div className="feature">
              <div className="feature-n">03</div>
              <div>
                <div className="feature-title">Visible policy attachment path</div>
                <div className="feature-body">The feed → Destination List → Policy Rule chain is shown explicitly. Admins can see which policies enforce IOCs from each feed and navigate directly to add or remove rules.</div>
              </div>
            </div>
            <div className="feature">
              <div className="feature-n">04</div>
              <div>
                <div className="feature-title">Per-feed health status</div>
                <div className="feature-body">Granular status per integration distinguishing connection failures, credential expiry, content issues (rejected observables, duplicates), and healthy sync states. Shipped in the Feb 2026 iteration.</div>
              </div>
            </div>
            <div className="feature">
              <div className="feature-n">05</div>
              <div>
                <div className="feature-title">Inline capacity awareness</div>
                <div className="feature-body">Progress indicator per list, warning at 80% of the 250k destination cap, direct action to clean up entries — preventing silent enforcement failures before they happen.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final design placeholder */}
      <div className="img-block">
        <div className="img-block-label">Final design</div>
        <div className="img-placeholder" style={{minHeight:"360px"}}>
          <div className="img-placeholder-icon">🖥️</div>
          <div className="img-placeholder-main">Add: Feed setup flow · Status indicators · Capacity awareness UI · Policy attachment path</div>
          <div className="img-placeholder-sub">Blur content layers, keep layout and component structure visible</div>
          <div className="img-nda-tag">NDA-safe: blur product content, preserve structural design decisions</div>
        </div>
      </div>

      <div className="page">
        {/* IMPACT */}
        <div className="section">
          <div className="section-tag">Impact</div>
          <h2 className="section-h2">The results</h2>
          <p>The integration shipped in Early Access on schedule. Cisco Secure Access <strong>surpassed Zscaler, Netskope, and Palo Alto Networks</strong> in onboarding UX for this feature type. A post-launch iteration in February 2026 addressed the status labeling issue and shipped granular per-feed health indicators.</p>
          <div className="metrics">
            <div className="metric"><div className="metric-val terra">7 wks</div><div className="metric-label">Zero to Early Access, on schedule</div></div>
            <div className="metric"><div className="metric-val accent">0→5</div><div className="metric-label">Feed integrations at alpha launch</div></div>
            <div className="metric"><div className="metric-val sage">#1</div><div className="metric-label">Onboarding UX vs. Zscaler, Netskope, Palo Alto</div></div>
            <div className="metric"><div className="metric-val">v2</div><div className="metric-label">Post-launch status redesign shipped Feb 2026</div></div>
          </div>
        </div>

        {/* LEARNINGS */}
        <div className="section">
          <div className="section-tag">Reflection</div>
          <h2 className="section-h2">What I learned from this project</h2>
          <div className="learnings">
            <div className="learning">
              <div className="learning-n">01</div>
              <div className="learning-text"><strong>Constrained alphas need explicit UX guardrails.</strong> The 5-feed and 250k-destination limits weren&rsquo;t edge cases — they were the experience for every early adopter. Treating constraints as first-class design elements, not engineering footnotes, changed how the whole interface felt.</div>
            </div>
            <div className="learning">
              <div className="learning-n">02</div>
              <div className="learning-text"><strong>Status design is trust design.</strong> One misleading label quietly eroded confidence in a feature that was otherwise working. Granularity in status isn&rsquo;t added complexity — it&rsquo;s honesty. I&rsquo;d test status clarity from the very first prototype on any future project.</div>
            </div>
            <div className="learning">
              <div className="learning-n">03</div>
              <div className="learning-text"><strong>Building new capability means building user vocabulary first.</strong> The technical pipeline was the easy part. Helping admins understand what a TAXII collection maps to in their workflow — that was the real design challenge. I&rsquo;d invest even more in the mental model layer before touching UI.</div>
            </div>
            <div className="learning">
              <div className="learning-n">04</div>
              <div className="learning-text"><strong>Engineering reviews are a design input, not a handoff gate.</strong> The most consequential decisions surfaced in engineering sessions. I&rsquo;d structure these as collaborative design sessions from week one on any project like this.</div>
            </div>
          </div>
        </div>

        {/* NEXT */}
        <div className="next">
          <div>
            <div className="next-eyebrow">Next project</div>
            <div className="next-title">Security Dashboard Redesign</div>
          </div>
          <Link href="/work/security-dashboard" className="next-cta">
            View case study <span className="next-arrow">↗</span>
          </Link>
        </div>
      </div>
    </>
  );
}
