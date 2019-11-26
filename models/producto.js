import Sequelize from 'sequelize';
import database from '../database/database';

const Producto = database.define("producto",{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
   codigo:{
        type: Sequelize.STRING 
    },
    descripcion:{
        type: Sequelize.STRING 
    },
    precio: {
        type: Sequelize.DECIMAL(12,2) 
    }   
})

export default Producto;