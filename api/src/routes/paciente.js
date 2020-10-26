const server = require("express").Router();
const { Paciente, Historyclinic } = require('../db')
// const { Op } = require("sequelize");
const sequelize = require("sequelize");
const Op = sequelize.op

//Ruta que devuelve todos los pacientes
server.get("/", (req, res) => {
  // console.log(res);
  Paciente.findAll({})
    .then((pacientes) => { res.send(pacientes); })
    .catch((err) => res.status(400).json({ err }));
});
//Ruta que devuelve un Paciente en especifico 
server.get("/:id", (req, res) => {
  Paciente.findOne({
    where: { id: req.params.id }
  })
    .then((pacientes) => res.send(pacientes))
    .catch((e) => res.status(400).json(e))
  // console.log(req.params.id);
})
//Ruta que busca un paciente segun campo de busqueda
server.get("/ariel", (req,res) => {
  res.json("Hola Mundo")
})

//ruta para crear paciente
server.post("/", (req, res) => {
  // console.log(req.body);
  Paciente.create({
    name: req.body.name,
    lastName: req.body.lastName,
    DNI: req.body.DNI,
    email: req.body.email,
    nSocio: req.body.nSocio,
    direccion: req.body.direccion,
    celular: req.body.celular,
  }).then(paciente => {
    res.status(200).send("Agregado Satisfactoriamente")
  }).catch(err => res.send(err));
});

//Ruta que permite agregar un historial clinico a un paciente
server.post("/:id/historyClinic", (req, res) => {
  Historyclinic.create({
    pacienteId: req.body.pacienteId,
    name: req.body.name,
    description: req.body.description
  })
    .then(historyClinic => { res.json("Agregado Correctamente"); })
    .catch(error => { res.status(400).json({ error }) });
})

module.exports = server;