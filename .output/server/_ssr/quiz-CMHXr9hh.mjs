import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { H as Atom, L as Brain } from "../_libs/lucide-react.mjs";
import { i as SiteHeader, r as SiteFooter, t as Button } from "./SiteChrome-CbY4KV0z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quiz-CMHXr9hh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var biologyQuestions = [
	{
		id: "b1",
		text: "Qual organela é responsável pela respiração celular?",
		options: [
			"Ribossomo",
			"Mitocôndria",
			"Complexo de Golgi",
			"Lisossomo"
		],
		correctAnswer: 1
	},
	{
		id: "b2",
		text: "Qual processo as plantas usam para converter luz solar em alimento?",
		options: [
			"Quimiossíntese",
			"Fotossíntese",
			"Fermentação",
			"Respiração Celular"
		],
		correctAnswer: 1
	},
	{
		id: "b3",
		text: "Qual é o principal componente da membrana plasmática?",
		options: [
			"Carboidratos",
			"Proteínas",
			"Fosfolipídios",
			"Ácidos Nucleicos"
		],
		correctAnswer: 2
	},
	{
		id: "b4",
		text: "Qual destes não é um grupo sanguíneo humano?",
		options: [
			"A",
			"B",
			"O",
			"C"
		],
		correctAnswer: 3
	},
	{
		id: "b5",
		text: "Quem é conhecido como o pai da genética?",
		options: [
			"Charles Darwin",
			"Gregor Mendel",
			"Louis Pasteur",
			"Alexander Fleming"
		],
		correctAnswer: 1
	},
	{
		id: "b6",
		text: "Qual a função dos glóbulos brancos?",
		options: [
			"Transportar oxigênio",
			"Coagulação do sangue",
			"Defesa do organismo",
			"Transportar nutrientes"
		],
		correctAnswer: 2
	},
	{
		id: "b7",
		text: "Qual destes é um mamífero que bota ovos?",
		options: [
			"Ornitorrinco",
			"Canguru",
			"Morcego",
			"Baleia"
		],
		correctAnswer: 0
	},
	{
		id: "b8",
		text: "Onde o DNA é armazenado na célula eucarionte?",
		options: [
			"Citoplasma",
			"Ribossomo",
			"Núcleo",
			"Vacúolo"
		],
		correctAnswer: 2
	},
	{
		id: "b9",
		text: "Qual é o maior órgão do corpo humano?",
		options: [
			"Fígado",
			"Coração",
			"Pele",
			"Pulmão"
		],
		correctAnswer: 2
	},
	{
		id: "b10",
		text: "Quantos cromossomos tem uma célula somática humana normal?",
		options: [
			"23",
			"46",
			"24",
			"48"
		],
		correctAnswer: 1
	}
];
var physicsQuestions = [
	{
		id: "f1",
		text: "Qual é a unidade de medida da força no Sistema Internacional?",
		options: [
			"Joule",
			"Watt",
			"Newton",
			"Pascal"
		],
		correctAnswer: 2
	},
	{
		id: "f2",
		text: "Qual lei afirma que 'Para toda ação, há uma reação de igual intensidade e direção oposta'?",
		options: [
			"Primeira Lei de Newton",
			"Segunda Lei de Newton",
			"Terceira Lei de Newton",
			"Lei da Gravitação Universal"
		],
		correctAnswer: 2
	},
	{
		id: "f3",
		text: "O que mede a inércia de um corpo?",
		options: [
			"Volume",
			"Massa",
			"Velocidade",
			"Aceleração"
		],
		correctAnswer: 1
	},
	{
		id: "f4",
		text: "Qual é a velocidade da luz no vácuo (aproximadamente)?",
		options: [
			"300.000 km/s",
			"150.000 km/s",
			"3.000 km/s",
			"30.000 km/s"
		],
		correctAnswer: 0
	},
	{
		id: "f5",
		text: "Energia cinética está relacionada a quê?",
		options: [
			"Altura",
			"Movimento",
			"Calor",
			"Luz"
		],
		correctAnswer: 1
	},
	{
		id: "f6",
		text: "Quem formulou a teoria da relatividade?",
		options: [
			"Isaac Newton",
			"Niels Bohr",
			"Galileu Galilei",
			"Albert Einstein"
		],
		correctAnswer: 3
	},
	{
		id: "f7",
		text: "Como se chama a mudança do estado sólido direto para o gasoso?",
		options: [
			"Evaporação",
			"Fusão",
			"Sublimação",
			"Condensação"
		],
		correctAnswer: 2
	},
	{
		id: "f8",
		text: "Qual força mantém os planetas em órbita ao redor do sol?",
		options: [
			"Força Magnética",
			"Força Elétrica",
			"Força Gravitacional",
			"Força Nuclear Forte"
		],
		correctAnswer: 2
	},
	{
		id: "f9",
		text: "O que a fórmula E=mc² descreve?",
		options: [
			"A expansão do universo",
			"A equivalência massa-energia",
			"A atração gravitacional",
			"A condução térmica"
		],
		correctAnswer: 1
	},
	{
		id: "f10",
		text: "Qual partícula subatômica tem carga negativa?",
		options: [
			"Próton",
			"Nêutron",
			"Elétron",
			"Fóton"
		],
		correctAnswer: 2
	}
];
function QuizApp() {
	const [subject, setSubject] = (0, import_react.useState)(null);
	const [currentQuestionIndex, setCurrentQuestionIndex] = (0, import_react.useState)(0);
	const [score, setScore] = (0, import_react.useState)(0);
	const [isFinished, setIsFinished] = (0, import_react.useState)(false);
	const [selectedOption, setSelectedOption] = (0, import_react.useState)(null);
	const getQuestions = () => {
		if (subject === "biology") return biologyQuestions;
		if (subject === "physics") return physicsQuestions;
		return [];
	};
	const questions = getQuestions();
	const currentQuestion = questions[currentQuestionIndex];
	const handleStart = (selectedSubject) => {
		setSubject(selectedSubject);
		setCurrentQuestionIndex(0);
		setScore(0);
		setIsFinished(false);
		setSelectedOption(null);
	};
	const handleAnswer = (optionIndex) => {
		setSelectedOption(optionIndex);
	};
	const handleNext = () => {
		if (selectedOption !== null && currentQuestion) {
			if (selectedOption === currentQuestion.correctAnswer) setScore((prev) => prev + 1);
			if (currentQuestionIndex + 1 < questions.length) {
				setCurrentQuestionIndex((prev) => prev + 1);
				setSelectedOption(null);
			} else setIsFinished(true);
		}
	};
	const resetQuiz = () => {
		setSubject(null);
		setCurrentQuestionIndex(0);
		setScore(0);
		setIsFinished(false);
		setSelectedOption(null);
	};
	if (!subject) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-3xl font-bold mb-6",
			children: "Escolha o Tema do Quiz"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "p-6 rounded-xl border border-border bg-card text-card-foreground shadow cursor-pointer hover:border-primary/50 hover:shadow-md transition-all flex flex-col items-center gap-4",
				onClick: () => handleStart("biology"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "h-8 w-8" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-semibold",
						children: "Biologia"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "10 questões sobre vida, genética e evolução."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "p-6 rounded-xl border border-border bg-card text-card-foreground shadow cursor-pointer hover:border-primary/50 hover:shadow-md transition-all flex flex-col items-center gap-4",
				onClick: () => handleStart("physics"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-16 w-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Atom, { className: "h-8 w-8" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-semibold",
						children: "Física"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "10 questões sobre mecânica, energia e universo."
					})
				]
			})]
		})]
	});
	if (isFinished) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-xl text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-8 rounded-xl border border-border bg-card text-card-foreground shadow",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-bold mb-4",
					children: "Quiz Concluído!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-6xl font-black mb-6 text-primary",
					children: [
						score,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-2xl text-muted-foreground font-normal",
							children: ["/ ", questions.length]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg text-muted-foreground mb-8",
					children: score >= 8 ? "Excelente! Você tem um ótimo domínio do assunto." : score >= 5 ? "Bom trabalho! Mas ainda há espaço para melhorar." : "Não desanime! Continue estudando para melhorar seus resultados."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: resetQuiz,
					size: "lg",
					className: "w-full sm:w-auto",
					children: "Tentar Novamente"
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "text-xl font-semibold text-muted-foreground capitalize",
				children: ["Tema: ", subject === "biology" ? "Biologia" : "Física"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-mono bg-secondary px-3 py-1 rounded-full text-sm",
				children: [
					"Questão ",
					currentQuestionIndex + 1,
					" de ",
					questions.length
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6 sm:p-8 rounded-xl border border-border bg-card text-card-foreground shadow",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-2xl font-bold mb-8 text-foreground",
					children: currentQuestion?.text
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3 mb-8",
					children: currentQuestion?.options.map((option, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => handleAnswer(index),
						className: `w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${selectedOption === index ? "border-primary bg-primary/10" : "border-border hover:border-primary/50 hover:bg-secondary/50"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `h-6 w-6 rounded-full border flex items-center justify-center text-xs ${selectedOption === index ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground text-muted-foreground"}`,
								children: String.fromCharCode(65 + index)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: option })]
						})
					}, index))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: handleNext,
						disabled: selectedOption === null,
						size: "lg",
						children: currentQuestionIndex + 1 === questions.length ? "Finalizar Quiz" : "Próxima Questão"
					})
				})
			]
		})]
	});
}
function QuizPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 pt-24 pb-12 px-5 flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizApp, {})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { QuizPage as component };
