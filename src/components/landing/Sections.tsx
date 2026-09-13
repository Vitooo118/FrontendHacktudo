import {
  Activity,
  ArrowRight,
  Atom,
  BookOpenCheck,
  Brain,
  Database,
  FlaskConical,
  Gauge,
  Layers,
  LineChart,
  Leaf,
  Puzzle,
  Radio,
  Repeat,
  Sigma,
  Target,
  TrendingDown,
  Users,
  Wand2,
} from "lucide-react";
import { Cta } from "./Cta";
import { Reveal, SectionHeading } from "./Reveal";

const problems = [
  {
    icon: TrendingDown,
    title: "O engajamento se perde no meio da explicação",
    text: "A aula expositiva compete com o celular. Sem momentos de interação, a atenção cai antes do conteúdo virar aprendizado.",
  },
  {
    icon: Puzzle,
    title: "Atividades prontas não conversam com a turma",
    text: "Bancos de exercícios são estáticos: ignoram o ritmo, o repertório e as dificuldades específicas daquela sala.",
  },
  {
    icon: Wand2,
    title: "A IA atual só entrega conteúdo genérico",
    text: "Geradores comuns produzem quiz solto, sem intenção pedagógica e sem relação com a sequência didática do professor.",
  },
  {
    icon: Gauge,
    title: "Nenhum dado no momento em que ele importa",
    text: "O professor só descobre quem não entendeu na prova — quando já é tarde para retomar o conceito.",
  },
];

const solutions = [
  {
    icon: Radio,
    title: "Aula sincronizada",
    text: "A explicação do professor e a interação dos alunos acontecem juntas, nos momentos certos do roteiro.",
  },
  {
    icon: BookOpenCheck,
    title: "Metodologia pedagógica real",
    text: "A IA escolhe entre metodologias ativas estruturadas — não improvisa formato de atividade.",
  },
  {
    icon: Database,
    title: "Base de conhecimento pedagógico",
    text: "Cada experiência é gerada a partir de uma base curada de estratégias, objetivos e níveis cognitivos.",
  },
  {
    icon: Repeat,
    title: "Adaptação em tempo real",
    text: "As respostas dos alunos alimentam o motor, que ajusta a próxima etapa da aula automaticamente.",
  },
];

const steps = [
  {
    title: "Professor define conteúdo e objetivo",
    text: "Tema, série e objetivo de aprendizagem. Em minutos, sem sair do seu plano de aula.",
  },
  {
    title: "A IA analisa e escolhe a metodologia",
    text: "O motor pedagógico seleciona a estratégia mais adequada ao objetivo e ao perfil da turma.",
  },
  {
    title: "Gera o roteiro interativo da aula",
    text: "Uma sequência de momentos: explicação, provocação, interação e checagem de compreensão.",
  },
  {
    title: "Alunos interagem sincronizados",
    text: "No celular ou no computador, a turma participa exatamente quando o professor sinaliza.",
  },
  {
    title: "O sistema detecta dificuldades e adapta",
    text: "Erros recorrentes viram uma nova interação de reforço na etapa seguinte da mesma aula.",
  },
];

const differentials = [
  {
    icon: BookOpenCheck,
    title: "Metodologias estruturadas",
    text: "Base pedagógica curada como fonte de verdade: a IA aplica, não inventa.",
  },
  {
    icon: Radio,
    title: "Sincronia com a fala do professor",
    text: "O professor comanda o ritmo. A experiência acompanha, nunca atropela.",
  },
  {
    icon: Layers,
    title: "3 módulos de IA",
    text: "Pedagógica escolhe, Geradora cria, Adaptativa corrige a rota durante a aula.",
  },
  {
    icon: LineChart,
    title: "Dashboard em tempo real",
    text: "Compreensão por conceito, por aluno e por momento — enquanto a aula acontece.",
  },
  {
    icon: Atom,
    title: "Qualquer disciplina",
    text: "De funções quadráticas a análise de fontes históricas: o motor é agnóstico ao conteúdo.",
  },
  {
    icon: Users,
    title: "Copiloto, não substituto",
    text: "A autoridade pedagógica segue com quem está na frente da sala.",
  },
];

const useCases = [
  {
    icon: Sigma,
    subject: "Matemática",
    topic: "Parábola e lançamento de projéteis",
    text: "Alunos ajustam ângulo e velocidade para acertar o alvo enquanto o professor deduz a equação. Cada tentativa alimenta o gráfico da turma.",
  },
  {
    icon: Leaf,
    subject: "Biologia",
    topic: "Seleção natural e fotossíntese",
    text: "A turma decide quais características sobrevivem a cada geração e vê o resultado coletivo na hora da explicação.",
  },
  {
    icon: FlaskConical,
    subject: "Física e Química",
    topic: "Simulações com variáveis",
    text: "Experimentos com variáveis controladas: a turma prevê, testa e compara hipóteses sem sair da sequência da aula.",
  },
];

const architecture = [
  { icon: Users, label: "Professor", note: "define conteúdo e conduz" },
  { icon: Brain, label: "Motor Pedagógico", note: "escolhe a metodologia" },
  { icon: Wand2, label: "Experiência Interativa", note: "roteiro gerado" },
  { icon: Target, label: "Alunos", note: "interagem em sincronia" },
  { icon: Activity, label: "Dados", note: "compreensão em tempo real" },
  { icon: Repeat, label: "Adaptação", note: "próxima etapa ajustada" },
];

