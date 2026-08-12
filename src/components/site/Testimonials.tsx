import { testimonials } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  return (
    <section className="bg-surface-2 px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="mono-label text-accent">06</span>
            <span className="h-px flex-1 bg-border" />
            <span className="mono-label text-muted-foreground">Words</span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author + i} delay={i * 110}>
              <figure className="flex h-full flex-col justify-between gap-8 border-t border-border pt-6">
                <blockquote className="text-lg leading-snug text-foreground sm:text-xl">
                  <span className="text-accent">“</span>
                  {t.quote}
                  <span className="text-accent">”</span>
                </blockquote>
                <figcaption className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {t.author}
                  <span className="block normal-case tracking-normal text-muted-foreground/70">
                    {t.company}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
