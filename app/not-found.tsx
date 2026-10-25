import { Button } from "@/components/site/Button";

export default function NotFound() {
  return (
    <section className="section-y">
      <div className="container-site max-w-[820px]">
        <p className="eyebrow">404</p>
        <h1 className="t-h1 mt-6">This page moved or never existed.</h1>
        <p className="t-lead mt-6">If you followed an old velociti.club link, the page now lives somewhere on thinkvelociti.com.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/" arrow>Go to the home page</Button>
          <Button href="/contact" variant="ghost">Book a workflow audit</Button>
        </div>
      </div>
    </section>
  );
}
