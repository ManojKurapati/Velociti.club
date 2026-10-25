import { cn } from "@/lib/utils";

export const inputCls =
  "w-full min-h-12 rounded-[12px] border border-line bg-surface px-4 text-[16px] text-ink placeholder:text-[#8a8c93] transition-colors focus:border-cobalt focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-1 aria-[invalid=true]:border-[#C2261B]";

export function Field({
  id,
  label,
  error,
  hint,
  optional,
  children,
  className,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: React.ReactNode;
  optional?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-[14px] font-medium text-ink">
        {label}
        {optional && <span className="font-normal text-body"> (optional)</span>}
      </label>
      {children}
      {hint && !error && <p id={`${id}-hint`} className="text-[13px] text-[#8A5A00]">{hint}</p>}
      {error && (
        <p id={`${id}-error`} className="text-[13px] text-[#C2261B]">
          {error}
        </p>
      )}
    </div>
  );
}

/** Off-screen honeypot. Bots fill it; people never see it. */
export function Honeypot({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div aria-hidden="true" className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
      <label htmlFor="company_website">Company website</label>
      <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
