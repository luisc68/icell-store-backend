import { Application, json } from "express";
import morgan from "morgan";
import cors from "cors";

export function configApp(app: Application) {
  app.use(json());
  app.use(morgan("tiny"));
  app.use(cors());
}
