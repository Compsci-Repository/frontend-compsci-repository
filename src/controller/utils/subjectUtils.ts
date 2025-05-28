const SUBJECTS: Record<string, string> = {
  lac: "Lógica Aplicada à Computação",
  md: "Matemática Discreta",
};

function parseSubject(acronym: string) {
  if (SUBJECTS[acronym.toLowerCase()]) return SUBJECTS[acronym.toLowerCase()];

  return acronym;
}

export { parseSubject };
