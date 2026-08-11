import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getNextProject, getProject } from "@/data/projects";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { ContactCTA } from "@/components/site/ContactCTA";

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

  return (
    <main className="pt-28 sm:pt-32">
      <article>
        <header className="mx-auto max-w-[1600px] px-5 sm:px-8">
          <Reveal>
            <Link
              to="/work"
              className="underline-grow text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
            >
              ← Todos os projetos
            </Link>
          </Reveal>

          <Reveal variant="mask" as="h1" delay={80} className="display mt-8 text-[13vw] leading-[0.9] sm:text-[8vw] lg:text-[6vw]">
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
        <Reveal delay={120} className="mt-14 px-5 sm:px-8">
          <div className="mx-auto max-w-[1600px]">
            <div className="relative aspect-video w-full overflow-hidden bg-surface grain">
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
                    src={project.thumbnail}
                    alt={`Frame principal de ${project.title}`}
                    width={1600}
                    height={900}
                    className="h-full w-full object-cover"
                  />
                  <span
                    data-cursor="PLAY"
                    className="absolute inset-0 grid place-items-center"
                  >
                    <span className="grid h-20 w-20 place-items-center rounded-full border border-foreground/40 bg-background/30 text-[10px] uppercase tracking-[0.3em] backdrop-blur-sm sm:h-28 sm:w-28">
                      Play
                    </span>
                  </span>
                </>
              )}
            </div>
          </div>
        </Reveal>

        <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {project.description}
            </p>
          </Reveal>

          {project.stills && project.stills.length > 0 && (
            <div className="mt-16 grid gap-8 sm:grid-cols-2">
              {project.stills.map((s, i) => (
                <Reveal key={s + i} delay={i * 90}>
                  <div className="aspect-[16/9] w-full overflow-hidden bg-surface grain">
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
        </section>

        <nav
          aria-label="Próximo projeto"
          className="border-t border-border px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-[1600px]">
            <p className="eyebrow">Próximo projeto</p>
            <Link
              to="/work/$slug"
              params={{ slug: next.slug }}
              data-cursor="VIEW"
              className="group mt-6 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] md:items-center"
            >
              <h2 className="display text-[12vw] leading-none sm:text-[7vw] lg:text-[5vw]">
                <span className="inline-block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3">
                  {next.title} →
                </span>
              </h2>
              <div className="aspect-[16/9] w-full overflow-hidden bg-surface grain">
                <img
                  src={next.thumbnail}
                  alt={`Frame de ${next.title}`}
                  width={1600}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
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
