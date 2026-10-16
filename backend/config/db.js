const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'TiendaDB'
});

conexion.connect((error) => {

    if (error) {
        console.log('ERROR MYSQL:', error);
    } else {
        console.log('MYSQL CONECTADO');
    }

});

module.exports = conexion;