import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import App from "./App.tsx";
import ThemeProvider from "./context/ThemeContext/ThemeProvider.tsx";
import FileProvider from "./context/FileContext/FileProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <FileProvider>
        <App />
      </FileProvider>
    </ThemeProvider>
  </StrictMode>
);
