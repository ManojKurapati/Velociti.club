import { home } from "@/content/home";
import { Button } from "@/components/site/Button";

/**
 * Home hero. The final state is what the server renders; a pre-paint script
 * adds `.hero-animate` to <html> so CSS keyframes play the sequence once
 * (see globals.css). Reduced motion skips straight to the final state.
 */
export function HeroThink() {
  const { hero } = home;
  const [l1, l2] = hero.lines;
  return (
    <section aria-labelledby="hero-title" className="pb-16 pt-20 text-center sm:pt-28 lg:pb-20 lg:pt-32">
      <div className="container-site">
        <p className="eyebrow hero-line-eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-title" className="t-hero mx-auto mt-7 max-w-[1100px]">
          <span className="hero-line block">
            <span className="hero-dim">{l1}</span>
          </span>
          <span className="hero-line block">
            <span className="hero-dim">{l2}</span>
          </span>
          <span className="hero-line block text-ink">
            Think <span className="text-cobalt">Velociti<span className="hero-dot">.</span></span>
          </span>
        </h1>
        <div className="hero-after">
          <p className="t-lead mx-auto mt-9 max-w-[720px]">{hero.subhead}</p>
          <div className="hero-after-late mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={hero.primary.href} arrow track="Book an AI workflow audit (hero)">
              {hero.primary.label}
            </Button>
            <Button href={hero.secondary.href} variant="ghost" track="Explore solutions (hero)">
              {hero.secondary.label}
            </Button>
          </div>
          <ul className="hero-after-late mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[14px] text-body" aria-label="Highlights">
            {hero.chips.map((c) => (
              <li key={c} className="inline-flex items-center gap-2">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cobalt" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
