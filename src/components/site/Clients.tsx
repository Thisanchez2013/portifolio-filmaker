import { clients } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Clients() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <Reveal>
          <h2 className="eyebrow">Selected Clients</h2>
        </Reveal>
      </div>

      <Reveal delay={100} className="mt-10 overflow-hidden">
        <div className="marquee flex w-max items-center gap-16 pr-16 sm:gap-24 sm:pr-24">
          {[...clients, ...clients].map((c, i) => (
            <span
              key={`${c}-${i}`}
              className="display shrink-0 text-3xl text-muted-foreground/60 transition-colors hover:text-foreground sm:text-5xl"
            >
              {c}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
