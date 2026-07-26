:root {
  --ink: #0a0d0a;
  --ink-soft: #12160f;
  --paper: #f4f2ea;
  --lime: #c8f24d;
  --lime-dim: #8fae3a;
  --sand: #d8d3c2;
  --line: rgba(244, 242, 234, 0.14);
  --font-display: 'Tajawal', 'Space Grotesk', sans-serif;
  --font-body: 'Tajawal', 'Space Grotesk', sans-serif;
  --radius: 4px;
  --ease: cubic-bezier(.16,.84,.44,1);
}

html[data-lang="en"] {
  --font-display: 'Space Grotesk', sans-serif;
  --font-body: 'Space Grotesk', sans-serif;
}
html[data-lang="hi"] {
  --font-display: 'Noto Sans Devanagari', 'Space Grotesk', sans-serif;
  --font-body: 'Noto Sans Devanagari', 'Space Grotesk', sans-serif;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  background: var(--ink);
  color: var(--paper);
  font-family: var(--font-body);
  line-height: 1.5;
  overflow-x: hidden;
  position: relative;
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  * { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }
}

/* ===== AMBIENT SKY / FALCON TRAIL ===== */
.sky {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0.5;
}
.falcon-trail { width: 100%; height: 100%; }
.falcon-trail path {
  fill: none;
  stroke: var(--lime);
  stroke-width: 1;
  stroke-dasharray: 6 10;
  opacity: 0.25;
  animation: trail-flow 30s linear infinite;
}
@keyframes trail-flow {
  to { stroke-dashoffset: -1000; }
}

main, header, footer { position: relative; z-index: 1; }

/* ===== TYPOGRAPHY BASE ===== */
h1, h2, h3 { font-family: var(--font-display); font-weight: 900; letter-spacing: -0.01em; }
.accent { color: var(--lime); }

/* ===== HEADER ===== */
.topbar {
  position: sticky; top: 0; z-index: 50;
  background: rgba(10, 13, 10, 0.86);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}
.topbar__inner {
  max-width: 1280px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 32px;
  gap: 24px;
}
.brand { display: flex; align-items: center; gap: 12px; text-decoration: none; color: inherit; }
.brand__mark { width: 34px; height: 34px; fill: var(--lime); flex-shrink: 0; }
.brand__mark--sm { width: 26px; height: 26px; }
.brand__text { display: flex; flex-direction: column; line-height: 1.15; }
.brand__name { font-family: var(--font-display); font-weight: 900; font-size: 1.05rem; letter-spacing: 0.01em; }
.brand__tag { font-size: 0.68rem; color: var(--lime-dim); font-weight: 500; }

.mainnav { display: flex; gap: 28px; }
.mainnav a {
  color: var(--sand); text-decoration: none; font-size: 0.92rem; font-weight: 500;
  position: relative; padding: 4px 0; white-space: nowrap;
  transition: color 0.2s var(--ease);
}
.mainnav a:hover { color: var(--lime); }
.mainnav a::after {
  content: ''; position: absolute; bottom: -2px; left: 0; right: 0;
  height: 2px; background: var(--lime);
  transform: scaleX(0); transform-origin: center;
  transition: transform 0.25s var(--ease);
}
.mainnav a:hover::after { transform: scaleX(1); }

.topbar__actions { display: flex; align-items: center; gap: 14px; }
.langswitch { display: flex; border: 1px solid var(--line); border-radius: 999px; overflow: hidden; }
.langswitch__btn {
  background: transparent; border: none; color: var(--sand);
  font-family: var(--font-body); font-size: 0.72rem; font-weight: 700;
  padding: 7px 13px; cursor: pointer; transition: all 0.2s var(--ease);
}
.langswitch__btn.is-active { background: var(--lime); color: var(--ink); }
.langswitch__btn:not(.is-active):hover { color: var(--lime); }

.burger { display: none; background: none; border: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 8px; }
.burger span { width: 22px; height: 2px; background: var(--paper); display: block; }

/* ===== HERO ===== */
.hero { padding: 90px 32px 60px; max-width: 1280px; margin: 0 auto; }
.hero__grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center; }

.eyebrow {
  font-size: 0.78rem; font-weight: 700; letter-spacing: 0.08em;
  color: var(--lime-dim); text-transform: uppercase; margin-bottom: 18px;
}
html[data-lang="ar"] .eyebrow, html[data-lang="hi"] .eyebrow { text-transform: none; letter-spacing: 0.02em; }

.hero__title {
  font-size: clamp(2.4rem, 5vw, 4.2rem);
  line-height: 1.05;
  display: flex; flex-wrap: wrap; gap: 0.28em;
  margin-bottom: 22px;
}
.hero__desc { font-size: 1.08rem; color: var(--sand); max-width: 46ch; margin-bottom: 34px; }

.hero__cta { display: flex; gap: 16px; margin-bottom: 48px; flex-wrap: wrap; }

