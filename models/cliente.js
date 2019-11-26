import Sequelize from 'sequelize';
import database from '../database/database'

const Cliente = database.define("cliente",{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
   nombre:{
        type: Sequelize.STRING 
    },
    direccion:{
        type: Sequelize.STRING 
    },
    cuit: {
        type: Sequelize.STRING 
    }   
})

export default Cliente;