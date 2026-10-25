import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { copy } from "./Copy";

type CTA = { label: string; href: string };

/** Standard inner-page hero: eyebrow, H1, lead and up to two CTAs. */
export function PageHero({
  eyebrow,
  title,
  lead,
  primary,
  secondary,
  children,
  className,
  above,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  primary?: CTA;
  secondary?: CTA;
  children?: React.ReactNode;
  className?: string;
  above?: React.ReactNode;
}) {
  return (
    <section className={cn("pb-14 pt-16 lg:pb-20 lg:pt-24", className)}>
      <div className="container-site">
        {above && <div className="mb-10">{above}</div>}
        {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}
        <h1 className="t-h1 max-w-[980px]">{typeof title === "string" ? copy(title) : title}</h1>
        {lead && <p className="t-lead mt-7 max-w-[720px]">{copy(lead)}</p>}
        {(primary || secondary) && (
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {primary && (
              <Button href={primary.href} arrow track={`${primary.label} (hero)`}>
                {primary.label}
              </Button>
            )}
            {secondary && (
              <Button href={secondary.href} variant="ghost" track={`${secondary.label} (hero)`}>
                {secondary.label}
              </Button>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
