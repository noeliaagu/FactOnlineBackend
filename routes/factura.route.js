import { Router } from 'express';
import { obtenerFacturas, grabarFactura, obtenerFacturaPorId, eliminarFactura } from '../controllers/factura.controller';

// rutas para clientes
const rutaFacturas = Router();
rutaFacturas.get('/', obtenerFacturas);
rutaFacturas.post('/', grabarFactura);
rutaFacturas.get('/:id', obtenerFacturaPorId);
rutaFacturas.delete('/:id', eliminarFactura);


export default rutaFacturas;