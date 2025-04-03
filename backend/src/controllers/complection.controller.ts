import { NextFunction, Request, Response } from "express";
import { ComplectionModel, QuizModel } from "../schemas";
import { BaseController } from "./base.controller";
import { IComplection } from "../types/complection.type";

class ComplectionControllerClass extends BaseController<IComplection> {
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const complection = await this.model.create(req.body);
      const quiz = await QuizModel.findById({ _id: complection.quizId });

      quiz?.complections?.push(complection);
      await quiz?.save();

      this.response(req, res, complection);
    } catch (error) {
      next(error);
    }
  };
}

export const ComplectionController = new ComplectionControllerClass(
  ComplectionModel
);
