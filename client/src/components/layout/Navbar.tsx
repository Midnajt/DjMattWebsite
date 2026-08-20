import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu } from "lucide-react";
import { site } from "@/config/site";
import { requestSoundcloudPlay } from "@/lib/soundcloud-player";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const LINKS = [
  { href: "#onas", key: "nav.about" },
  { href: "#sets", key: "nav.sets" },
  { href: "#galeria", key: "nav.gallery" },
  { href: "#kontakt", key: "nav.contact" },
] as const;

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggleLang = () => {
    void i18n.changeLanguage(i18n.language.startsWith("pl") ? "en" : "pl");
  };

  return (
    <header className="border-b border-accent/30">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="font-heading text-sm font-semibold tracking-[0.18em] uppercase">
          {site.name}
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-accent text-sm font-medium tracking-wide uppercase transition-colors"
            >
              {t(link.key)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" onClick={toggleLang} aria-label={t("theme.lang")}>
            {i18n.language.startsWith("pl") ? "EN" : "PL"}
          </Button>
          <Button asChild size="sm" variant="outline" className="border-primary hidden sm:inline-flex">
            <a href="#sets" onClick={() => requestSoundcloudPlay()}>
              {t("hero.play")}
            </a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label={t("nav.menu")}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>{site.name}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 px-4" aria-label={t("nav.menu")}>
                {LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a href={link.href} className="hover:bg-accent/15 hover:text-accent rounded-md px-2 py-3 text-base">
                      {t(link.key)}
                    </a>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
