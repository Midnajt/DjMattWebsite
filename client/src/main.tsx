import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/lib/theme-provider";
import { HashViewProvider } from "@/lib/hash-view";
import App from "@/App";
import "@/i18n";
import "@/index.css";

const inAppBrowser = /FBAN|FBAV|FB_IAB|Instagram|Line\/|Messenger/i.test(navigator.userAgent);
if (inAppBrowser) {
  document.documentElement.classList.add("in-app-browser");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <HashViewProvider>
        <App />
      </HashViewProvider>
    </ThemeProvider>
  </StrictMode>,
);