function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-5 py-20 sm:py-28 ${className ?? ""}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function Problema() {
  return (
    <Section id="problema">
      <SectionHeading
        eyebrow="O problema"
        title={
          <>
            Tecnologia sobra na escola.{" "}
            <span className="text-gradient-tech">Aprendizado sincronizado falta.</span>
          </>
        }
        description="Quatro travas que impedem a aula expositiva de virar aula participativa — mesmo com IA disponível."
      />
      <ul className="mt-12 grid gap-5 sm:grid-cols-2">
        {problems.map(({ icon: Icon, title, text }, i) => (
          <Reveal as="li" key={title} delay={i * 90} className="card-surface p-6 sm:p-7">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-destructive/10">
              <Icon className="h-5 w-5 text-destructive" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

export function Solucao() {
  return (
    <Section id="solucao" className="bg-secondary/60">
      <SectionHeading
        eyebrow="A solução"
        title={
          <>
            Um copiloto pedagógico que entra{" "}
            <span className="text-gradient-learn">no ritmo da sua aula</span>
          </>
        }
        description="O AulaViva não substitui o professor: ele transforma a explicação em participação, com intenção pedagógica em cada momento."
      />
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {solutions.map(({ icon: Icon, title, text }, i) => (
          <Reveal as="li" key={title} delay={i * 90} className="card-surface h-full p-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow">
              <Icon className="h-5 w-5 text-primary-foreground" />
            </span>
            <h3 className="mt-5 text-base font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

export function ComoFunciona() {
  return (
    <Section id="como-funciona">
      <SectionHeading
        eyebrow="Como funciona"
        title="Da intenção do professor à adaptação automática"
        description="Cinco etapas, um único fluxo contínuo durante a aula."
      />
      <ol className="mt-14 grid gap-5 lg:grid-cols-5">
        {steps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 110} className="relative">
            <div className="card-surface h-full p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-tech text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <span className="h-px min-w-0 flex-1 bg-gradient-to-r from-border to-transparent" />
              </div>
              <h3 className="mt-5 text-base font-semibold leading-snug">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export function Diferenciais() {
  return (
    <Section id="diferenciais" className="bg-secondary/60">
      <SectionHeading
        eyebrow="Diferenciais"
        title={
          <>
            Por que o AulaViva não é{" "}
            <span className="text-gradient-tech">mais um gerador de atividades</span>
          </>
        }
      />
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {differentials.map(({ icon: Icon, title, text }, i) => (
          <Reveal as="li" key={title} delay={i * 80} className="card-surface h-full p-6 sm:p-7">
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15">
                <Icon className="h-5 w-5 text-accent" />
              </span>
              <h3 className="min-w-0 text-base font-semibold">{title}</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

export function Exemplos() {
  return (
    <Section id="exemplos">
      <SectionHeading
        eyebrow="Exemplos de uso"
        title="A mesma aula, agora com a turma dentro dela"
        description="Experiências geradas a partir do conteúdo que o professor já ia explicar."
      />
      <ul className="mt-12 grid gap-5 lg:grid-cols-3">
        {useCases.map(({ icon: Icon, subject, topic, text }, i) => (
          <Reveal as="li" key={subject} delay={i * 110} className="card-surface h-full p-7">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary-glow to-tech">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </span>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {subject}
            </p>
            <h3 className="mt-2 text-lg font-semibold leading-snug">{topic}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

export function Arquitetura() {
  return (
    <Section id="arquitetura" className="bg-secondary/60">
      <SectionHeading
        eyebrow="Arquitetura"
        title="Um ciclo fechado de ensino, dado e adaptação"
        description="Cada aula alimenta a próxima interação — sem etapa manual no meio."
      />
      <Reveal className="mt-14">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {architecture.map(({ icon: Icon, label, note }, i) => (
            <li key={label} className="relative">
              <div className="card-surface flex h-full flex-col items-center gap-3 px-4 py-6 text-center">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-tech">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </span>
                <p className="text-sm font-semibold leading-tight">{label}</p>
                <p className="text-xs leading-snug text-muted-foreground">{note}</p>
              </div>
              {i < architecture.length - 1 ? (
                <ArrowRight
                  aria-hidden="true"
                  className="absolute -bottom-3 left-1/2 h-4 w-4 -translate-x-1/2 rotate-90 text-primary/60 lg:-right-3 lg:bottom-auto lg:left-auto lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:rotate-0"
                />
              ) : null}
            </li>
          ))}
        </ol>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Professor → Motor Pedagógico → Experiência Interativa → Alunos → Dados → Adaptação
        </p>
      </Reveal>
    </Section>
  );
}

export function CtaFinal() {
  return (
    <section id="cta-final" className="px-5 py-20 sm:py-28">
      <Reveal className="mx-auto max-w-5xl overflow-hidden rounded-4xl bg-hero-gradient px-6 py-16 text-center shadow-elevated sm:px-12 sm:py-20">
        <h2 className="text-balance text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
          Sua explicação já é boa.{" "}
          <span className="text-gradient-learn">Falta a turma viver ela.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
          Veja o AulaViva gerando um roteiro interativo completo a partir de um único objetivo
          de aprendizagem.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Cta href="/fotossintese">
            Começar Agora
            <ArrowRight className="h-4 w-4" />
          </Cta>
          <Cta href="#como-funciona" variant="ghostLight">
            Como Funciona
          </Cta>
        </div>
        <p className="mt-8 text-xs uppercase tracking-[0.18em] text-primary-foreground/60">
          Projeto desenvolvido para hackathon
        </p>
      </Reveal>
    </section>
  );
}
