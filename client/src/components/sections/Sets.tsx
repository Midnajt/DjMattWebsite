import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";
import { site } from "@/config/site";
import { images } from "@/config/assets";
import { Container, Section, SectionHeader, SectionPhoto } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { hasSoundcloudConsent, openCookieSettings } from "@/lib/cookie-consent";
import { registerSoundcloudIframe } from "@/lib/soundcloud-player";

function SoundcloudIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M1.8 10.4c.22 0 .4.18.4.4v4.3c0 .22-.18.4-.4.4s-.4-.18-.4-.4v-4.3c0-.22.18-.4.4-.4Zm2.35-1.7c.22 0 .4.18.4.4v7.5c0 .22-.18.4-.4.4s-.4-.18-.4-.4v-7.5c0-.22.18-.4.4-.4Zm2.4-1.15c.22 0 .4.18.4.4v9.8c0 .22-.18.4-.4.4s-.4-.18-.4-.4v-9.8c0-.22.18-.4.4-.4Zm2.4-.55c.22 0 .4.18.4.4v10.9c0 .22-.18.4-.4.4s-.4-.18-.4-.4V7.4c0-.22.18-.4.4-.4Zm2.45.15c.22 0 .4.18.4.4v10.6c0 .22-.18.4-.4.4s-.4-.18-.4-.4V7.55c0-.22.18-.4.4-.4Zm2.55-1.05h.55c3.35.1 5.25 2.2 5.25 5.2 0 2.95-1.95 5.15-5.25 5.25H11.9V7.1h1.05Z"
      />
    </svg>
  );
}

export function Sets() {
  const { t } = useTranslation();
  const [allowed, setAllowed] = useState(hasSoundcloudConsent);

  useEffect(() => {
    const sync = () => setAllowed(hasSoundcloudConsent());
    window.addEventListener("cookie-consent-change", sync);
    return () => window.removeEventListener("cookie-consent-change", sync);
  }, []);

  return (
    <Section id="sets" className="relative overflow-hidden">
      <SectionPhoto src={images.sectionBg.decks} />
      <Container className="relative z-10">
        <SectionHeader
          kicker={t("sets.kicker")}
          title={t("sets.title")}
          subtitle={t("sets.subtitle")}
        />
        <a
          href={site.social.soundcloud}
          target="_blank"
          rel="noreferrer"
          className="text-accent mb-6 inline-flex items-center gap-1 text-sm font-medium hover:underline"
        >
          <SoundcloudIcon className="size-8 shrink-0" />
          {t("sets.openSoundcloud")}
          <ExternalLink className="size-3.5" aria-hidden />
        </a>
        <div className="glass overflow-hidden rounded-xl p-2">
          {allowed ? (
            <iframe
              ref={registerSoundcloudIframe}
              title={t("sets.playerTitle")}
              src={site.soundcloudEmbed}
              className="h-[450px] w-full rounded-lg"
              allow="autoplay"
            />
          ) : (
            <div className="flex min-h-[280px] flex-col items-center justify-center gap-4 px-6 py-12 text-center">
              <p className="text-muted-foreground max-w-md text-sm">{t("sets.consentNeeded")}</p>
              <Button type="button" onClick={() => openCookieSettings()}>
                {t("footer.cookieSettings")}
              </Button>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
