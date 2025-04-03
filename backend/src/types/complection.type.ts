import { Types } from "mongoose";

export interface IAnswer {
  [key: string]: (string | number)[] | string | number;
}

export interface IComplection {
  quizId: string;
  answers: object[];
  time: string;
}
