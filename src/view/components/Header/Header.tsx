import ToggleThemeButton from "../ToggleThemeButton/ToggleThemeButton";
import logo from "../../../assets/images/logo-header.png";
import classNames from "classnames";
import { Link } from "react-router-dom";

type Props = {
  className?: string;
};

function Header({ className }: Props) {
  return (
    <header className={classNames("c-header", className)}>
      <Link className="c-header__logo" to="/">
        <img src={logo} alt="Logo da Compsci-Repository" />
      </Link>
      <ToggleThemeButton className="c-header__theme-switch" />
    </header>
  );
}

export default Header;
