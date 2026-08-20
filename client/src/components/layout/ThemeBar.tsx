import { useTranslation } from "react-i18next";
import { fontPresets, themePresets } from "@/config/theme";
import { useTheme } from "@/lib/theme-provider";
import { cn } from "@/lib/utils";

export function ThemeBar() {
  const { t, i18n } = useTranslation();
  const { preset, setPresetId, font, setFontId, motionBg, setMotionBg } = useTheme();
  const isPl = i18n.language.startsWith("pl");

  return (
    <div className="border-b border-white/10 bg-black/70">
      <div className="mx-auto flex min-h-9 max-w-6xl flex-wrap items-center gap-x-3 gap-y-1.5 px-4 py-1.5 sm:px-6">
        <p className="text-muted-foreground shrink-0 text-[11px] tracking-[0.16em] uppercase">
          {t("theme.change")}
        </p>
        <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label={t("theme.change")}>
          {themePresets.map((item) => {
            const selected = preset.id === item.id;
            const name = isPl ? item.namePl : item.nameEn;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setPresetId(item.id)}
                aria-pressed={selected}
                aria-label={name}
                title={name}
                className={cn(
                  "flex h-6 items-center gap-1.5 rounded-full border px-1.5 transition-colors",
                  selected
                    ? "border-foreground/70 bg-white/10"
                    : "border-white/15 hover:border-white/35 hover:bg-white/5",
                )}
              >
                <span
                  className="size-3.5 rounded-full"
                  style={{ backgroundColor: item.swatchPrimary }}
                />
                <span
                  className="size-3.5 rounded-full"
                  style={{ backgroundColor: item.swatchAccent }}
                />
                <span className="sr-only lg:not-sr-only lg:pr-1 lg:text-[10px] lg:font-medium lg:tracking-wide lg:uppercase">
                  {name}
                </span>
              </button>
            );
          })}
        </div>
        <p className="text-muted-foreground shrink-0 text-[11px] tracking-[0.16em] uppercase">
          {t("theme.font")}
        </p>
        <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label={t("theme.font")}>
          {fontPresets.map((item) => {
            const selected = font.id === item.id;
            const name = isPl ? item.namePl : item.nameEn;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setFontId(item.id)}
                aria-pressed={selected}
                aria-label={name}
                title={name}
                className={cn(
                  "flex h-6 items-center rounded-full border px-2.5 text-[10px] font-medium tracking-wide uppercase transition-colors",
                  selected
                    ? "border-foreground/70 bg-white/10"
                    : "border-white/15 hover:border-white/35 hover:bg-white/5",
                )}
                style={{ fontFamily: item.headingFont }}
              >
                {name}
              </button>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => setMotionBg(!motionBg)}
          aria-pressed={motionBg}
          className={cn(
            "ml-auto flex h-6 items-center rounded-full border px-2.5 text-[10px] font-medium tracking-wide uppercase transition-colors",
            motionBg
              ? "border-foreground/70 bg-white/10"
              : "border-white/15 hover:border-white/35 hover:bg-white/5",
          )}
        >
          {motionBg ? t("theme.motionOn") : t("theme.motionOff")}
        </button>
      </div>
    </div>
  );
}
