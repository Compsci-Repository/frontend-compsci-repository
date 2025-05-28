import type { FileCategory } from "../../model/types";

const CATEGORIES: Record<FileCategory, string> = {
  activity: "Atividade",
  book: "Livro",
  exam: "Prova",
  video: "Vídeo",
};

function parseCategory(category: FileCategory) {
  return CATEGORIES[category];
}

export { parseCategory };
