import { Productos } from "@prisma/client";
import prisma from "../database/client";

class ProductoService {
    //registro productos
    async postProducts(producto: Productos) {
        return await prisma.productos.create({ data: producto});


}
    //get all productos
    async getProducts() {
        return await prisma.productos.findMany();
    }
    
}

export default new ProductoService();