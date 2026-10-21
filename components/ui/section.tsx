import { cn } from "@/lib/utils";

/**
 * Page section on the shared 1px rail grid: every section sits inside the same
 * max-w-7xl frame with left/right borders, separated by a top border.
 */
export function Section({
  id,
  children,
  className,
  innerClassName,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <section id={id} className={cn("border-t border-line", className)}>
      <div className={cn("mx-auto max-w-7xl border-x border-line", innerClassName)}>{children}</div>
    </section>
  );
}

/** Standard section header block with fixed spacing. */
export function SectionHeader({
  title,
  description,
  aside,
  className,
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-6 px-6 pt-20 pb-12 md:px-10 md:pt-24 md:pb-14 lg:flex-row lg:items-end lg:justify-between", className)}>
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl font-semibold text-white md:text-[2.75rem] md:leading-[1.1]">{title}</h2>
        {description && <p className="mt-4 text-base leading-relaxed text-cool-gray-400 md:text-lg">{description}</p>}
      </div>
      {aside}
    </div>
  );
}

/** 1px-gap bento grid: cells are separated by hairlines drawn from the grid background. */
export function Bento({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("grid gap-px bg-line border-t border-line", className)}>{children}</div>;
}

export function Cell({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("bg-canvas p-6 md:p-8", className)}>{children}</div>;
}
