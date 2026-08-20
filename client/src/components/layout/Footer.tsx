import { useTranslation } from "react-i18next";
import { site } from "@/config/site";
import { openCookieSettings } from "@/lib/cookie-consent";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="glass mt-8 border-t border-accent/25">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-semibold tracking-wide uppercase">{site.name}</p>
          {site.address.full ? (
            <p className="text-muted-foreground mt-2 text-sm">{site.address.full}</p>
          ) : null}
          {site.email ? (
            <p className="mt-2 text-sm">
              <a className="hover:text-accent" href={site.emailHref}>
                {site.email}
              </a>
            </p>
          ) : null}
        </div>
        <div>
          <p className="text-sm font-medium">{t("nav.home")}</p>
          <ul className="text-muted-foreground mt-3 space-y-2 text-sm">
            <li>
              <a className="hover:text-accent" href="#onas">
                {t("nav.about")}
              </a>
            </li>
            <li>
              <a className="hover:text-accent" href="#sets">
                {t("nav.sets")}
              </a>
            </li>
            <li>
              <a className="hover:text-accent" href="#galeria">
                {t("nav.gallery")}
              </a>
            </li>
            <li>
              <a className="hover:text-accent" href="#kontakt">
                {t("nav.contact")}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium">{t("footer.privacy")}</p>
          <ul className="text-muted-foreground mt-3 space-y-2 text-sm">
            <li>
              <a className="hover:text-accent" href="#/rodo">
                {t("footer.rodo")}
              </a>
            </li>
            <li>
              <a className="hover:text-accent" href="#/polityka">
                {t("footer.privacy")}
              </a>
            </li>
            <li>
              <a className="hover:text-accent" href="#/cookies">
                {t("footer.cookies")}
              </a>
            </li>
            <li>
              <button
                type="button"
                className="hover:text-accent text-left"
                onClick={() => openCookieSettings()}
              >
                {t("footer.cookieSettings")}
              </button>
            </li>
            <li>
              <a
                className="hover:text-accent"
                href={site.social.soundcloud}
                target="_blank"
                rel="noreferrer"
              >
                SoundCloud
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent"
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-muted-foreground mx-auto max-w-6xl border-t px-4 py-6 text-xs sm:px-6">
        <p>
          © {year} {site.legalName}
          {site.city ? ` ${site.city}` : ""} · {t("footer.rights")}
        </p>
        <p className="mt-2">
          {t("footer.createdBy")}{" "}
          <a className="hover:text-accent underline" href={site.addPattern.url} target="_blank" rel="noreferrer">
            {site.addPattern.name}
          </a>
        </p>
      </div>
    </footer>
  );
}
