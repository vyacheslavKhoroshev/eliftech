import { Router } from "express";

import { validateSchema } from "../middlewares/validation.middleware";
import { ComplectionController } from "../controllers/complection.controller";
import {
  ComplectionUpdateValidateSchema,
  ComplectionValidateSchema,
} from "../middlewares/complection.validation";

const complectionRoute = Router();

complectionRoute.get("", ComplectionController.getAll);
complectionRoute.get("/:id", ComplectionController.getById);
complectionRoute.delete("/:id", ComplectionController.delete);
complectionRoute.post(
  "",
  validateSchema(ComplectionValidateSchema),
  ComplectionController.create
);
complectionRoute.patch(
  "/:id",
  validateSchema(ComplectionUpdateValidateSchema),
  ComplectionController.update
);

export default complectionRoute;
