import { useEffect, useRef, useState } from "react";

/**
 * Cursor discreto para desktop. Mostra "VIEW" / "PLAY" quando o elemento
 * sob o mouse define data-cursor, e cresce sobre botões/links (data-cursor-grow).
 */
export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [grow, setGrow] = useState(false);
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;
    setEnabled(true);

    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      setActive(true);
      const target = e.target as HTMLElement | null;
      const el = target?.closest?.("[data-cursor]");
      setLabel(el ? el.getAttribute("data-cursor") : null);
      setGrow(Boolean(target?.closest?.("[data-cursor-grow], a, button")) && !el);
    };
    const onLeave = () => setActive(false);

    const loop = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (!enabled) return null;

  const size = label ? 88 : grow ? 28 : 10;

  return (
    <div
      ref={dot}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ opacity: active ? 1 : 0, transition: "opacity 200ms ease" }}
    >
      <div
        className="grid place-items-center rounded-full border"
        style={{
          width: size,
          height: size,
          borderColor: label || grow ? "var(--color-accent)" : "rgba(242,242,238,0.5)",
          background: label ? "rgba(155,255,61,0.1)" : "rgba(242,242,238,0.06)",
          backdropFilter: "blur(2px)",
          transition:
            "width 300ms cubic-bezier(0.16,1,0.3,1), height 300ms cubic-bezier(0.16,1,0.3,1), border-color 300ms ease, background 300ms ease",
        }}
      >
        <span
          className="text-[10px] font-semibold tracking-[0.28em] text-accent"
          style={{ opacity: label ? 1 : 0, transition: "opacity 200ms ease" }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
