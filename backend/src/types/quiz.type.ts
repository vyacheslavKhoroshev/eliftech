export interface IQuiestion {
  question: string;
  type: string;
  choices: string[] | string;
}

export interface IComplection {
  answers: string[];
  time: string;
}

export interface IQuiz {
  name: string;
  description: string;
  questions: IQuiestion[];
  complections: IComplection[];
  questionsAmount: number;
  completionsAmount: number;
}
