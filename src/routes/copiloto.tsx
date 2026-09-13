import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/landing/SiteChrome";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Bot,
  Loader2,
  BookOpen,
  GraduationCap,
  Target,
  Clock,
  ListChecks,
  Layers,
  BarChart,
  User,
  Users,
  Lightbulb,
  PlayCircle,
  CheckCircle2,
  BrainCircuit
} from "lucide-react";
import { toast } from "sonner";

export interface PedagogicalInput {
  subject: string;
  topic: string;
  grade: string;
  difficulty: string;
  objective: string;
}

export interface LessonPlan {
  title: string;
  objective: string;
  methodology: string;
  introduction: { duration: string; teacherAction: string; studentAction: string };
  explanation: { duration: string; teacherAction: string; studentAction: string };
  activity: {
    duration: string;
    experienceType: string;
    experienceId: string;
    instructions: string;
    teacherAction: string;
    studentAction: string;
  };
  assessment: { duration: string; strategy: string };
  closure: { duration: string; teacherAction: string; studentAction: string };
  pedagogicalDecision: {
    need: string;
    methodology: string;
    candidateExperiences: string[];
    experienceType: string;
    interaction: string;
    groupMode: string;
    activityDifficulty: string;
    reason: string;
  };
}

export const Route = createFileRoute("/copiloto")({
  head: () => ({
    meta: [
      { title: "Copiloto Pedagógico - AulaViva" },
      { name: "description", content: "Gerador de roteiros de aula por IA." },
    ],
  }),
  component: CopilotoPage,
});

function CopilotoPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<LessonPlan | null>(null);
  const [generationSource, setGenerationSource] = useState<"ia" | "local" | null>(null);

  const [subject, setSubject] = useState("Biologia");
  const [topic, setTopic] = useState("Fotossíntese");
  const [grade, setGrade] = useState("7º ano");
  const [difficulty, setDifficulty] = useState("Os alunos não conseguem visualizar o processo");
  const [objective, setObjective] = useState("Compreender como luz, água e CO2 participam da fotossíntese");

  const handleGenerate = async (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const input: PedagogicalInput = {
      subject,
      topic,
      grade,
      difficulty,
      objective,
    };

    setLoading(true);
    setResult(null);
    setGenerationSource(null);

    const fallbackLessonPlan: LessonPlan = {
      title: `Desvendando: ${input.topic}`,
      objective: input.objective,
      methodology: "Aprendizagem baseada em investigação guiada",
      introduction: {
        duration: "10 minutos",
        teacherAction: `Inicia a aula questionando os alunos sobre o tema ${input.topic}, instigando a curiosidade sobre o conceito fundamental.`,
        studentAction: "Respondem aos questionamentos iniciais com base em conhecimentos prévios e compartilham suas hipóteses.",
      },
      explanation: {
        duration: "15 minutos",
        teacherAction: "Apresenta os conceitos fundamentais de forma esquemática, conectando com a discussão anterior.",
        studentAction: "Anotam os pontos principais, tiram dúvidas e relacionam a explicação com a provocação inicial.",
      },
      activity: {
        duration: "15 minutos",
        experienceType: "simulation",
        experienceId: "sim-123",
        instructions: "Acesse a plataforma interativa, abra a simulação e altere as variáveis propostas para observar o impacto direto.",
        teacherAction: "Orienta os alunos no acesso à plataforma, circula auxiliando na manipulação e estimula a observação de causa e efeito.",
        studentAction: "Utilizam os computadores ou tablets para interagir com a simulação e testam diferentes combinações de variáveis.",
      },
      assessment: {
        duration: "5 minutos",
        strategy: "Verificação formativa rápida baseada nas conclusões obtidas durante a simulação prática.",
      },
      closure: {
        duration: "5 minutos",
        teacherAction: "Promove uma discussão em plenária para que os alunos compartilhem o que descobriram, consolidando o conceito.",
        studentAction: "Compartilham suas descobertas com a turma e respondem às perguntas finais de fixação.",
      },
      pedagogicalDecision: {
        need: "Visualizar um processo complexo e compreender relações de causa e efeito na prática.",
        methodology: "Aprendizagem baseada em simulação e investigação guiada.",
        candidateExperiences: ["simulation", "investigation"],
        experienceType: "simulation",
        interaction: "Manipulação direta de variáveis com feedback imediato.",
        groupMode: "Individual ou em duplas.",
        activityDifficulty: "Moderada",
        reason: "A simulação é ideal para resolver dificuldades de visualização, permitindo testar hipóteses em um ambiente seguro.",
      },
    };

    try {
      const response = await fetch("https://hacktudo-project.onrender.com/pedagogical/lesson-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        throw new Error(`Erro na API. Status: ${response.status}`);
      }

      const lessonPlan: LessonPlan = await response.json();
      setResult(lessonPlan);
      setGenerationSource("ia");
      toast.success("Roteiro gerado com sucesso!");
    } catch (error) {
      console.error("Erro ao gerar roteiro:", error);
      toast.error("Não foi possível conectar ao motor pedagógico. Usando modelo simulado baseado nos seus dados.");
      setResult(fallbackLessonPlan);
      setGenerationSource("local");
    } finally {
      setLoading(false);
    }
  };

  const renderTeacherStudent = (teacher?: string, student?: string) => (
    <div className="mt-3 grid gap-3 sm:grid-cols-2">
      {teacher && (
        <div className="rounded-md bg-secondary/40 p-3 border border-border/60">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
            <User className="h-3.5 w-3.5" /> Ação do Professor
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed">{teacher}</p>
        </div>
      )}
      {student && (
        <div className="rounded-md bg-secondary/40 p-3 border border-border/60">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
            <Users className="h-3.5 w-3.5" /> Ação dos Alunos
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed">{student}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-24 pb-12 px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl flex items-center justify-center gap-3">
              Copiloto Pedagógico <Bot className="text-primary h-8 w-8" />
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Gere roteiros de aula metodológicos e interativos em segundos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Formulário (1/3 da tela em desktops largos) */}
            <div className="lg:col-span-4 rounded-xl border border-border bg-card p-6 shadow-sm lg:sticky lg:top-24">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Target className="h-5 w-5 text-muted-foreground" />
                Configurar Aula
              </h2>

              <form onSubmit={handleGenerate} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Matéria</Label>
                  <Select name="subject" required value={subject} onValueChange={setSubject}>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Selecione a matéria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Biologia">Biologia</SelectItem>
                      <SelectItem value="Física">Física</SelectItem>
                      <SelectItem value="Química">Química</SelectItem>
                      <SelectItem value="História">História</SelectItem>
                      <SelectItem value="Matemática">Matemática</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="topic">Tópico</Label>
                  <Input
                    id="topic"
                    name="topic"
                    placeholder="Ex: Fotossíntese, Leis de Newton..."
                    required
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="grade">Série/Ano</Label>
                  <Input
                    id="grade"
                    name="grade"
                    placeholder="Ex: 7º ano, 1º Ano do Ensino Médio..."
                    required
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="difficulty">Dificuldade ou Contexto da Turma</Label>
                  <Textarea
                    id="difficulty"
                    name="difficulty"
                    placeholder="Qual a principal dificuldade dos alunos sobre esse tema?"
                    className="resize-none h-20"
                    required
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="objective">Objetivo da Aula</Label>
                  <Textarea
                    id="objective"
                    name="objective"
                    placeholder="O que os alunos devem aprender ou ser capazes de fazer ao final da aula?"
                    className="resize-none h-20"
                    required
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                  />
                </div>

                <Button type="submit" onClick={handleGenerate} className="w-full mt-2" size="lg" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processando no Motor...
                    </>
                  ) : (
                    <>
                      <Bot className="mr-2 h-5 w-5" />
                      Gerar Roteiro Pedagógico
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Resultado (2/3 da tela) */}
            <div className="lg:col-span-8 rounded-xl border border-border bg-card shadow-sm h-full flex flex-col">
              {loading ? (
                <div className="flex-1 flex flex-col items-center justify-center p-12 text-center text-muted-foreground min-h-[500px]">
                  <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
                  <p className="text-lg font-medium text-foreground">Analisando o desafio pedagógico...</p>
                  <p className="text-sm mt-2 max-w-sm">Buscando a melhor metodologia e experiência interativa para superar a dificuldade informada.</p>
                </div>
              ) : result ? (
                <div className="p-6 sm:p-8">
                  <div className="mb-6 pb-6 border-b border-border">
                    {generationSource && (
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold mb-4 transition-colors ${
                          generationSource === "ia"
                            ? "bg-primary/10 text-primary"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {generationSource === "ia" ? "Gerado pelo Motor Pedagógico 🧠" : "Gerador Offline ⚙️"}
                      </span>
                    )}
                    <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-foreground">
                      <BookOpen className="h-7 w-7 text-primary shrink-0" />
                      {result.title}
                    </h2>

                    <div className="mt-5 p-4 rounded-xl bg-secondary/30 border border-border/50 flex flex-col gap-3">
                      <p className="text-sm flex items-start gap-2.5">
                        <Target className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="font-semibold text-foreground min-w-[90px]">Objetivo:</span>
                        <span className="text-muted-foreground leading-relaxed">{result.objective}</span>
                      </p>
                      <p className="text-sm flex items-start gap-2.5">
                        <BrainCircuit className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="font-semibold text-foreground min-w-[90px]">Metodologia:</span>
                        <span className="text-muted-foreground leading-relaxed">{result.methodology}</span>
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mt-5 text-sm font-medium">
                      <span className="flex items-center gap-1.5 bg-background border border-border text-foreground px-2.5 py-1.5 rounded-md">
                        <Layers className="h-4 w-4 text-muted-foreground" />
                        {subject}
                      </span>
                      <span className="flex items-center gap-1.5 bg-background border border-border text-foreground px-2.5 py-1.5 rounded-md">
                        <GraduationCap className="h-4 w-4 text-muted-foreground" />
                        {grade}
                      </span>
                    </div>
                  </div>

                  {/* Decisão Pedagógica (IA) */}
                  <div className="mb-8 rounded-xl bg-primary/5 border border-primary/20 overflow-hidden">
                    <div className="bg-primary/10 px-4 py-2.5 border-b border-primary/10 flex items-center gap-2">
                      <Bot className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-primary uppercase tracking-wide">Decisão da IA Pedagógica</span>
                    </div>
                    <div className="p-5 space-y-3.5 text-sm">
                      <p className="flex flex-col sm:flex-row sm:gap-2">
                        <strong className="text-foreground shrink-0">Necessidade Detectada:</strong>
                        <span className="text-muted-foreground">{result.pedagogicalDecision.need}</span>
                      </p>
                      <p className="flex flex-col sm:flex-row sm:gap-2">
                        <strong className="text-foreground shrink-0">Justificativa de Uso:</strong>
                        <span className="text-muted-foreground">{result.pedagogicalDecision.reason}</span>
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="bg-background border border-border/50 px-2.5 py-1 rounded-md text-xs text-muted-foreground font-medium">
                          Tipo de Experiência: {result.pedagogicalDecision.experienceType}
                        </span>
                        <span className="bg-background border border-border/50 px-2.5 py-1 rounded-md text-xs text-muted-foreground font-medium">
                          Interação: {result.pedagogicalDecision.interaction}
                        </span>
                        <span className="bg-background border border-border/50 px-2.5 py-1 rounded-md text-xs text-muted-foreground font-medium">
                          Organização: {result.pedagogicalDecision.groupMode}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Roteiro da Aula (Timeline) */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold flex items-center gap-2 mb-6">
                      <Clock className="h-5 w-5 text-muted-foreground" /> Momentos da Aula
                    </h3>

                    {/* 1. Introdução */}
                    <div className="relative pl-8 sm:pl-10 border-l-2 border-primary/20 pb-4">
                      <div className="absolute -left-[13px] top-0 h-6 w-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                        <Lightbulb className="h-3 w-3 text-primary" />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                        <h4 className="text-lg font-semibold text-foreground">1. Introdução e Engajamento</h4>
                        <span className="inline-flex items-center w-fit text-xs font-semibold bg-secondary px-2.5 py-1 rounded-full text-secondary-foreground">
                          <Clock className="mr-1 h-3 w-3" /> {result.introduction.duration}
                        </span>
                      </div>
                      {renderTeacherStudent(result.introduction.teacherAction, result.introduction.studentAction)}
                    </div>

                    {/* 2. Explicação */}
                    <div className="relative pl-8 sm:pl-10 border-l-2 border-primary/20 pb-4">
                      <div className="absolute -left-[13px] top-0 h-6 w-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                        <BookOpen className="h-3 w-3 text-primary" />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                        <h4 className="text-lg font-semibold text-foreground">2. Explicação do Conceito</h4>
                        <span className="inline-flex items-center w-fit text-xs font-semibold bg-secondary px-2.5 py-1 rounded-full text-secondary-foreground">
                          <Clock className="mr-1 h-3 w-3" /> {result.explanation.duration}
                        </span>
                      </div>
                      {renderTeacherStudent(result.explanation.teacherAction, result.explanation.studentAction)}
                    </div>

                    {/* 3. Atividade */}
                    <div className="relative pl-8 sm:pl-10 border-l-2 border-primary/20 pb-4">
                      <div className="absolute -left-[13px] top-0 h-6 w-6 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-sm shadow-primary/20">
                        <PlayCircle className="h-3 w-3 text-primary" />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                        <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                          3. Atividade Interativa
                          <span className="text-sm font-normal text-muted-foreground uppercase tracking-wider hidden sm:inline-block">
                            [{result.activity.experienceType}]
                          </span>
                        </h4>
                        <span className="inline-flex items-center w-fit text-xs font-semibold bg-primary/10 px-2.5 py-1 rounded-full text-primary">
                          <Clock className="mr-1 h-3 w-3" /> {result.activity.duration}
                        </span>
                      </div>
                      <div className="mb-4 p-4 bg-accent/20 rounded-lg border border-accent/50 text-sm">
                        <strong className="text-foreground block mb-1">Instruções para a Atividade:</strong>
                        <span className="text-muted-foreground leading-relaxed">{result.activity.instructions}</span>
                      </div>
                      {renderTeacherStudent(result.activity.teacherAction, result.activity.studentAction)}
                    </div>

                    {/* 4. Avaliação */}
                    <div className="relative pl-8 sm:pl-10 border-l-2 border-primary/20 pb-4">
                      <div className="absolute -left-[13px] top-0 h-6 w-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                        <h4 className="text-lg font-semibold text-foreground">4. Checagem de Compreensão</h4>
                        <span className="inline-flex items-center w-fit text-xs font-semibold bg-secondary px-2.5 py-1 rounded-full text-secondary-foreground">
                          <Clock className="mr-1 h-3 w-3" /> {result.assessment.duration}
                        </span>
                      </div>
                      <div className="mt-2 p-3.5 bg-secondary/30 rounded-md border border-border/50 text-sm">
                        <strong className="text-foreground/90 block mb-1">Estratégia de Avaliação:</strong>
                        <span className="text-muted-foreground leading-relaxed">{result.assessment.strategy}</span>
                      </div>
                    </div>

                    {/* 5. Fechamento */}
                    <div className="relative pl-8 sm:pl-10 border-l-2 border-transparent">
                      <div className="absolute -left-[13px] top-0 h-6 w-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                        <ListChecks className="h-3 w-3 text-primary" />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                        <h4 className="text-lg font-semibold text-foreground">5. Fechamento da Aula</h4>
                        <span className="inline-flex items-center w-fit text-xs font-semibold bg-secondary px-2.5 py-1 rounded-full text-secondary-foreground">
                          <Clock className="mr-1 h-3 w-3" /> {result.closure.duration}
                        </span>
                      </div>
                      {renderTeacherStudent(result.closure.teacherAction, result.closure.studentAction)}
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-border flex justify-end gap-3">
                    <Button variant="outline" onClick={() => toast.success("PDF salvo na sua máquina!")}>
                      Baixar PDF
                    </Button>
                    <Button onClick={() => toast.success("Roteiro sincronizado com sua conta AulaViva.")}>
                      Salvar na Minha Biblioteca
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center p-12 text-center text-muted-foreground min-h-[500px]">
                  <div className="h-20 w-20 rounded-full bg-secondary/50 flex items-center justify-center mb-5">
                    <Bot className="h-10 w-10 opacity-40" />
                  </div>
                  <p className="text-lg font-medium text-foreground">Nenhum roteiro gerado</p>
                  <p className="text-sm mt-2 max-w-sm">Preencha o formulário e clique em gerar para analisar seu cenário e criar a aula ideal.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
