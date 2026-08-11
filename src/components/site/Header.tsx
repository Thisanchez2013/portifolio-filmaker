import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { site, whatsappLink } from "@/data/site";
import { cn } from "@/lib/utils";

const links = [
  { label: "Work", to: "/work" as const, hash: undefined },
  { label: "Sobre", to: "/" as const, hash: "sobre" },
  { label: "Serviços", to: "/" as const, hash: "servicos" },
  { label: "Contato", to: "/" as const, hash: "contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled && !open
          ? "border-b border-border bg-background/75 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 sm:px-8 md:py-6">
        <Link
          to="/"
          className="min-w-0 truncate text-sm font-semibold uppercase tracking-[0.22em] text-foreground"
          onClick={() => setOpen(false)}
        >
          {site.name}
          <span className="text-accent">.</span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash}
              className="underline-grow text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer noopener"
            className="border border-border px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Vamos conversar
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[6px] md:hidden"
        >
          <span
            className="block h-px w-7 bg-foreground transition-transform duration-300"
            style={open ? { transform: "translateY(3.5px) rotate(45deg)" } : undefined}
          />
          <span
            className="block h-px w-7 bg-foreground transition-transform duration-300"
            style={open ? { transform: "translateY(-3.5px) rotate(-45deg)" } : undefined}
          />
        </button>
      </div>

      {/* Menu fullscreen mobile */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background transition-[opacity,visibility] duration-500 md:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="flex h-full flex-col justify-between px-5 pb-12 pt-28">
          <nav aria-label="Menu mobile" className="flex flex-col">
            {links.map((l, i) => (
              <Link
                key={l.label}
                to={l.to}
                hash={l.hash}
                onClick={() => setOpen(false)}
                className="display border-b border-border py-6 text-[13vw] leading-none text-foreground"
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 600ms ease ${120 + i * 70}ms, transform 700ms cubic-bezier(0.16,1,0.3,1) ${120 + i * 70}ms`,
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="space-y-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer noopener"
              className="block border border-border px-6 py-4 text-center text-xs uppercase tracking-[0.24em]"
            >
              Vamos conversar
            </a>
            <p className="eyebrow">{site.role}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
