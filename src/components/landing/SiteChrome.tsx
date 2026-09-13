import { GraduationCap, Menu } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Cta } from "./Cta";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/#problema", label: "Problema" },
  { href: "/#solucao", label: "Solução" },
  { href: "/#como-funciona", label: "Como Funciona" },
  { href: "/#diferenciais", label: "Diferenciais" },
  { href: "/#arquitetura", label: "Arquitetura" },
  { href: "/copiloto", label: "Copiloto", isRoute: true },
  { href: "/minigames", label: "Minigames", isRoute: true },
  { href: "/quiz", label: "Quiz", isRoute: true },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary-foreground/10 bg-primary/70 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3">
        <a href="/#hero" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary-glow to-tech">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="truncate font-display text-lg font-bold text-primary-foreground">
            AulaViva
          </span>
        </a>

        <div className="flex items-center gap-1">
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-primary-foreground/75 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-primary-foreground/75 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
          
          <Cta href="/minigames" className="ml-1 px-5 py-2 text-sm from-blue-600 to-blue-700 text-white max-lg:hidden">
            Entrar
          </Cta>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-primary-foreground hover:bg-primary-foreground/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <div className="flex flex-col gap-6 py-6">
                <a href="/#hero" className="flex items-center gap-2">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary-glow to-tech">
                    <GraduationCap className="h-4 w-4 text-primary-foreground" />
                  </span>
                  <span className="font-display text-lg font-bold text-foreground">
                    AulaViva
                  </span>
                </a>
                <nav className="grid gap-2">
                  {navLinks.map((link) =>
                    link.isRoute ? (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        key={link.href}
                        href={link.href}
                        className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    )
                  )}
                </nav>
                <Cta href="/minigames" className="mt-2 w-full from-blue-600 to-blue-700 text-white">
                  Entrar
                </Cta>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
        <div className="min-w-0">
          <p className="font-display text-base font-bold">AulaViva</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Copiloto pedagógico de aulas interativas sincronizadas.
          </p>
        </div>
        <span className="shrink-0 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-secondary-foreground">
          Projeto de Hackathon 2026
        </span>
      </div>
    </footer>
  );
}
