import { useNavigate } from "react-router-dom";
import {
  ActivityIcon,
  BookIcon,
  ExamIcon,
  VideoIcon,
} from "../../../assets/icons";
import { parseCategory } from "../../../controller/utils/categoryUtils";
import type { FileCategory } from "../../../model/types";
import type { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

type Props = {
  category: FileCategory;
};

function CategoryButton({
  category,
  className,
  ...props
}: Props & ButtonHTMLAttributes<HTMLButtonElement>) {
  const navigate = useNavigate();

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
    <button
      className={classNames("c-category-btn", className)}
      onClick={() => navigate(`${category}`)}
      {...props}
    >
      {getCategoryIcon(category)}
      <span>{parseCategory(category).toUpperCase()}</span>
    </button>
  );
}

export default CategoryButton;
