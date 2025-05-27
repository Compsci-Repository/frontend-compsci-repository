import { Header } from "../components/Header";
import { FolderButton, Input } from "../components";
import { BackButton } from "../components/BackButton";

function Classes() {
  return (
    <div className="p-classes">
      <Header />
      <main className="p-classes__main">
        <div className="p-classes__main__periodo">
          <FolderButton color="purple" />
          <h1>1º PERÍODO</h1>
        </div>
        <Input placeholder="Procurar material" />
        <div className="p-classes__main__folders">
          <FolderButton color="blue">ACE</FolderButton>
          <FolderButton color="blue">APC</FolderButton>
          <FolderButton color="blue">DD</FolderButton>
          <FolderButton color="blue">FM</FolderButton>
          <FolderButton color="blue">ICC</FolderButton>
          <FolderButton color="blue">LAC</FolderButton>
          <FolderButton color="blue">SOCC</FolderButton>
        </div>
        <BackButton />
      </main>
    </div>
  );
}
export default Classes;