.btn {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 14px 28px; border-radius: var(--radius);
  font-family: var(--font-body); font-weight: 700; font-size: 0.95rem;
  text-decoration: none; cursor: pointer; border: 1.5px solid transparent;
  transition: transform 0.2s var(--ease), background 0.2s var(--ease), border-color 0.2s var(--ease);
}
.btn--primary { background: var(--lime); color: var(--ink); }
.btn--primary:hover { transform: translateY(-2px); background: #d4fa66; }
.btn--ghost { border-color: var(--line); color: var(--paper); }
.btn--ghost:hover { border-color: var(--lime); color: var(--lime); }

.hero__stats { display: flex; gap: 40px; flex-wrap: wrap; }
.stat { display: flex; flex-direction: column; }
.stat__num { font-family: var(--font-display); font-size: 1.8rem; font-weight: 900; color: var(--lime); }
.stat__label { font-size: 0.8rem; color: var(--sand); margin-top: 2px; }

.hero__visual { display: flex; align-items: center; justify-content: center; }
.falcon-hero { width: 100%; max-width: 400px; }
.falcon-hero__ring { fill: none; stroke: var(--line); stroke-width: 1; }
.falcon-hero__ring--dim { stroke: rgba(200, 242, 77, 0.15); }
.falcon-hero__bird {
  fill: var(--lime);
  transform-origin: center;
  animation: falcon-hover 4s ease-in-out infinite;
}
@keyframes falcon-hover {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(1.5deg); }
}

/* ===== STRIP ===== */
.strip {
  display: flex; flex-wrap: wrap; justify-content: center; gap: 0;
  border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
  max-width: 1280px; margin: 0 auto;
}
.strip__item {
  display: flex; align-items: center; gap: 10px;
  padding: 22px 32px; flex: 1; min-width: 220px;
  border-inline-end: 1px solid var(--line);
  font-size: 0.88rem; font-weight: 600; color: var(--sand);
}
.strip__item:last-child { border-inline-end: none; }
.ic { width: 20px; height: 20px; fill: none; stroke: var(--lime); stroke-width: 1.6; flex-shrink: 0; }

/* ===== SECTIONS COMMON ===== */
.section__title { font-size: clamp(1.8rem, 3vw, 2.6rem); text-align: center; margin-bottom: 12px; }
.section__sub { text-align: center; color: var(--sand); margin-bottom: 48px; font-size: 1rem; }
.section__title--sm { font-size: 1.5rem; margin-bottom: 28px; font-family: var(--font-display); font-weight: 800; }

/* ===== SERVICES ===== */
.services { max-width: 1280px; margin: 0 auto; padding: 90px 32px; }
.cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.card {
  display: block;
  background: var(--ink-soft); border: 1px solid var(--line); border-radius: var(--radius);
  padding: 32px 24px; text-decoration: none; color: inherit; cursor: pointer;
  transition: border-color 0.25s var(--ease), transform 0.25s var(--ease), background 0.25s var(--ease);
}
.card:hover { border-color: var(--lime); transform: translateY(-4px); background: rgba(200, 242, 77, 0.05); }
.card__ic {
  width: 30px; height: 30px; fill: none; stroke: var(--sand); stroke-width: 1.5; margin-bottom: 18px;
  transition: stroke 0.2s var(--ease);
}
.card:hover .card__ic { stroke: var(--lime); }
.card h3 { font-size: 1.15rem; margin-bottom: 10px; transition: color 0.2s var(--ease); }
.card:hover h3 { color: var(--lime); }
.card p { color: var(--sand); font-size: 0.92rem; margin-bottom: 14px; }
.card__link { display: inline-block; color: var(--lime); font-size: 0.88rem; font-weight: 700; }

/* ===== TOOL PANELS ===== */
.tool { max-width: 1280px; margin: 0 auto; padding: 40px 32px 90px; }
.tool--alt { padding-top: 0; }
.tool__panel {
  background: var(--ink-soft); border: 1px solid var(--line); border-radius: 8px;
  padding: 40px; max-width: 760px; margin: 0 auto;
}
.tool__grid { display: grid; grid-template-columns: repeat(3, 1fr) auto; gap: 18px; align-items: end; }
.field { display: flex; flex-direction: column; gap: 8px; font-size: 0.85rem; color: var(--sand); font-weight: 600; }
.field input, .field select {
  background: var(--ink); border: 1px solid var(--line); border-radius: var(--radius);
  color: var(--paper); padding: 12px 14px; font-family: var(--font-body); font-size: 0.95rem;
}
.field input:focus, .field select:focus { outline: 2px solid var(--lime); outline-offset: 1px; border-color: var(--lime); }
.tool__btn { height: 46px; white-space: nowrap; }
.tool__result {
  margin-top: 28px; padding-top: 24px; border-top: 1px solid var(--line);
  display: flex; justify-content: space-between; align-items: baseline; font-size: 1rem;
}
.tool__result strong { font-family: var(--font-display); font-size: 1.6rem; color: var(--lime); }

