import type { LiHTMLAttributes } from "react";
import type { File } from "../../../model/classes";
import {
  FileIcon,
  defaultStyles,
  type DefaultExtensionType,
} from "react-file-icon";
import classNames from "classnames";

type FileListItemProps = {
  file: File;
};

function FileListItem({
  file,
  className,
  ...props
}: FileListItemProps & LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li
      className={classNames("c-file-li", className)}
      {...props}
      onClick={() => window.open(file.url, "_blank")}
    >
      <div className="c-file-li__icon">
        <FileIcon
          extension={file.fileType}
          {...defaultStyles[file.fileType as DefaultExtensionType]}
        />
      </div>
      <span>{file.title}</span>
      <span>{file.author}</span>
    </li>
  );
}

export default FileListItem;
