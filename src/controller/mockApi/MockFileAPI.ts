import { File } from "../../model/classes";
import type { IFileAPI } from "../../model/interfaces";
import type { FileCategory } from "../../model/types";

const FILES: Record<string, unknown>[] = [
  {
    author: "Prof. Beatriz",
    category: "exam",
    created_at: "2023-03-05 15:00:00",
    file_type: "pdf",
    id: 2,
    private: false,
    semester: 1,
    subject: "LÓGICA APLICADA A COMPUTAÇÃO",
    tags: ["proposicoes", "tabelas_verdade"],
    title: "Exercícios Lógica Unidade 2",
    url: "http://example.com/logica_exercicios_unidade2",
    usuario_id: "11111111",
  },
  {
    author: "Prof. Beatriz",
    category: "exam",
    created_at: "2023-03-05 15:00:00",
    file_type: "pdf",
    id: 2,
    private: false,
    semester: 1,
    subject: "LÓGICA APLICADA A COMPUTAÇÃO",
    tags: ["proposicoes", "tabelas_verdade"],
    title: "Exercícios Lógica Unidade 2",
    url: "http://example.com/logica_exercicios_unidade2",
    usuario_id: "11111111",
  },
  {
    author: "Prof. Beatriz",
    category: "exam",
    created_at: "2023-03-05 15:00:00",
    file_type: "pdf",
    id: 2,
    private: false,
    semester: 1,
    subject: "LÓGICA APLICADA A COMPUTAÇÃO",
    tags: ["proposicoes", "tabelas_verdade"],
    title: "Exercícios Lógica Unidade 2",
    url: "http://example.com/logica_exercicios_unidade2",
    usuario_id: "11111111",
  },
];

class MockFileAPI implements IFileAPI {
  public async getFiles(
    semester: number,
    subject: string,
    category: FileCategory
  ): Promise<File[]> {
    return FILES.map(
      (e) =>
        new File({
          id: Number(e["id"]),
          category: String(e["category"]) as FileCategory,
          createdAt: new Date(e["created_at"] as string),
          private: Boolean(e["private"]),
          semester: Number(e["semester"]),
          subject: String(e["subject"]),
          title: String(e["title"]),
          url: String(e["url"]),
          usuarioId: String(e["usuario_id"]),
          author: e["author"] ? String(e["author"]) : undefined,
          tags: (e["tags"] as string[]) ?? [],
          fileType: String(e["file_type"]),
        })
    );
  }
}

export default MockFileAPI;
