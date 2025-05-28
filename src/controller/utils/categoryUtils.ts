import type { FileCategory } from "../../model/types";

const CATEGORIES: Record<FileCategory, string> = {
  activity: "Atividades",
  book: "Livros",
  exam: "Provas",
  video: "Vídeos",
};

function parseCategory(category: FileCategory) {
  return CATEGORIES[category];
}

function isCategory(text: string) {
  if (CATEGORIES[text as FileCategory]) return true;

  return false;
}

export { parseCategory, isCategory };
