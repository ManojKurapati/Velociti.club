"use client";

import { useId, useState } from "react";
import { z } from "zod";
import { FormEndpointMissingError, postForm } from "@/lib/forms";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { Field, Honeypot, inputCls } from "./Field";

type FieldDef = { name: string; label: string; type?: "text" | "email" | "textarea" | "select"; options?: string[]; optional?: boolean; autoComplete?: string };

/**
 * Small validated form used on the Trust Center (documents request,
 * vulnerability report) and Careers (open application).
 */
export function SimpleForm({
  formType,
  fields,
  submitLabel,
  successMessage,
  fallbackEmail,
  endpoint,
  className,
}: {
  formType: string;
  fields: FieldDef[];
  submitLabel: string;
  successMessage: string;
  fallbackEmail: string;
  endpoint?: string;
  className?: string;
}) {
  const uid = useId();
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error" | "missing">("idle");

  const schema = z.object(
    Object.fromEntries(
      fields.map((f) => {
        const base = f.type === "email" ? z.email("Enter a valid email") : z.string().trim().min(1, `Enter ${f.label.toLowerCase()}`);
        return [f.name, f.optional ? z.string().optional() : base];
      }),
    ),
  );

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const i of parsed.error.issues) {
        const k = String(i.path[0]);
        errs[k] ??= i.message;
      }
      setErrors(errs);
      document.getElementById(`${uid}-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    if (honeypot) return setStatus("done");
    setStatus("sending");
    try {
      await postForm(endpoint, { type: formType, ...parsed.data });
      track("form_submitted", { form_type: formType, location: window.location.pathname });
      setStatus("done");
    } catch (err) {
      setStatus(err instanceof FormEndpointMissingError ? "missing" : "error");
    }
  };

  if (status === "done") {
    return (
      <p role="status" className={cn("rounded-[16px] border border-line bg-paper p-6 text-[16px] text-ink", className)}>
        {successMessage}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={cn("relative grid gap-5", className)}>
      {fields.map((f) => {
        const fid = `${uid}-${f.name}`;
        const common = {
          id: fid,
          name: f.name,
          value: values[f.name] ?? "",
          "aria-invalid": errors[f.name] ? true : undefined,
          "aria-describedby": errors[f.name] ? `${fid}-error` : undefined,
          onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
            setValues((v) => ({ ...v, [f.name]: e.target.value }));
            setErrors((er) => ({ ...er, [f.name]: "" }));
          },
        };
        return (
          <Field key={f.name} id={fid} label={f.label} optional={f.optional} error={errors[f.name] || undefined}>
            {f.type === "textarea" ? (
              <textarea rows={5} className={cn(inputCls, "py-3")} {...common} />
            ) : f.type === "select" ? (
              <select className={inputCls} {...common}>
                <option value="">Select…</option>
                {f.options?.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ) : (
              <input type={f.type ?? "text"} autoComplete={f.autoComplete} className={inputCls} {...common} />
            )}
          </Field>
        );
      })}
      <Honeypot value={honeypot} onChange={setHoneypot} />
      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-7 text-[16px] font-medium text-white hover:bg-[#262a33] disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : submitLabel}
        </button>
      </div>
      <div role="alert">
        {(status === "error" || status === "missing") && (
          <p className="rounded-[12px] border border-[#F2C6C2] bg-[#FDF2F1] p-4 text-[14px] text-ink">
            {status === "missing" ? (
              <>
                This form isn&apos;t connected yet <mark className="ph">[Set NEXT_PUBLIC_TRUST_FORM_ENDPOINT]</mark>.{" "}
              </>
            ) : (
              "Something went wrong. "
            )}
            Please email{" "}
            <a className="link" href={`mailto:${fallbackEmail}`}>
              {fallbackEmail}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
