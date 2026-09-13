import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { A as CirclePlay, B as BookOpen, C as GraduationCap, M as ChevronUp, N as ChevronDown, O as Clock, P as Check, R as BrainCircuit, S as Layers, a as Users, b as Lightbulb, j as CircleCheck, l as Target, o as User, v as LoaderCircle, y as ListChecks, z as Bot } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as cn, i as SiteHeader, r as SiteFooter, t as Button } from "./SiteChrome-CbY4KV0z.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/copiloto-z6Qu1aa9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
function CopilotoPage() {
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)(null);
	const [generationSource, setGenerationSource] = (0, import_react.useState)(null);
	const [subject, setSubject] = (0, import_react.useState)("Biologia");
	const [topic, setTopic] = (0, import_react.useState)("Fotossíntese");
	const [grade, setGrade] = (0, import_react.useState)("7º ano");
	const [difficulty, setDifficulty] = (0, import_react.useState)("Os alunos não conseguem visualizar o processo");
	const [objective, setObjective] = (0, import_react.useState)("Compreender como luz, água e CO2 participam da fotossíntese");
	const handleGenerate = async (e) => {
		e.preventDefault();
		const input = {
			subject,
			topic,
			grade,
			difficulty,
			objective
		};
		setLoading(true);
		setResult(null);
		setGenerationSource(null);
		const fallbackLessonPlan = {
			title: `Desvendando: ${input.topic}`,
			objective: input.objective,
			methodology: "Aprendizagem baseada em investigação guiada",
			introduction: {
				duration: "10 minutos",
				teacherAction: `Inicia a aula questionando os alunos sobre o tema ${input.topic}, instigando a curiosidade sobre o conceito fundamental.`,
				studentAction: "Respondem aos questionamentos iniciais com base em conhecimentos prévios e compartilham suas hipóteses."
			},
			explanation: {
				duration: "15 minutos",
				teacherAction: "Apresenta os conceitos fundamentais de forma esquemática, conectando com a discussão anterior.",
				studentAction: "Anotam os pontos principais, tiram dúvidas e relacionam a explicação com a provocação inicial."
			},
			activity: {
				duration: "15 minutos",
				experienceType: "simulation",
				experienceId: "sim-123",
				instructions: "Acesse a plataforma interativa, abra a simulação e altere as variáveis propostas para observar o impacto direto.",
				teacherAction: "Orienta os alunos no acesso à plataforma, circula auxiliando na manipulação e estimula a observação de causa e efeito.",
				studentAction: "Utilizam os computadores ou tablets para interagir com a simulação e testam diferentes combinações de variáveis."
			},
			assessment: {
				duration: "5 minutos",
				strategy: "Verificação formativa rápida baseada nas conclusões obtidas durante a simulação prática."
			},
			closure: {
				duration: "5 minutos",
				teacherAction: "Promove uma discussão em plenária para que os alunos compartilhem o que descobriram, consolidando o conceito.",
				studentAction: "Compartilham suas descobertas com a turma e respondem às perguntas finais de fixação."
			},
			pedagogicalDecision: {
				need: "Visualizar um processo complexo e compreender relações de causa e efeito na prática.",
				methodology: "Aprendizagem baseada em simulação e investigação guiada.",
				candidateExperiences: ["simulation", "investigation"],
				experienceType: "simulation",
				interaction: "Manipulação direta de variáveis com feedback imediato.",
				groupMode: "Individual ou em duplas.",
				activityDifficulty: "Moderada",
				reason: "A simulação é ideal para resolver dificuldades de visualização, permitindo testar hipóteses em um ambiente seguro."
			}
		};
		try {
			const response = await fetch("https://hacktudo-project.onrender.com/pedagogical/lesson-plan", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(input)
			});
			if (!response.ok) throw new Error(`Erro na API. Status: ${response.status}`);
			const lessonPlan = await response.json();
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
	const renderTeacherStudent = (teacher, student) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3 grid gap-3 sm:grid-cols-2",
		children: [teacher && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-md bg-secondary/40 p-3 border border-border/60",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-3.5 w-3.5" }), " Ação do Professor"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-foreground/80 leading-relaxed",
				children: teacher
			})]
		}), student && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-md bg-secondary/40 p-3 border border-border/60",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3.5 w-3.5" }), " Ação dos Alunos"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-foreground/80 leading-relaxed",
				children: student
			})]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 pt-24 pb-12 px-4 md:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-3xl font-bold text-foreground sm:text-4xl flex items-center justify-center gap-3",
							children: ["Copiloto Pedagógico ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "text-primary h-8 w-8" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-lg text-muted-foreground",
							children: "Gere roteiros de aula metodológicos e interativos em segundos."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-4 rounded-xl border border-border bg-card p-6 shadow-sm lg:sticky lg:top-24",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-xl font-semibold mb-6 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "h-5 w-5 text-muted-foreground" }), "Configurar Aula"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleGenerate,
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "subject",
											children: "Matéria"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											name: "subject",
											required: true,
											value: subject,
											onValueChange: setSubject,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												id: "subject",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Selecione a matéria" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Biologia",
													children: "Biologia"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Física",
													children: "Física"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Química",
													children: "Química"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "História",
													children: "História"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Matemática",
													children: "Matemática"
												})
											] })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "topic",
											children: "Tópico"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "topic",
											name: "topic",
											placeholder: "Ex: Fotossíntese, Leis de Newton...",
											required: true,
											value: topic,
											onChange: (e) => setTopic(e.target.value)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "grade",
											children: "Série/Ano"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "grade",
											name: "grade",
											placeholder: "Ex: 7º ano, 1º Ano do Ensino Médio...",
											required: true,
											value: grade,
											onChange: (e) => setGrade(e.target.value)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "difficulty",
											children: "Dificuldade ou Contexto da Turma"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											id: "difficulty",
											name: "difficulty",
											placeholder: "Qual a principal dificuldade dos alunos sobre esse tema?",
											className: "resize-none h-20",
											required: true,
											value: difficulty,
											onChange: (e) => setDifficulty(e.target.value)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "objective",
											children: "Objetivo da Aula"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											id: "objective",
											name: "objective",
											placeholder: "O que os alunos devem aprender ou ser capazes de fazer ao final da aula?",
											className: "resize-none h-20",
											required: true,
											value: objective,
											onChange: (e) => setObjective(e.target.value)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										onClick: handleGenerate,
										className: "w-full mt-2",
										size: "lg",
										disabled: loading,
										children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-5 w-5 animate-spin" }), "Processando no Motor..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "mr-2 h-5 w-5" }), "Gerar Roteiro Pedagógico"] })
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-8 rounded-xl border border-border bg-card shadow-sm h-full flex flex-col",
							children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 flex flex-col items-center justify-center p-12 text-center text-muted-foreground min-h-[500px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-12 w-12 animate-spin text-primary mb-4" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-lg font-medium text-foreground",
										children: "Analisando o desafio pedagógico..."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm mt-2 max-w-sm",
										children: "Buscando a melhor metodologia e experiência interativa para superar a dificuldade informada."
									})
								]
							}) : result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6 sm:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-6 pb-6 border-b border-border",
										children: [
											generationSource && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold mb-4 transition-colors ${generationSource === "ia" ? "bg-primary/10 text-primary" : "bg-secondary text-secondary-foreground"}`,
												children: generationSource === "ia" ? "Gerado pelo Motor Pedagógico 🧠" : "Gerador Offline ⚙️"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
												className: "text-2xl sm:text-3xl font-bold flex items-center gap-3 text-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-7 w-7 text-primary shrink-0" }), result.title]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-5 p-4 rounded-xl bg-secondary/30 border border-border/50 flex flex-col gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-sm flex items-start gap-2.5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "h-4 w-4 text-primary shrink-0 mt-0.5" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-semibold text-foreground min-w-[90px]",
															children: "Objetivo:"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-muted-foreground leading-relaxed",
															children: result.objective
														})
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-sm flex items-start gap-2.5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, { className: "h-4 w-4 text-primary shrink-0 mt-0.5" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-semibold text-foreground min-w-[90px]",
															children: "Metodologia:"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-muted-foreground leading-relaxed",
															children: result.methodology
														})
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap items-center gap-2 mt-5 text-sm font-medium",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-1.5 bg-background border border-border text-foreground px-2.5 py-1.5 rounded-md",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-4 w-4 text-muted-foreground" }), subject]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-1.5 bg-background border border-border text-foreground px-2.5 py-1.5 rounded-md",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-4 w-4 text-muted-foreground" }), grade]
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-8 rounded-xl bg-primary/5 border border-primary/20 overflow-hidden",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "bg-primary/10 px-4 py-2.5 border-b border-primary/10 flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-semibold text-primary uppercase tracking-wide",
												children: "Decisão da IA Pedagógica"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-5 space-y-3.5 text-sm",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "flex flex-col sm:flex-row sm:gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
														className: "text-foreground shrink-0",
														children: "Necessidade Detectada:"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-muted-foreground",
														children: result.pedagogicalDecision.need
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "flex flex-col sm:flex-row sm:gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
														className: "text-foreground shrink-0",
														children: "Justificativa de Uso:"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-muted-foreground",
														children: result.pedagogicalDecision.reason
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-wrap gap-2 pt-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "bg-background border border-border/50 px-2.5 py-1 rounded-md text-xs text-muted-foreground font-medium",
															children: ["Tipo de Experiência: ", result.pedagogicalDecision.experienceType]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "bg-background border border-border/50 px-2.5 py-1 rounded-md text-xs text-muted-foreground font-medium",
															children: ["Interação: ", result.pedagogicalDecision.interaction]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "bg-background border border-border/50 px-2.5 py-1 rounded-md text-xs text-muted-foreground font-medium",
															children: ["Organização: ", result.pedagogicalDecision.groupMode]
														})
													]
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
												className: "text-xl font-bold flex items-center gap-2 mb-6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5 text-muted-foreground" }), " Momentos da Aula"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative pl-8 sm:pl-10 border-l-2 border-primary/20 pb-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "absolute -left-[13px] top-0 h-6 w-6 rounded-full bg-background border-2 border-primary flex items-center justify-center",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "h-3 w-3 text-primary" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
															className: "text-lg font-semibold text-foreground",
															children: "1. Introdução e Engajamento"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "inline-flex items-center w-fit text-xs font-semibold bg-secondary px-2.5 py-1 rounded-full text-secondary-foreground",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mr-1 h-3 w-3" }),
																" ",
																result.introduction.duration
															]
														})]
													}),
													renderTeacherStudent(result.introduction.teacherAction, result.introduction.studentAction)
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative pl-8 sm:pl-10 border-l-2 border-primary/20 pb-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "absolute -left-[13px] top-0 h-6 w-6 rounded-full bg-background border-2 border-primary flex items-center justify-center",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-3 w-3 text-primary" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
															className: "text-lg font-semibold text-foreground",
															children: "2. Explicação do Conceito"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "inline-flex items-center w-fit text-xs font-semibold bg-secondary px-2.5 py-1 rounded-full text-secondary-foreground",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mr-1 h-3 w-3" }),
																" ",
																result.explanation.duration
															]
														})]
													}),
													renderTeacherStudent(result.explanation.teacherAction, result.explanation.studentAction)
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative pl-8 sm:pl-10 border-l-2 border-primary/20 pb-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "absolute -left-[13px] top-0 h-6 w-6 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-sm shadow-primary/20",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, { className: "h-3 w-3 text-primary" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
															className: "text-lg font-semibold text-foreground flex items-center gap-2",
															children: ["3. Atividade Interativa", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "text-sm font-normal text-muted-foreground uppercase tracking-wider hidden sm:inline-block",
																children: [
																	"[",
																	result.activity.experienceType,
																	"]"
																]
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "inline-flex items-center w-fit text-xs font-semibold bg-primary/10 px-2.5 py-1 rounded-full text-primary",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mr-1 h-3 w-3" }),
																" ",
																result.activity.duration
															]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "mb-4 p-4 bg-accent/20 rounded-lg border border-accent/50 text-sm",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
															className: "text-foreground block mb-1",
															children: "Instruções para a Atividade:"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-muted-foreground leading-relaxed",
															children: result.activity.instructions
														})]
													}),
													renderTeacherStudent(result.activity.teacherAction, result.activity.studentAction)
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative pl-8 sm:pl-10 border-l-2 border-primary/20 pb-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "absolute -left-[13px] top-0 h-6 w-6 rounded-full bg-background border-2 border-primary flex items-center justify-center",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3 text-primary" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
															className: "text-lg font-semibold text-foreground",
															children: "4. Checagem de Compreensão"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "inline-flex items-center w-fit text-xs font-semibold bg-secondary px-2.5 py-1 rounded-full text-secondary-foreground",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mr-1 h-3 w-3" }),
																" ",
																result.assessment.duration
															]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "mt-2 p-3.5 bg-secondary/30 rounded-md border border-border/50 text-sm",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
															className: "text-foreground/90 block mb-1",
															children: "Estratégia de Avaliação:"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-muted-foreground leading-relaxed",
															children: result.assessment.strategy
														})]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative pl-8 sm:pl-10 border-l-2 border-transparent",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "absolute -left-[13px] top-0 h-6 w-6 rounded-full bg-background border-2 border-primary flex items-center justify-center",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListChecks, { className: "h-3 w-3 text-primary" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
															className: "text-lg font-semibold text-foreground",
															children: "5. Fechamento da Aula"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "inline-flex items-center w-fit text-xs font-semibold bg-secondary px-2.5 py-1 rounded-full text-secondary-foreground",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mr-1 h-3 w-3" }),
																" ",
																result.closure.duration
															]
														})]
													}),
													renderTeacherStudent(result.closure.teacherAction, result.closure.studentAction)
												]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-10 pt-6 border-t border-border flex justify-end gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "outline",
											onClick: () => toast.success("PDF salvo na sua máquina!"),
											children: "Baixar PDF"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											onClick: () => toast.success("Roteiro sincronizado com sua conta AulaViva."),
											children: "Salvar na Minha Biblioteca"
										})]
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 flex flex-col items-center justify-center p-12 text-center text-muted-foreground min-h-[500px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-20 w-20 rounded-full bg-secondary/50 flex items-center justify-center mb-5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-10 w-10 opacity-40" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-lg font-medium text-foreground",
										children: "Nenhum roteiro gerado"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm mt-2 max-w-sm",
										children: "Preencha o formulário e clique em gerar para analisar seu cenário e criar a aula ideal."
									})
								]
							})
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { CopilotoPage as component };
