import { useMemo, useState } from "react";
import { categories, projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "./SectionIntro";
import { cn } from "@/lib/utils";

export function ProjectsGrid({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<string>("Todos");

  const visible = useMemo(() => {
    const list =
      filter === "Todos" ? projects : projects.filter((p) => p.category === filter);
    return limit ? list.slice(0, limit) : list;
  }, [filter, limit]);

  return (
    <section
      id="work"
      className="bg-background px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1600px]">
        <SectionIntro
          index="01"
          title="Selected Work"
          meta={`${projects.length} projetos`}
        />

        <Reveal delay={120}>
          <div
            role="tablist"
            aria-label="Filtrar projetos por categoria"
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-b border-border pb-6"
          >
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={filter === c}
                onClick={() => setFilter(c)}
                className={cn(
                  "relative py-1 text-xs uppercase tracking-[0.2em] transition-colors",
                  filter === c
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {c}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -bottom-1 left-0 h-px w-full origin-left bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    filter === c ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </button>
            ))}
          </div>
        </Reveal>

        {visible.length === 0 ? (
          <p className="py-24 text-center text-sm text-muted-foreground">
            Nenhum projeto nesta categoria ainda.
          </p>
        ) : (
          <div className="mt-12 grid gap-x-8 gap-y-14 sm:gap-y-20 md:grid-cols-2 lg:grid-cols-12 lg:gap-y-32">
            {visible.map((p, i) => {
              // Ritmo editorial: alterna larguras, alturas e offsets no desktop
              const pattern = i % 5;
              const full = pattern === 0;
              const span = full
                ? "md:col-span-2 lg:col-span-12"
                : pattern === 1 || pattern === 2
                  ? "lg:col-span-6"
                  : pattern === 3
                    ? "lg:col-span-7"
                    : "lg:col-span-5";
              const offset =
                pattern === 4 ? "lg:mt-28" : pattern === 2 ? "lg:mt-20" : "";
              return (
                <Reveal key={p.slug} delay={(i % 2) * 90} className={cn(span, offset)}>
                  <ProjectCard
                    project={p}
                    index={String(i + 1).padStart(2, "0")}
                    aspect={full ? "wide" : pattern === 4 ? "tall" : "cinema"}
                    priority={i === 0}
                  />
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
