export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export const biologyQuestions: Question[] = [
  {
    id: "b1",
    text: "Qual organela é responsável pela respiração celular?",
    options: ["Ribossomo", "Mitocôndria", "Complexo de Golgi", "Lisossomo"],
    correctAnswer: 1,
  },
  {
    id: "b2",
    text: "Qual processo as plantas usam para converter luz solar em alimento?",
    options: [
      "Quimiossíntese",
      "Fotossíntese",
      "Fermentação",
      "Respiração Celular",
    ],
    correctAnswer: 1,
  },
  {
    id: "b3",
    text: "Qual é o principal componente da membrana plasmática?",
    options: ["Carboidratos", "Proteínas", "Fosfolipídios", "Ácidos Nucleicos"],
    correctAnswer: 2,
  },
  {
    id: "b4",
    text: "Qual destes não é um grupo sanguíneo humano?",
    options: ["A", "B", "O", "C"],
    correctAnswer: 3,
  },
  {
    id: "b5",
    text: "Quem é conhecido como o pai da genética?",
    options: [
      "Charles Darwin",
      "Gregor Mendel",
      "Louis Pasteur",
      "Alexander Fleming",
    ],
    correctAnswer: 1,
  },
  {
    id: "b6",
    text: "Qual a função dos glóbulos brancos?",
    options: [
      "Transportar oxigênio",
      "Coagulação do sangue",
      "Defesa do organismo",
      "Transportar nutrientes",
    ],
    correctAnswer: 2,
  },
  {
    id: "b7",
    text: "Qual destes é um mamífero que bota ovos?",
    options: ["Ornitorrinco", "Canguru", "Morcego", "Baleia"],
    correctAnswer: 0,
  },
  {
    id: "b8",
    text: "Onde o DNA é armazenado na célula eucarionte?",
    options: ["Citoplasma", "Ribossomo", "Núcleo", "Vacúolo"],
    correctAnswer: 2,
  },
  {
    id: "b9",
    text: "Qual é o maior órgão do corpo humano?",
    options: ["Fígado", "Coração", "Pele", "Pulmão"],
    correctAnswer: 2,
  },
  {
    id: "b10",
    text: "Quantos cromossomos tem uma célula somática humana normal?",
    options: ["23", "46", "24", "48"],
    correctAnswer: 1,
  },
];

export const physicsQuestions: Question[] = [
  {
    id: "f1",
    text: "Qual é a unidade de medida da força no Sistema Internacional?",
    options: ["Joule", "Watt", "Newton", "Pascal"],
    correctAnswer: 2,
  },
  {
    id: "f2",
    text: "Qual lei afirma que 'Para toda ação, há uma reação de igual intensidade e direção oposta'?",
    options: [
      "Primeira Lei de Newton",
      "Segunda Lei de Newton",
      "Terceira Lei de Newton",
      "Lei da Gravitação Universal",
    ],
    correctAnswer: 2,
  },
  {
    id: "f3",
    text: "O que mede a inércia de um corpo?",
    options: ["Volume", "Massa", "Velocidade", "Aceleração"],
    correctAnswer: 1,
  },
  {
    id: "f4",
    text: "Qual é a velocidade da luz no vácuo (aproximadamente)?",
    options: [
      "300.000 km/s",
      "150.000 km/s",
      "3.000 km/s",
      "30.000 km/s",
    ],
    correctAnswer: 0,
  },
  {
    id: "f5",
    text: "Energia cinética está relacionada a quê?",
    options: ["Altura", "Movimento", "Calor", "Luz"],
    correctAnswer: 1,
  },
  {
    id: "f6",
    text: "Quem formulou a teoria da relatividade?",
    options: [
      "Isaac Newton",
      "Niels Bohr",
      "Galileu Galilei",
      "Albert Einstein",
    ],
    correctAnswer: 3,
  },
  {
    id: "f7",
    text: "Como se chama a mudança do estado sólido direto para o gasoso?",
    options: ["Evaporação", "Fusão", "Sublimação", "Condensação"],
    correctAnswer: 2,
  },
  {
    id: "f8",
    text: "Qual força mantém os planetas em órbita ao redor do sol?",
    options: [
      "Força Magnética",
      "Força Elétrica",
      "Força Gravitacional",
      "Força Nuclear Forte",
    ],
    correctAnswer: 2,
  },
  {
    id: "f9",
    text: "O que a fórmula E=mc² descreve?",
    options: [
      "A expansão do universo",
      "A equivalência massa-energia",
      "A atração gravitacional",
      "A condução térmica",
    ],
    correctAnswer: 1,
  },
  {
    id: "f10",
    text: "Qual partícula subatômica tem carga negativa?",
    options: ["Próton", "Nêutron", "Elétron", "Fóton"],
    correctAnswer: 2,
  },
];
