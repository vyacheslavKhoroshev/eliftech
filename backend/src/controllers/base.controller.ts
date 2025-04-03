import { NextFunction, Request, Response } from "express";
import { Model } from "mongoose";

export class BaseController<T> {
  model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  public response = (req: Request, res: Response, data: any) => {
    /*console.log({
      body: req.body,
      params: req.params,
      res,
    });
*/
    if (!data) {
      res.status(400).json({
        status: true,
        message: "Failed",
      });
    } else {
      res.status(201).json({
        status: true,
        message: "Successfully",
        data,
      });
    }
  };

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.model.find();
      this.response(req, res, data);
    } catch (error) {
      console.log({ error, body: req.body, params: req.params });
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = await this.model.findById({ _id: id });

      this.response(req, res, data);
    } catch (error) {
      console.log({ error, body: req.body, params: req.params });
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.model.create(req.body);
      this.response(req, res, data);
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const data = await this.model.findByIdAndUpdate({ _id: id }, body, {
        new: true,
      });

      this.response(req, res, data);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = await this.model.findByIdAndDelete(id);

      this.response(req, res, data);
    } catch (error) {
      next(error);
    }
  };
}
