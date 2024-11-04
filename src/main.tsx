import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import LoadingPage from "./pages/loading-page.tsx";
import App from "./App.tsx";
import "./i18n/config.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<LoadingPage />}>
      <App />
    </Suspense>
  </StrictMode>,
);
