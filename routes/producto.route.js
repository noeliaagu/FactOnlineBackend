import { Router} from 'express';
import { obtenerProductos, grabarProducto, editarProducto, obtenerProductosPorId, eliminarProducto } from '../controllers/producto.controller';

// rutas para productos
const rutaProductos = Router();
rutaProductos.get('/', obtenerProductos);
rutaProductos.post('/', grabarProducto);
rutaProductos.put('/:id', editarProducto);
rutaProductos.get('/:id', obtenerProductosPorId);
rutaProductos.delete('/:id', eliminarProducto);


export default rutaProductos;