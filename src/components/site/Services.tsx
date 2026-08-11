import { services } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Services() {
  return (
    <section
      id="servicos"
      className="mx-auto max-w-[1600px] border-t border-border px-5 py-24 sm:px-8 sm:py-32"
    >
      <Reveal variant="mask" as="h2" className="display text-[12vw] leading-none sm:text-[7vw] lg:text-[5vw]">
        O que eu faço
      </Reveal>

      <ul className="mt-14 border-t border-border">
        {services.map((s, i) => (
          <Reveal as="li" key={s.index} delay={i * 60}>
            <div className="group grid gap-3 border-b border-border py-8 transition-colors sm:grid-cols-12 sm:items-baseline sm:gap-8 sm:py-10">
              <span className="text-xs tracking-[0.24em] text-muted-foreground transition-colors group-hover:text-accent sm:col-span-1">
                {s.index}
              </span>
              <h3 className="display text-3xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:col-span-5 sm:text-[3vw] sm:group-hover:translate-x-3">
                {s.title}
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:col-span-6">
                {s.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
