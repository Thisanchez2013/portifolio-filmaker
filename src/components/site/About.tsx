import portrait from "@/assets/portrait.jpg";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "./SectionIntro";
import { useParallax } from "@/hooks/use-parallax";

export function About() {
  const parallax = useParallax<HTMLImageElement>(30);

  return (
    <section id="sobre" className="bg-surface px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <SectionIntro index="02" title="Behind the camera" meta="About" />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              {/* Detalhe "fita verde" segurando a foto */}
              <span
                aria-hidden="true"
                className="tape-strip absolute -top-2 left-8 z-10 w-24 sm:w-28"
              />
              <span
                aria-hidden="true"
                className="tape-strip absolute -bottom-2 right-8 z-10 w-16 rotate-[2deg] sm:w-20"
              />
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-elevated grain">
                <img
                  ref={parallax}
                  src={portrait}
                  alt={`Retrato de ${site.name}, filmmaker, segurando uma câmera de cinema`}
                  width={1200}
                  height={1600}
                  loading="lazy"
                  decoding="async"
                  className="h-[112%] w-full object-cover will-change-transform"
                />
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:pt-4">
            <Reveal delay={140}>
              <div className="max-w-xl space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  Sou {site.name}, filmmaker e editor de vídeos apaixonado por transformar ideias,
                  momentos e marcas em histórias visuais.
                </p>
                <p>
                  Da captação à edição final, desenvolvo projetos que unem narrativa, estética e
                  estratégia para criar conteúdos que realmente conectam.
                </p>
                <p className="text-foreground/80">
                  E sim — se você encontrar uma{" "}
                  <span className="tape-word text-accent-foreground">fita verde</span> em cada
                  equipamento, é assinatura minha.
                </p>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <dl className="mt-14 grid grid-cols-1 gap-px border-t border-border sm:grid-cols-3">
                {[
                  ["Base", site.location],
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
      </div>
    </section>
  );
}
