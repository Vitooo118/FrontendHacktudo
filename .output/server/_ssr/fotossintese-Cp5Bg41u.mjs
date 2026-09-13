import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { E as Droplets, r as Wind, t as Zap, u as Sun, x as Leaf } from "../_libs/lucide-react.mjs";
import { a as cn, i as SiteHeader, r as SiteFooter, t as Button } from "./SiteChrome-CbY4KV0z.mjs";
import { n as Root, t as Indicator } from "../_libs/radix-ui__react-progress.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/fotossintese-Cp5Bg41u.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Progress = import_react.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
		className: "h-full w-full flex-1 bg-primary transition-all",
		style: { transform: `translateX(-${100 - (value || 0)}%)` }
	})
}));
Progress.displayName = Root.displayName;
function PhotosynthesisGame() {
	const [sunlight, setSunlight] = (0, import_react.useState)(0);
	const [water, setWater] = (0, import_react.useState)(0);
	const [co2, setCo2] = (0, import_react.useState)(0);
	const [energy, setEnergy] = (0, import_react.useState)(0);
	const [growth, setGrowth] = (0, import_react.useState)(0);
	const [isPhotosynthesizing, setIsPhotosynthesizing] = (0, import_react.useState)(false);
	const canPhotosynthesize = sunlight >= 10 && water >= 10 && co2 >= 10;
	const isGameComplete = growth >= 100;
	const handlePhotosynthesis = () => {
		if (canPhotosynthesize && !isPhotosynthesizing && !isGameComplete) {
			setIsPhotosynthesizing(true);
			setSunlight((s) => Math.max(0, s - 10));
			setWater((w) => Math.max(0, w - 10));
			setCo2((c) => Math.max(0, c - 10));
			setTimeout(() => {
				setEnergy((e) => Math.min(100, e + 20));
				setIsPhotosynthesizing(false);
			}, 1500);
		}
	};
	const handleGrow = () => {
		if (energy >= 30 && !isGameComplete) {
			setEnergy((e) => Math.max(0, e - 30));
			setGrowth((g) => Math.min(100, g + 20));
		}
	};
	(0, import_react.useEffect)(() => {
		const interval = setInterval(() => {
			setCo2((c) => Math.min(100, c + 5));
		}, 1500);
		return () => clearInterval(interval);
	}, []);
	const getPlantEmoji = () => {
		if (growth < 30) return "🌱";
		if (growth < 60) return "🌿";
		if (growth < 100) return "🪴";
		return "🌳";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl rounded-2xl bg-card p-6 shadow-xl border border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes moveToCenter {
          0% {
            transform: translate(var(--startX), var(--startY)) scale(1);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translate(0, 0) scale(0.2);
            opacity: 0;
          }
        }
        @keyframes popOut {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
        .anim-move {
          animation: moveToCenter 1.5s ease-in-out forwards;
        }
        .anim-pop {
          animation: popOut 0.5s ease-out forwards;
        }
      ` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-2xl font-bold mb-2 flex items-center justify-center gap-2 text-card-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "text-green-500" }), " Minigame de Fotossíntese"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-sm",
					children: "Colete recursos para realizar a fotossíntese e fazer a planta crescer!"
				})]
			}),
			isGameComplete && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 rounded-xl text-center anim-pop",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold text-green-700 dark:text-green-400 flex items-center justify-center gap-2",
					children: "🎉 Parabéns, fotossíntese completa! 🎉"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-green-600 dark:text-green-500 mt-1",
					children: "Sua planta atingiu o tamanho máximo."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex justify-center items-end h-40 mb-8 bg-gradient-to-t from-secondary/50 to-transparent rounded-xl border border-border/50 pb-2 overflow-hidden",
				children: [isPhotosynthesizing && !isGameComplete && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 z-0 flex items-center justify-center pointer-events-none pb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
							className: "absolute text-yellow-500 h-8 w-8 anim-move",
							style: {
								"--startX": "-100px",
								"--startY": "-60px"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Droplets, {
							className: "absolute text-blue-500 h-8 w-8 anim-move",
							style: {
								"--startX": "0px",
								"--startY": "80px"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wind, {
							className: "absolute text-slate-400 h-8 w-8 anim-move",
							style: {
								"--startX": "100px",
								"--startY": "-60px"
							}
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "transition-all duration-700 ease-out origin-bottom z-10",
					style: { transform: `scale(${1 + growth / 100 * 1.5})` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-5xl drop-shadow-sm",
						children: getPlantEmoji()
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-4 mb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceCard, {
						title: "Luz Solar",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "text-yellow-500 h-6 w-6" }),
						value: sunlight,
						onClick: () => setSunlight((s) => Math.min(100, s + 10)),
						disabled: isGameComplete
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceCard, {
						title: "Água",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Droplets, { className: "text-blue-500 h-6 w-6" }),
						value: water,
						onClick: () => setWater((w) => Math.min(100, w + 10)),
						disabled: isGameComplete
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceCard, {
						title: "CO2 (Auto)",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wind, { className: "text-slate-400 h-6 w-6" }),
						value: co2,
						disabled: isGameComplete
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-secondary/50 p-5 rounded-xl border border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row justify-between items-center gap-4 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-500/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-5 w-5 text-amber-500" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold text-card-foreground",
								children: ["Energia: ", energy]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: handlePhotosynthesis,
							disabled: !canPhotosynthesize || energy >= 100 || isPhotosynthesizing || isGameComplete,
							className: "w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white",
							children: isPhotosynthesizing ? "Sintetizando..." : "Fazer Fotossíntese"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Requer 10 Luz, 10 Água e 10 CO2 para gerar 20 Energia."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-secondary/50 p-5 rounded-xl border border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold flex items-center gap-2 text-card-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-green-500/20",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-5 w-5 text-green-500" })
								}), "Crescimento"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm font-bold text-green-600 dark:text-green-400",
								children: [growth, "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
							value: growth,
							className: "h-3 bg-secondary"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row justify-between items-center gap-4 mt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Requer 30 Energia para crescer 20%."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: handleGrow,
							disabled: energy < 30 || isGameComplete,
							variant: "outline",
							className: "w-full sm:w-auto border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20",
							children: isGameComplete ? "Planta Adulta!" : "Crescer Planta"
						})]
					})]
				})]
			})
		]
	});
}
function ResourceCard({ title, icon, value, onClick, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: "flex flex-col items-center justify-center p-4 rounded-xl bg-secondary border border-border transition-transform hover:scale-[1.02] active:scale-95 disabled:hover:scale-100 disabled:active:scale-100 disabled:opacity-80 disabled:cursor-not-allowed",
		onClick,
		disabled: !onClick || disabled,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 p-3 bg-background rounded-full shadow-sm",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-xl font-bold text-foreground",
				children: [value, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground ml-0.5",
					children: "/100"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `text-[10px] uppercase font-bold tracking-wider mt-2 ${onClick && !disabled ? "text-primary" : "text-transparent"}`,
				children: onClick && !disabled ? "Coletar" : "-"
			})
		]
	});
}
function FotossintesePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 pt-24 pb-12 px-5 flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-4xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-3xl font-bold text-foreground sm:text-4xl",
							children: "Simulação Interativa"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg text-muted-foreground",
							children: "Experimente o conceito de fotossíntese na prática."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotosynthesisGame, {})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { FotossintesePage as component };
