import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { C as GraduationCap, D as Database, F as ChartLine, H as Atom, I as ChartColumn, L as Brain, S as Layers, T as FlaskConical, U as ArrowRight, V as BookOpenCheck, W as Activity, a as Users, c as TrendingDown, f as Sparkles, g as Puzzle, h as Radio, i as WandSparkles, l as Target, m as Repeat, p as Sigma, w as Gauge, x as Leaf } from "../_libs/lucide-react.mjs";
import { a as cn, i as SiteHeader, n as Cta, r as SiteFooter } from "./SiteChrome-CbY4KV0z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DvVhwiSk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, className, delay = 0, as = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			});
		}, {
			threshold: .15,
			rootMargin: "0px 0px -60px 0px"
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(as, {
		ref,
		className,
		style: {
			opacity: visible ? 1 : 0,
			transform: visible ? "none" : "translateY(28px)",
			transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
			transitionDelay: `${delay}ms`
		},
		children
	});
}
function SectionHeading({ eyebrow, title, description, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: cn("mx-auto max-w-3xl text-center", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex items-center rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-foreground",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-5 text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]",
				children: title
			}),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg",
				children: description
			}) : null
		]
	});
}
var highlights = [
	{
		icon: Radio,
		label: "Interações sincronizadas com a fala do professor"
	},
	{
		icon: GraduationCap,
		label: "Metodologias pedagógicas reais, não genéricas"
	},
	{
		icon: ChartColumn,
		label: "Dados de aprendizagem em tempo real"
	}
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden bg-hero-gradient pb-20 pt-28 sm:pb-28 sm:pt-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1920&auto=format&fit=crop",
				alt: "",
				"aria-hidden": "true",
				width: 1920,
				height: 1080,
				className: "absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Projeto de Hackathon 2026"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 text-balance text-4xl font-bold leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl",
							children: [
								"A aula continua sua. ",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-learn",
									children: "A interação vira viva."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg",
							children: "O AulaViva é a IA que transforma a explicação do professor em experiências interativas sincronizadas — e se adapta em tempo real às dificuldades da turma."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Cta, {
								href: "/minigames",
								className: "from-blue-600 to-blue-700 text-white",
								children: ["Entrar", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cta, {
								href: "#como-funciona",
								variant: "ghostLight",
								children: "Como Funciona"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 150,
					className: "mt-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-3 sm:grid-cols-3",
						children: highlights.map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-4 text-left backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary-foreground/15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4.5 w-4.5 text-primary-foreground" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 text-sm font-medium leading-snug text-primary-foreground/90",
								children: label
							})]
						}, label))
					})
				})]
			})
		]
	});
}
var problems = [
	{
		icon: TrendingDown,
		title: "O engajamento se perde no meio da explicação",
		text: "A aula expositiva compete com o celular. Sem momentos de interação, a atenção cai antes do conteúdo virar aprendizado."
	},
	{
		icon: Puzzle,
		title: "Atividades prontas não conversam com a turma",
		text: "Bancos de exercícios são estáticos: ignoram o ritmo, o repertório e as dificuldades específicas daquela sala."
	},
	{
		icon: WandSparkles,
		title: "A IA atual só entrega conteúdo genérico",
		text: "Geradores comuns produzem quiz solto, sem intenção pedagógica e sem relação com a sequência didática do professor."
	},
	{
		icon: Gauge,
		title: "Nenhum dado no momento em que ele importa",
		text: "O professor só descobre quem não entendeu na prova — quando já é tarde para retomar o conceito."
	}
];
var solutions = [
	{
		icon: Radio,
		title: "Aula sincronizada",
		text: "A explicação do professor e a interação dos alunos acontecem juntas, nos momentos certos do roteiro."
	},
	{
		icon: BookOpenCheck,
		title: "Metodologia pedagógica real",
		text: "A IA escolhe entre metodologias ativas estruturadas — não improvisa formato de atividade."
	},
	{
		icon: Database,
		title: "Base de conhecimento pedagógico",
		text: "Cada experiência é gerada a partir de uma base curada de estratégias, objetivos e níveis cognitivos."
	},
	{
		icon: Repeat,
		title: "Adaptação em tempo real",
		text: "As respostas dos alunos alimentam o motor, que ajusta a próxima etapa da aula automaticamente."
	}
];
var steps = [
	{
		title: "Professor define conteúdo e objetivo",
		text: "Tema, série e objetivo de aprendizagem. Em minutos, sem sair do seu plano de aula."
	},
	{
		title: "A IA analisa e escolhe a metodologia",
		text: "O motor pedagógico seleciona a estratégia mais adequada ao objetivo e ao perfil da turma."
	},
	{
		title: "Gera o roteiro interativo da aula",
		text: "Uma sequência de momentos: explicação, provocação, interação e checagem de compreensão."
	},
	{
		title: "Alunos interagem sincronizados",
		text: "No celular ou no computador, a turma participa exatamente quando o professor sinaliza."
	},
	{
		title: "O sistema detecta dificuldades e adapta",
		text: "Erros recorrentes viram uma nova interação de reforço na etapa seguinte da mesma aula."
	}
];
var differentials = [
	{
		icon: BookOpenCheck,
		title: "Metodologias estruturadas",
		text: "Base pedagógica curada como fonte de verdade: a IA aplica, não inventa."
	},
	{
		icon: Radio,
		title: "Sincronia com a fala do professor",
		text: "O professor comanda o ritmo. A experiência acompanha, nunca atropela."
	},
	{
		icon: Layers,
		title: "3 módulos de IA",
		text: "Pedagógica escolhe, Geradora cria, Adaptativa corrige a rota durante a aula."
	},
	{
		icon: ChartLine,
		title: "Dashboard em tempo real",
		text: "Compreensão por conceito, por aluno e por momento — enquanto a aula acontece."
	},
	{
		icon: Atom,
		title: "Qualquer disciplina",
		text: "De funções quadráticas a análise de fontes históricas: o motor é agnóstico ao conteúdo."
	},
	{
		icon: Users,
		title: "Copiloto, não substituto",
		text: "A autoridade pedagógica segue com quem está na frente da sala."
	}
];
var useCases = [
	{
		icon: Sigma,
		subject: "Matemática",
		topic: "Parábola e lançamento de projéteis",
		text: "Alunos ajustam ângulo e velocidade para acertar o alvo enquanto o professor deduz a equação. Cada tentativa alimenta o gráfico da turma."
	},
	{
		icon: Leaf,
		subject: "Biologia",
		topic: "Seleção natural e fotossíntese",
		text: "A turma decide quais características sobrevivem a cada geração e vê o resultado coletivo na hora da explicação."
	},
	{
		icon: FlaskConical,
		subject: "Física e Química",
		topic: "Simulações com variáveis",
		text: "Experimentos com variáveis controladas: a turma prevê, testa e compara hipóteses sem sair da sequência da aula."
	}
];
var architecture = [
	{
		icon: Users,
		label: "Professor",
		note: "define conteúdo e conduz"
	},
	{
		icon: Brain,
		label: "Motor Pedagógico",
		note: "escolhe a metodologia"
	},
	{
		icon: WandSparkles,
		label: "Experiência Interativa",
		note: "roteiro gerado"
	},
	{
		icon: Target,
		label: "Alunos",
		note: "interagem em sincronia"
	},
	{
		icon: Activity,
		label: "Dados",
		note: "compreensão em tempo real"
	},
	{
		icon: Repeat,
		label: "Adaptação",
		note: "próxima etapa ajustada"
	}
];
function Section({ id, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: `px-5 py-20 sm:py-28 ${className ?? ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl",
			children
		})
	});
}
function Problema() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "problema",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "O problema",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Tecnologia sobra na escola.",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient-tech",
					children: "Aprendizado sincronizado falta."
				})
			] }),
			description: "Quatro travas que impedem a aula expositiva de virar aula participativa — mesmo com IA disponível."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-12 grid gap-5 sm:grid-cols-2",
			children: problems.map(({ icon: Icon, title, text }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				as: "li",
				delay: i * 90,
				className: "card-surface p-6 sm:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-11 w-11 place-items-center rounded-xl bg-destructive/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-destructive" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 text-lg font-semibold",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: text
					})
				]
			}, title))
		})]
	});
}
function Solucao() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "solucao",
		className: "bg-secondary/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "A solução",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Um copiloto pedagógico que entra",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient-learn",
					children: "no ritmo da sua aula"
				})
			] }),
			description: "O AulaViva não substitui o professor: ele transforma a explicação em participação, com intenção pedagógica em cada momento."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
			children: solutions.map(({ icon: Icon, title, text }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				as: "li",
				delay: i * 90,
				className: "card-surface h-full p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-primary-foreground" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 text-base font-semibold",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: text
					})
				]
			}, title))
		})]
	});
}
function ComoFunciona() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "como-funciona",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Como funciona",
			title: "Da intenção do professor à adaptação automática",
			description: "Cinco etapas, um único fluxo contínuo durante a aula."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-14 grid gap-5 lg:grid-cols-5",
			children: steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				as: "li",
				delay: i * 110,
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-surface h-full p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-tech text-sm font-bold text-primary-foreground",
								children: i + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px min-w-0 flex-1 bg-gradient-to-r from-border to-transparent" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-base font-semibold leading-snug",
							children: step.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: step.text
						})
					]
				})
			}, step.title))
		})]
	});
}
function Diferenciais() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "diferenciais",
		className: "bg-secondary/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Diferenciais",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Por que o AulaViva não é",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient-tech",
					children: "mais um gerador de atividades"
				})
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: differentials.map(({ icon: Icon, title, text }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				as: "li",
				delay: i * 80,
				className: "card-surface h-full p-6 sm:p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-accent" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "min-w-0 text-base font-semibold",
						children: title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted-foreground",
					children: text
				})]
			}, title))
		})]
	});
}
function Exemplos() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "exemplos",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Exemplos de uso",
			title: "A mesma aula, agora com a turma dentro dela",
			description: "Experiências geradas a partir do conteúdo que o professor já ia explicar."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-12 grid gap-5 lg:grid-cols-3",
			children: useCases.map(({ icon: Icon, subject, topic, text }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				as: "li",
				delay: i * 110,
				className: "card-surface h-full p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary-glow to-tech",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6 text-primary-foreground" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground",
						children: subject
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 text-lg font-semibold leading-snug",
						children: topic
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: text
					})
				]
			}, subject))
		})]
	});
}
function Arquitetura() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "arquitetura",
		className: "bg-secondary/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Arquitetura",
			title: "Um ciclo fechado de ensino, dado e adaptação",
			description: "Cada aula alimenta a próxima interação — sem etapa manual no meio."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mt-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-6",
				children: architecture.map(({ icon: Icon, label, note }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-surface flex h-full flex-col items-center gap-3 px-4 py-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-tech",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-primary-foreground" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold leading-tight",
								children: label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs leading-snug text-muted-foreground",
								children: note
							})
						]
					}), i < architecture.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						"aria-hidden": "true",
						className: "absolute -bottom-3 left-1/2 h-4 w-4 -translate-x-1/2 rotate-90 text-primary/60 lg:-right-3 lg:bottom-auto lg:left-auto lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:rotate-0"
					}) : null]
				}, label))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-center text-sm text-muted-foreground",
				children: "Professor → Motor Pedagógico → Experiência Interativa → Alunos → Dados → Adaptação"
			})]
		})]
	});
}
function CtaFinal() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "cta-final",
		className: "px-5 py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mx-auto max-w-5xl overflow-hidden rounded-4xl bg-hero-gradient px-6 py-16 text-center shadow-elevated sm:px-12 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-balance text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl",
					children: [
						"Sua explicação já é boa.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-learn",
							children: "Falta a turma viver ela."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg",
					children: "Veja o AulaViva gerando um roteiro interativo completo a partir de um único objetivo de aprendizagem."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Cta, {
						href: "/fotossintese",
						children: ["Começar Agora", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cta, {
						href: "#como-funciona",
						variant: "ghostLight",
						children: "Como Funciona"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-xs uppercase tracking-[0.18em] text-primary-foreground/60",
					children: "Projeto desenvolvido para hackathon"
				})
			]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "hero",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Problema, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Solucao, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComoFunciona, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Diferenciais, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Exemplos, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arquitetura, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaFinal, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Index as component };
