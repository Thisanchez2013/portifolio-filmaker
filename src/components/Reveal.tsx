import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** atraso em ms */
  delay?: number;
  as?: ElementType;
  variant?: "up" | "fade" | "mask";
};

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (variant === "mask") {
    return (
      <Tag ref={ref as never} className={cn("overflow-hidden pb-[0.08em]", className)}>
        <span
          className="block will-change-transform"
          style={{
            transform: shown ? "translateY(0)" : "translateY(110%)",
            opacity: shown ? 1 : 0,
            transition: `transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}ms, opacity 0.8s ease ${delay}ms`,
          }}
        >
          {children}
        </span>
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref as never}
      className={cn("will-change-transform", className)}
      style={{
        opacity: shown ? 1 : 0,
        transform:
          variant === "fade" ? undefined : shown ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.9s ease ${delay}ms, transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
