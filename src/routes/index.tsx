import { createFileRoute } from "@tanstack/react-router";

import logoMark from "@/assets/stickbreak-logo.png";
import game1 from "@/assets/game-1.jpg";
import game2 from "@/assets/game-2.jpg";
import game3 from "@/assets/game-3.jpg";
import { GameCard } from "@/components/site/GameCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stickbreak Studios — Indie Games Made By Hand" },
      {
        name: "description",
        content:
          "Stickbreak Studios is a small independent game studio building tactile, controller-first games. Meet our games, our crew, and get in touch.",
      },
      { property: "og:title", content: "Stickbreak Studios — Indie Games Made By Hand" },
      {
        property: "og:description",
        content:
          "A small independent game studio building tactile, controller-first games.",
      },
    ],
  }),
  component: Index,
});

const games = [
  {
    title: "Neon Courier",
    genre: "Cyberpunk / Stealth",
    status: "In Development",
    blurb:
      "Run packages through a city that never sleeps. Every alley remembers the last delivery you botched.",
    image: game1,
  },
];

const values = [
  {
    n: "01",
    title: "Feel first",
    body: "We prototype with a controller in hand. If the first ten seconds don't feel good, the idea gets broken and rebuilt.",
  },
  {
    n: "02",
    title: "Small on purpose",
    body: "Six people, no publisher notes. Tight scope means every mechanic in the box actually earned its place.",
  },
  {
    n: "03",
    title: "Built in public",
    body: "Devlogs, playtest builds and postmortems. Our community sees the ugly milestones, not just the trailer.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logoMark}
              alt="Stickbreak Studios logo"
              width={719}
              height={421}
              className="h-9 w-auto"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {["Games", "Studio", "Devlog"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="clip-corner bg-primary px-4 py-2 font-display text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="grid-bg absolute inset-0 opacity-70" />
          <div
            className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full blur-[140px]"
            style={{ background: "color-mix(in oklab, var(--primary) 18%, transparent)" }}
          />
          <div className="relative mx-auto max-w-6xl px-6 py-24 text-center md:py-36">
            <img
              src={logoMark}
              alt="Stickbreak Studios logo"
              width={719}
              height={421}
              className="mx-auto mb-8 w-64 max-w-full drop-shadow-[0_0_45px_color-mix(in_oklab,var(--primary)_35%,transparent)] md:w-80"
            />

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              A one-man indie game studio currently focused on simple arcade games and
              homebrew titles, on mobile and retro handhelds.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#games"
                className="clip-corner bg-primary px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Play our games
              </a>
              <a
                href="#studio"
                className="clip-corner border border-border px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.15em] text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                About the studio
              </a>
            </div>
          </div>
        </section>

        {/* Games */}
        <section id="games" className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
            <div>
              <p className="label-mono">01 — Catalogue</p>
              <h2 className="mt-3 text-3xl font-bold uppercase md:text-5xl">Our games</h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              A single world in rotation. Neon Courier is still taking shape.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {games.map((game) => (
              <GameCard key={game.title} {...game} />
            ))}
          </div>
        </section>

        {/* Studio */}
        <section id="studio" className="border-y border-border bg-card/40">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="label-mono">02 — Studio</p>
              <h2 className="mt-3 text-3xl font-bold uppercase md:text-5xl">
                Handmade,
                <br />
                stubbornly
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                We started in a shared flat with two second-hand arcade sticks and a
                habit of snapping them mid-run. The name stuck. Today we're six people
                across three time zones, still building the kind of games we grew up
                grinding.
              </p>
              <dl className="mt-10 grid grid-cols-3 gap-4">
                {[
                  ["6", "People"],
                  ["3", "Titles"],
                  ["1.2M", "Players"],
                ].map(([value, label]) => (
                  <div key={label} className="border-l border-primary/60 pl-4">
                    <dt className="font-display text-2xl font-bold text-primary">
                      {value}
                    </dt>
                    <dd className="label-mono mt-1">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <ul className="space-y-4">
              {values.map((v) => (
                <li
                  key={v.n}
                  className="clip-corner border border-border bg-card p-6 transition-colors hover:border-primary/60"
                >
                  <p className="font-display text-xs font-bold tracking-[0.2em] text-primary">
                    {v.n}
                  </p>
                  <h3 className="mt-2 text-xl font-bold uppercase">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Devlog */}
        <section id="devlog" className="mx-auto max-w-6xl px-6 py-24">
          <p className="label-mono">03 — Devlog</p>
          <h2 className="mt-3 text-3xl font-bold uppercase md:text-5xl">From the desk</h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {[
              ["Jul 2026", "Rebuilding Neon Courier's grapple in one week"],
              ["Jun 2026", "Dust Rally: what our physics rewrite actually cost"],
              ["May 2026", "Deepglass — designing fear without a monster"],
            ].map(([date, title]) => (
              <a
                key={title}
                href="#devlog"
                className="group flex flex-wrap items-center justify-between gap-3 py-6 transition-colors hover:text-primary"
              >
                <span className="label-mono">{date}</span>
                <span className="flex-1 font-display text-lg font-semibold md:text-xl">
                  {title}
                </span>
                <span className="text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  →
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative overflow-hidden border-t border-border">
          <div className="grid-bg absolute inset-0 opacity-60" />
          <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
            <p className="label-mono">04 — Contact</p>
            <h2 className="mt-3 text-3xl font-bold uppercase md:text-5xl">
              Press, publishing, or just say hi
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm text-muted-foreground">
              We answer every email — usually between builds, occasionally at 3am.
            </p>
            <a
              href="mailto:hello@stickbreak.studio"
              className="clip-corner mt-8 inline-block bg-primary px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              hello@stickbreak.studio
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8">
          <p className="label-mono">© 2026 Stickbreak Studios</p>
          <div className="flex gap-6">
            {["Steam", "Discord", "Bluesky", "YouTube"].map((s) => (
              <a
                key={s}
                href="#contact"
                className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
