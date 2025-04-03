import Express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import indexRoute from "./routes";
import { config } from "dotenv";
import mongoose from "mongoose";
config();

const app = Express();

app.use(Express.json());
app.use(cors());
app.use(indexRoute);

app.use((error: any, _req: Request, res: Response, _next: NextFunction) => {
  res.status(501).json({
    status: false,
    message: "An error occurred",
    error,
  });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

mongoose
  .connect(process.env.DATABASE_URL || "")
  .then((res) => {
    if (res) {
      console.log(`Database connection succeffully`);
    }
  })
  .catch((err) => {
    console.log(process.env.DATABASE_URL);
    console.log(err);
  });
