"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function LegacyRedirect({ to }: { to: string }) {
  const router = useRouter();
  useEffect(() => router.replace(to), [router, to]);
  return (
    <section className="section-y">
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <div className="container-site">
        <p className="eyebrow">Moved</p>
        <h1 className="t-h2 mt-5">This page has moved.</h1>
        <p className="mt-5 text-[18px]">
          Continue to{" "}
          <Link href={to} className="link">
            {to}
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
