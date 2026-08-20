import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  COOKIE_SETTINGS_EVENT,
  readCookieConsent,
  writeCookieConsent,
  type CookieConsent,
} from "@/lib/cookie-consent";

export function CookieBanner() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(() => readCookieConsent() === null);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    const open = () => {
      setAgreed(false);
      setVisible(true);
    };
    window.addEventListener(COOKIE_SETTINGS_EVENT, open);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, open);
  }, []);

  if (!visible) return null;

  const choose = (value: CookieConsent) => {
    writeCookieConsent(value);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      className="glass border-accent/30 fixed inset-x-0 bottom-0 z-50 border-t p-4 md:p-5"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0 max-w-3xl">
          <h2 id="cookie-banner-title" className="font-heading text-base md:text-lg">
            {t("cookies.title")}
          </h2>
          <p className="text-muted-foreground mt-1 text-sm">{t("cookies.text")}</p>
          <p className="mt-2 text-xs">
            <a className="text-accent hover:underline" href="#/cookies">
              {t("footer.cookies")}
            </a>
            {" · "}
            <a className="text-accent hover:underline" href="#/rodo">
              {t("footer.rodo")}
            </a>
            {" · "}
            <a className="text-accent hover:underline" href="#/polityka">
              {t("footer.privacy")}
            </a>
          </p>
          <label className="mt-3 flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              className="accent-primary mt-1"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span>{t("cookies.checkbox")}</span>
          </label>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Button type="button" variant="outline" onClick={() => choose("necessary")}>
            {t("cookies.necessary")}
          </Button>
          <Button type="button" disabled={!agreed} onClick={() => choose("accepted")}>
            {t("cookies.accept")}
          </Button>
        </div>
      </div>
    </div>
  );
}
