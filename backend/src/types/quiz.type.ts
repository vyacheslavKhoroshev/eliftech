import { IComplection } from "./complection.type";

export interface IQuestion {
  question: string;
  type: string;
  choices: (string | number)[];
}

export interface IQuiz {
  name: string;
  description: string;
  questions: IQuestion[];
  complections?: IComplection[];
}
