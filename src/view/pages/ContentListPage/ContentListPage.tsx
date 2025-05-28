import { FileListItem, Header, Input } from "../../components";
import type { FileCategory } from "../../../model/types";
import ActivityIcon from "../../../assets/icons/ActivityIcon";
import BookIcon from "../../../assets/icons/BookIcon";
import ExamIcon from "../../../assets/icons/ExamIcon";
import VideoIcon from "../../../assets/icons/VideoIcon";
import { useEffect, useState } from "react";
import { File } from "../../../model/classes";
import { useFile } from "../../../context/FileContext";
import { parseCategory } from "../../../controller/utils/categoryUtils";
import { useParams } from "react-router-dom";

function ContentListPage() {
  const [files, setFiles] = useState<File[] | undefined>(undefined);
  const { getFiles } = useFile();
  const params = useParams();

  useEffect(() => {
    if (!files) {
      getFiles(
        Number(params.semester),
        params.subject ?? "",
        (params.category as FileCategory) ?? "activity"
      ).then((response) => {
        setFiles(response);
      });
    }
  }, [getFiles, files, params]);

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
      <Header />
      <main className="p-content-list__main">
        <div className="p-content-list__nav-indicator">
          <div className="p-content-list__nav-indicator__icon">
            {getCategoryIcon(params.category as FileCategory)}
          </div>
          <div className="p-content-list__nav-indicator__description">
            {parseCategory(params.category as FileCategory).toUpperCase()}
          </div>
        </div>
        <Input placeholder="Procurar material" />
        <ol className="p-content-list__list">
          {files?.map((f, i) => (
            <FileListItem file={f} key={`p-content-list__item${i}`} />
          ))}
        </ol>
      </main>
    </div>
  );
}

export default ContentListPage;
