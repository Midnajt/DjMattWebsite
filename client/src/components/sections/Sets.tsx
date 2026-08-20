import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";
import { site } from "@/config/site";
import { images } from "@/config/assets";
import { Container, Section, SectionHeader, SectionPhoto } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { hasSoundcloudConsent, openCookieSettings } from "@/lib/cookie-consent";
import { registerSoundcloudIframe } from "@/lib/soundcloud-player";

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
