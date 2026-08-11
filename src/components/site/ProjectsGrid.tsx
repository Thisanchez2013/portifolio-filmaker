import { useMemo, useState } from "react";
import { categories, projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function ProjectsGrid({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<string>("Todos");

  const visible = useMemo(() => {
    const list =
      filter === "Todos" ? projects : projects.filter((p) => p.category === filter);
    return limit ? list.slice(0, limit) : list;
  }, [filter, limit]);

  return (
    <section id="work" className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-8 border-b border-border pb-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <Reveal variant="mask" as="h2" className="display text-[11vw] leading-none sm:text-[7vw] lg:text-[5vw]">
          Selected Work
        </Reveal>
        <Reveal delay={120}>
          <div
            role="tablist"
            aria-label="Filtrar projetos por categoria"
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={filter === c}
                onClick={() => setFilter(c)}
                className={cn(
                  "py-1 text-xs uppercase tracking-[0.2em] transition-colors",
                  filter === c
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {visible.length === 0 ? (
        <p className="py-24 text-center text-sm text-muted-foreground">
          Nenhum projeto nesta categoria ainda.
        </p>
      ) : (
        <div className="mt-12 grid gap-x-8 gap-y-16 sm:gap-y-24 lg:grid-cols-12">
          {visible.map((p, i) => {
            // Ritmo editorial: alterna larguras e alturas no desktop
            const pattern = i % 5;
            const span =
              pattern === 0
                ? "lg:col-span-12"
                : pattern === 1 || pattern === 2
                  ? "lg:col-span-6"
                  : pattern === 3
                    ? "lg:col-span-7"
                    : "lg:col-span-5";
            const offset = pattern === 4 ? "lg:mt-24" : pattern === 2 ? "lg:mt-20" : "";
            return (
              <Reveal
                key={p.slug}
                delay={(i % 2) * 90}
                className={cn(span, offset)}
              >
                <ProjectCard
                  project={p}
                  aspect={pattern === 4 ? "tall" : "cinema"}
                  priority={i === 0}
                />
              </Reveal>
            );
          })}
        </div>
      )}
    </section>
  );
}
