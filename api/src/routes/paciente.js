const server = require("express").Router();
const { Paciente } = require('../db')


//Ruta que devueñve todos los pacientes
server.get("/", (req, res) => {
  Paciente.findAll({})
    .then((pacientes) => { res.send(pacientes); })
    .catch((err) => res.status(400).json({ err }));
});
//Ruta que devuelve el hisorial de un paciente en especifico
server.get("/:id/historyPaciente", (req, ser) => {
  Paciente.findAll({
    where: { id: req.params.id },
    include: { model: historyClinic }
  }).then((pacientes) => res.send(pacientes))
    .catch((e) => res.status(400).json(e))
})
//Ruta que devuelve un Paciente en especifico
server.get("/:id", (req, res) => {
  Paciente.findOne({
    where: { id: req.params.id }    
  })
  .then((pacientes) => res.send(pacientes))
  .catch((e) => res.status(400).json(e))
  console.log(req.params.id);
})
//ruta para crear paciente
server.post("/", (req, res) => {
  Paciente.create({
    name: req.body.name,
    lastName: req.body.lastName,
    DNI: req.body.DNI,
    email: req.body.email,
    nSocio: req.body.nSocio,
    direccion: req.body.direccion,
    celular: req.body.celular,
  }).then(paciente => {
    res.status(200).send("Agregado Satisfactoriamente" + paciente)
  }).catch(err => res.send(err));
});

module.exports = server;