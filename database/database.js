import Sequelize from 'sequelize';

const database = new Sequelize('facturacion','postgres','urquiza824',
    {
        dialect: 'postgres',
        host: 'localhost',
    }
);

export default database;