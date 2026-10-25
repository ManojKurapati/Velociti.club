import { cn } from "@/lib/utils";

type Tone = "light" | "white" | "night";

const tones: Record<Tone, string> = {
  light: "bg-paper",
  white: "bg-surface",
  night: "night bg-night text-night-body [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white",
};

export function Section({
  tone = "light",
  id,
  className,
  containerClassName,
  children,
  labelledBy,
}: {
  tone?: Tone;
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("section-y", tones[tone], className)}>
      <div className={cn("container-site", containerClassName)}>{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  id,
  className,
  align = "left",
  as: Tag = "h2",
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lead?: React.ReactNode;
  id?: string;
  className?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-[820px]", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <Tag id={id} className={Tag === "h1" ? "t-h1" : "t-h2"}>
        {title}
      </Tag>
      {lead && <p className="t-lead mt-6 max-w-[680px] [.text-center_&]:mx-auto">{lead}</p>}
    </div>
  );
}
