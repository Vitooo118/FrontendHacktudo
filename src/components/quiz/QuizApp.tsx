import { useState } from "react";
import { biologyQuestions, physicsQuestions } from "./questions";
import { Button } from "@/components/ui/button";
import { Brain, Atom } from "lucide-react";

type Subject = "biology" | "physics" | null;

export function QuizApp() {
  const [subject, setSubject] = useState<Subject>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const getQuestions = () => {
    if (subject === "biology") return biologyQuestions;
    if (subject === "physics") return physicsQuestions;
    return [];
  };

  const questions = getQuestions();
  const currentQuestion = questions[currentQuestionIndex];

  const handleStart = (selectedSubject: Subject) => {
    setSubject(selectedSubject);
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsFinished(false);
    setSelectedOption(null);
  };

  const handleAnswer = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption !== null && currentQuestion) {
      if (selectedOption === currentQuestion.correctAnswer) {
        setScore((prev) => prev + 1);
      }
      
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedOption(null);
      } else {
        setIsFinished(true);
      }
    }
  };

  const resetQuiz = () => {
    setSubject(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsFinished(false);
    setSelectedOption(null);
  };

  if (!subject) {
    return (
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-bold mb-6">Escolha o Tema do Quiz</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button 
            type="button"
            className="p-6 rounded-xl border border-border bg-card text-card-foreground shadow cursor-pointer hover:border-primary/50 hover:shadow-md transition-all flex flex-col items-center gap-4"
            onClick={() => handleStart("biology")}
          >
            <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <Brain className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold">Biologia</h3>
            <p className="text-sm text-muted-foreground">10 questões sobre vida, genética e evolução.</p>
          </button>
          <button 
            type="button"
            className="p-6 rounded-xl border border-border bg-card text-card-foreground shadow cursor-pointer hover:border-primary/50 hover:shadow-md transition-all flex flex-col items-center gap-4"
            onClick={() => handleStart("physics")}
          >
            <div className="h-16 w-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
              <Atom className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold">Física</h3>
            <p className="text-sm text-muted-foreground">10 questões sobre mecânica, energia e universo.</p>
          </button>
        </div>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="mx-auto max-w-xl text-center">
        <div className="p-8 rounded-xl border border-border bg-card text-card-foreground shadow">
          <h2 className="text-3xl font-bold mb-4">Quiz Concluído!</h2>
          <div className="text-6xl font-black mb-6 text-primary">
            {score} <span className="text-2xl text-muted-foreground font-normal">/ {questions.length}</span>
          </div>
          <p className="text-lg text-muted-foreground mb-8">
            {score >= 8 ? "Excelente! Você tem um ótimo domínio do assunto." : 
             score >= 5 ? "Bom trabalho! Mas ainda há espaço para melhorar." : 
             "Não desanime! Continue estudando para melhorar seus resultados."}
          </p>
          <Button onClick={resetQuiz} size="lg" className="w-full sm:w-auto">
            Tentar Novamente
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-muted-foreground capitalize">
          Tema: {subject === "biology" ? "Biologia" : "Física"}
        </h2>
        <span className="font-mono bg-secondary px-3 py-1 rounded-full text-sm">
          Questão {currentQuestionIndex + 1} de {questions.length}
        </span>
      </div>

      <div className="p-6 sm:p-8 rounded-xl border border-border bg-card text-card-foreground shadow">
        <h3 className="text-2xl font-bold mb-8 text-foreground">
          {currentQuestion?.text}
        </h3>
        
        <div className="space-y-3 mb-8">
          {currentQuestion?.options.map((option, index) => (
            <button
              type="button"
              key={index}
              onClick={() => handleAnswer(index)}
              className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                selectedOption === index 
                  ? "border-primary bg-primary/10" 
                  : "border-border hover:border-primary/50 hover:bg-secondary/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`h-6 w-6 rounded-full border flex items-center justify-center text-xs ${
                  selectedOption === index ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground text-muted-foreground"
                }`}>
                  {String.fromCharCode(65 + index)}
                </div>
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-end">
          <Button 
            onClick={handleNext} 
            disabled={selectedOption === null}
            size="lg"
          >
            {currentQuestionIndex + 1 === questions.length ? "Finalizar Quiz" : "Próxima Questão"}
          </Button>
        </div>
      </div>
    </div>
  );
}
