import { useEffect, useState } from "react";
import reelPoster from "@/assets/reel-poster.jpg";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "./SectionIntro";

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
    <section id="showreel" className="bg-background px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <SectionIntro index="04" title="Play the Reel" meta="Showreel 2026 · 01:48" />

        <Reveal delay={140} className="mt-10">
          <button
            type="button"
            onClick={() => setOpen(true)}
            data-cursor="PLAY"
            aria-label="Assistir ao showreel"
            className="group relative block w-full overflow-hidden bg-elevated grain"
          >
            <span className="block aspect-[16/9] w-full">
              <img
                src={reelPoster}
                alt="Frame de abertura do showreel"
                width={1920}
                height={1080}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover opacity-90 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              />
            </span>
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid h-20 w-20 place-items-center rounded-full border border-foreground/40 bg-background/30 backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-accent sm:h-28 sm:w-28">
                <span className="mono-label text-foreground transition-colors group-hover:text-accent">
                  Play
                </span>
              </span>
            </span>
            <span className="absolute bottom-4 left-4 flex items-center gap-2">
              <span className="rec-dot inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="mono-label text-foreground/60">FRAME 024</span>
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-accent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
            />
          </button>
        </Reveal>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Showreel"
          className="fixed inset-0 z-[80] flex animate-fade-in items-center justify-center bg-background/95 px-4"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 mono-label text-muted-foreground hover:text-accent"
          >
            Fechar
          </button>
          <div className="w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            {site.showreelUrl ? (
              <video
                className="aspect-video w-full bg-elevated"
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
                  <span className="text-accent"> showreelUrl</span>) para o player entrar no ar.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
