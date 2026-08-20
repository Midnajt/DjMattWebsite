import { hasSoundcloudConsent, openCookieSettings } from "@/lib/cookie-consent";

const API_SRC = "https://w.soundcloud.com/player/api.js";

type SoundcloudWidget = {
  bind: (event: string, listener: () => void) => void;
  play: () => void;
};

type SoundcloudApi = {
  Widget: ((el: HTMLIFrameElement) => SoundcloudWidget) & {
    Events: { READY: string };
  };
};

declare global {
  interface Window {
    SC?: SoundcloudApi;
  }
}

let iframe: HTMLIFrameElement | null = null;
let pendingPlay = false;
let apiPromise: Promise<SoundcloudApi | null> | null = null;

function loadWidgetApi(): Promise<SoundcloudApi | null> {
  if (window.SC?.Widget) return Promise.resolve(window.SC);
  if (apiPromise) return apiPromise;

  apiPromise = new Promise((resolve) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${API_SRC}"]`);
    const onReady = () => resolve(window.SC ?? null);

    if (existing) {
      if (window.SC?.Widget) {
        onReady();
        return;
      }
      existing.addEventListener("load", onReady, { once: true });
      existing.addEventListener("error", () => resolve(null), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = API_SRC;
    script.async = true;
    script.addEventListener("load", onReady, { once: true });
    script.addEventListener("error", () => resolve(null), { once: true });
    document.head.appendChild(script);
  });

  return apiPromise;
}

async function playWhenReady() {
  if (!iframe) return;
  const api = await loadWidgetApi();
  if (!api || !iframe) return;

  const widget = api.Widget(iframe);
  widget.bind(api.Widget.Events.READY, () => {
    widget.play();
    pendingPlay = false;
  });
  widget.play();
}

export function registerSoundcloudIframe(el: HTMLIFrameElement | null) {
  iframe = el;
  if (el) {
    void loadWidgetApi();
    if (pendingPlay) void playWhenReady();
  }
}

export function requestSoundcloudPlay() {
  pendingPlay = true;
  if (!hasSoundcloudConsent()) {
    openCookieSettings();
    return;
  }
  void playWhenReady();
}
