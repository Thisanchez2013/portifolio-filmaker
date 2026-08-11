import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type Props = {
  project: Project;
  /** Proporção da thumbnail no grid */
  aspect?: "cinema" | "tall";
  priority?: boolean;
};

export function ProjectCard({ project, aspect = "cinema", priority = false }: Props) {
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
          "relative w-full overflow-hidden bg-surface grain",
          aspect === "tall" ? "aspect-[4/5]" : "aspect-[16/9]",
        )}
      >
        <img
          src={project.thumbnail}
          alt={`Frame do projeto ${project.title} para ${project.client}`}
          width={1600}
          height={900}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-background/25 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 border border-foreground/25 bg-background/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-foreground/90 backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
        <div className="min-w-0">
          <h3 className="display text-xl sm:text-2xl">
            <span className="underline-grow inline-block">{project.title}</span>
          </h3>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {project.client} — {project.categoryLabel ?? project.category}
          </p>
        </div>
        <span className="shrink-0 text-xs tracking-[0.18em] text-muted-foreground">
          {project.year}
        </span>
      </div>
    </Link>
  );
}
