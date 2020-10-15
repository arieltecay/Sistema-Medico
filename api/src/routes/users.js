const server = require("express").Router();
const { User } = require('../db')

//Ruta para buscar todos los usuarios
server.get("/", (req, res) => {
  User.findAll({})
    .then((users) => { res.send(users); })
    .catch((err) => res.status(400).json({ err }));
});


server.get('/:id', (req, res) => {
  User.findOne({
    where: { id: req.params.id }
  })
    .then((users) => { res.send(users); })
    .catch((err) => res.status(400).json({ err }));
})

//ruta para crear usuario
server.post("/", (req, res) => {
  User.create({
    name: req.body.name,
    lastName: req.body.lastName,
    DNI: req.body.DNI,
    email: req.body.email,
    direccion: req.body.direccion,
    celular: req.body.celular,
  }).then(user => {
    res.status(200).send("Agregado Satisfactoriamente" + user)
  }).catch(err => res.send(err));
});

module.exports = server;