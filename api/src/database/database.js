import Sequalize from 'sequelize';

export const sequalize = new Sequalize(
    'postgres',
    'postgres',
    '54321',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false //Para mostrar mensajes por consola.-
    }
)