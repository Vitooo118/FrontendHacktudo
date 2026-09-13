import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/landing/SiteChrome";
import { Leaf, Zap, FlaskConical } from "lucide-react";

export const Route = createFileRoute("/minigames")({
  head: () => ({
    meta: [
      { title: "Hub de Minigames - AulaViva" },
      { name: "description", content: "Escolha um minigame para aprender de forma interativa." },
    ],
  }),
  component: MinigamesHubPage,
});

function MinigamesHubPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-24 pb-12 px-5 flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Hub de Minigames</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Escolha uma experiência interativa para iniciar a simulação.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link 
              to="/fotossintese" 
              className="group flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="p-6 pb-4">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600 transition-colors group-hover:bg-green-200">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="font-semibold leading-none tracking-tight">Fotossíntese</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Experimente o conceito de fotossíntese na prática.
                </p>
              </div>
              <div className="p-6 pt-0">
                <p className="text-sm text-muted-foreground">
                  Aprenda como as plantas produzem energia através da luz, água e CO2.
                </p>
              </div>
            </Link>

            <Link 
              to="/circuito" 
              className="group flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="p-6 pb-4">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600 transition-colors group-hover:bg-yellow-200">
                  <Zap className="h-6 w-6 text-yellow-500" />
                </div>
                <h3 className="font-semibold leading-none tracking-tight">Laboratório de Circuitos</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Arraste componentes e conecte os fios na placa.
                </p>
              </div>
              <div className="p-6 pt-0">
                <p className="text-sm text-muted-foreground">
                  Aprenda como a eletricidade funciona com um laboratório virtual interativo de física.
                </p>
              </div>
            </Link>

            <Link 
              to="/quimica" 
              className="group flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="p-6 pb-4">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-200">
                  <FlaskConical className="h-6 w-6" />
                </div>
                <h3 className="font-semibold leading-none tracking-tight">Separação de Misturas</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Laboratório virtual de química interativo.
                </p>
              </div>
              <div className="p-6 pt-0">
                <p className="text-sm text-muted-foreground">
                  Aprenda as técnicas corretas para separar diferentes substâncias escolhendo o método certo.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
