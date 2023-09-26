import { Request, Response } from "express";
import productoService from "../services/productos.services";
import { BaseController } from "../types/base.controller";

class productoController extends BaseController{
    async postProducts (req: Request, res: Response) {
        try {
            const producto = await productoService.postProducts(req.body);
            this.responseHandler(
                res,
                { message: `El producto con el nombre: ${producto.nombre} was created successfully`},
                200
            );
        } catch (error) {
            this.responseHandler(
                res,
                { message: 'Error al crear el producto'},
                500
            );
        }
    }
    //get all productos
    async getProducts (req: Request, res: Response) {
        try {
            const productos = await productoService.getProducts();
            this.responseHandler(
                res,
                productos,
                200
            );
        } catch (error) {
            this.responseHandler(
                res,
                { message: 'Error al obtener los productos'},
                500
            );
        }
    }

}

export default new productoController();