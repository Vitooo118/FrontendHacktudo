import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/landing/SiteChrome";
import { CircuitSimulator } from "@/components/minigame/circuit/CircuitSimulator";
import { Zap } from "lucide-react";

export const Route = createFileRoute("/circuito")({
  head: () => ({
    meta: [
      { title: "Laboratório de Circuitos - AulaViva" },
      { name: "description", content: "Arraste os componentes para a placa, conecte os fios e teste seu circuito!" },
    ],
  }),
  component: CircuitoPage,
});

function CircuitoPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-24 pb-12 px-4 md:px-8 flex flex-col items-center">
        <div className="w-full max-w-7xl flex flex-col h-[85vh] min-h-[600px]">
          <div className="mb-6 text-center shrink-0">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl flex items-center justify-center gap-3">
              Laboratório de Circuitos Elétricos <Zap className="text-yellow-500 h-8 w-8" />
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Arraste os componentes para a placa, conecte os fios e teste seu circuito!
            </p>
          </div>
          <div className="flex-1 w-full min-h-0">
            <CircuitSimulator />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
