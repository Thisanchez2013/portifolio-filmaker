import { testimonials } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-[1600px] border-t border-border px-5 py-24 sm:px-8 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
        {testimonials.map((t, i) => (
          <Reveal key={t.author + i} delay={i * 110}>
            <figure className="flex h-full flex-col justify-between gap-8">
              <blockquote className="text-lg leading-snug text-foreground sm:text-xl">
                <span className="text-accent">“</span>
                {t.quote}
                <span className="text-accent">”</span>
              </blockquote>
              <figcaption className="border-t border-border pt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {t.author}
                <span className="block normal-case tracking-normal text-muted-foreground/70">
                  {t.company}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
