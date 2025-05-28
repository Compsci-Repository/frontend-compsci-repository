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

function isCategory(text: string) {
  if (CATEGORIES[text as FileCategory]) return true;

  return false;
}

export { parseCategory, isCategory };
