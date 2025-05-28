import { useEffect, useState } from "react";
import { BackButton, FolderButton, Header, Input } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { getSemesterSubjects } from "../../../controller/utils/subjectUtils";
import folder from "../../../assets/images/folder--blue.png";

function ClassesPage() {
  const [semester, setSemester] = useState<number>();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let sem: number = Number(params.semester);

    if (isNaN(sem)) return;

    if (!semester) setSemester(sem);
  }, [params.semester, semester]);

  return (
    <div className="p-classes">
      <Header />
      <main className="p-classes__main">
        <div className="p-classes__main__periodo">
          <img src={folder} />
          <h1>{`${semester}º PERÍODO`}</h1>
        </div>
        <Input placeholder="Procurar material" />
        <div className="p-classes__main__folders">
          {getSemesterSubjects(semester ?? 0).map((subject, i) => (
            <FolderButton
              color="blue"
              key={`p-classes__main__folder${i}`}
              onClick={() => navigate(subject)}
            >
              {subject.toUpperCase()}
            </FolderButton>
          ))}
        </div>
        <BackButton />
      </main>
    </div>
  );
}
export default ClassesPage;
