import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/landing/SiteChrome";
import { ChemistryGame } from "@/components/minigame/ChemistryGame";
import { FlaskConical } from "lucide-react";

export const Route = createFileRoute("/quimica")({
  head: () => ({
    meta: [
      { title: "Laboratório Químico - AulaViva" },
      { name: "description", content: "Laboratório virtual de separação de misturas." },
    ],
  }),
  component: QuimicaPage,
});

function QuimicaPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-24 pb-12 px-4 md:px-8 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl flex items-center justify-center gap-3">
              Laboratório Químico <FlaskConical className="text-blue-500 h-8 w-8" />
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Desafio da Separação de Misturas: Escolha a técnica adequada para cada amostra.
            </p>
          </div>
          <ChemistryGame />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
