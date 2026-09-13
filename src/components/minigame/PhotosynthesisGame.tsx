import { useState, useEffect } from "react";
import { Sun, Droplets, Wind, Zap, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export function PhotosynthesisGame() {
  const [sunlight, setSunlight] = useState(0);
  const [water, setWater] = useState(0);
  const [co2, setCo2] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [growth, setGrowth] = useState(0);
  const [isPhotosynthesizing, setIsPhotosynthesizing] = useState(false);

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

  useEffect(() => {
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

  return (
    <div className="mx-auto max-w-xl rounded-2xl bg-card p-6 shadow-xl border border-border">
      <style>{`
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
      `}</style>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2 text-card-foreground">
          <Leaf className="text-green-500" /> Minigame de Fotossíntese
        </h2>
        <p className="text-muted-foreground text-sm">
          Colete recursos para realizar a fotossíntese e fazer a planta crescer!
        </p>
      </div>

      {isGameComplete && (
        <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 rounded-xl text-center anim-pop">
          <h3 className="text-xl font-bold text-green-700 dark:text-green-400 flex items-center justify-center gap-2">
            🎉 Parabéns, fotossíntese completa! 🎉
          </h3>
          <p className="text-sm text-green-600 dark:text-green-500 mt-1">
            Sua planta atingiu o tamanho máximo.
          </p>
        </div>
      )}

      <div className="relative flex justify-center items-end h-40 mb-8 bg-gradient-to-t from-secondary/50 to-transparent rounded-xl border border-border/50 pb-2 overflow-hidden">
        {isPhotosynthesizing && !isGameComplete && (
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none pb-8">
            <Sun className="absolute text-yellow-500 h-8 w-8 anim-move" style={{ '--startX': '-100px', '--startY': '-60px' } as React.CSSProperties} />
            <Droplets className="absolute text-blue-500 h-8 w-8 anim-move" style={{ '--startX': '0px', '--startY': '80px' } as React.CSSProperties} />
            <Wind className="absolute text-slate-400 h-8 w-8 anim-move" style={{ '--startX': '100px', '--startY': '-60px' } as React.CSSProperties} />
          </div>
        )}
        <div
          className="transition-all duration-700 ease-out origin-bottom z-10"
          style={{ transform: `scale(${1 + (growth / 100) * 1.5})` }}
        >
          <span className="text-5xl drop-shadow-sm">{getPlantEmoji()}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <ResourceCard
          title="Luz Solar"
          icon={<Sun className="text-yellow-500 h-6 w-6" />}
          value={sunlight}
          onClick={() => setSunlight((s) => Math.min(100, s + 10))}
          disabled={isGameComplete}
        />
        <ResourceCard
          title="Água"
          icon={<Droplets className="text-blue-500 h-6 w-6" />}
          value={water}
          onClick={() => setWater((w) => Math.min(100, w + 10))}
          disabled={isGameComplete}
        />
        <ResourceCard
          title="CO2 (Auto)"
          icon={<Wind className="text-slate-400 h-6 w-6" />}
          value={co2}
          disabled={isGameComplete}
        />
      </div>

      <div className="space-y-6">
        <div className="bg-secondary/50 p-5 rounded-xl border border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-500/20">
                <Zap className="h-5 w-5 text-amber-500" />
              </span>
              <span className="font-semibold text-card-foreground">Energia: {energy}</span>
            </div>
            <Button
              onClick={handlePhotosynthesis}
              disabled={!canPhotosynthesize || energy >= 100 || isPhotosynthesizing || isGameComplete}
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white"
            >
              {isPhotosynthesizing ? "Sintetizando..." : "Fazer Fotossíntese"}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Requer 10 Luz, 10 Água e 10 CO2 para gerar 20 Energia.
          </p>
        </div>

        <div className="bg-secondary/50 p-5 rounded-xl border border-border">
          <div className="flex flex-col gap-3 mb-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold flex items-center gap-2 text-card-foreground">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-green-500/20">
                  <Leaf className="h-5 w-5 text-green-500" />
                </span>
                Crescimento
              </span>
              <span className="text-sm font-bold text-green-600 dark:text-green-400">{growth}%</span>
            </div>
            <Progress value={growth} className="h-3 bg-secondary" />
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-5">
            <p className="text-xs text-muted-foreground">
              Requer 30 Energia para crescer 20%.
            </p>
            <Button
              onClick={handleGrow}
              disabled={energy < 30 || isGameComplete}
              variant="outline"
              className="w-full sm:w-auto border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20"
            >
              {isGameComplete ? "Planta Adulta!" : "Crescer Planta"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResourceCard({
  title,
  icon,
  value,
  onClick,
  disabled,
}: {
  title: string;
  icon: React.ReactNode;
  value: number;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      className="flex flex-col items-center justify-center p-4 rounded-xl bg-secondary border border-border transition-transform hover:scale-[1.02] active:scale-95 disabled:hover:scale-100 disabled:active:scale-100 disabled:opacity-80 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={!onClick || disabled}
    >
      <div className="mb-3 p-3 bg-background rounded-full shadow-sm">{icon}</div>
      <span className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">
        {title}
      </span>
      <span className="text-xl font-bold text-foreground">
        {value}
        <span className="text-xs text-muted-foreground ml-0.5">/100</span>
      </span>
      <span
        className={`text-[10px] uppercase font-bold tracking-wider mt-2 ${onClick && !disabled ? "text-primary" : "text-transparent"}`}
      >
        {onClick && !disabled ? "Coletar" : "-"}
      </span>
    </button>
  );
}
