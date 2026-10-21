import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cool-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-white text-black hover:bg-cool-gray-200",
  secondary: "border border-line bg-surface text-white hover:bg-raised hover:border-line-strong",
  ghost: "text-cool-gray-400 hover:text-white hover:bg-raised",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-6 text-base",
};

/** shadcn-style class builder, usable on <a>, <Link> or <button>. */
export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: { variant?: Variant; size?: Size; className?: string } = {}) {
  return cn(base, variants[variant], sizes[size], className);
}
