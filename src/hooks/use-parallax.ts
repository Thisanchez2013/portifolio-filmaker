import { useEffect, useRef } from "react";

/**
 * Parallax muito sutil e GPU-friendly (apenas transform).
 * Desativado quando o usuário pede menos movimento.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(strength = 40) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let visible = false;

    const update = () => {
      raf = 0;
      const rect = node.getBoundingClientRect();
      const progress = (rect.top + rect.height / 2) / window.innerHeight - 0.5;
      node.style.transform = `translate3d(0, ${(-progress * strength).toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (!visible || raf) return;
      raf = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? false;
        if (visible) onScroll();
      },
      { rootMargin: "20% 0px" },
    );
    io.observe(node);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);

  return ref;
}
