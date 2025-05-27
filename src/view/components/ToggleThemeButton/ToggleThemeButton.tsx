import { useTheme } from "../../../context";
import { Moon, Sun } from "../../../assets/icons";
import classNames from "classnames";

type Props = {
  className?: string;
};

function ToggleThemeButton({ className }: Props) {
  const { toggleTheme, theme } = useTheme();

  return (
    <button
      className={classNames(
        "c-toggle-theme-btn",
        `c-toggle-theme-btn--${theme}`,
        className
      )}
      onClick={() => toggleTheme()}
    >
      <div className="c-toggle-theme-btn__icon">
        {theme === "light" ? <Sun /> : <Moon />}
      </div>
    </button>
  );
}

export default ToggleThemeButton;
