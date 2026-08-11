import { useEffect, useState } from "react";
import reelPoster from "@/assets/reel-poster.jpg";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Showreel() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section
      id="showreel"
      className="mx-auto max-w-[1600px] border-t border-border px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <Reveal variant="mask" as="h2" className="display text-[12vw] leading-none sm:text-[7vw] lg:text-[5vw]">
          Play the Reel
        </Reveal>
        <Reveal delay={100}>
          <p className="eyebrow">Showreel 2026 — 01:48</p>
        </Reveal>
      </div>

      <Reveal delay={140} className="mt-10">
        <button
          type="button"
          onClick={() => setOpen(true)}
          data-cursor="PLAY"
          aria-label="Assistir ao showreel"
          className="group relative block w-full overflow-hidden bg-surface grain"
        >
          <span className="block aspect-[16/9] w-full">
            <img
              src={reelPoster}
              alt="Frame de abertura do showreel"
              width={1920}
              height={1080}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover opacity-90 transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            />
          </span>
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid h-20 w-20 place-items-center rounded-full border border-foreground/40 bg-background/30 backdrop-blur-sm transition-colors duration-500 group-hover:border-accent sm:h-28 sm:w-28">
              <span className="text-[10px] uppercase tracking-[0.3em] text-foreground transition-colors group-hover:text-accent">
                Play
              </span>
            </span>
          </span>
        </button>
      </Reveal>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Showreel"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-background/95 px-4 animate-fade-in"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 text-xs uppercase tracking-[0.24em] text-muted-foreground hover:text-foreground"
          >
            Fechar
          </button>
          <div
            className="w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {site.showreelUrl ? (
              <video
                className="aspect-video w-full bg-black"
                src={site.showreelUrl}
                controls
                autoPlay
                playsInline
              />
            ) : (
              <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 border border-border bg-surface text-center">
                <p className="eyebrow">Showreel</p>
                <p className="max-w-md px-6 text-sm text-muted-foreground">
                  Adicione a URL do vídeo em <code>src/data/site.ts</code> (campo
                  <span className="text-foreground"> showreelUrl</span>) para o player
                  entrar no ar.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
