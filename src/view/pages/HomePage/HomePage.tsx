import { FolderButton, Input } from "../../components";
import logo_compsci from "../../assets/images/logo-compsci.png";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="p-homepage">
      <div className="p-homepage__logo">
        <img src={logo_compsci} alt="Logo da Compsci-Repository" />
      </div>
      <Input placeholder="Procurar material" />
      <div className="p-homepage__folders">
        <FolderButton onClick={() => navigate("/1")} color="violet">
          1º PERÍODO
        </FolderButton>
        <FolderButton onClick={() => navigate("/2")} color="purple">
          2º PERÍODO
        </FolderButton>
        <FolderButton onClick={() => navigate("/3")} color="purple">
          3º PERÍODO
        </FolderButton>
        <FolderButton onClick={() => navigate("/4")} color="violet">
          4º PERÍODO
        </FolderButton>
        <FolderButton onClick={() => navigate("/5")} color="violet">
          5º PERÍODO
        </FolderButton>
        <FolderButton onClick={() => navigate("/6")} color="purple">
          6º PERÍODO
        </FolderButton>
        <FolderButton onClick={() => navigate("/7")} color="purple">
          7º PERÍODO
        </FolderButton>
        <FolderButton onClick={() => navigate("/8")} color="violet">
          8º PERÍODO
        </FolderButton>
      </div>
    </div>
  );
}

export default HomePage;
