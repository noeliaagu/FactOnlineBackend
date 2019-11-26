import { Router } from 'express';
import { obtenerClientes, grabarCliente, editarCliente, obtenerClientePorId, eliminarCliente } from '../controllers/cliente.controller';

// rutas para clientes
const rutaClientes = Router();
rutaClientes.get('/', obtenerClientes);
rutaClientes.post('/', grabarCliente);
rutaClientes.put('/:id', editarCliente);
rutaClientes.get('/:id', obtenerClientePorId);
rutaClientes.delete('/:id', eliminarCliente);

export default rutaClientes;