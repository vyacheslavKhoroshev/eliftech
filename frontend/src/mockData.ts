import { IQuiz } from "./types/data.type";

export const mockData: IQuiz[] = [
  {
    _id: "a756a0c8-3eaf-422e-a056-c0e4585276a7",
    name: "Your name",
    description: "Your description",
    questions: [
      {
        _id: "696c10d4-4f32-4f65-9f5c-0da24c0c0e98",
        question: "Your name",
        type: "text",
        choices: [],
      },
      {
        _id: "717c2a21-c8db-462c-8107-041e845f1167",
        question: "Your age",
        type: "multiple choices",
        choices: ["32", "tg"],
      },
      {
        _id: "0d96cb70-6495-4360-a609-daf25f6839c4",
        question: "Your gender",
        type: "single choice",
        choices: [34, 536],
      },
    ],
    complections: [],
    questionsAmount: 3,
    completionsAmount: 0,
  },
];
