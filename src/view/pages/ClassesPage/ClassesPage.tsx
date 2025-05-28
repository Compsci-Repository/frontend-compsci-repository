import { useEffect, useState } from "react";
import { BackButton, FolderButton, Input } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { getSemesterSubjects } from "../../../controller/utils/subjectUtils";
import folder from "../../../assets/images/folder--purple.png";

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
      <div className="p-classes__nav-search">
        <div className="p-classes__nav-indicator">
          <img src={folder} />
          <div className="p-classes__nav-indicator__description">
            <h2>DISCIPLINAS</h2>
            <h1>{`${semester}º PERÍODO`}</h1>
          </div>
        </div>
        <Input placeholder="Procurar material" />
      </div>
      <div className="p-classes__folders">
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
    </div>
  );
}
export default ClassesPage;
