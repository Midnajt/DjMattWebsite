import { useTheme } from "@/lib/theme-provider";

const BUBBLES = [
  { cls: "bubble-a", cx: 160, cy: 140, r: 210, fill: "var(--primary)" },
  { cls: "bubble-b", cx: 1020, cy: 90, r: 240, fill: "var(--accent)" },
  { cls: "bubble-c", cx: 640, cy: 430, r: 175, fill: "var(--primary)" },
  { cls: "bubble-d", cx: 220, cy: 680, r: 145, fill: "var(--accent)" },
  { cls: "bubble-e", cx: 1080, cy: 620, r: 160, fill: "var(--primary)" },
  { cls: "bubble-f", cx: 500, cy: 90, r: 95, fill: "var(--accent)" },
  { cls: "bubble-a", cx: 860, cy: 380, r: 72, fill: "var(--primary)" },
  { cls: "bubble-b", cx: 80, cy: 420, r: 58, fill: "var(--accent)" },
  { cls: "bubble-c", cx: 1180, cy: 280, r: 48, fill: "var(--primary)" },
  { cls: "bubble-d", cx: 430, cy: 560, r: 36, fill: "var(--accent)" },
  { cls: "bubble-e", cx: 740, cy: 700, r: 120, fill: "var(--primary)" },
  { cls: "bubble-f", cx: 330, cy: 280, r: 28, fill: "var(--accent)" },
  { cls: "bubble-a", cx: 960, cy: 520, r: 42, fill: "var(--primary)" },
  { cls: "bubble-b", cx: 70, cy: 80, r: 64, fill: "var(--accent)" },
  { cls: "bubble-c", cx: 1120, cy: 740, r: 32, fill: "var(--primary)" },
  { cls: "bubble-d", cx: 590, cy: 250, r: 22, fill: "var(--accent)" },
] as const;

export function BubblesBackdrop() {
  const { motionBg } = useTheme();
  if (!motionBg) return null;

  return (
    <div className="theme-bubbles" aria-hidden>
      <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="bubble-blur" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="36" />
          </filter>
        </defs>
        <g filter="url(#bubble-blur)">
          {BUBBLES.map((bubble, index) => (
            <circle
              key={`${bubble.cx}-${bubble.cy}-${index}`}
              className={`bubble ${bubble.cls}`}
              cx={bubble.cx}
              cy={bubble.cy}
              r={bubble.r}
              fill={bubble.fill}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
