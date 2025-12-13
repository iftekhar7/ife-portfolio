import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/main.scss";
import App from "./App.tsx";
import { ThemeProvider } from "./components/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
