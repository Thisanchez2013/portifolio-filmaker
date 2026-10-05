import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type Props = {
  project: Project;
  /** Proporção da thumbnail no grid */
  aspect?: "cinema" | "tall" | "wide";
  priority?: boolean;
  /** Numeração editorial, ex. "01" */
  index?: string;
};

export function ProjectCard({ project, aspect = "cinema", priority = false, index }: Props) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      data-cursor="VIEW"
      className="group block focus-visible:outline-offset-8"
      aria-label={`${project.title} — ${project.client}, ${project.year}`}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden bg-elevated grain",
          aspect === "tall"
            ? "aspect-[4/5]"
            : aspect === "wide"
              ? "aspect-[16/9] lg:aspect-[21/9]"
              : "aspect-[16/9]",
        )}
      >
        <img
          src={project.thumbnail}
          alt={`Frame do projeto ${project.title} para ${project.client}`}
          width={1600}
          height={900}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:scale-[1.03]"
        />

        {/* Escurecimento + informações no hover (desktop) */}
        <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-background/85 via-background/10 to-transparent opacity-0 transition-opacity duration-500 md:block md:group-hover:opacity-100" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden p-6 md:block">
          <div className="translate-y-3 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
            <span className="mono-label text-accent">
              {index ? `${index} / ` : ""}
              {project.categoryLabel ?? project.category}
            </span>
            <p className="display mt-2 text-2xl lg:text-3xl">{project.title}</p>
          </div>
        </div>

        {/* Detalhe verde: linha que cresce na base da imagem */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:scale-x-100"
        />

        <span className="absolute left-4 top-4 border border-foreground/20 bg-background/50 px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-foreground/90 backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
        <div className="min-w-0">
          <div className="flex items-baseline gap-3">
            {index ? <span className="mono-label text-accent">{index}</span> : null}
            <h3 className="display text-xl sm:text-2xl lg:text-3xl">
              <span className="underline-grow inline-block">{project.title}</span>
            </h3>
          </div>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {project.client} — {project.categoryLabel ?? project.category}
          </p>
        </div>
        <span className="mono-label shrink-0 text-muted-foreground">{project.year}</span>
      </div>
    </Link>
  );
}
