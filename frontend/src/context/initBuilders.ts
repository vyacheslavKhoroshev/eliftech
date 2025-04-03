import { ObjectId } from "../helpers/generateObjectId";
import { IQuestion, IQuiz } from "../types/data.type";
import { QUESTION_TYPE } from "../types/questionType.enum";

export class InitQuestion implements IQuestion {
  _id: string;
  question: string;
  type: string;
  choices: (string | number)[];

  constructor() {
    this._id = ObjectId();
    this.question = "";
    this.type = QUESTION_TYPE.TEXT;
    this.choices = [];
  }
}
export class InitQuiz implements IQuiz {
  _id: string;
  name: string;
  description: string;
  questions: IQuestion[];
  constructor() {
    this._id = ObjectId();
    (this.name = ""),
      (this.description = ""),
      (this.questions = [new InitQuestion()]);
  }
}
