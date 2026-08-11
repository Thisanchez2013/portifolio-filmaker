import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { ProjectsGrid } from "@/components/site/ProjectsGrid";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Showreel } from "@/components/site/Showreel";
import { Clients } from "@/components/site/Clients";
import { Testimonials } from "@/components/site/Testimonials";
import { ContactCTA } from "@/components/site/ContactCTA";
import { site } from "@/data/site";

const title = `${site.name} — Filmmaker & Video Editor`;
const description =
  "Filmmaker e editor de vídeos especializado em filmes, eventos, campanhas, marcas e conteúdo para redes sociais.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: site.name,
          jobTitle: site.role,
          email: `mailto:${site.email}`,
          address: { "@type": "PostalAddress", addressCountry: "BR" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <h1 className="sr-only">
        {site.name} — {site.role}
      </h1>
      <Hero />
      <ProjectsGrid limit={6} />
      <About />
      <Services />
      <Showreel />
      <Clients />
      <Testimonials />
      <ContactCTA />
    </main>
  );
}
