import { Router } from "express";
import productoController from "../controllers/productos.controller"

export default Router()
    .post("/register", (req, res) => productoController.postProducts(req, res))
    .get("/", (req, res) => productoController.getProducts(req, res))
    