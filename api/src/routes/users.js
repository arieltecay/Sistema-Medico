const server = require("express").Router();
const { User } = require('../database')

server.get("/", async (req, res) => {
  res.send("Funcionamiento general del sistema para ariel tecay")
});

//ruta para crear usuario
server.post("/newUser", (req, res) => {
  User.create({
    name: req.body.name,
    lastName: req.body.lastName,
    DNI: req.body.DNI,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  }).then(user => {
    res.status(200).send("Agregado Satisfactoriamente" + user)
  }).catch(err => res.send(err + "Mal funcionamiento general "));
});

module.exports = server;