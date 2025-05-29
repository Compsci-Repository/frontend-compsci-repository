import { File } from "../../model/classes";
import type { IFileAPI } from "../../model/interfaces";
import type { FileCategory } from "../../model/types";
import APIClient from "./client";

class FileAPI implements IFileAPI {
  public async getFiles(
    semester: number,
    subject: string,
    category: FileCategory
  ): Promise<File[]> {
    const response = await APIClient.get("/getfile", {
      params: {
        semester,
        subject,
        category,
      },
    });

    if (response.status != 200 || !response.data) return [];

    const files: Record<string, unknown>[] = response.data.data;

    return files.map(
      (e) =>
        new File({
          id: Number(e.id),
          category: e.category as FileCategory,
          createdAt: new Date(String(e.created_at)),
          private: Boolean(e.private),
          semester: Number(e.semester),
          subject: String(e.subject),
          title: String(e.title),
          url: String(e.url),
          usuarioId: String(e.usuario_id),
          author: e.author ? String(e.author) : "Desconhecido",
          fileType: e.file_type ? String(e.file_type) : "",
          tags: e.tags as string[],
        })
    );
  }
}

export default FileAPI;
