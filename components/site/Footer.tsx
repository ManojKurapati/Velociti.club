import Link from "next/link";
import { footer, site } from "@/content/site";
import { Logo, Wordmark } from "./Logo";
import { CookieSettingsButton } from "./CookieSettingsButton";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-site pt-[72px] lg:pt-[104px]">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(4,1fr)]">
          <div className="max-w-[300px]">
            <Logo />
            <p className="mt-4 text-[15px] leading-relaxed">AI-native enterprise engineering. Secure agents on the systems you already run.</p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Social">
              {site.social.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-[14px] font-medium text-ink hover:border-ink"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {footer.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="eyebrow mb-4">{col.title}</p>
              <ul className="space-y-1">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="inline-flex min-h-9 items-center text-[15px] text-body hover:text-ink">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line py-6 text-[14px] sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a href={`mailto:${site.email}`} className="hover:text-ink">{site.email}</a>
            <CookieSettingsButton />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="overflow-hidden">
        <p className="container-site footer-wordmark select-none pb-6 text-ink">
          <Wordmark text={footer.wordmark} className="tracking-[inherit]" />
        </p>
      </div>
    </footer>
  );
}
