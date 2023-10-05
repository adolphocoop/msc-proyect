import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
    getProducts,
    creatProduct,
    getProduct,
    deleteProduct,
    editProduct
} from '../controllers/products.controller.js'

const router = Router();
router.get ('/productos', authRequired, getProducts);
//Agregar producto
router.post('/productos', authRequired, creatProduct);
//Obtener un producto por id
router.get('/productos/:id', authRequired, getProduct);
//Eliminar producto
router.delete('/productos/:id', authRequired, deleteProduct)
//Actualizar producto
router.put('/productos/:id', authRequired, editProduct)
export default router;