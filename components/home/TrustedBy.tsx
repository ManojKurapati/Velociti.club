import { home } from "@/content/home";

/** Text wordmarks until approved logo SVGs are supplied. */
export function TrustedBy() {
  const { trustedBy } = home;
  const logos = trustedBy.logos.filter((l) => l.approved);
  if (!logos.length) return null;
  return (
    <section aria-labelledby="trusted-title" className="border-y border-line py-12 lg:py-16">
      <div className="container-site">
        <h2 id="trusted-title" className="text-center text-[15px] font-normal tracking-normal text-body">
          {trustedBy.line}
        </h2>
        <ul className="mt-8 grid grid-cols-2 items-center gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((l) => (
            <li
              key={l.name}
              className="text-center text-[19px] font-semibold tracking-[-0.03em] text-[#6b6e76] grayscale transition-colors hover:text-ink"
            >
              {l.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
