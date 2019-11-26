import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import database from './database/database';
import rutaClientes from './routes/cliente.route';
import rutaProductos from './routes/producto.route';
import rutaFacturas from './routes/factura.route';

// inicilizar express
const app = express();

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// rutas
app.use('/clientes', rutaClientes)
app.use('/productos', rutaProductos)
app.use('/facturas', rutaFacturas)

// conectar con la db
// force:true si se quiere inicializar la base de datos
database.sync({force:false})
 .then(() => console.log('BASE DE DATOS CONECTADA.'));

// exportamos app
export default app;

