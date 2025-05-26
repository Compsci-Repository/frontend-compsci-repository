import { createContext, useContext } from "react";

type Theme = "dark" | "light";

type Props = {
  toggleTheme(theme?: Theme): void;
  theme: Theme;
};

const ThemeContext = createContext({} as Props);

function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}

export { useTheme, ThemeContext, type Theme };
