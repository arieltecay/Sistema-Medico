/* 
const server = require('./src/app');
const { conn } = require('./src/database.js');

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
}); */

const express = require('express');
const server = require('./src/app');

//Middlewares
server.use(express.json());
server.use(express.urlencoded({extended:false})) //Funcion que me permita procesar datos desde un formulario

//routes
server.use(require('./src/routes/index'))

server.listen(3001)
console.log("%s listening at 3001");