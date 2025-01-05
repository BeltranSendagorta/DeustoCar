const express = require('express')
const app = express()
const connectDB = require('./config/db')
const mongoose = require('mongoose')
const fs = require('fs')
const port = 6000

connectDB()

const CocheEsquema = new mongoose.Schema({
    matricula: String,
    marca: String,
    modelo: String,
    anyioFabricacion: Number,
    tipo_hidrido:String,
    autonomiaElectrica: Number,
    precio: Number
})

const Coche = mongoose.model('Coche', CocheEsquema)

app.get('/subirDatos', async (req, res) => {
    try {
        const fichero = fs.readFileSync('./data/vehiculos_hibridos.json', 'utf8');
        const jsonData = JSON.parse(fichero);

        const arrayCoches = jsonData["Detalle de coches hibridos"];

        if (!Array.isArray(arrayCoches)) {
            throw new TypeError('Los datos no son un array')
        }

        await Coche.deleteMany({})

        const cochesAInsertar = arrayCoches.map(coche => ({
            matricula: coche['Matricula'],
            marca: coche['Marca'],
            modelo: coche['Modelo'],
            anyioFabricacion: coche['Anyo de fabricacion'],
            tipo_hidrido: coche['Tipo de Hibrido'],
            autonomiaElectrica: coche['Autonomia Electrica (km)'],
            precio: coche['Precio Estimado ($/€)']
        }))

        await Coche.insertMany(cochesAInsertar)

        console.log('Datos subidos correctamente');
        res.send('Datos subidos correctamente')
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

app.get('/coches/getAll', async (req, res) => {
    try {
        const coche = await Coche.find();
        console.log(coches.length + ' elements retrieved successfully');
        res.json(coches);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/coches/matricula/:matricula', async (req, res) => {
    try {
        const coche = await Coche.findOne({ id: req.params.matricula });
        if (!coche) {
            return res.status(404).json({ error: "No se ha encontrado ningun coche" });
        }
        res.json(coche);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/coches/marca/:marca', async (req, res) => {
    try {
        const coche = await Coche.find({ velocidad_max: { $lt: req.params.marca } });
        res.json(coche);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/coches/modelo/:modelo', async (req, res) => {
    try {
        const coche = await Coche.find({ velocidad_max: { $lt: req.params.modelo } });
        res.json(coche);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/coches/precio/:precio', async (req, res) => {
    try {
        const coche = await Coche.find({ velocidad_max: { $lt: req.params.precio } });
        res.json(coche);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



app.listen(port, () => {
    console.log('Servidor escuchando en puerto ' + port)
})