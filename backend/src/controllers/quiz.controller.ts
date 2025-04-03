import { NextFunction, Request, Response } from "express";
import { QuizModel } from "../schemas";
import { BaseController } from "./base.controller";
import { IQuiz } from "../types/quiz.type";

class QuizControllerClass extends BaseController<IQuiz> {
  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const quizzes = await this.model.find().populate("complections");
      this.response(req, res, quizzes);
    } catch (error) {
      console.log({ error, body: req.body, params: req.params });
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const quiz = await this.model
        .findById({ _id: id })
        .populate("complections");

      this.response(req, res, quiz);
    } catch (error) {
      console.log({ error, body: req.body, params: req.params });
      next(error);
    }
  };
}

export const QuizController = new QuizControllerClass(QuizModel);
