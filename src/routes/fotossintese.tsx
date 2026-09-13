import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/landing/SiteChrome";
import { PhotosynthesisGame } from "@/components/minigame/PhotosynthesisGame";

export const Route = createFileRoute("/fotossintese")({
  head: () => ({
    meta: [
      { title: "Minigame Fotossíntese - AulaViva" },
      { name: "description", content: "Aprenda sobre fotossíntese de forma interativa." },
    ],
  }),
  component: FotossintesePage,
});

function FotossintesePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-24 pb-12 px-5 flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Simulação Interativa</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Experimente o conceito de fotossíntese na prática.
            </p>
          </div>
          <PhotosynthesisGame />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
