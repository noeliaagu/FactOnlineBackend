import Sequelize from 'sequelize';
import database from '../database/database';
import Item from './item';

const Factura = database.define("factura",{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
   tipo:{
        type: Sequelize.STRING 
    },
    fecha:{
        type: Sequelize.STRING 
    },
    pto: {
        type: Sequelize.STRING 
    },
    numero: {
        type: Sequelize.INTEGER 
    },
    clienteId: {
        type: Sequelize.INTEGER 
    },
    total: {
        type: Sequelize.DECIMAL(12,2) 
    }
})

Factura.hasMany(Item, { foreignKey: 'idfact' } );

Item.belongsTo( Factura, { foreignKey: 'idfact' } );

export default Factura;