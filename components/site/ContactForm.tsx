"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
import * as z from "zod/mini";
import { contactPage } from "@/content/contact";
import { site } from "@/content/site";
import { FormEndpointMissingError, isFreeEmail, postForm } from "@/lib/forms";
import { identify, track } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { Field, Honeypot, inputCls } from "./Field";
import { CalendlyEmbed } from "./CalendlyEmbed";

// zod/mini keeps the validator small; the contact route is prefetched from every page.
const required = (msg: string) => z.string().check(z.trim(), z.minLength(1, msg));

const schema = z.object({
  firstName: required("Enter your first name"),
  lastName: required("Enter your last name"),
  email: z.email("Enter a valid work email"),
  jobTitle: required("Enter your job title"),
  company: required("Enter your company"),
  country: required("Enter your country"),
  industry: z.string().check(z.minLength(1, "Choose an industry")),
  companySize: z.string().check(z.minLength(1, "Choose a company size")),
  interests: z.array(z.string()).check(z.minLength(1, "Pick at least one")),
  message: z.optional(z.string().check(z.maxLength(2000, "Keep it under 2,000 characters"))),
});

type Values = z.infer<typeof schema>;
type Errors = Partial<Record<keyof Values, string>>;

const empty: Values = {
  firstName: "",
  lastName: "",
  email: "",
  jobTitle: "",
  company: "",
  country: "",
  industry: "",
  companySize: "",
  interests: [],
  message: "",
};

const ENDPOINT = process.env.NEXT_PUBLIC_LEAD_ENDPOINT;

