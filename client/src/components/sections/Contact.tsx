import { useTranslation } from "react-i18next";
import { Mail, Phone, ExternalLink } from "lucide-react";
import { site } from "@/config/site";
import { images } from "@/config/assets";
import { Container, Section, SectionHeader, SectionPhoto } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

export function Contact() {
  const { t } = useTranslation();
  const hasPhone = Boolean(site.phone);
  const hasEmail = Boolean(site.email);

  return (
    <Section id="kontakt" className="relative overflow-hidden">
      <SectionPhoto src={images.sectionBg.bass} objectClassName="object-cover object-top" />
      <Container className="relative z-10">
        <SectionHeader
          kicker={t("contact.kicker")}
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />
        <div className="glass space-y-6 rounded-xl p-6 md:p-8">
          {hasPhone ? (
            <p className="flex gap-3 text-sm">
              <Phone className="text-primary mt-0.5 size-5 shrink-0" />
              <span>
                <span className="font-medium">{t("contact.phone")}</span>
                <br />
                <a className="hover:text-accent" href={site.phoneHref}>
                  {site.phone}
                </a>
              </span>
            </p>
          ) : null}
          {hasEmail ? (
            <p className="flex gap-3 text-sm">
              <Mail className="text-primary mt-0.5 size-5 shrink-0" />
              <span>
                <span className="font-medium">{t("contact.email")}</span>
                <br />
                <a className="hover:text-accent" href={site.emailHref}>
                  {site.email}
                </a>
              </span>
            </p>
          ) : null}
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a href={site.social.soundcloud} target="_blank" rel="noreferrer">
                {t("contact.soundcloud")}
                <ExternalLink />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={site.social.instagram} target="_blank" rel="noreferrer">
                {t("contact.instagram")}
                <ExternalLink />
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
