const SUBJECTS: Record<string, string> = {
  icc: "Introdução à Ciência da Computação",
  lac: "Lógica Aplicada à Computação",
  apc: "Algoritmos e Programação de Computadores",
  fm: "Fundamentos da Matemática",
  dd: "Direito Digital",
  socc: "Sociedade e Cultura",
  ace1: "Atividade Curricular de Extensão 1",
  md: "Matemática Discreta",
  csd: "Circuitos e Sistemas Digitais",
  ed: "Estrutura de Dados",
  calc1: "Cálculo 1",
  ga: "Geometria Analítica",
  socdes: "Sociedade e Desenvolvimento",
  ace2: "Atividade Curricular de Extensão 2",
  poo: "Programação Orientada a Objetos",
  oac: "Organização e Arquitetura de Computadores",
  mcc: "Metodologia Científica para Ciência da Computação",
  calc2: "Cálculo 2",
  al: "Álgebra Linear",
  fc: "Filosofia da Ciência",
  ace3: "Atividade Curricular de Extensão 3",
  es: "Engenharia de Software",
  tc: "Teoria da Computação",
  bd: "Banco de Dados",
  tg: "Teoria dos Grafos",
  ihc: "Interface Humano Computador",
  ep: "Estatística e Probabilidade",
  ace4: "Atividade Curricular de Extensão 4",
  paa: "Projeto e Análise de Algoritmos",
  pp: "Paradigmas de Programação",
  so: "Sistemas Operacionais",
  cg: "Computação Gráfica",
  ia: "Inteligência Artificial",
  pe: "Planejamento de Experimentos",
  ace5: "Atividade Curricular de Extensão 5",
  sd: "Sistemas Distribuidos",
  comp: "Compiladores",
  rc: "Redes de Computadores",
  pdi: "Processamento Digital de Imagens",
  gp: "Gerência de Projetos",
  emps: "Empreendedorismo de Software",
  ace6: "Atividade Curricular de Extensão 6",
  et: "Ética",
  ace7: "Atividade Curricular de Extensão 7",
  ace8: "Atividade Curricular de Extensão 8",
};

const SEMESTER_SUBJECTS: Record<number, string[]> = {
  1: ["icc", "lac", "apc", "fm", "dd", "socc", "ace1"],
  2: ["md", "csd", "ed", "calc1", "ga", "socdes", "ace2"],
  3: ["poo", "oac", "mcc", "calc2", "al", "fc", "ace3"],
  4: ["es", "tc", "bd", "tg", "ihc", "ep", "ace4"],
  5: ["paa", "pp", "so", "cg", "ia", "pe", "ace5"],
  6: ["sd", "comp", "rc", "pdi", "gp", "emps", "ace6"],
  7: ["et", "ace7"],
  8: ["ace8"],
};

function parseSubject(acronym: string) {
  if (SUBJECTS[acronym.toLowerCase()]) return SUBJECTS[acronym.toLowerCase()];

  return acronym;
}

function getSemesterSubjects(semester: number) {
  return SEMESTER_SUBJECTS[semester] ?? [];
}

export { parseSubject, getSemesterSubjects };
