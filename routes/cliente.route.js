import { Router } from 'express';
import { obtenerClientes, grabarCliente, editarCliente, obtenerClientesPorId, eliminarCliente } from '../controllers/cliente.controller';

// rutas para clientes
const rutaClientes = Router();
rutaClientes.get('/', obtenerClientes);
rutaClientes.post('/', grabarCliente);
rutaClientes.put('/:id', editarCliente);
rutaClientes.get('/:id', obtenerClientesPorId);
rutaClientes.delete('/:id', eliminarCliente);

export default rutaClientes;