/** Two-step audit booking: details form, then the Calendly inline embed. */
export function ContactForm() {
  const uid = useId();
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error" | "done">("idle");
  const [submitError, setSubmitError] = useState<React.ReactNode>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const stepRef = useRef<HTMLDivElement>(null);
  const id = (k: string) => `${uid}-${k}`;

  const set = <K extends keyof Values>(k: K, v: Values[K]) => {
    setValues((s) => ({ ...s, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const toggleInterest = (v: string) =>
    set("interests", values.interests.includes(v) ? values.interests.filter((x) => x !== v) : [...values.interests, v]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof Values;
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      const first = Object.keys(errs)[0];
      formRef.current?.querySelector<HTMLElement>(`[data-field="${first}"]`)?.focus();
      return;
    }
    // Bots fill the honeypot: pretend success without sending.
    if (honeypot) {
      setStatus("done");
      return;
    }
    setStatus("sending");
    setSubmitError(null);
    try {
      await postForm(ENDPOINT, { type: "workflow_audit", ...parsed.data, is_free_email: isFreeEmail(parsed.data.email) });
      // Identify only after the lead is accepted (AGENTS.md).
      identify(parsed.data.email, {
        $email: parsed.data.email,
        $first_name: parsed.data.firstName,
        $last_name: parsed.data.lastName,
        job_title: parsed.data.jobTitle,
        company: parsed.data.company,
      });
      track("lead_submitted", {
        industry: parsed.data.industry,
        company_size: parsed.data.companySize,
        country: parsed.data.country,
        automation_interests: parsed.data.interests,
        is_free_email: isFreeEmail(parsed.data.email),
      });
      setStatus("done");
      requestAnimationFrame(() => stepRef.current?.focus());
    } catch (err) {
      setStatus("error");
      setSubmitError(
        err instanceof FormEndpointMissingError ? (
          <>
            The form isn&apos;t connected yet <mark className="ph">[Set NEXT_PUBLIC_LEAD_ENDPOINT]</mark>. Email{" "}
            <a className="link" href={`mailto:${site.emails.hello}`}>{site.emails.hello}</a> or{" "}
            <a className="link" href={site.calendlyUrl}>book directly on Calendly</a>.
          </>
        ) : (
          <>
            Something went wrong sending your details. Please try again, or email{" "}
            <a className="link" href={`mailto:${site.emails.hello}`}>{site.emails.hello}</a>.
          </>
        ),
      );
    }
  };

  if (status === "done") {
    return (
      <div ref={stepRef} tabIndex={-1} className="outline-none">
        <p className="t-mono text-cobalt">Step 2 of 2</p>
        <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.02em]">{contactPage.step2.title}</h2>
        <p className="mt-2 text-[16px]">{contactPage.step2.body}</p>
        <CalendlyEmbed className="mt-6" name={`${values.firstName} ${values.lastName}`.trim()} email={values.email} />
      </div>
    );
  }

  const freeMail = values.email.includes("@") && isFreeEmail(values.email);
  const aria = (k: keyof Values) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${id(k)}-error` : k === "email" && freeMail ? `${id(k)}-hint` : undefined,
    "data-field": k,
  });

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="relative">
      <p className="t-mono text-cobalt">Step 1 of 2</p>
      <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.02em]">Tell us about your operations.</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field id={id("firstName")} label="First name" error={errors.firstName}>
          <input id={id("firstName")} className={inputCls} autoComplete="given-name" value={values.firstName} onChange={(e) => set("firstName", e.target.value)} {...aria("firstName")} />
        </Field>
        <Field id={id("lastName")} label="Last name" error={errors.lastName}>
          <input id={id("lastName")} className={inputCls} autoComplete="family-name" value={values.lastName} onChange={(e) => set("lastName", e.target.value)} {...aria("lastName")} />
        </Field>
        <Field
          id={id("email")}
          label="Work email"
          error={errors.email}
          className="sm:col-span-2"
          hint={freeMail ? "That looks like a personal address. A work email helps us prepare for your audit — but you can continue." : undefined}
        >
          <input id={id("email")} type="email" className={inputCls} autoComplete="email" value={values.email} onChange={(e) => set("email", e.target.value)} {...aria("email")} />
        </Field>
        <Field id={id("jobTitle")} label="Job title" error={errors.jobTitle}>
          <input id={id("jobTitle")} className={inputCls} autoComplete="organization-title" value={values.jobTitle} onChange={(e) => set("jobTitle", e.target.value)} {...aria("jobTitle")} />
        </Field>
        <Field id={id("company")} label="Company" error={errors.company}>
          <input id={id("company")} className={inputCls} autoComplete="organization" value={values.company} onChange={(e) => set("company", e.target.value)} {...aria("company")} />
        </Field>
        <Field id={id("country")} label="Country" error={errors.country}>
          <input id={id("country")} className={inputCls} autoComplete="country-name" value={values.country} onChange={(e) => set("country", e.target.value)} {...aria("country")} />
        </Field>
        <Field id={id("industry")} label="Industry" error={errors.industry}>
          <select id={id("industry")} className={cn(inputCls, "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 12 12%22><path d=%22M2.5 4.5 6 8l3.5-3.5%22 fill=%22none%22 stroke=%22%230F1115%22 stroke-width=%221.6%22/></svg>')] bg-[right_16px_center] bg-no-repeat pr-10")} value={values.industry} onChange={(e) => set("industry", e.target.value)} {...aria("industry")}>
            <option value="">Select…</option>
            {contactPage.industries.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </Field>
        <fieldset className="sm:col-span-2" aria-describedby={errors.companySize ? `${id("companySize")}-error` : undefined}>
          <legend className="mb-2 text-[14px] font-medium text-ink">Company size</legend>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {contactPage.companySizes.map((s, i) => (
              <label key={s} className="relative">
                <input
                  type="radio"
                  name="companySize"
                  value={s}
                  checked={values.companySize === s}
                  onChange={() => set("companySize", s)}
                  className="peer sr-only"
                  {...(i === 0 ? { "data-field": "companySize" } : {})}
                />
                <span className="flex min-h-12 cursor-pointer items-center justify-center rounded-[12px] border border-line bg-surface px-3 text-[15px] text-ink transition-colors peer-checked:border-ink peer-checked:bg-ink peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-cobalt">
                  {s}
                </span>
              </label>
            ))}
          </div>
          {errors.companySize && <p id={`${id("companySize")}-error`} className="mt-2 text-[13px] text-[#C2261B]">{errors.companySize}</p>}
        </fieldset>
        <fieldset className="sm:col-span-2" aria-describedby={errors.interests ? `${id("interests")}-error` : undefined}>
          <legend className="mb-2 text-[14px] font-medium text-ink">What do you want to automate?</legend>
          <div className="flex flex-wrap gap-2">
            {contactPage.interests.map((s, i) => {
              const on = values.interests.includes(s);
              return (
                <button
                  key={s}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggleInterest(s)}
                  className={cn(
                    "inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-[15px] transition-colors",
                    on ? "border-cobalt bg-cobalt text-white" : "border-line bg-surface text-ink hover:border-ink",
                  )}
                  {...(i === 0 ? { "data-field": "interests" } : {})}
                >
                  {on && (
                    <svg aria-hidden="true" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M2.5 6.5 5 9l4.5-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {s}
                </button>
              );
            })}
          </div>
          {errors.interests && <p id={`${id("interests")}-error`} className="mt-2 text-[13px] text-[#C2261B]">{errors.interests}</p>}
        </fieldset>
        <Field id={id("message")} label="Anything else we should know?" optional error={errors.message} className="sm:col-span-2">
          <textarea id={id("message")} rows={4} className={cn(inputCls, "py-3")} value={values.message} onChange={(e) => set("message", e.target.value)} {...aria("message")} />
        </Field>
      </div>
      <Honeypot value={honeypot} onChange={setHoneypot} />
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-7 text-[16px] font-medium text-white transition-colors hover:bg-[#262a33] disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Continue to pick a time"}
          <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <p className="text-[13px]">
          By continuing you agree to our <Link href="/legal/privacy" className="link">privacy policy</Link>.
        </p>
      </div>
      <div role="alert" aria-live="assertive">
        {status === "error" && submitError && <p className="mt-5 rounded-[12px] border border-[#F2C6C2] bg-[#FDF2F1] p-4 text-[14px] text-ink">{submitError}</p>}
      </div>
    </form>
  );
}
