const server = require("express").Router();
const { HistoryClinic } = require('../db')

//Ruta que busca todas las historias clinicas creadas
server.get("/", (req, res) => {
    HistoryClinic.findAll({})
        .then((historiClinic) => { res.send(historiClinic); })
        .catch((err) => res.status(400).json({ err }));
});

//ruta para crear Historia Clinica  
server.post("/", (req, res) => {
    HistoryClinic.create({
        name: req.body.name,
        description: req.body.description,
    }).then(historyClinic => {
        res.status(200).send("Agregado Satisfactoriamente" + historyClinic)
    }).catch(err => res.send(err));
});

module.exports = server;