import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./view/styles/main.scss";
import App from "./view/App.tsx";
import ThemeProvider from "./controller/context/ThemeContext/ThemeProvider.tsx";
import FileProvider from "./controller/context/FileContext/FileProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <FileProvider>
        <App />
      </FileProvider>
    </ThemeProvider>
  </StrictMode>
);
