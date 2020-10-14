const server = require("express").Router();
const { User } = require('../db')

server.get("/", async (req, res) => {
  res.send("Funcionamiento general del sistema para ariel tecay")
/*   server.get("/", (req, res) => {
    User.findAll({})
      .then((users) => { res.send(users); })
      .catch((err) => res.status(400).json({ err }));
  }); */
});

//ruta para crear usuario
server.post("/", (req, res) => {
  User.create({
    name: req.body.name,
    lastName: req.body.lastName,
    DNI: req.body.DNI,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  }).then(user => {
    res.status(200).send("Agregado Satisfactoriamente" + user)
  }).catch(err => res.send(err));
});

module.exports = server;