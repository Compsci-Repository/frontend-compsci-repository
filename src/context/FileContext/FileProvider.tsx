import { type PropsWithChildren, useMemo } from "react";
import { FileContext } from "./FileContext";
import { MockFileAPI } from "../../controller/mockApi";

function FileProvider({ children }: PropsWithChildren) {
  const api = useMemo(() => new MockFileAPI(), []);

  return (
    <FileContext.Provider value={{ getFiles: api.getFiles }}>
      {children}
    </FileContext.Provider>
  );
}

export default FileProvider;
