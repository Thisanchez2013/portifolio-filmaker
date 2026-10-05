/**
 * ---------------------------------------------------------------------------
 * CONTEÚDO EDITÁVEL — informações do profissional
 * Troque os valores abaixo pelos dados reais. Nada mais precisa ser alterado.
 * ---------------------------------------------------------------------------
 */
export const site = {
  name: "Jefte Dias",
  role: "Filmmaker & Video Editor",
  location: "Indaiatuba, SP · Brasil",
  // Apenas números, formato internacional (55 + DDD + número)
  whatsapp: "5519996676529",
  whatsappMessage: "Olá! Vi seu portfólio e gostaria de um orçamento.",
  instagram: "https://www.instagram.com/_jefteoliveira2/",
  // Showreel: cole aqui a URL do vídeo (mp4) quando tiver o arquivo definitivo.
  showreelUrl: "",
} as const;

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const services = [
  {
    index: "01",
    title: "Filmmaking",
    description: "Captação audiovisual para marcas, empresas, eventos e projetos criativos.",
  },
  {
    index: "02",
    title: "Video Editing",
    description:
      "Edição dinâmica e narrativa para campanhas, redes sociais, filmes e conteúdos digitais.",
  },
  {
    index: "03",
    title: "Social Content",
    description:
      "Conteúdos pensados especialmente para Instagram, TikTok, YouTube e outras plataformas.",
  },
  {
    index: "04",
    title: "Events",
    description: "Cobertura audiovisual de eventos, festas, experiências e ativações de marca.",
  },
  {
    index: "05",
    title: "Commercial",
    description: "Produções audiovisuais para campanhas, produtos e posicionamento de marca.",
  },
  {
    index: "06",
    title: "Post Production",
    description: "Color grading, sound design, motion e finalização audiovisual.",
  },
];
