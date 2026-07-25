"use client";

import { useState } from "react";

function Icon({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`uiIcon ${className}`} aria-hidden="true">{children}</span>;
}

const chapters = [
  {
    id: "economy",
    number: "01",
    kicker: "A larger, more dynamic economy",
    title: "Growth that earns its way",
    intro:
      "Caprica is stronger when enterprise can move, workers can advance, and government lives within its means. Our next program removes barriers to investment while protecting the stability we restored.",
    icon: "↗",
    commitments: [
      ["A new fiscal rule", "Keep debt falling as a share of GDP across the cycle, publish independent costings, and preserve a prudent reserve for genuine emergencies."],
      ["Back builders and founders", "A one-stop business account, 48-hour company registration, faster permits, and a permanent investment allowance for productive equipment and research."],
      ["A simpler tax code", "No rise in the main rates of income tax. Consolidate nuisance levies and subject every tax relief to a clear value-for-money test."],
      ["Skills that raise pay", "Personal Skills Accounts co-funded by employers, portable credentials, and accelerated technical programs in energy, logistics, advanced manufacturing, and software."],
    ],
  },
  {
    id: "infrastructure",
    number: "02",
    kicker: "Connected, competitive, dependable",
    title: "Infrastructure that works",
    intro:
      "The airport modernization program showed what disciplined delivery can achieve. We will apply the same standards to power, water, transport, and digital networks.",
    icon: "✦",
    commitments: [
      ["Finish the airport network", "Complete terminal and air-traffic upgrades, introduce open access to ground services, and publish monthly delivery dashboards."],
      ["Reliable utilities, fair competition", "Complete market liberalization with an independent regulator, transparent grid access, and a universal service guarantee."],
      ["Move people, not paperwork", "Competitive concessions for intercity rail and bus corridors, integrated ticketing, and local control of route design."],
      ["Digital Caprica", "Nationwide high-speed coverage through open-access fiber, streamlined mast approvals, and secure digital identity for public services."],
    ],
  },
  {
    id: "society",
    number: "03",
    kicker: "Freedom, dignity, opportunity",
    title: "A liberal society that trusts people",
    intro:
      "Government should protect rights, widen opportunity, and help people through hard moments. It should not tell adults how to live.",
    icon: "◎",
    commitments: [
      ["Equal citizenship", "Defend marriage equality, reproductive freedom, freedom of belief, regional languages, and equal protection under law."],
      ["Healthcare that responds", "National wait-time standards, more community clinics, interoperable patient records, and expanded mental-health access."],
      ["Education for an open future", "Critical thinking, practical numeracy, digital literacy, and high-quality play-based early learning at the center of the national curriculum."],
      ["A modern safety net", "Simplify benefits, reduce sharp withdrawal cliffs, and make work, training, and caregiving transitions easier."],
    ],
  },
  {
    id: "security",
    number: "04",
    kicker: "Firm under pressure, bound by law",
    title: "Security without fear",
    intro:
      "The Myrati and COIN crises tested Caprica. The government protected the public, brought people home, and kept democratic oversight intact. We will strengthen that model.",
    icon: "◇",
    commitments: [
      ["Crisis readiness", "A permanent cross-government resilience center, annual national exercises, and a single public protocol for fast, factual crisis communication."],
      ["Modern policing", "Complete professional standards reform, independent complaint review, body-camera safeguards, and better training in de-escalation and digital evidence."],
      ["Smart defense", "Prioritize readiness, cyber defense, intelligence cooperation, and personnel welfare over prestige procurement."],
      ["Rights remain rights", "Time-limited emergency powers, judicial authorization for intrusive surveillance, and mandatory parliamentary review."],
    ],
  },
  {
    id: "climate",
    number: "05",
    kicker: "Clean growth, credible rules",
    title: "Prosperity within our limits",
    intro:
      "After the pollution crisis, vague promises are not enough. Polluters must pay, households deserve reliable energy, and clean firms should be able to scale.",
    icon: "◒",
    commitments: [
      ["A clean air compact", "Legally enforceable air and water standards, real-time public monitoring, and restoration orders funded by those responsible."],
      ["Market-led decarbonization", "A predictable, economy-wide emissions market with dividends for households and border adjustments for high-carbon imports."],
      ["Power that stays on", "Technology-neutral clean-power auctions, faster grid connections, storage markets, and a clear pathway for advanced nuclear."],
      ["Productive land", "Precision agriculture grants, open environmental data, water resilience, and outcome-based stewardship contracts with farmers."],
    ],
  },
  {
    id: "democracy",
    number: "06",
    kicker: "Clean institutions, open government",
    title: "Democracy worthy of trust",
    intro:
      "Competence depends on institutions that tell the truth, expose failure, and correct mistakes. We will make transparency routine rather than optional.",
    icon: "▥",
    commitments: [
      ["Independent integrity commission", "Investigatory powers, prosecutorial independence, protected reporting channels, and transparent declarations of interests."],
      ["Open contracting", "Publish public contracts, beneficial ownership, performance milestones, and changes in price in one searchable register."],
      ["Votes that count", "Keep national proportional representation, improve ballot access, and establish an independent boundary and electoral administration."],
      ["A stronger Parliament", "Earlier scrutiny of emergency measures, enforceable ministerial appearances, and open committee evidence by default."],
    ],
  },
];

