import "./index.css";
import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { registerSW } from "virtual:pwa-register";

registerSW({
  onNeedRefresh() {
    console.log("New version available");
  },
  onOfflineReady() {
    console.log("App ready to work offline");
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
