import { useTranslation } from "react-i18next";
import { images } from "@/config/assets";
import { requestSoundcloudPlay } from "@/lib/soundcloud-player";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20">
      <div>
        <h1 className="font-heading text-6xl leading-none font-bold tracking-tight uppercase sm:text-7xl md:text-8xl">
          <span className="text-primary block">{t("hero.name")}</span>
          <span className="block text-white">{t("hero.title")}</span>
        </h1>
        <p className="text-accent mt-6 text-sm tracking-[0.22em] uppercase">
          {t("hero.tagline")}
        </p>
        <button
          type="button"
          className="glass mt-8 inline-flex items-center gap-2 px-7 py-3 text-sm font-medium tracking-widest uppercase"
          onClick={() => requestSoundcloudPlay()}
        >
          <span className="text-primary" aria-hidden>
            ▶
          </span>
          {t("hero.play")}
        </button>
      </div>
      <div className="cassette-stage relative mx-auto aspect-[4/3] w-full max-w-xl">
        <img
          src={images.cassette}
          alt={t("hero.cassetteAlt")}
          className="absolute inset-0 size-full object-contain"
        />
      </div>
    </section>
  );
}
