import { site, whatsappLink } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function ContactCTA() {
  return (
    <section
      id="contato"
      className="relative border-t border-border px-5 py-28 sm:px-8 sm:py-40"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal variant="mask" as="h2" className="display text-[13vw] leading-[0.9] sm:text-[9vw] lg:text-[6.4vw]">
          Vamos criar
        </Reveal>
        <Reveal variant="mask" as="h2" delay={90} className="display text-[13vw] leading-[0.9] text-muted-foreground/40 sm:text-[9vw] lg:text-[6.4vw]">
          algo juntos?
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Se você tem uma ideia, evento, campanha ou história para contar, vamos
            transformar isso em filme.
          </p>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center bg-accent px-8 py-4 text-xs uppercase tracking-[0.22em] text-accent-foreground transition-opacity hover:opacity-85"
            >
              Falar no WhatsApp
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center border border-border px-8 py-4 text-xs uppercase tracking-[0.22em] transition-colors hover:border-foreground"
            >
              Enviar um e-mail
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
