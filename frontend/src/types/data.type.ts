export interface IQuestion {
  id: string;
  question: string;
  type: string;
  choices: (string | number)[];
}

export interface IQuizCard {
  id: string;
  name: string;
  description: string;
  questions: IQuestion[];
  questionsAmount: number;
  completionsAmount: number;
}

export interface IAnswer {
  [key: string]: string | number;
}

export interface IComplection {
  quizCardId: string;
  answers: IAnswer;
  time: string;
}
