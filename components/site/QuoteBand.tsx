import { copy } from "./Copy";

export function QuoteBand({ quote }: { quote: { text: string; name: string; role: string; approval?: string } }) {
  return (
    <section className="night section-y bg-night text-night-body" aria-label="Customer quote">
      <figure className="container-site max-w-[1000px]">
        <span aria-hidden="true" className="block text-[80px] font-semibold leading-none text-cobalt-on-night">“</span>
        <blockquote className="mt-2 text-[28px] font-medium leading-[1.25] tracking-[-0.02em] text-white sm:text-[36px] lg:text-[44px]">
          {copy(quote.text)}
        </blockquote>
        <figcaption className="mt-10 flex flex-col gap-1">
          <span className="font-semibold text-white">{copy(quote.name)}</span>
          <span className="text-[15px]">{copy(quote.role)}</span>
          {quote.approval && <span className="mt-3 text-[13px]">{copy(quote.approval)}</span>}
        </figcaption>
      </figure>
    </section>
  );
}
