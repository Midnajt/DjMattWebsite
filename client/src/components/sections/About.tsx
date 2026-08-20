import { useTranslation } from "react-i18next";
import { images } from "@/config/assets";
import { Container, Section, SectionHeader } from "@/components/layout/Section";

export function About() {
  const { t } = useTranslation();

  return (
    <Section id="onas">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <div className="glass overflow-hidden rounded-xl p-2">
          <img
            src={images.about}
            alt={t("about.photoAlt")}
            className="h-80 w-full rounded-lg object-cover object-top md:h-[28rem]"
            loading="lazy"
          />
        </div>
        <div className="glass rounded-xl p-6 md:p-8">
          <SectionHeader kicker={t("about.kicker")} title={t("about.title")} />
          <p className="text-muted-foreground">{t("about.p1")}</p>
          <p className="text-muted-foreground mt-4">{t("about.p2")}</p>
          <p className="text-muted-foreground mt-4">{t("about.p3")}</p>
          <p className="text-muted-foreground mt-4">{t("about.p4")}</p>
          <dl className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div>
              <dt className="font-heading text-accent text-3xl">2015</dt>
              <dd className="text-muted-foreground mt-1 text-xs">{t("about.statSince")}</dd>
            </div>
            <div>
              <dt className="font-heading text-accent text-3xl">Analog</dt>
              <dd className="text-muted-foreground mt-1 text-xs">{t("about.statGear")}</dd>
            </div>
            <div>
              <dt className="font-heading text-accent text-3xl">7&quot;</dt>
              <dd className="text-muted-foreground mt-1 text-xs">{t("about.statDig")}</dd>
            </div>
          </dl>
        </div>
      </Container>
    </Section>
  );
}
