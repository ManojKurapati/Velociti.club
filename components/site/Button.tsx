import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "cobalt" | "white" | "ghost-night";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-[#262a33]",
  ghost: "border border-ink/20 text-ink hover:border-ink hover:bg-ink/[0.03]",
  cobalt: "bg-cobalt text-white hover:bg-cobalt-hover",
  white: "bg-white text-ink hover:bg-paper",
  "ghost-night": "border border-white/25 text-white hover:border-white hover:bg-white/5",
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[16px] font-medium leading-none tracking-[-0.01em] transition-colors duration-150 whitespace-nowrap";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  /** Analytics label; sent as `cta_text` with `cta_clicked`. */
  track?: string;
  arrow?: boolean;
};

export function Button({ href, children, variant = "primary", className, track, arrow }: Props) {
  const external = /^https?:/.test(href);
  const content = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );
  const props = {
    className: cn(base, variants[variant], className),
    "data-track": track ?? (typeof children === "string" ? children : undefined),
  };
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {content}
    </a>
  ) : (
    <Link href={href} {...props}>
      {content}
    </Link>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" className={cn("shrink-0", className)} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TextLink({ href, children, className, track }: { href: string; children: React.ReactNode; className?: string; track?: string }) {
  return (
    <Link href={href} className={cn("group inline-flex items-center gap-1.5 font-medium link no-underline", className)} data-track={track ?? (typeof children === "string" ? children : undefined)}>
      {children}
      <Arrow className="transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
