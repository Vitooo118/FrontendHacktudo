import { ArrowRight, Sparkles, Radio, BarChart3, GraduationCap } from "lucide-react";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";

const highlights = [
  { icon: Radio, label: "Interações sincronizadas com a fala do professor" },
  { icon: GraduationCap, label: "Metodologias pedagógicas reais, não genéricas" },
  { icon: BarChart3, label: "Dados de aprendizagem em tempo real" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero-gradient pb-20 pt-28 sm:pb-28 sm:pt-36">
      <img
        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1920&auto=format&fit=crop"
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background"
      />

      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Projeto de Hackathon 2026
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl">
            A aula continua sua. {" "}
            <span className="text-gradient-learn">A interação vira viva.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            O AulaViva é a IA que transforma a explicação do professor em experiências
            interativas sincronizadas — e se adapta em tempo real às dificuldades da turma.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Cta href="/minigames" className="from-blue-600 to-blue-700 text-white">
              Entrar
              <ArrowRight className="h-4 w-4" />
            </Cta>
            <Cta href="#como-funciona" variant="ghostLight">
              Como Funciona
            </Cta>
          </div>
        </Reveal>

        <Reveal delay={150} className="mt-14">
          <ul className="grid gap-3 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-start gap-3 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-4 text-left backdrop-blur"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary-foreground/15">
                  <Icon className="h-4.5 w-4.5 text-primary-foreground" />
                </span>
                <span className="min-w-0 text-sm font-medium leading-snug text-primary-foreground/90">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
