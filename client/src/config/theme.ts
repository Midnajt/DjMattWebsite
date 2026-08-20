export type SectionDensity = "comfortable" | "compact" | "airy";
export type ThemePresetId = "matt" | "swap" | "pulse" | "volt" | "prism";

export type ThemeTokens = {
  radius: string;
  headingFont: string;
  bodyFont: string;
  googleFontsHref: string;
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  border: string;
  input: string;
  ring: string;
};

export type ThemePreset = {
  id: ThemePresetId;
  namePl: string;
  nameEn: string;
  density: SectionDensity;
  swatchPrimary: string;
  swatchAccent: string;
  dark: ThemeTokens;
};

const sharedType = {
  radius: "0.25rem",
  headingFont: '"Space Grotesk", sans-serif',
  bodyFont: '"Source Sans 3", sans-serif',
  googleFontsHref:
    "https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap",
} as const;

const mattDark: ThemeTokens = {
  ...sharedType,
  background: "#000000",
  foreground: "#ffffff",
  card: "#0a0a0a",
  cardForeground: "#ffffff",
  popover: "#0a0a0a",
  popoverForeground: "#ffffff",
  primary: "#E2453A",
  primaryForeground: "#ffffff",
  secondary: "#141414",
  secondaryForeground: "#ffffff",
  muted: "#141414",
  mutedForeground: "#a3a3a3",
  accent: "#2DD4BF",
  accentForeground: "#042f2e",
  destructive: "oklch(0.704 0.191 22.216)",
  border: "oklch(1 0 0 / 14%)",
  input: "oklch(1 0 0 / 16%)",
  ring: "#E2453A",
};

const swapDark: ThemeTokens = {
  ...mattDark,
  primary: "#2DD4BF",
  primaryForeground: "#042f2e",
  accent: "#E2453A",
  accentForeground: "#ffffff",
  ring: "#2DD4BF",
};

/** Electric indigo + acid lime — paleta w stylu Linear / Raycast / 2025–26. */
const pulseDark: ThemeTokens = {
  ...sharedType,
  background: "#05060d",
  foreground: "#f4f4f8",
  card: "#0c0e18",
  cardForeground: "#f4f4f8",
  popover: "#0c0e18",
  popoverForeground: "#f4f4f8",
  primary: "#7C6CFF",
  primaryForeground: "#0b0c14",
  secondary: "#12141f",
  secondaryForeground: "#f4f4f8",
  muted: "#12141f",
  mutedForeground: "#a1a1aa",
  accent: "#D4FF4A",
  accentForeground: "#141a05",
  destructive: "oklch(0.704 0.191 22.216)",
  border: "oklch(1 0 0 / 16%)",
  input: "oklch(1 0 0 / 18%)",
  ring: "#7C6CFF",
};

/** Neon lime + lemon chartreuse — paleta z obrazka „dark tech / matrix”. */
const voltDark: ThemeTokens = {
  ...sharedType,
  background: "#030805",
  foreground: "#f3fff4",
  card: "#08110c",
  cardForeground: "#f3fff4",
  popover: "#08110c",
  popoverForeground: "#f3fff4",
  primary: "#7CFF3A",
  primaryForeground: "#051405",
  secondary: "#0d1810",
  secondaryForeground: "#f3fff4",
  muted: "#0d1810",
  mutedForeground: "#9bb59e",
  accent: "#E8FF4A",
  accentForeground: "#161a05",
  destructive: "oklch(0.704 0.191 22.216)",
  border: "oklch(0.92 0.08 145 / 18%)",
  input: "oklch(0.92 0.08 145 / 20%)",
  ring: "#7CFF3A",
};

/** Electric cyan + magenta — paleta z obrazka „indigo / prism”. */
const prismDark: ThemeTokens = {
  ...sharedType,
  background: "#070616",
  foreground: "#f4f2ff",
  card: "#100e24",
  cardForeground: "#f4f2ff",
  popover: "#100e24",
  popoverForeground: "#f4f2ff",
  primary: "#4DB8FF",
  primaryForeground: "#061018",
  secondary: "#16132c",
  secondaryForeground: "#f4f2ff",
  muted: "#16132c",
  mutedForeground: "#b0a8c9",
  accent: "#FF3DAE",
  accentForeground: "#1a0510",
  destructive: "oklch(0.704 0.191 22.216)",
  border: "oklch(0.85 0.12 300 / 20%)",
  input: "oklch(0.85 0.12 300 / 22%)",
  ring: "#4DB8FF",
};

export const themePresets: ThemePreset[] = [
  {
    id: "matt",
    namePl: "Matt",
    nameEn: "Matt",
    density: "comfortable",
    swatchPrimary: mattDark.primary,
    swatchAccent: mattDark.accent,
    dark: mattDark,
  },
  {
    id: "swap",
    namePl: "Swap",
    nameEn: "Swap",
    density: "comfortable",
    swatchPrimary: swapDark.primary,
    swatchAccent: swapDark.accent,
    dark: swapDark,
  },
  {
    id: "pulse",
    namePl: "Pulse",
    nameEn: "Pulse",
    density: "comfortable",
    swatchPrimary: pulseDark.primary,
    swatchAccent: pulseDark.accent,
    dark: pulseDark,
  },
  {
    id: "volt",
    namePl: "Volt",
    nameEn: "Volt",
    density: "comfortable",
    swatchPrimary: voltDark.primary,
    swatchAccent: voltDark.accent,
    dark: voltDark,
  },
  {
    id: "prism",
    namePl: "Prism",
    nameEn: "Prism",
    density: "comfortable",
    swatchPrimary: prismDark.primary,
    swatchAccent: prismDark.accent,
    dark: prismDark,
  },
];

export const defaultPresetId: ThemePresetId = "matt";

export type FontPresetId = "grotesk" | "syne" | "instrument";

export type FontPreset = {
  id: FontPresetId;
  namePl: string;
  nameEn: string;
  headingFont: string;
  bodyFont: string;
  googleFontsHref: string;
};

export const fontPresets: FontPreset[] = [
  {
    id: "grotesk",
    namePl: "Grotesk",
    nameEn: "Grotesk",
    headingFont: '"Space Grotesk", sans-serif',
    bodyFont: '"Source Sans 3", sans-serif',
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap",
  },
  {
    id: "syne",
    namePl: "Syne",
    nameEn: "Syne",
    headingFont: '"Syne", sans-serif',
    bodyFont: '"Outfit", sans-serif',
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Syne:wght@400;600;700;800&display=swap",
  },
  {
    id: "instrument",
    namePl: "Instrument",
    nameEn: "Instrument",
    headingFont: '"Instrument Serif", serif',
    bodyFont: '"Instrument Sans", sans-serif',
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap",
  },
];

export const defaultFontId: FontPresetId = "grotesk";

export function getPreset(id: ThemePresetId): ThemePreset {
  return themePresets.find((preset) => preset.id === id) ?? themePresets[0];
}

export function getFontPreset(id: FontPresetId): FontPreset {
  return fontPresets.find((preset) => preset.id === id) ?? fontPresets[0];
}

export function isThemePresetId(value: string): value is ThemePresetId {
  return themePresets.some((preset) => preset.id === value);
}

export function isFontPresetId(value: string): value is FontPresetId {
  return fontPresets.some((preset) => preset.id === value);
}

export function densityClass(density: SectionDensity): string {
  if (density === "compact") return "py-12 md:py-16";
  if (density === "airy") return "py-24 md:py-32";
  return "py-16 md:py-24";
}
