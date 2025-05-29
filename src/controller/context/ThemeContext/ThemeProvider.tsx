import {
  type PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { type Theme, ThemeContext } from "./ThemeContext";
import Cookies from "js-cookie";

function getInitialTheme(): Theme {
  let theme = Cookies.get("theme");
  if (["dark", "light"].includes(theme ?? "")) return theme as Theme;
  return "dark";
}

function ThemeProvider({ children }: PropsWithChildren) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(getInitialTheme());

  const toggleTheme = useCallback(
    (t?: Theme) => {
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      setCurrentTheme(t ?? newTheme);
    },
    [setCurrentTheme, currentTheme]
  );

  useEffect(() => {
    document.documentElement.dataset.theme = currentTheme;
    const now = new Date();
    const time = now.getTime() + 100 * 24 * 60 * 60 * 1000;
    const expireTime = new Date(time);
    document.cookie = `theme=${currentTheme};expires=${expireTime.toUTCString()}`;
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme: currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
