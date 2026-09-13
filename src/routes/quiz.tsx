import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/landing/SiteChrome";
import { QuizApp } from "@/components/quiz/QuizApp";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Quiz Público - AulaViva" },
      { name: "description", content: "Responda a perguntas de biologia ou física." },
    ],
  }),
  component: QuizPage,
});

function QuizPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-24 pb-12 px-5 flex items-center justify-center">
        <div className="w-full">
          <QuizApp />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
