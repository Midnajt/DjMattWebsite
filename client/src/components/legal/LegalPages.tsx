import type { ReactNode } from "react";
import { Trans, useTranslation } from "react-i18next";
import { site } from "@/config/site";
import { Container } from "@/components/layout/Section";

function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  const { t } = useTranslation();

  return (
    <main id="content" className="py-16">
      <Container className="max-w-3xl">
        <div className="glass rounded-xl p-6 md:p-10">
          <p className="border-accent/40 text-muted-foreground mb-6 border-l-2 pl-3 text-sm">
            {t("legal.disclaimer")}
          </p>
          <h1 className="text-4xl">{title}</h1>
          <div className="mt-8 space-y-4 text-sm leading-relaxed">{children}</div>
          <p className="mt-10">
            <a className="text-accent underline" href="#top">
              {t("legal.back")}
            </a>
          </p>
          <p className="text-muted-foreground mt-6 text-xs">
            {[site.legalName, site.address.full, site.email].filter(Boolean).join(" · ")}
          </p>
        </div>
      </Container>
    </main>
  );
}

function Paragraphs({ keys }: { keys: string[] }) {
  const { t } = useTranslation();
  return (
    <>
      {keys.map((key) => (
        <p key={key}>{t(key)}</p>
      ))}
    </>
  );
}

export function RodoPage() {
  const { t } = useTranslation();

  return (
    <LegalLayout title={t("legal.rodoTitle")}>
      <p>
        {t("legal.rodo.admin", { name: site.legalName })}
        {site.email ? ` ${t("legal.rodo.email", { email: site.email })}` : ""}
      </p>
      <Paragraphs
        keys={["legal.rodo.p1", "legal.rodo.p2", "legal.rodo.p3", "legal.rodo.p4"]}
      />
      <ul className="list-disc space-y-1 pl-5">
        <li>{t("legal.rodo.rights.access")}</li>
        <li>{t("legal.rodo.rights.rectify")}</li>
        <li>{t("legal.rodo.rights.erase")}</li>
        <li>{t("legal.rodo.rights.limit")}</li>
        <li>{t("legal.rodo.rights.port")}</li>
        <li>{t("legal.rodo.rights.object")}</li>
        <li>{t("legal.rodo.rights.complaint")}</li>
      </ul>
      <p>
        <Trans
          i18nKey="legal.rodo.more"
          components={{
            privacy: <a className="text-accent underline" href="#/polityka" />,
            cookies: <a className="text-accent underline" href="#/cookies" />,
          }}
        />
      </p>
    </LegalLayout>
  );
}

export function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <LegalLayout title={t("legal.privacyTitle")}>
      <Paragraphs
        keys={["legal.privacy.p1", "legal.privacy.p2", "legal.privacy.p3", "legal.privacy.p4"]}
      />
      <p>
        <a
          className="text-accent underline"
          href="https://soundcloud.com/pages/privacy"
          target="_blank"
          rel="noreferrer"
        >
          {t("legal.privacy.scLink")}
        </a>
      </p>
      {site.email ? <p>{t("legal.privacy.contact", { email: site.email })}</p> : null}
      <p>
        <a className="text-accent underline" href="#/cookies">
          {t("footer.cookies")}
        </a>
        {" · "}
        <a className="text-accent underline" href="#/rodo">
          {t("footer.rodo")}
        </a>
      </p>
    </LegalLayout>
  );
}

export function CookiesPage() {
  const { t } = useTranslation();

  return (
    <LegalLayout title={t("legal.cookiesTitle")}>
      <Paragraphs keys={["legal.cookies.p1", "legal.cookies.p2"]} />
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-accent/30 border-b">
              <th className="py-2 pr-3 font-medium">{t("legal.cookies.colName")}</th>
              <th className="py-2 pr-3 font-medium">{t("legal.cookies.colType")}</th>
              <th className="py-2 font-medium">{t("legal.cookies.colPurpose")}</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr className="border-border border-b">
              <td className="py-2 pr-3 align-top">lang</td>
              <td className="py-2 pr-3 align-top">{t("legal.cookies.necessary")}</td>
              <td className="py-2 align-top">{t("legal.cookies.rowLang")}</td>
            </tr>
            <tr className="border-border border-b">
              <td className="py-2 pr-3 align-top">cookie-consent</td>
              <td className="py-2 pr-3 align-top">{t("legal.cookies.necessary")}</td>
              <td className="py-2 align-top">{t("legal.cookies.rowConsent")}</td>
            </tr>
            <tr>
              <td className="py-2 pr-3 align-top">SoundCloud</td>
              <td className="py-2 pr-3 align-top">{t("legal.cookies.third")}</td>
              <td className="py-2 align-top">{t("legal.cookies.rowSc")}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Paragraphs keys={["legal.cookies.p3"]} />
      <p>
        <a className="text-accent underline" href="#/rodo">
          {t("footer.rodo")}
        </a>
        {" · "}
        <a className="text-accent underline" href="#/polityka">
          {t("footer.privacy")}
        </a>
      </p>
    </LegalLayout>
  );
}
