import { TestModel } from "../schemas";
import { ITest } from "../types/test.type";
import { BaseController } from "./base.controller";

class TestControllerClass extends BaseController<ITest> {}

export const TestController = new TestControllerClass(TestModel);
