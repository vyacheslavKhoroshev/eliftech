import { Router } from "express";
import { TestController } from "../controllers/test.controller";

const testRoute = Router();

testRoute.get("", TestController.getAll);
testRoute.post("", TestController.create);
testRoute.get("/:id", TestController.getById);
testRoute.put("/:id", TestController.update);
testRoute.delete("/:id", TestController.delete);

export default testRoute;
