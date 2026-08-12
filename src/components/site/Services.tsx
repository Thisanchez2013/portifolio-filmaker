import { useState } from "react";
import { services } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "./SectionIntro";
import { cn } from "@/lib/utils";

export function Services() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      id="servicos"
      className="bg-surface-2 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1600px]">
        <SectionIntro index="03" title="O que eu faço" meta="Services" />

        <ul className="mt-12 border-t border-border">
          {services.map((s, i) => {
            const isActive = active === s.index;
            return (
              <Reveal as="li" key={s.index} delay={i * 60}>
                <div
                  onMouseEnter={() => setActive(s.index)}
                  onMouseLeave={() => setActive(null)}
                  className={cn(
                    "group relative grid gap-3 border-b border-border py-7 transition-colors duration-500 sm:grid-cols-12 sm:items-baseline sm:gap-8 sm:py-9",
                    isActive && "sm:bg-elevated/40",
                  )}
                >
                  {/* linha verde que cresce */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute bottom-0 left-0 h-px w-full origin-left bg-accent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                  <span
                    className={cn(
                      "mono-label transition-colors duration-300 sm:col-span-1",
                      isActive ? "text-accent" : "text-muted-foreground",
                    )}
                  >
                    {s.index}
                  </span>
                  <h3
                    className={cn(
                      "display text-3xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:col-span-5 sm:text-[3vw]",
                      isActive && "sm:translate-x-3",
                    )}
                  >
                    {s.title}
                  </h3>
                  <p className="max-w-xl text-sm leading-relaxed text-muted-foreground transition-colors duration-500 sm:col-span-6 sm:group-hover:text-foreground/80">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
