const server = require("express").Router();
const { Historyclinic } = require('../db')

//Ruta para buscar todas las historias clinicas
server.get("/", (req, res) => {
    Historyclinic.findAll({})
        .then((historiClinic) => { res.send(historiClinic); })
        .catch((err) => res.status(400).json({ err }));
});

//Ruta para buscar una historia clinica
server.get('/:id', (req, res) => {
    User.findOne({
        where: { id: req.params.id }
    })
        .then((users) => { res.send(users); })
        .catch((err) => res.status(400).json({ err }));
})

//ruta para agregar una historia clinica
server.post("/", (req, res) => {
    Historyclinic.create({
        name: req.body.name,
        description: req.body.description
    }).
        then(historiClinic => {res.status(200).send("Agregado Satisfactoriamente")
        }).catch(err => res.send(err));
});

module.exports = server;