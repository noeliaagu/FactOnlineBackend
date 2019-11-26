import { Router} from 'express';
import { obtenerProductos, grabarProducto, editarProducto, obtenerProductoPorId, eliminarProducto } from '../controllers/producto.controller';

// rutas para productos
const rutaProductos = Router();
rutaProductos.get('/', obtenerProductos);
rutaProductos.post('/', grabarProducto);
rutaProductos.put('/:id', editarProducto);
rutaProductos.get('/:id', obtenerProductoPorId);
rutaProductos.delete('/:id', eliminarProducto);


export default rutaProductos;