import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultFontId,
  defaultPresetId,
  getFontPreset,
  getPreset,
  isFontPresetId,
  isThemePresetId,
  type FontPreset,
  type FontPresetId,
  type ThemePreset,
  type ThemePresetId,
  type ThemeTokens,
} from "@/config/theme";

const PRESET_KEY = "djmatt-theme-preset";
const MOTION_KEY = "djmatt-theme-motion";
const FONT_KEY = "djmatt-theme-font";

type ThemeContextValue = {
  preset: ThemePreset;
  setPresetId: (id: ThemePresetId) => void;
  font: FontPreset;
  setFontId: (id: FontPresetId) => void;
  motionBg: boolean;
  setMotionBg: (value: boolean) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readStoredPresetId(): ThemePresetId {
  try {
    const value = localStorage.getItem(PRESET_KEY);
    if (value && isThemePresetId(value)) return value;
  } catch {
    /* ignore */
  }
  return defaultPresetId;
}

function readStoredFontId(): FontPresetId {
  try {
    const value = localStorage.getItem(FONT_KEY);
    if (value && isFontPresetId(value)) return value;
  } catch {
    /* ignore */
  }
  return defaultFontId;
}

function readStoredMotionBg(): boolean {
  try {
    return localStorage.getItem(MOTION_KEY) === "on";
  } catch {
    return false;
  }
}

function applyTokens(
  tokens: ThemeTokens,
  font: FontPreset,
  presetId: ThemePresetId,
  motionBg: boolean,
) {
  const root = document.documentElement;
  root.classList.add("dark");
  root.dataset.theme = presetId;
  root.dataset.font = font.id;
  root.dataset.backdrop = motionBg ? "bubbles" : "glow";
  root.style.setProperty("--radius", tokens.radius);
  root.style.setProperty("--font-heading-stack", font.headingFont);
  root.style.setProperty("--font-body", font.bodyFont);
  root.style.setProperty("--background", tokens.background);
  root.style.setProperty("--foreground", tokens.foreground);
  root.style.setProperty("--card", tokens.card);
  root.style.setProperty("--card-foreground", tokens.cardForeground);
  root.style.setProperty("--popover", tokens.popover);
  root.style.setProperty("--popover-foreground", tokens.popoverForeground);
  root.style.setProperty("--primary", tokens.primary);
  root.style.setProperty("--primary-foreground", tokens.primaryForeground);
  root.style.setProperty("--secondary", tokens.secondary);
  root.style.setProperty("--secondary-foreground", tokens.secondaryForeground);
  root.style.setProperty("--muted", tokens.muted);
  root.style.setProperty("--muted-foreground", tokens.mutedForeground);
  root.style.setProperty("--accent", tokens.accent);
  root.style.setProperty("--accent-foreground", tokens.accentForeground);
  root.style.setProperty("--destructive", tokens.destructive);
  root.style.setProperty("--border", tokens.border);
  root.style.setProperty("--input", tokens.input);
  root.style.setProperty("--ring", tokens.ring);

  let link = document.getElementById("theme-fonts") as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.id = "theme-fonts";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }
  link.href = font.googleFontsHref;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [presetId, setPresetIdState] = useState<ThemePresetId>(readStoredPresetId);
  const [fontId, setFontIdState] = useState<FontPresetId>(readStoredFontId);
  const [motionBg, setMotionBgState] = useState(readStoredMotionBg);
  const preset = useMemo(() => getPreset(presetId), [presetId]);
  const font = useMemo(() => getFontPreset(fontId), [fontId]);

  useEffect(() => {
    applyTokens(preset.dark, font, preset.id, motionBg);
  }, [preset, font, motionBg]);

  const setPresetId = useCallback((id: ThemePresetId) => {
    setPresetIdState(id);
    try {
      localStorage.setItem(PRESET_KEY, id);
    } catch {
      /* ignore */
    }
  }, []);

  const setFontId = useCallback((id: FontPresetId) => {
    setFontIdState(id);
    try {
      localStorage.setItem(FONT_KEY, id);
    } catch {
      /* ignore */
    }
  }, []);

  const setMotionBg = useCallback((value: boolean) => {
    setMotionBgState(value);
    try {
      localStorage.setItem(MOTION_KEY, value ? "on" : "off");
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(
    () => ({ preset, setPresetId, font, setFontId, motionBg, setMotionBg }),
    [preset, setPresetId, font, setFontId, motionBg, setMotionBg],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
