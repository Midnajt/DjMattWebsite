import { useTranslation } from "react-i18next";
import { Container, Section, SectionHeader } from "@/components/layout/Section";
import { Slider } from "@/components/sections/Slider";
import { Gallery } from "@/components/sections/Gallery";

export function Media() {
  const { t } = useTranslation();

  return (
    <Section id="galeria">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <SectionHeader
              className="mb-4"
              kicker={t("slider.kicker")}
              title={t("slider.title")}
              subtitle={t("slider.subtitle")}
            />
            <Slider />
          </div>
          <div>
            <SectionHeader
              className="mb-4"
              kicker={t("gallery.kicker")}
              title={t("gallery.title")}
              subtitle={t("gallery.subtitle")}
            />
            <Gallery />
          </div>
        </div>
      </Container>
    </Section>
  );
}
