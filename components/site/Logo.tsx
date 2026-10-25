import Link from "next/link";
import { cn } from "@/lib/utils";

export function Wordmark({ className, text = "Velociti" }: { className?: string; text?: string }) {
  return (
    <span className={cn("font-display font-bold tracking-[-0.04em]", className)}>
      {text}
      <span className="text-cobalt">.</span>
    </span>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex min-h-11 items-center text-[22px] text-ink", className)} aria-label="Velociti home">
      <Wordmark />
    </Link>
  );
}
