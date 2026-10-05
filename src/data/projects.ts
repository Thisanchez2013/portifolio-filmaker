import work01 from "@/assets/work-01.jpg";
import work02 from "@/assets/work-02.jpg";
import work03 from "@/assets/work-03.jpg";
import work04 from "@/assets/work-04.jpg";
import work05 from "@/assets/work-05.jpg";
import work06 from "@/assets/work-06.jpg";
import work07 from "@/assets/work-07.jpg";
import work08 from "@/assets/work-08.jpg";

export const categories = [
  "Todos",
  "Eventos",
  "Marcas",
  "Social Media",
  "Institucional",
  "Filmes",
] as const;

export type Category = Exclude<(typeof categories)[number], "Todos">;

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: Category;
  /** Rótulo livre exibido na página do projeto */
  categoryLabel?: string;
  year: string;
  thumbnail: string;
  /** URL de vídeo (mp4). Vazio = usa apenas a imagem como placeholder. */
  video?: string;
  orientation?: "landscape" | "portrait";
  description: string;
  roles: string[];
  /** Frames / stills adicionais */
  stills?: string[];
};

/**
 * ---------------------------------------------------------------------------
 * PROJETOS (placeholders) — substitua por trabalhos reais.
 * A ordem aqui é a ordem exibida no site.
 * ---------------------------------------------------------------------------
 */
export const projects: Project[] = [
  {
    slug: "night-city",
    title: "Night City",
    client: "Local Brand",
    category: "Filmes",
    categoryLabel: "Short Film / Direction",
    year: "2026",
    thumbnail: work01,
    description:
      "Curta-metragem noturno sobre encontros improváveis na cidade. Rodado em duas noites, com luz prática e câmera na mão.",
    roles: ["Direction", "Filming", "Editing", "Color Grading"],
    stills: [work04, work08],
  },
  {
    slug: "run-further",
    title: "Run Further",
    client: "Nike",
    category: "Marcas",
    categoryLabel: "Commercial / Social Media",
    year: "2026",
    thumbnail: work02,
    description:
      "Campanha de performance esportiva construída em estúdio, com luz dura e cortes secos no ritmo da respiração.",
    roles: ["Direction", "Filming", "Editing", "Sound Design"],
    stills: [work06, work05],
  },
  {
    slug: "one-night-only",
    title: "One Night Only",
    client: "Casamento M & L",
    category: "Eventos",
    categoryLabel: "Event Film",
    year: "2025",
    thumbnail: work03,
    description:
      "Filme de casamento em formato documental: nenhuma cena dirigida, apenas o que aconteceu — e o que ficou.",
    roles: ["Filming", "Editing", "Color Grading"],
    stills: [work06],
  },
  {
    slug: "slow-morning",
    title: "Slow Morning",
    client: "Café Matiz",
    category: "Marcas",
    categoryLabel: "Product / Commercial",
    year: "2025",
    thumbnail: work04,
    description:
      "Filme de produto com foco em textura, vapor e silêncio. Macro, trilhos curtos e uma única fonte de luz.",
    roles: ["Direction", "Filming", "Editing"],
    stills: [work01],
  },
  {
    slug: "inside-the-studio",
    title: "Inside the Studio",
    client: "Grupo Vértice",
    category: "Institucional",
    categoryLabel: "Institutional",
    year: "2025",
    thumbnail: work05,
    description:
      "Vídeo institucional que apresenta a cultura da empresa a partir das pessoas, não do organograma.",
    roles: ["Direction", "Filming", "Interview", "Editing"],
    stills: [work08],
  },
  {
    slug: "festival-lights",
    title: "Festival Lights",
    client: "Red Bull",
    category: "Eventos",
    categoryLabel: "Event Coverage / Aftermovie",
    year: "2025",
    thumbnail: work06,
    description:
      "Aftermovie de festival entregue em 24h, com versões verticais para Instagram e TikTok.",
    roles: ["Filming", "Editing", "Motion"],
    stills: [work03],
  },
  {
    slug: "blue-hour",
    title: "Blue Hour",
    client: "Projeto autoral",
    category: "Filmes",
    categoryLabel: "Short Film",
    year: "2024",
    thumbnail: work07,
    description:
      "Ensaio audiovisual sobre o mar antes do amanhecer. Um plano, uma respiração, nenhuma pressa.",
    roles: ["Direction", "Filming", "Editing", "Color Grading"],
    stills: [work01],
  },
  {
    slug: "always-on",
    title: "Always On",
    client: "Spotify",
    category: "Social Media",
    categoryLabel: "Social Media / Vertical",
    year: "2024",
    thumbnail: work08,
    description:
      "Série de peças verticais pensadas para retenção nos primeiros três segundos, sem perder acabamento.",
    roles: ["Direction", "Editing", "Motion"],
    stills: [work02],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const getNextProject = (slug: string): Project => {
  const i = projects.findIndex((p) => p.slug === slug);
  const next = i === -1 ? projects[0] : projects[(i + 1) % projects.length];
  return next as Project;
};
