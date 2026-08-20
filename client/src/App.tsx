import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeBar } from "@/components/layout/ThemeBar";
import { BubblesBackdrop } from "@/components/layout/BubblesBackdrop";
import { Footer } from "@/components/layout/Footer";
import { useTheme } from "@/lib/theme-provider";
import { cn } from "@/lib/utils";
import { Hero } from "@/components/sections/Hero";
import { Sets } from "@/components/sections/Sets";
import { About } from "@/components/sections/About";
import { Media } from "@/components/sections/Media";
import { Contact } from "@/components/sections/Contact";
import { CookieBanner } from "@/components/legal/CookieBanner";
import { CookiesPage, PrivacyPage, RodoPage } from "@/components/legal/LegalPages";
import { useHashView } from "@/lib/hash-view";

function HomePage() {
  return (
    <main id="content">
      <Hero />
      <Sets />
      <About />
      <Media />
      <Contact />
    </main>
  );
}

export default function App() {
  const { t } = useTranslation();
  const { view } = useHashView();
  const { motionBg } = useTheme();

  return (
    <div
      id="top"
      className={cn("relative min-h-dvh", !motionBg && "page-glow")}
    >
      <BubblesBackdrop />
      <div className="relative z-10">
        <a
          href="#content"
          className="bg-primary text-primary-foreground sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:rounded-md focus:px-3 focus:py-2"
        >
          {t("common.skip")}
        </a>
        <div className="sticky top-0 z-40">
          <ThemeBar />
          <Navbar />
        </div>
        {view === "rodo" ? (
          <RodoPage />
        ) : view === "privacy" ? (
          <PrivacyPage />
        ) : view === "cookies" ? (
          <CookiesPage />
        ) : (
          <HomePage />
        )}
        <Footer />
        <CookieBanner />
      </div>
    </div>
  );
}
