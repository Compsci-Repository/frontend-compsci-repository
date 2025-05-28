import { FileListItem, Input } from "../../components";
import type { FileCategory } from "../../../model/types";
import ActivityIcon from "../../../assets/icons/ActivityIcon";
import BookIcon from "../../../assets/icons/BookIcon";
import ExamIcon from "../../../assets/icons/ExamIcon";
import VideoIcon from "../../../assets/icons/VideoIcon";
import { useEffect, useState } from "react";
import { File } from "../../../model/classes";
import { useFile } from "../../../context/FileContext";
import {
  isCategory,
  parseCategory,
} from "../../../controller/utils/categoryUtils";
import { useParams } from "react-router-dom";
import folder from "../../../assets/images/folder--blue.png";
import { parseSubject } from "../../../controller/utils/subjectUtils";

type PageProps = {
  semester: number;
  subject: string;
  category: FileCategory;
};

function ContentListPage() {
  const [files, setFiles] = useState<File[] | undefined>(undefined);
  const [props, setProps] = useState<PageProps | undefined>(undefined);
  const { getFiles } = useFile();
  const params = useParams();

  useEffect(() => {
    let sem: number = Number(params.semester);
    let sub: string = params.subject ?? "";
    let cat: string = params.category ?? "";

    if (isNaN(sem) || !sub || !isCategory(cat)) return;

    if (!props) {
      setProps({
        semester: sem,
        subject: sub,
        category: cat as FileCategory,
      });
    }

    if (!files && props) {
      getFiles(props.semester, props.subject, props.category).then(
        (response) => {
          setFiles(response);
        }
      );
    }
  }, [
    files,
    getFiles,
    setProps,
    params.category,
    params.semester,
    params.subject,
    props,
  ]);

  function getCategoryIcon(category: FileCategory) {
    switch (category) {
      case "activity":
        return <ActivityIcon />;
      case "book":
        return <BookIcon />;
      case "exam":
        return <ExamIcon />;
      case "video":
        return <VideoIcon />;
    }
  }

  return (
    <div className="p-content-list">
      <div className="p-content-list__nav-search">
        <div className="p-content-list__nav-indicator--mobile">
          <div className="p-content-list__nav-indicator__icon">
            {getCategoryIcon(props?.category ?? "activity")}
          </div>
          <div className="p-content-list__nav-indicator__description">
            <h2>
              {parseCategory(props?.category ?? "activity").toUpperCase()}
            </h2>
          </div>
        </div>
        <div className="p-content-list__nav-indicator--desktop">
          <div className="p-content-list__nav-indicator__icon">
            <img src={folder} />
          </div>
          <div className="p-content-list__nav-indicator__description">
            <h3>{`${props?.semester}º PERÍODO > ${parseSubject(
              props?.subject ?? ""
            ).toUpperCase()}`}</h3>
            <h2>
              {parseCategory(props?.category ?? "activity").toUpperCase()}
            </h2>
          </div>
        </div>
        <Input placeholder="Procurar material" />
      </div>
      <ol className="p-content-list__list">
        {files?.map((f, i) => (
          <FileListItem file={f} key={`p-content-list__item${i}`} />
        ))}
      </ol>
    </div>
  );
}

export default ContentListPage;
