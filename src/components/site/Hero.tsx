import heroPoster from "@/assets/hero-poster.jpg";
import { site, whatsappLink } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden grain">
      {/* PLACEHOLDER DO SHOWREEL: quando houver o vídeo, troque a <img> por
          <video src={site.showreelUrl} poster={heroPoster} autoPlay muted loop playsInline /> */}
      {site.showreelUrl ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
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
          className="slow-zoom absolute inset-0 h-full w-full object-cover"
        />
      )}

      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/70" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-5 pb-14 sm:px-8 sm:pb-20">
        <Reveal variant="fade" delay={100}>
          <p className="eyebrow mb-6">
            Filmmaker <span className="mx-2 text-accent">·</span> Video Editor
            <span className="mx-2 text-accent">·</span> Brazil
          </p>
        </Reveal>

        <h1 className="display max-w-[16ch] whitespace-nowrap text-[9.5vw] leading-[0.95] sm:text-[9vw] lg:text-[7.2vw]">
          <Reveal variant="mask" delay={120} as="span" className="block">
            Histórias
          </Reveal>
          <Reveal variant="mask" delay={220} as="span" className="block">
            em movimento.
          </Reveal>
        </h1>

        <div className="mt-8 grid gap-8 border-t border-border pt-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <Reveal delay={340}>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Filmmaker &amp; Video Editor criando filmes, campanhas e conteúdos que
              transformam ideias em experiências visuais.
            </p>
          </Reveal>

          <Reveal delay={420}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-3 bg-foreground px-7 py-4 text-xs uppercase tracking-[0.22em] text-background transition-colors hover:bg-accent"
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
                className="inline-flex items-center justify-center border border-border px-7 py-4 text-xs uppercase tracking-[0.22em] transition-colors hover:border-accent hover:text-accent"
              >
                Vamos trabalhar juntos
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
