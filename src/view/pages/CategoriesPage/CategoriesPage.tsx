import { useEffect, useState } from "react";
import { BackButton, CategoryButton, Input } from "../../components";
import { useParams } from "react-router-dom";
import folder from "../../../assets/images/folder--purple.png";
import { parseSubject } from "../../../controller/utils/subjectUtils";

type PageProps = {
  semester: number;
  subject: string;
};

function CategoriesPage() {
  const [props, setProps] = useState<PageProps>();
  const params = useParams();

  useEffect(() => {
    let sem: number = Number(params.semester);
    let sub: string = params.subject ?? "";

    if (isNaN(sem) || !sub) return;

    if (!props) setProps({ semester: sem, subject: sub });
  }, [params.semester, params.subject, props]);

  return (
    <div className="p-categories">
      <div className="p-categories__nav-search">
        <div className="p-categories__nav-indicator--mobile">
          <img src={folder} />
          <div className="p-categories__nav-indicator__description">
            <h2>{parseSubject(props?.subject ?? "").toUpperCase()}</h2>
          </div>
        </div>
        <div className="p-categories__nav-indicator--desktop">
          <img src={folder} />
          <div className="p-categories__nav-indicator__description">
            <h3>{`${props?.semester}º PERÍODO`}</h3>
            <h2>{parseSubject(props?.subject ?? "").toUpperCase()}</h2>
          </div>
        </div>
        <Input placeholder="Procurar material" />
      </div>
      <div className="p-categories__categories">
        <CategoryButton category="activity" />
        <CategoryButton category="book" />
        <CategoryButton category="exam" />
        <CategoryButton category="video" />
      </div>
      <BackButton />
    </div>
  );
}
export default CategoriesPage;
