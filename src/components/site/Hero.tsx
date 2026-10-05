import heroPoster from "@/assets/hero-poster.jpg";
import { site, whatsappLink } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section className="vignette relative h-[100svh] min-h-[560px] w-full overflow-hidden grain">
      {/* PLACEHOLDER DO SHOWREEL: quando houver o vídeo, o <video> assume automaticamente */}
      {site.showreelUrl ? (
        <video
          className="absolute inset-0 h-full w-full object-cover object-[50%_40%]"
          src={site.showreelUrl}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <img
          src={heroPoster}
          alt="Set de filmagem noturno com operador de câmera em contraluz"
          width={1920}
          height={1080}
          className="slow-zoom absolute inset-0 h-full w-full object-cover object-[50%_40%]"
        />
      )}

      <div className="absolute inset-0 bg-background/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-background/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />

      {/* Easter eggs de linguagem audiovisual */}
      <div className="absolute left-5 top-24 z-10 hidden items-center gap-2 sm:flex sm:px-3 md:left-8">
        <span className="rec-dot inline-block h-2 w-2 rounded-full bg-accent" />
        <span className="mono-label text-foreground/70">REC</span>
        <span className="mono-label text-foreground/40">00:00:12:24</span>
      </div>
      <div className="absolute right-5 top-24 z-10 hidden md:block md:right-8">
        <span className="mono-label text-foreground/40">4K · 24FPS</span>
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
        <Reveal variant="fade" delay={100}>
          <p className="eyebrow mb-5 text-foreground/70">
            Filmmaker <span className="mx-2 text-accent">·</span> Video Editor
            <span className="mx-2 text-accent">·</span> Brazil
          </p>
        </Reveal>

        <h1 className="display max-w-[18ch] text-[11.5vw] leading-[0.92] sm:text-[10vw] lg:text-[7.2vw]">
          <Reveal variant="mask" delay={120} as="span" className="block">
            Histórias
          </Reveal>
          <Reveal variant="mask" delay={220} as="span" className="block">
            em <span className="tape-word">movimento</span>.
          </Reveal>
        </h1>

        <div className="mt-10 grid gap-8 border-t border-border pt-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <Reveal delay={340}>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Filmmaker &amp; Video Editor criando filmes, campanhas e conteúdos que transformam
              ideias em experiências visuais.
            </p>
          </Reveal>

          <Reveal delay={420}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#work"
                data-cursor-grow="true"
                className="btn-wipe group inline-flex items-center justify-center gap-3 border border-foreground bg-foreground px-7 py-4 text-xs uppercase tracking-[0.22em] text-background"
              >
                Ver projetos
                <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer noopener"
                data-cursor-grow="true"
                className="btn-wipe group inline-flex items-center justify-center gap-3 border border-border px-7 py-4 text-xs uppercase tracking-[0.22em] text-foreground"
              >
                Vamos trabalhar juntos
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-6 right-5 z-10 hidden items-center gap-3 md:flex md:right-8">
        <span className="mono-label text-muted-foreground">Scroll</span>
        <span className="relative block h-12 w-px overflow-hidden bg-border">
          <span className="scroll-hint absolute inset-x-0 top-0 block h-1/2 bg-accent" />
        </span>
      </div>
    </section>
  );
}
