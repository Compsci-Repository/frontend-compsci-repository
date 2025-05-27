import { FolderButton, Input } from "../components";
import logo_compsci from "../../assets/images/logo-compsci.png";
import { Header } from "../components/Header";
function HomePage() {
  return (
    <div className="p-homepage">
      <Header />
      <main className="p-homepage__main">
        <div className="p-homepage__main__logo">
          <img src={logo_compsci} alt="Logo da Compsci-Repository" />
        </div>
        <Input placeholder="Procurar material" />
        <div className="p-homepage__folders">
          <FolderButton color="violet">1º PERÍODO</FolderButton>
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
