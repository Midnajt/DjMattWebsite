import { motion } from "framer-motion";
import { densityClass } from "@/config/theme";
import { useTheme } from "@/lib/theme-provider";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  const { preset } = useTheme();

  return (
    <motion.section
      id={id}
      className={cn(densityClass(preset.density), "scroll-mt-28", className)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}>
      {children}
    </div>
  );
}

export function SectionHeader({
  kicker,
  title,
  subtitle,
  className,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-10 max-w-2xl", className)}>
      <p className="text-accent text-sm font-medium tracking-widest uppercase">
        {kicker}
      </p>
      <h2 className="mt-2 text-3xl leading-tight md:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="text-muted-foreground mt-3 text-base md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}

export function SectionPhoto({
  src,
  objectClassName = "object-cover object-center",
}: {
  src: string;
  objectClassName?: string;
}) {
  return (
    <div className="section-photo pointer-events-none absolute inset-0">
      <img
        src={src}
        alt=""
        aria-hidden
        className={cn("absolute inset-0 size-full", objectClassName)}
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}
