import { BaseController } from "./base.controller";
import { TestSchema } from "../schemas/test.schema";

class TestControllerClass extends BaseController {}

export const TestController = new TestControllerClass(TestSchema);
