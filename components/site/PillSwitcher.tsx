import Link from "next/link";
import { cn } from "@/lib/utils";

/** Horizontal row of pill links (anchors or routes). Scrolls inside itself on mobile. */
export function PillSwitcher({
  items,
  active,
  label,
  className,
}: {
  items: { label: string; href: string; value?: string }[];
  active?: string;
  label: string;
  className?: string;
}) {
  return (
    <nav aria-label={label} className={cn("-mx-6 overflow-x-auto px-6 [scrollbar-width:none]", className)}>
      <ul className="flex w-max gap-2">
        {items.map((it) => {
          const isActive = active !== undefined && (it.value ?? it.href) === active;
          return (
            <li key={it.href}>
              <Link
                href={it.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-full border px-5 text-[15px] font-medium transition-colors",
                  isActive ? "border-ink bg-ink text-white" : "border-line bg-surface text-ink hover:border-ink",
                )}
              >
                {it.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
