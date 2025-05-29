import { type PropsWithChildren, useMemo } from "react";
import { FileContext } from "./FileContext";
import { FileAPI } from "../../api";

function FileProvider({ children }: PropsWithChildren) {
  const api = useMemo(() => new FileAPI(), []);

  return (
    <FileContext.Provider value={{ getFiles: api.getFiles }}>
      {children}
    </FileContext.Provider>
  );
}

export default FileProvider;
