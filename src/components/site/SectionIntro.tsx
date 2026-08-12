import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

type Props = {
  /** Numeração da seção, ex. "01" */
  index: string;
  title: string;
  /** Texto pequeno à direita (timecode, contagem, etc.) */
  meta?: string;
  className?: string;
  as?: "h2" | "h1";
};

/**
 * Divisor + cabeçalho de seção: linha fina com detalhe verde,
 * numeração em mono e título editorial grande.
 */
export function SectionIntro({ index, title, meta, className, as = "h2" }: Props) {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center gap-4">
        <span className="mono-label text-accent">{index}</span>
        <span className="h-px flex-1 bg-border" />
        {meta ? <span className="mono-label text-muted-foreground">{meta}</span> : null}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <Reveal
          variant="mask"
          as={as}
          className="display text-[13vw] leading-[0.92] sm:text-[8vw] lg:text-[5.4vw]"
        >
          {title}
        </Reveal>
      </div>
    </div>
  );
}
