import type { File } from "../../classes";
import type { FileCategory } from "../../types";

interface IFileAPI {
  getFiles(
    semester: number,
    subject: string,
    category: FileCategory
  ): Promise<File[]>;
}

export { type IFileAPI };
