import { clients } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Clients() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="mono-label text-accent">05</span>
            <span className="h-px flex-1 bg-border" />
            <span className="mono-label text-muted-foreground">Selected Clients</span>
          </div>
        </Reveal>
      </div>

      <Reveal delay={100} className="mt-10 overflow-hidden">
        <div className="marquee flex w-max items-center gap-14 pr-14 sm:gap-24 sm:pr-24">
          {[...clients, ...clients].map((c, i) => (
            <span
              key={`${c}-${i}`}
              className="display shrink-0 text-3xl text-muted-foreground/50 transition-colors duration-300 hover:text-accent sm:text-5xl"
            >
              {c}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