.pickup__form { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.pickup__form .field:nth-child(3) { grid-column: span 2; }
.pickup__form button { grid-column: span 2; margin-top: 8px; }
.pickup__success {
  display: none; margin-top: 20px; padding: 14px 18px; border-radius: var(--radius);
  background: rgba(200, 242, 77, 0.1); border: 1px solid var(--lime-dim); color: var(--lime);
  font-size: 0.9rem; font-weight: 600;
}
.pickup__success.is-visible { display: block; }

/* ===== TRACKING ===== */
.tracking { max-width: 1000px; margin: 0 auto; padding: 90px 32px; }
.tracking__search { display: flex; gap: 12px; max-width: 620px; margin: 0 auto 56px; }
.tracking__search input {
  flex: 1; background: var(--ink-soft); border: 1px solid var(--line); border-radius: var(--radius);
  color: var(--paper); padding: 14px 18px; font-family: var(--font-body); font-size: 0.95rem;
}
.tracking__search input:focus { outline: 2px solid var(--lime); border-color: var(--lime); }

.tracking__timeline {
  display: flex; justify-content: space-between; position: relative; margin-bottom: 70px;
}
.tracking__timeline::before {
  content: ''; position: absolute; top: 8px; left: 5%; right: 5%; height: 2px; background: var(--line);
}
.tl-step { display: flex; flex-direction: column; align-items: center; gap: 12px; position: relative; flex: 1; }
.tl-dot { width: 18px; height: 18px; border-radius: 50%; background: var(--ink-soft); border: 2px solid var(--line); z-index: 1; }
.tl-step.is-done .tl-dot { background: var(--lime); border-color: var(--lime); }
.tl-label { font-size: 0.82rem; color: var(--sand); text-align: center; max-width: 12ch; }
.tl-step.is-done .tl-label { color: var(--paper); font-weight: 600; }

.api-box { background: var(--ink-soft); border: 1px solid var(--line); border-radius: var(--radius); padding: 28px 32px; }
.api-box__title { font-weight: 700; margin-bottom: 16px; font-size: 0.95rem; }
.api-box__list { list-style: none; display: flex; flex-direction: column; gap: 10px; font-family: monospace; font-size: 0.88rem; color: var(--sand); }
.tag { display: inline-block; padding: 2px 8px; border-radius: 3px; font-size: 0.72rem; font-weight: 700; margin-inline-end: 10px; }
.tag--post { background: rgba(200, 242, 77, 0.18); color: var(--lime); }
.tag--get { background: rgba(216, 211, 194, 0.15); color: var(--sand); }

/* ===== REVIEWS ===== */
.reviews { max-width: 1280px; margin: 0 auto; padding: 0 32px 100px; }
.reviews__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.review { background: var(--ink-soft); border: 1px solid var(--line); border-radius: var(--radius); padding: 30px; }
.review p { font-size: 0.95rem; color: var(--paper); margin-bottom: 16px; line-height: 1.6; }
.review cite { font-size: 0.82rem; color: var(--lime-dim); font-style: normal; font-weight: 600; }

/* ===== FOOTER ===== */
.footer { border-top: 1px solid var(--line); padding: 32px; }
.footer__inner { max-width: 1280px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; }
.footer__brand { display: flex; align-items: center; gap: 10px; font-weight: 700; }
.footer__note { color: var(--sand); font-size: 0.85rem; }

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  .mainnav {
    display: none; position: absolute; top: 100%; left: 0; right: 0;
    background: var(--ink-soft); border-bottom: 1px solid var(--line);
    flex-direction: column; padding: 20px 32px; gap: 18px;
  }
  .mainnav.is-open { display: flex; }
  .burger { display: flex; }
  .hero__grid { grid-template-columns: 1fr; }
  .hero__visual { order: -1; max-width: 280px; margin: 0 auto; }
  .cards { grid-template-columns: repeat(2, 1fr); }
  .tool__grid { grid-template-columns: 1fr; }
  .pickup__form { grid-template-columns: 1fr; }
  .pickup__form .field:nth-child(3), .pickup__form button { grid-column: span 1; }
  .reviews__grid { grid-template-columns: 1fr; }
  .strip__item { border-inline-end: none; border-bottom: 1px solid var(--line); }
}

@media (max-width: 600px) {
  .topbar__inner { padding: 12px 20px; }
  .hero { padding: 60px 20px 40px; }
  .cards { grid-template-columns: 1fr; }
  .langswitch__btn { padding: 6px 9px; font-size: 0.65rem; }
}

/* Keyboard focus visibility */
a:focus-visible, button:focus-visible, input:focus-visible, select:focus-visible {
  outline: 2px solid var(--lime); outline-offset: 2px;
}
