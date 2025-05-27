import ToggleThemeButton from "../ToggleThemeButton/ToggleThemeButton";
import logo from "../../../assets/images/logo-header.png";
import classNames from "classnames";

type Props = {
  className?: string;
};

function Header({ className }: Props) {
  return (
    <header className={classNames("c-header", className)}>
      <img
        src={logo}
        alt="Logo da Compsci-Repository"
        className="c-header__logo"
      />
      <ToggleThemeButton className="c-header__theme-switch" />
    </header>
  );
}

export default Header;
