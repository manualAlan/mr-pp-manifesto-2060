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
      ["Restore the Stability and Growth Pact", "Put the fiscal framework back into law, keep debt falling as a share of GDP, publish independent costings, and require every budget to arrive on time."],
      ["A ₳10,000 start-up grant", "Offer new Caprican firms a one-time, tax-free grant of up to ₳10,000, alongside faster registration and simpler permits."],
      ["Lower taxes on ownership", "Lower or abolish the wealth tax and review fuel, emissions, and luxury taxes so the system rewards investment without opening an unfunded gap."],
      ["Skills that raise pay", "Build a progressive wage model in which recognized training and greater responsibility lead to higher pay, backed by portable credentials and employer co-funding."],
      ["Work with clear boundaries", "Enact a right to disconnect for locally employed workers while preserving flexible arrangements that suit different firms and occupations."],
      ["Reform state-owned companies", "Publish asset and risk assessments, install commercial management, and prepare viable enterprises for transparent share sales where competition can serve the public better."],
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
      ["New transit partnerships", "Use competitively tendered public-private partnerships for intercity rail, bus corridors, and local connections, with integrated ticketing and enforceable service standards."],
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
      ["Healthcare that responds", "Set national wait-time standards, expand the supply of general practitioners, connect patient records, and establish a national mental-health program."],
      ["A national care service", "Improve support for older and disabled Capricans, including cancer screening, physical therapy, speech pathology, and practical help for family caregivers."],
      ["Education that teaches judgment", "Make play-based learning the national standard in kindergarten and use structured Socratic discussion in secondary schools to strengthen critical thinking."],
      ["Women’s health and regional languages", "Expand reproductive and preventive care for women and guarantee language education in communities where regional languages are spoken."],
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
      ["A stronger defense settlement", "Increase defense funding by ₳4 billion while shifting resources toward readiness, joint exercises, cyber defense, counterterrorism, and personnel welfare."],
      ["Stand with the Columbian Union", "Deepen practical cooperation with Union partners on intelligence, joint training, regional security, and the defense of Caprica’s democratic way of life."],
      ["Rights remain rights", "Time-limit emergency powers, require judicial authorization for intrusive surveillance, and mandate parliamentary review."],
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
      ["Net zero by 2060", "Put the national target into a stable long-term framework, with enforceable air and water standards and real-time public pollution monitoring."],
      ["A market for lower emissions", "Replace the carbon tax with a broad emissions-trading system that steadily tightens the cap while allowing firms to find the least-cost path to cleaner production."],
      ["The Green Business Grant", "Offer targeted credits and grants to clean firms that invest and create jobs in Caprica, including advanced solar, artificial intelligence, and affordable green technology."],
      ["Power that stays on", "Use technology-neutral clean-power auctions, faster grid connections, storage markets, and a clear pathway for advanced nuclear."],
      ["Productive land", "Help farmers adopt precision technology, secure fertilizer access, manage carbon and nitrogen emissions, and keep agricultural land productive over the next decade."],
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
      ["Nineteen national MPs", "Keep proportional representation, replace regional seats with nineteen nationally elected members, and allocate seats through the Sainte-Laguë method."],
      ["An open-list Senate", "Let voters choose among candidates within party lists and give the Senate a defined role in confidence motions and government accountability."],
      ["A stronger Parliament", "Require earlier scrutiny of emergency measures, enforceable ministerial appearances, and open committee evidence by default."],
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
