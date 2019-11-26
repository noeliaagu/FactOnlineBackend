import Sequelize from 'sequelize';
import database from '../database/database';

const Item = database.define("item",{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
   idfact:{
        type: Sequelize.INTEGER 
    },
    idprod:{
        type: Sequelize.INTEGER 
    },
    cant: {
        type: Sequelize.INTEGER 
    },
    codigo: {
        type: Sequelize.STRING 
    },
    descripcion: {
        type: Sequelize.STRING 
    },
    precio: {
        type: Sequelize.DECIMAL(12,2) 
    },
    iva: {
        type: Sequelize.DOUBLE 
    },
    subtotal: {
        type: Sequelize.DECIMAL(12,2) 
    }   
})

export default Item;