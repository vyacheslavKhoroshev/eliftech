import { Router } from "express";
import quizRoute from "./quiz.route";
import testRoute from "./test.route";
import complectionRoute from "./complections.route";

// Index
const indexRoute = Router();

indexRoute.use("/quiz", quizRoute);
indexRoute.use("/complection", complectionRoute);
indexRoute.use("/test", testRoute);

export default indexRoute;
