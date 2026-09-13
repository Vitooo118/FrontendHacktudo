import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import {
  Arquitetura,
  ComoFunciona,
  CtaFinal,
  Diferenciais,
  Exemplos,
  Problema,
  Solucao,
} from "@/components/landing/Sections";
import { SiteFooter, SiteHeader } from "@/components/landing/SiteChrome";

const title = "AulaViva — IA que torna a aula do professor interativa";
const description =
  "A IA que transforma a explicação do professor em experiências interativas sincronizadas e se adapta em tempo real às dificuldades da turma.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="hero">
        <Hero />
        <Problema />
        <Solucao />
        <ComoFunciona />
        <Diferenciais />
        <Exemplos />
        <Arquitetura />
        <CtaFinal />
      </main>
      <SiteFooter />
    </div>
  );
}