const record = [
  { value: "A-", label: "Credit rating", detail: "Up from BBB+" },
  { value: "↓", label: "Debt burden", detail: "Falling as a share of GDP" },
  { value: "3", label: "National crises", detail: "Resolved with calm leadership" },
  { value: "4 yrs", label: "Stable government", detail: "Budgets delivered on time" },
];

const principles = [
  ["✦", "Optimistic", "Caprica’s best years can still be ahead."],
  ["△", "Responsible", "Every promise must be paid for."],
  ["=", "Liberal", "The state protects freedom; it does not police private life."],
  ["↗", "Reforming", "Competition and technology should work for everyone."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openChapter, setOpenChapter] = useState("economy");

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="MR and PP home">
          <span className="logoSlot logoSlotMr"><img src="/parties/mr-logo.png" alt="Moderate Reform logo" /></span>
          <span className="logoSlot logoSlotPp"><img src="/parties/pp-logo.png" alt="People's Party logo" /></span>
          <span className="brandText"><b>Moderate Reform</b><small>with the People&apos;s Party</small></span>
        </a>
        <button className="menuButton" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">
          <Icon>{menuOpen ? "×" : "≡"}</Icon>
        </button>
        <div className={`navLinks ${menuOpen ? "open" : ""}`}>
          <a href="#record" onClick={closeMenu}>Our record</a>
          <a href="#plan" onClick={closeMenu}>The plan</a>
          <a href="#letter" onClick={closeMenu}>Patrick Cutter</a>
          <a className="navCta" href="#pledge" onClick={closeMenu}>Our pledge <Icon>→</Icon></a>
        </div>
      </nav>

      <header className="hero" id="top">
        <img className="heroImage" src="/caprica-forward.png" alt="A modern Caprican waterfront with clean transit and a renewed terminal" />
        <div className="heroShade" />
        <div className="heroContent">
          <div className="eyebrow"><span>General Election 2060</span><i /></div>
          <h1>Caprica.<br /><em>Ready for more.</em></h1>
          <p className="heroLead heroSlogan">FOUR MORE YEARS</p>
          <div className="heroActions">
            <a className="button primary" href="#plan">Read our plan <Icon>↓</Icon></a>
            <a className="button ghost" href="#record">See our record</a>
          </div>
          <p className="heroByline">Patrick Cutter <span>for Prime Minister</span></p>
        </div>
        <div className="heroTicket">
          <span className="ticketLogo ticketLogoMr"><img src="/parties/mr-logo.png" alt="" /></span>
          <b>Moderate Reform</b>
          <i>+</i>
          <span className="ticketLogo ticketLogoPp"><img src="/parties/pp-logo.png" alt="" /></span>
          <b>People&apos;s Party</b>
        </div>
      </header>

      <section className="intro wrap">
        <div>
          <p className="sectionLabel">A confident country</p>
          <h2>We did not promise drama.<br />We promised to do the work.</h2>
        </div>
        <div className="introCopy">
          <p>In four demanding years, Patrick Cutter’s government faced down the Myrati crisis, secured the safe resolution of the COIN hostage crisis, and acted decisively when the pollution crisis threatened public health.</p>
          <p>At the same time, we repaired the public finances, upgraded the nation’s gateway, opened utility markets to competition, and passed the most important police reforms in a generation. Caprica is more resilient—and more respected—than it was four years ago.</p>
        </div>
      </section>

      <section className="record" id="record">
        <div className="wrap">
          <div className="recordHead">
            <p className="sectionLabel light">The Cutter government: 2056–2060</p>
            <h2>A record you can measure.</h2>
            <p>Progress is not a slogan. It is safer streets, sounder finances, stronger institutions, and public services that keep moving when the country is tested.</p>
          </div>
          <div className="stats">
            {record.map((item) => (
              <article className="stat" key={item.label}>
                <strong>{item.value}</strong>
                <b>{item.label}</b>
                <span>{item.detail}</span>
              </article>
            ))}
          </div>
          <div className="wins">
            <article><Icon>✓</Icon><div><b>Steady through crisis</b><p>Coordinated, lawful responses to Myrati, COIN, and the pollution emergency—without panic or political theater.</p></div></article>
            <article><Icon>✦</Icon><div><b>A modern national gateway</b><p>Airport renewal moved from promise to delivery, adding capacity and strengthening Caprica’s links to the world.</p></div></article>
            <article><Icon>◇</Icon><div><b>Police reform delivered</b><p>Clearer standards, stronger oversight, and professional tools that support effective, accountable policing.</p></div></article>
            <article><Icon>↗</Icon><div><b>Markets opened</b><p>Utility liberalization began replacing closed structures with competition, investment, and enforceable consumer protection.</p></div></article>
          </div>
        </div>
      </section>

      <section className="principles wrap">
        <div className="principlesTitle">
          <p className="sectionLabel">What guides us</p>
          <h2>Freedom with responsibility.</h2>
        </div>
        <div className="principleGrid">
          {principles.map(([symbol, title, text]) => <article key={title}><Icon>{symbol}</Icon><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="plan" id="plan">
        <div className="wrap">
          <div className="planHead">
            <div><p className="sectionLabel">Our program for 2060–2064</p><h2>Six missions.<br />One clear direction.</h2></div>
            <p>A practical plan for a country ready to move from recovery to renewal. Select a chapter to explore the commitments.</p>
          </div>
          <div className="chapterLayout">
            <div className="chapterNav" role="tablist" aria-label="Manifesto chapters">
              {chapters.map((chapter) => (
                <button key={chapter.id} onClick={() => setOpenChapter(chapter.id)} className={openChapter === chapter.id ? "active" : ""} role="tab" aria-selected={openChapter === chapter.id}>
                  <span>{chapter.number}</span>{chapter.title}<Icon>→</Icon>
                </button>
              ))}
            </div>
            <div className="chapterPanels">
              {chapters.map((chapter) => {
                const active = openChapter === chapter.id;
                return (
                  <article className={`chapter ${active ? "active" : ""}`} key={chapter.id} id={chapter.id} role="tabpanel">
                    <div className="chapterTop">
                      <span className="chapterIcon"><Icon>{chapter.icon}</Icon></span>
                      <div><p>{chapter.kicker}</p><h3>{chapter.title}</h3></div>
                    </div>
                    <p className="chapterIntro">{chapter.intro}</p>
                    <div className="commitments">
                      {chapter.commitments.map(([title, text]) => (
                        <div className="commitment" key={title}><Icon>✓</Icon><div><b>{title}</b><p>{text}</p></div></div>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="letter wrap" id="letter">
        <div className="letterCard">
          <div className="quoteMark">“</div>
          <p className="sectionLabel light">A message from the Prime Minister</p>
          <blockquote>
            Caprica has come through hard moments because we kept our heads, trusted our institutions, and put the national interest before the daily noise of politics.
          </blockquote>
          <div className="letterBody">
            <p>We inherited strained finances and a country short on confidence. Four years later, debt is falling as a share of our economy, our credit rating is stronger, investment is returning, and reforms once dismissed as too difficult are now law.</p>
            <p>I am proud of that record. I am not satisfied by it. Stability is the foundation. It is not the finish line. The next government must make Caprica the easiest place in our region to start a business, master a skill, develop clean technology, and build a good family.</p>
            <p>That is the choice in 2060: retreat into old arguments, or move forward with confidence. Moderate Reform and the People’s Party are ready to do the work.</p>
          </div>
          <div className="signature"><strong>Patrick Cutter</strong><span>Prime Minister of Caprica<br />Leader of Moderate Reform</span></div>
        </div>
        <aside className="letterAside">
          <span>Our governing test</span>
          <h3>Does it expand freedom, reward effort, and leave Caprica stronger?</h3>
          <div>
            <Icon>▤</Icon><p><b>Costed</b>Independent scrutiny before polling day.</p>
            <Icon>◷</Icon><p><b>Measured</b>Public milestones for every mission.</p>
            <Icon>◎</Icon><p><b>Open</b>Results published for everyone to see.</p>
          </div>
        </aside>
      </section>

      <section className="agenda">
        <div className="wrap">
          <p className="sectionLabel light">The first 100 days</p>
          <div className="agendaGrid">
            <h2>Ready<br />on day one.</h2>
            <ol>
              <li><span>01</span><p><b>Budget for growth</b>Lock in the debt rule, the investment allowance, and a fully funded infrastructure pipeline.</p></li>
              <li><span>02</span><p><b>Competition Act</b>Open utility networks, strengthen the regulator, and make switching simple.</p></li>
              <li><span>03</span><p><b>Clean Caprica Bill</b>Set enforceable pollution standards and make environmental monitoring public.</p></li>
              <li><span>04</span><p><b>Freedom and Integrity Bill</b>Establish the integrity commission and renew safeguards on emergency powers.</p></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="pledge wrap" id="pledge">
        <div>
          <p className="sectionLabel">The MR–PP pledge</p>
          <h2>Serious about government.<br />Optimistic about Caprica.</h2>
          <p>We will protect the progress of the last four years and use it to build a faster-growing, freer, cleaner, and more secure country.</p>
        </div>
        <div className="pledgeCard">
          <div className="ballot"><span><Icon>✓</Icon></span></div>
          <p>On election day</p>
          <h3>Choose the team<br />that delivered.</h3>
          <div className="coalition"><b>MR</b><i>+</i><b>PP</b></div>
        </div>
      </section>

      <footer>
        <div className="wrap footerGrid">
          <div className="footerBrand"><span className="brandMark">MR</span><span className="brandPartner">PP</span><h3>Ready for more.</h3></div>
          <div><b>Explore</b><a href="#record">Our record</a><a href="#plan">The plan</a><a href="#letter">Patrick Cutter</a></div>
          <div><b>Manifesto chapters</b>{chapters.slice(0,3).map(c => <a href={`#${c.id}`} key={c.id} onClick={() => setOpenChapter(c.id)}>{c.title}</a>)}</div>
          <div className="finePrint">
            <p className="paidFor">Paid for by <strong>Locke Society.</strong></p>
            <p className="copyright">© 2060 <strong>Locke Society.</strong> All Rights Reserved. Privacy Policy. Montiablo, MB 07043</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
