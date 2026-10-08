import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import JsonLd from "@/components/seo/JsonLd"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "SafetySetu",
  description:
    "SafetySetu is an industrial safety platform for high-hazard plants: electronic permit-to-work and lockout/tagout, plus contractor, visitor and gate access, on one auditable cloud system.",
  alternates: { canonical: "/products/safetysetu" },
}

export default function SafetySetuPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
              { "@type": "ListItem", position: 2, name: "Products", item: `${site.url}/products` },
              { "@type": "ListItem", position: 3, name: "SafetySetu", item: `${site.url}/products/safetysetu` },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "SafetySetu",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, iOS, Android",
            url: `${site.url}/products/safetysetu`,
            sameAs: "https://safetysetu.com",
            description:
              "SafetySetu is an industrial safety platform built from two products: Permit for electronic work permits and lockout/tagout, and EntryHub for contractors, visitors and the gate. One customer record, one sign-in and one org tree across web, mobile and plant-floor kiosk.",
            publisher: { "@type": "Organization", "@id": `${site.url}/#organization` },
          },
        ]}
      />

      {/* ===== INNER HERO ===== */}
      <section className="phero">
        <div className="glow g1" />
        <div className="glow g2" />
        <div className="wrap phero-grid">
          <div>
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <Link href="/products">Products</Link>
              <span className="sep">/</span>
              <span>SafetySetu</span>
            </div>
            <h1>
              One safety platform for the <span className="grad-text">whole plant</span>
            </h1>
            <p className="lead">
              SafetySetu replaces paper permits and the register at the barrier with one cloud platform.{" "}
              <strong>Permit</strong> runs electronic work permits and lockout/tagout. <strong>EntryHub</strong> runs
              contractors, visitors and the gate they come through. Buy one, or buy both on one sign-in.
            </p>
            <div className="phero-cta">
              <a
                href="https://safetysetu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Visit SafetySetu <span className="arw">↗</span>
              </a>
            </div>
          </div>
          <div className="phero-vis" data-animate aria-hidden="true">
            <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
              {/* .v-stroke paints with stroke: url(#vg), so this gradient must exist.
                  userSpaceOnUse is required: a straight vertical line has a zero-width
                  bounding box, which makes a default objectBoundingBox gradient paint nothing. */}
              <defs>
                <linearGradient id="vg" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="400" y2="400">
                  <stop offset="0" stopColor="#25D79B" />
                  <stop offset="1" stopColor="#3B7DE0" />
                </linearGradient>
              </defs>

              <text className="v-kick" x="16" y="22">SAFETYSETU PLATFORM</text>

              {/* Permit */}
              <rect className="v-panel" x="16" y="38" width="176" height="200" rx="14" />
              <circle className="v-sky" cx="44" cy="70" r="14" />
              <g transform="translate(37,63) scale(.6)">
                <path className="v-ico-w" d="M5 3h9l5 5v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
                <path className="v-ico-w" d="m8.5 13 2.5 2.5 5-5.5" />
              </g>
              <text className="v-title" x="68" y="68">Permit</text>
              <text className="v-sub" x="68" y="82">e-PTW · LOTO</text>
              <circle className="v-mint" cx="40" cy="118" r="3.5" />
              <text className="v-lab" x="54" y="122">Permit to work</text>
              <circle className="v-mint" cx="40" cy="146" r="3.5" />
              <text className="v-lab" x="54" y="150">Lockout / Tagout</text>
              <circle className="v-mint" cx="40" cy="174" r="3.5" />
              <text className="v-lab" x="54" y="178">Equipment register</text>
              <circle className="v-mint" cx="40" cy="202" r="3.5" />
              <text className="v-lab" x="54" y="206">Live dashboards</text>

              {/* EntryHub */}
              <rect className="v-panel" x="208" y="38" width="176" height="200" rx="14" />
              <circle className="v-sky" cx="236" cy="70" r="14" />
              <g transform="translate(229,63) scale(.6)">
                <circle className="v-ico-w" cx="9" cy="8" r="3.5" />
                <path className="v-ico-w" d="M3 20c0-3.6 2.7-5.8 6-5.8s6 2.2 6 5.8" />
                <path className="v-ico-w" d="m15 9 2.5 2.5L22 7" />
              </g>
              <text className="v-title" x="260" y="68">EntryHub</text>
              <text className="v-sub" x="260" y="82">Gate · People</text>
              <circle className="v-mint" cx="232" cy="118" r="3.5" />
              <text className="v-lab" x="246" y="122">Contractors</text>
              <circle className="v-mint" cx="232" cy="146" r="3.5" />
              <text className="v-lab" x="246" y="150">Visitors</text>
              <circle className="v-mint" cx="232" cy="174" r="3.5" />
              <text className="v-lab" x="246" y="178">The gate</text>
              <circle className="v-mint" cx="232" cy="202" r="3.5" />
              <text className="v-lab" x="246" y="206">Who is inside</text>

              {/* joins into the shared platform */}
              <path className="v-stroke" data-draw d="M104 238 L104 292" />
              <path className="v-stroke" data-draw d="M296 238 L296 292" />

              {/* shared foundation */}
              <rect className="v-tile" x="16" y="292" width="368" height="86" rx="14" />
              <text className="v-kick" x="36" y="318">ONE PLATFORM UNDERNEATH</text>
              <circle className="v-mint" cx="39" cy="341" r="3.5" />
              <text className="v-lab" x="53" y="345">One customer</text>
              <circle className="v-mint" cx="39" cy="363" r="3.5" />
              <text className="v-lab" x="53" y="367">One sign-in</text>
              <circle className="v-mint" cx="215" cy="341" r="3.5" />
              <text className="v-lab" x="229" y="345">One org tree</text>
              <circle className="v-mint" cx="215" cy="363" r="3.5" />
              <text className="v-lab" x="229" y="367">Sold together or apart</text>
            </svg>
          </div>
        </div>
      </section>

      {/* ===== THE PROBLEM ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              Paper wasn&apos;t built for a <span className="grad-text">modern plant</span>
            </h2>
            <p className="lead">
              Hot work, confined-space, height and isolation jobs still run on paper forms and email sign-offs, and the
              gate keeps a register of its own.
            </p>
          </div>
          <div className="grid g-2 u-mt-52">
            <article className="card" data-animate>
              <span className="cn">01</span>
              <h3>Scattered and unauditable</h3>
              <p>
                Permits live on paper, in inboxes and in spreadsheets. Reconstructing who approved what, and when, is
                slow or impossible.
              </p>
            </article>
            <article className="card" data-animate>
              <span className="cn">02</span>
              <h3>Permits stay live by accident</h3>
              <p>A paper permit does not expire on its own. Expired work keeps running with no automatic stop.</p>
            </article>
            <article className="card" data-animate>
              <span className="cn">03</span>
              <h3>Isolation runs on a separate form</h3>
              <p>
                Lockout and tagout keeps its own paper trail, so nothing stops a permit going live on equipment nobody
                verified isolated.
              </p>
            </article>
            <article className="card" data-animate>
              <span className="cn">04</span>
              <h3>The gate keeps a book of its own</h3>
              <p>
                Contractors and visitors sign a register at the barrier. Nobody can say who is inside right now, or whose
                licence lapsed last week.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== BUILT FOR REAL PLANTS (context image) ===== */}
      <section className="banner-img" aria-label="A modern industrial plant">
        <div className="wrap" data-animate>
          <Image
            src="/img/safetysetu-plant.jpg"
            alt="A modern, clean chemical and pharmaceutical plant interior"
            width={1915}
            height={821}
            loading="lazy"
          />
        </div>
      </section>

      {/* ===== PERMIT ===== */}
      <section className="section band-soft">
        <div className="wrap">
          <div className="section-head" data-animate>
            <span className="prod-tag">Permit</span>
            <h2 className="h2 balance u-mt-18">
              The permit lifecycle, <span className="grad-text">fully governed</span>
            </h2>
            <p className="lead">
              A worker raises a permit from a form you design, it follows the approval path you define, and it is issued
              to the field under a fixed validity window.
            </p>
          </div>
          <div className="process u-mt-44" data-animate>
            <div className="pstep">
              <div className="pn">01</div>
              <div className="pc">
                <h3>Request</h3>
                <p>Raise from a template in a click; smart fields auto-fill.</p>
              </div>
            </div>
            <div className="pstep">
              <div className="pn">02</div>
              <div className="pc">
                <h3>Approve</h3>
                <p>Routed by department and role, in sequence or in parallel.</p>
              </div>
            </div>
            <div className="pstep">
              <div className="pn">03</div>
              <div className="pc">
                <h3>Activate</h3>
                <p>Issued with a validity window and an activation PDF.</p>
              </div>
            </div>
            <div className="pstep">
              <div className="pn">04</div>
              <div className="pc">
                <h3>Work</h3>
                <p>Monitored live; suspend, extend or renew as needed.</p>
              </div>
            </div>
            <div className="pstep">
              <div className="pn">05</div>
              <div className="pc">
                <h3>Close</h3>
                <p>Signed off, closure PDF, everyone notified.</p>
              </div>
            </div>
          </div>
          <div className="grid g-3 u-mt-52">
            <article className="card" data-animate>
              <h3>Build it your way</h3>
              <p>
                Your team designs its own permit types, fields and approval routing without code. Publishing freezes a
                version, so a permit keeps the form and flow it was raised under, forever.
              </p>
            </article>
            <article className="card" data-animate>
              <h3>Isolation, interlocked</h3>
              <p>
                QR-labelled assets carry their full isolation history. No approval while an isolation is unverified, and
                no release until the permit closes.
              </p>
            </article>
            <article className="card" data-animate>
              <h3>Dashboards and reports</h3>
              <p>
                Live counts, approval turnaround and expiry tracking, plus a report builder that saves your own
                definitions beside the standard ones and exports real Excel.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== ENTRYHUB ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head" data-animate>
            <span className="prod-tag">EntryHub</span>
            <h2 className="h2 balance u-mt-18">
              Every person on site, in <span className="grad-text">one movement log</span>
            </h2>
            <p className="lead">
              The two populations a plant does not employ: the contractors who work there and the visitors who come to
              see someone. One record per person, and one log that says who is inside right now.
            </p>
          </div>
          <div className="grid g-3 u-mt-52">
            <article className="card" data-animate>
              <h3>Contractors &amp; workers</h3>
              <p>
                A firm&apos;s CLRA licence carries its expiry and the headcount cap it grants, and the worker over that
                limit is refused at the gate, not warned. Medical, induction and skill cards each carry their own expiry.
              </p>
            </article>
            <article className="card" data-animate>
              <h3>Visitors &amp; passes</h3>
              <p>
                A visit is three questions and a host, with a badge live only for its own window. A contract worker gets
                in on a signed-QR pass naming the plant, the areas and the dates it opens.
              </p>
            </article>
            <article className="card" data-animate>
              <h3>At the barrier</h3>
              <p>
                One search box, four verdicts, decided on the server inside the same transaction that records the
                movement — never on the tablet, and never by the guard&apos;s judgement of a stack of papers.
              </p>
            </article>
          </div>
          <div className="tags u-mt-40" data-animate>
            <span className="tag">Admit</span>
            <span className="tag">Attention</span>
            <span className="tag">Refuse</span>
            <span className="tag">Already inside → exit</span>
          </div>
        </div>
      </section>

      {/* ===== PRESENCE & EVACUATION ===== */}
      <section className="section band-soft">
        <div className="wrap">
          <div className="split" data-animate>
            <div>
              <h2 className="h2 balance">
                Who is inside, and <span className="grad-text">who is still inside</span>
              </h2>
              <p className="lead u-mt-18">
                The log is the truth and presence is its index, which is what makes the number on the screen survive a
                missed exit — and what makes it trustworthy on the one day it has to be.
              </p>
              <ul className="deliver u-mt-40">
                <li>
                  <span className="ck">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  <span>Append-only: nothing is edited, and a correction is a second row that says so.</span>
                </li>
                <li>
                  <span className="ck">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  <span>A live headcount by firm and by plant, never a counter that drifts.</span>
                </li>
                <li>
                  <span className="ck">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  <span>Freeze the roll at the alarm and tick people off at the assembly point, from a phone.</span>
                </li>
                <li>
                  <span className="ck">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  <span>Missing people float to the top, and the closed roll is evidence, not a whiteboard photo.</span>
                </li>
              </ul>
            </div>
            <div className="split-media" data-animate aria-hidden="true">
              <svg viewBox="0 0 400 330" preserveAspectRatio="xMidYMid meet">
                <text className="v-kick" x="16" y="22">INSIDE NOW</text>

                <rect className="v-tile" x="16" y="36" width="368" height="64" rx="14" />
                <text className="v-title" x="36" y="66" fontSize="26px">148</text>
                <text className="v-sub" x="36" y="84">people on site</text>
                <text className="v-lab" x="196" y="64">112 contractors</text>
                <text className="v-lab" x="196" y="84">36 visitors</text>

                <text className="v-kick" x="16" y="132">MOVEMENT LOG · APPEND ONLY</text>
                <rect className="v-panel" x="16" y="146" width="368" height="40" rx="10" />
                <circle className="v-mint" cx="40" cy="166" r="5" />
                <text className="v-lab" x="58" y="163">IN · Gate 2 · ACME/U2/CW/000023</text>
                <text className="v-sub" x="58" y="177">08:12</text>

                <rect className="v-panel" x="16" y="194" width="368" height="40" rx="10" />
                <circle className="v-mint" cx="40" cy="214" r="5" />
                <text className="v-lab" x="58" y="211">IN · Gate 1 · VS-000012</text>
                <text className="v-sub" x="58" y="225">09:40</text>

                <rect className="v-panel" x="16" y="242" width="368" height="40" rx="10" />
                <circle className="v-sky" cx="40" cy="262" r="5" />
                <text className="v-lab" x="58" y="259">OUT · Gate 2 · ACME/U2/CW/000019</text>
                <text className="v-sub" x="58" y="273">11:05</text>

                <text className="v-sub" x="16" y="308">Presence is derived from the log, never a counter.</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHERE THE TWO PRODUCTS MEET ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              The contractor who <span className="grad-text">fills the permit</span>
            </h2>
            <p className="lead">
              The most useful thing about owning both: the man the gate already cleared is the man who signs the permit
              section. One switch gives him a time-limited login that dies with his gate pass.
            </p>
          </div>
          <div className="process u-mt-44" data-animate>
            <div className="pstep">
              <div className="pn">01</div>
              <div className="pc">
                <h3>Enrol</h3>
                <p>The worker is on a firm&apos;s roll in EntryHub.</p>
              </div>
            </div>
            <div className="pstep">
              <div className="pn">02</div>
              <div className="pc">
                <h3>Pass</h3>
                <p>A live gate pass proves he is cleared to be on site.</p>
              </div>
            </div>
            <div className="pstep">
              <div className="pn">03</div>
              <div className="pc">
                <h3>Grant</h3>
                <p>One switch on the firm&apos;s Workers tab gives him a login.</p>
              </div>
            </div>
            <div className="pstep">
              <div className="pn">04</div>
              <div className="pc">
                <h3>Sign</h3>
                <p>He opens the permit he is named on and signs his own section.</p>
              </div>
            </div>
            <div className="pstep">
              <div className="pn">05</div>
              <div className="pc">
                <h3>Expire</h3>
                <p>The login dies with the pass; the signature outlives it.</p>
              </div>
            </div>
          </div>
          <p className="note u-mt-40" data-animate>
            He sees the permit he is on, and nothing else. No second identity, no shared password, and every grant
            audited on both sides.
          </p>
        </div>
      </section>

      {/* ===== WORK ANYWHERE, ON ANY SCREEN ===== */}
      <section className="section band-soft">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              One digital platform, <span className="grad-text">on any screen</span>
            </h2>
            <p className="lead">
              Your team reaches it from wherever the work is: the office, the job, or the barrier. Host it on
              Aillegent&apos;s secure cloud, or deploy it on-premise at your own site.
            </p>
          </div>
          <div className="grid g-3 u-mt-52">
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="2" y="4" width="20" height="14" rx="2" /><path d="M8 21h8M12 18v3" /></svg>
              </div>
              <h3>Web</h3>
              <p>The full platform in any desktop browser. Design permits, approve, and run the office side of the gate.</p>
              <p className="muted">Best for: designers, approvers &amp; EHS</p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M11 18h2" /></svg>
              </div>
              <h3>Mobile app</h3>
              <p>A real iOS and Android app carrying both products, with push alerts and a camera that scans QR codes.</p>
              <p className="muted">Best for: field crews, guards &amp; supervisors</p>
            </article>
            <article className="card" data-animate>
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 8h10M7 12h10M7 16h5" /></svg>
              </div>
              <h3>Kiosk</h3>
              <p>Full-screen on a shared plant-floor terminal or a tablet at the gate, for people who carry no device.</p>
              <p className="muted">Best for: on-site crews &amp; contractors</p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== TRUST & SECURITY ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head" data-animate>
            <h2 className="h2 balance">
              Secure, audited &amp; <span className="grad-text">fully visible</span>
            </h2>
          </div>
          <div className="grid g-3 u-mt-48">
            <article className="card" data-animate>
              <span className="cn">01</span>
              <h3>Audit &amp; accountability</h3>
              <p>
                Every state change is recorded atomically with the action, on an append-only trail you can filter and
                export.
              </p>
            </article>
            <article className="card" data-animate>
              <span className="cn">02</span>
              <h3>Separation &amp; isolation</h3>
              <p>
                Two products, two databases, everything scoped by company and plant. Identity numbers never reach a list,
                a pass or the trail.
              </p>
            </article>
            <article className="card" data-animate>
              <span className="cn">03</span>
              <h3>Security &amp; recovery</h3>
              <p>
                Token login with refresh rotation, OTP and rate limits. Deletes stay recoverable for 90 days, and data is
                backed up to the cloud.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== BRIDGE ===== */}
      <section className="bridge">
        <div className="wrap bridge-inner" data-animate>
          <div>
            <span className="b-kick">Up next</span>
            <Link className="b-link" href="/products">
              All products <span className="arw">→</span>
            </Link>
          </div>
          <p className="b-cta">
            Ready to digitise your plant? <Link href="/contact">Book a SafetySetu demo</Link>
          </p>
        </div>
      </section>
    </>
  )
}
