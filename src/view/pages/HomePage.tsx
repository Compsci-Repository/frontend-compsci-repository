{
  /* import { Link } from 'react-router-dom'; */
}
import "./homePage.scss";
import { FolderButton } from "../components";
import logo_compsci from "../../assets/images/logo-compsci.png";
import logo_header from "../../assets/images/logo-header.png";
function HomePage() {
  return (
    <div className="p-homepage">
      <header className="header">
        <div className="p-homepage__header2">
          <img
            src={logo_header}
            alt="Logo da Compsci-Repository"
            className="p-homepage__header__logo"
          />
        </div>
      </header>
      <main className="p-homepage__main">
        <div className="p-homepage__main__logo">
          <img src={logo_compsci} alt="Logo da Compsci-Repository" />
        </div>
        <div className="p-homepage__main__search">
          <h1>Compsci Repository :D</h1>
        </div>
        <div className="p-homepage__folders">
          <FolderButton color="violet">1º PERÍODO</FolderButton>
          {/*<Link to="/app2" className=""></Link>*/}
          <FolderButton color="purple">2º PERÍODO</FolderButton>
          <FolderButton color="purple">3º PERÍODO</FolderButton>
          <FolderButton color="violet">4º PERÍODO</FolderButton>
          <FolderButton color="violet">5º PERÍODO</FolderButton>
          <FolderButton color="purple">6º PERÍODO</FolderButton>
          <FolderButton color="purple">7º PERÍODO</FolderButton>
          <FolderButton color="violet">8º PERÍODO</FolderButton>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
