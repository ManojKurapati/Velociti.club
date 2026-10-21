import { cn } from "@/lib/utils";

/** Small rectangular label. `secure` adds the emerald status dot. */
export function Badge({
  children,
  secure = false,
  className,
}: {
  children: React.ReactNode;
  secure?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 h-6 rounded-md border border-line bg-surface px-2 font-mono text-xs text-cool-gray-400",
        className
      )}
    >
      {secure && <span className="h-1.5 w-1.5 rounded-full bg-secure" aria-hidden="true" />}
      {children}
    </span>
  );
}
