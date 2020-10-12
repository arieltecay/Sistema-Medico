require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

export const sequalize = new Sequalize(
    'postgres',
    'postgres',
    '54321',
    {
        host: 'localhost',
        dialect: 'medicSystem',
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false //Para mostrar mensajes por consola.-
    }
);
const basename = path.basename(__filename);
const modelDefiners = [];