import { createContext, useContext } from "react";
import type { FileCategory } from "../../model/types";
import type { File } from "../../model/classes";

type Props = {
  getFiles(
    semester: number,
    subject: string,
    category: FileCategory
  ): Promise<File[]>;
};

const FileContext = createContext({} as Props);

function useFile() {
  const context = useContext(FileContext);
  return context;
}

export { useFile, FileContext };
