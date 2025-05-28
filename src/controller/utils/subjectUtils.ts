const SUBJECTS: Record<string, string> = {
  lac: "Lógica Aplicada à Computação",
  md: "Matemática Discreta",
};

const SEMESTER_SUBJECTS: Record<number, string[]> = {
  1: ["icc", "lac", "apc", "fm", "dd", "socc", "ace1"],
  2: ["md", "csd", "ed", "calc1", "ga", "socdes", "ace2"],
  3: ["poo", "oac", "mcc", "calc2", "al", "fc", "ace3"],
};

function parseSubject(acronym: string) {
  if (SUBJECTS[acronym.toLowerCase()]) return SUBJECTS[acronym.toLowerCase()];

  return acronym;
}

function getSemesterSubjects(semester: number) {
  return SEMESTER_SUBJECTS[semester] ?? [];
}

export { parseSubject, getSemesterSubjects };
