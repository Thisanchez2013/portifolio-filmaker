import { site, whatsappLink } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function ContactCTA() {
  return (
    <section
      id="contato"
      className="relative bg-background px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="mono-label text-accent">07</span>
            <span className="h-px flex-1 bg-border" />
            <span className="mono-label text-muted-foreground">Contato</span>
          </div>
        </Reveal>

        <h2 className="display mt-10 text-[13vw] leading-[0.9] sm:text-[9vw] lg:text-[6.4vw]">
          <Reveal variant="mask" as="span" className="block">
            Vamos criar
          </Reveal>
          <Reveal variant="mask" as="span" delay={90} className="block text-foreground/35">
            algo <span className="tape-word text-foreground">juntos</span>?
          </Reveal>
        </h2>

        <Reveal delay={200}>
          <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Se você tem uma ideia, evento, campanha ou história para contar, vamos transformar isso
            em filme.
          </p>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer noopener"
              data-cursor-grow="true"
              className="group inline-flex items-center justify-center gap-3 border border-accent bg-accent px-8 py-4 text-xs uppercase tracking-[0.22em] text-accent-foreground transition-opacity duration-300 hover:opacity-85"
            >
              Falar no WhatsApp
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
            <a
              href={`mailto:${site.email}`}
              data-cursor-grow="true"
              className="btn-wipe group inline-flex items-center justify-center gap-3 border border-border px-8 py-4 text-xs uppercase tracking-[0.22em]"
            >
              Enviar um e-mail
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3">
            {[
              ["Instagram", site.instagram],
              ["Vimeo", site.vimeo],
              ["YouTube", site.youtube],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="underline-grow text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
