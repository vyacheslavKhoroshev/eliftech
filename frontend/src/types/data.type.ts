export interface IQuestion {
  _id: string;
  question: string;
  type: string;
  choices: (string | number)[];
}

export interface IAnswer {
  [key: string]: (string | number)[] | string | number;
}

export interface IComplection {
  quizId: string;
  answers: IAnswer[];
  time: string;
}

export interface IQuiz {
  _id: string;
  name: string;
  description: string;
  questions: IQuestion[];
  complections?: IComplection[];
}
