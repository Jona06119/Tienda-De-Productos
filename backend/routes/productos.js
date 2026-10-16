const express = require('express');

const router = express.Router();

const conexion = require('../config/db');

router.get('/', (req, res) => {

    const sql = 'SELECT * FROM Producto';

    conexion.query(sql, (error, resultados) => {

        if (error) {
            return res.status(500).json(error);
        }

        res.json(resultados);

    });

});

router.post('/', (req, res) => {

    const { nombre, precio, stock } = req.body;

    const sql = `
        INSERT INTO Producto(nombre, precio, stock)
        VALUES (?, ?, ?)
    `;

    conexion.query(
        sql,
        [nombre, precio, stock],
        (error, resultado) => {

            if (error) {
                return res.status(500).json(error);
            }

            res.json({
                mensaje: 'Producto agregado'
            });

        }
    );

});

module.exports = router;