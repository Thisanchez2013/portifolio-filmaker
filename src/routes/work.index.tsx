import { createFileRoute } from "@tanstack/react-router";
import { ProjectsGrid } from "@/components/site/ProjectsGrid";
import { ContactCTA } from "@/components/site/ContactCTA";
import { site } from "@/data/site";

const title = `Work — ${site.name}`;
const description =
  "Projetos selecionados: filmes, campanhas, eventos, institucionais e conteúdo para redes sociais.";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/work" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  return (
    <main className="pt-24 sm:pt-28">
      <ProjectsGrid />
      <ContactCTA />
    </main>
  );
}
