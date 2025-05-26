import { useTheme } from "../../../context";
import { Moon, Sun } from "../../../assets/icons";

function ToggleThemeButton() {
  const { toggleTheme, theme } = useTheme();

  return (
    <button
      className={`c-toggle-theme-btn c-toggle-theme-btn--${theme}`}
      onClick={() => toggleTheme()}
    >
      <div className="c-toggle-theme-btn__icon">
        {theme === "light" ? <Sun /> : <Moon />}
      </div>
    </button>
  );
}

export default ToggleThemeButton;
