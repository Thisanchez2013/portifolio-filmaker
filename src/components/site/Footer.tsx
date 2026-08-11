import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border px-5 py-14 sm:px-8">
      <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-[minmax(0,1fr)_auto]">
        <div>
          <p className="display text-2xl">
            {site.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {site.role}
          </p>
          <p className="mt-8 text-xs tracking-[0.18em] text-muted-foreground/70">
            Available for selected projects.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <nav aria-label="Redes sociais" className="flex flex-wrap gap-x-6 gap-y-2">
            {(
              [
                ["Instagram", site.instagram],
                ["Vimeo", site.vimeo],
                ["YouTube", site.youtube],
                ["E-mail", `mailto:${site.email}`],
              ] as const
            ).map(([label, href]) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer noopener"
                className="underline-grow text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
          <p className="mt-6 text-xs tracking-[0.18em] text-muted-foreground/70">
            {site.location}
          </p>
          <p className="text-xs tracking-[0.18em] text-muted-foreground/70">
            Copyright © {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
