"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { nav } from "@/content/site";
import { cn } from "@/lib/utils";
import { Logo, Wordmark } from "./Logo";
import { Button } from "./Button";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href + "/");
}

export function Nav() {
  const pathname = usePathname() || "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const companyRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const companyId = useId();
  const companyActive = nav.company.some((i) => isActive(pathname, i.href));

  // Close menus on route change.
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMenuOpen(false);
    setCompanyOpen(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setCompanyOpen(false);
        setMenuOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (companyRef.current && !companyRef.current.contains(e.target as Node)) setCompanyOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const linkCls = (active: boolean) =>
    cn(
      "inline-flex min-h-11 items-center rounded-full px-3.5 text-[15px] font-medium transition-colors",
      active ? "text-ink" : "text-body hover:text-ink",
    );

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <div className="container-site flex h-[68px] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {nav.primary.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link href={item.href} className={linkCls(active)} aria-current={active ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <div ref={companyRef} className="relative">
                <button
                  type="button"
                  className={cn(linkCls(companyActive), "gap-1.5")}
                  aria-expanded={companyOpen}
                  aria-controls={companyId}
                  onClick={() => setCompanyOpen((v) => !v)}
                >
                  Company
                  <svg aria-hidden="true" viewBox="0 0 12 12" width="10" height="10" className={cn("transition-transform", companyOpen && "rotate-180")} fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M2.5 4.5L6 8l3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div
                  id={companyId}
                  hidden={!companyOpen}
                  className="card absolute left-1/2 top-[calc(100%+10px)] w-[320px] -translate-x-1/2 p-2"
                >
                  <ul>
                    {nav.company.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block rounded-[14px] px-4 py-3 hover:bg-paper"
                          aria-current={isActive(pathname, item.href) ? "page" : undefined}
                        >
                          <span className="block text-[15px] font-medium text-ink">{item.label}</span>
                          <span className="block text-[14px] leading-snug text-body">{item.description}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button href={nav.cta.href} className="hidden min-h-11 px-5 text-[15px] sm:inline-flex" track="Book a workflow audit (nav)">
            {nav.cta.label}
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
              {menuOpen ? <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" /> : <path d="M3 7h14M3 13h14" strokeLinecap="round" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      <div
        id={menuId}
        hidden={!menuOpen}
        className="fixed inset-x-0 bottom-0 top-[68px] z-40 overflow-y-auto bg-paper lg:hidden"
      >
        <nav aria-label="Mobile" className="container-site flex min-h-full flex-col pb-10 pt-4">
          <ul className="divide-y divide-line border-b border-line">
            {nav.primary.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-14 items-center justify-between text-[24px] font-semibold tracking-[-0.02em] text-ink"
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                  <span aria-hidden="true" className="text-cobalt">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow mb-2 mt-8">Company</p>
          <ul className="grid grid-cols-2 gap-x-4">
            {nav.company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="flex min-h-12 items-center text-[18px] font-medium text-ink" aria-current={isActive(pathname, item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-10">
            <Button href={nav.cta.href} className="w-full" arrow track="Book a workflow audit (mobile menu)">
              {nav.cta.label}
            </Button>
            <p className="mt-6 text-center text-[13px] text-body">
              <Wordmark text="Think Velociti" />
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
