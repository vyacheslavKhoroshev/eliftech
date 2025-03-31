import { NextFunction, Request, Response } from "express";
import { Model } from "mongoose";

export class BaseController {
  model: Model<any>;

  constructor(model: Model<any>) {
    this.model = model;
  }

  private response = (res: Response, req: Request, data: any) => {
    console.log({ body: req.body, params: req.params });

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
      this.response(res, req, data);
    } catch (error) {
      console.log({ error, body: req.body });
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params;
      const data = await this.model.findById({ _id: id });

      this.response(res, req, data);
    } catch (error) {
      console.log({ error, body: req.body });
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.model.create(req.body);

      this.response(res, req, data);
    } catch (error) {
      console.log({ error, body: req.body });
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

      this.response(res, req, data);
    } catch (error) {
      console.log({ error, body: req.body });
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = await this.model.findByIdAndDelete(id);

      this.response(res, req, data);
    } catch (error) {
      console.log({ error, body: req.body });
      next(error);
    }
  };
}
