import { ctaBand } from "@/content/site";
import { Button } from "./Button";
import { copy } from "./Copy";

export function CTABand({
  title = ctaBand.title,
  button = ctaBand.button,
  meta = ctaBand.meta,
}: {
  title?: string;
  button?: { label: string; href: string };
  meta?: string;
}) {
  return (
    <section aria-labelledby="cta-band-title" className="bg-cobalt text-white">
      <div className="container-site flex flex-col items-start gap-8 py-[72px] lg:flex-row lg:items-end lg:justify-between lg:py-[104px]">
        <h2 id="cta-band-title" className="t-h2 max-w-[760px] text-white">
          {copy(title)}
        </h2>
        <div className="flex flex-col items-start gap-3">
          <Button href={button.href} variant="white" arrow track={`${button.label} (CTA band)`}>
            {button.label}
          </Button>
          <p className="t-mono text-white">{meta}</p>
        </div>
      </div>
    </section>
  );
}
