const server = require("express").Router();
const { Paciente } = require('../db')

server.get("/", (req, res) => {
  Paciente.findAll({})
    .then((pacientes) => { res.send(pacientes); })
    .catch((err) => res.status(400).json({ err }));
});

//ruta para crear usuario
server.post("/", (req, res) => {
  Paciente.create({
    name: req.body.name,
    lastName: req.body.lastName,
    DNI: req.body.DNI,
    email: req.body.email,
    nSocio: req.body.nSocio,
    direccion: req.body.direccion,
    celular: req.body.celular,
    historialMedico:req.body.historialMedico
  }).then(paciente => {
    res.status(200).send("Agregado Satisfactoriamente" + paciente)
  }).catch(err => res.send(err));
});

module.exports = server;