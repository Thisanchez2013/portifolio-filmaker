import portrait from "@/assets/portrait.jpg";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section
      id="sobre"
      className="mx-auto max-w-[1600px] border-t border-border px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface grain">
            <img
              src={portrait}
              alt={`Retrato de ${site.name}, filmmaker, segurando uma câmera de cinema`}
              width={1200}
              height={1600}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:pt-6">
          <Reveal variant="mask" as="h2" className="display text-[12vw] leading-none sm:text-[7vw] lg:text-[4.6vw]">
            Behind the camera.
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-10 max-w-xl space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Sou {site.name}, filmmaker e editor de vídeos apaixonado por transformar
                ideias, momentos e marcas em histórias visuais.
              </p>
              <p>
                Da captação à edição final, desenvolvo projetos que unem narrativa,
                estética e estratégia para criar conteúdos que realmente conectam.
              </p>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <dl className="mt-14 grid grid-cols-1 gap-px border-t border-border sm:grid-cols-3">
              {[
                ["Base", "Based in Brazil"],
                ["Status", "Available for projects"],
                ["Foco", "Events · Brands · Films"],
              ].map(([k, v]) => (
                <div key={k} className="border-b border-border py-5 sm:border-b-0 sm:pr-6">
                  <dt className="eyebrow">{k}</dt>
                  <dd className="mt-2 text-sm text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
