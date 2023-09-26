import { Application } from "express";
import productosRouter from "./productos";
export default function router(app: Application): void {
  /**
   * Every source are specifed here
   */
  app.use("/productos", productosRouter);
}
