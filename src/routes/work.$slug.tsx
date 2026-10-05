import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getNextProject, getProject } from "@/data/projects";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { ContactCTA } from "@/components/site/ContactCTA";
import { useParallax } from "@/hooks/use-parallax";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project, next: getNextProject(params.slug) };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Projeto não encontrado" }, { name: "robots", content: "noindex" }],
      };
    }
    const p = loaderData.project;
    const title = `${p.title} — ${site.name}`;
    const description = p.description;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project, next } = Route.useLoaderData();
  const heroParallax = useParallax<HTMLImageElement>(26);

  return (
    <main key={project.slug} className="animate-fade-in pt-28 sm:pt-32">
      <article>
        <header className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <Link
              to="/work"
              className="underline-grow mono-label text-muted-foreground hover:text-foreground"
            >
              ← Todos os projetos
            </Link>
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-10 flex items-center gap-4">
              <span className="mono-label text-accent">
                {project.categoryLabel ?? project.category}
              </span>
              <span className="h-px flex-1 bg-border" />
              <span className="mono-label text-muted-foreground">{project.year}</span>
            </div>
          </Reveal>

          <Reveal
            variant="mask"
            as="h1"
            delay={80}
            className="display mt-6 text-[13vw] leading-[0.9] sm:text-[8vw] lg:text-[6vw]"
          >
            {project.title}
          </Reveal>

          <Reveal delay={160}>
            <dl className="mt-12 grid gap-px border-t border-border sm:grid-cols-4">
              {[
                ["Cliente", project.client],
                ["Categoria", project.categoryLabel ?? project.category],
                ["Ano", project.year],
                ["Responsabilidades", project.roles.join(" · ")],
              ].map(([k, v]) => (
                <div key={k} className="border-b border-border py-5 sm:border-b-0 sm:pr-6">
                  <dt className="eyebrow">{k}</dt>
                  <dd className="mt-2 text-sm text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </header>

        {/* Vídeo principal — placeholder com poster até o arquivo final */}
        <Reveal delay={120} className="mt-14 px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1600px]">
            <div className="relative aspect-video w-full overflow-hidden bg-elevated grain">
              {project.video ? (
                <video
                  className="h-full w-full object-cover"
                  src={project.video}
                  poster={project.thumbnail}
                  controls
                  playsInline
                />
              ) : (
                <>
                  <img
                    ref={heroParallax}
                    src={project.thumbnail}
                    alt={`Frame principal de ${project.title}`}
                    width={1600}
                    height={900}
                    className="h-[110%] w-full object-cover will-change-transform"
                  />
                  <span data-cursor="PLAY" className="absolute inset-0 grid place-items-center">
                    <span className="mono-label grid h-20 w-20 place-items-center rounded-full border border-foreground/40 bg-background/30 backdrop-blur-sm sm:h-28 sm:w-28">
                      Play
                    </span>
                  </span>
                </>
              )}
            </div>
          </div>
        </Reveal>

        <section className="bg-surface mt-14 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-[1600px]">
            <Reveal>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {project.description}
              </p>
            </Reveal>

            {project.stills && project.stills.length > 0 && (
              <div className="mt-16 grid gap-8 sm:grid-cols-2">
                {project.stills.map((s: string, i: number) => (
                  <Reveal key={s + i} delay={i * 90}>
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-elevated grain">
                      <span className="mono-label absolute bottom-3 left-3 z-10 text-foreground/60">
                        FRAME {String(i + 1).padStart(3, "0")}
                      </span>
                      <img
                        src={s}
                        alt={`Still de ${project.title}`}
                        width={1600}
                        height={900}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>

        <nav
          aria-label="Próximo projeto"
          className="bg-surface-2 px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
        >
          <div className="mx-auto max-w-[1600px]">
            <div className="flex items-center gap-4">
              <span className="mono-label text-accent">Next</span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <Link
              to="/work/$slug"
              params={{ slug: next.slug }}
              data-cursor="VIEW"
              className="group mt-8 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] md:items-center"
            >
              <h2 className="display text-[12vw] leading-none sm:text-[7vw] lg:text-[5vw]">
                <span className="inline-block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3">
                  {next.title}{" "}
                  <span className="text-accent transition-transform duration-700 group-hover:translate-x-2">
                    →
                  </span>
                </span>
              </h2>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-elevated grain">
                <img
                  src={next.thumbnail}
                  alt={`Frame de ${next.title}`}
                  width={1600}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100"
                />
              </div>
            </Link>
          </div>
        </nav>
      </article>

      <ContactCTA />
    </main>
  );
}
