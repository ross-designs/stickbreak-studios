import { createFileRoute } from "@tanstack/react-router";

import logoMark from "@/assets/stickbreak-logo.png";
import game1 from "@/assets/game-1.jpg";
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
            {["Games"].map((item) => (
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
            </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {games.map((game) => (
              <GameCard key={game.title} {...game} />
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
