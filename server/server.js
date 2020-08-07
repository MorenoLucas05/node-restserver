require('./config/config');

const express = require('express')
const mongoose = require('mongoose');


const app = express()

const bodyParser = require('body-parser');

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// Parse application/json
app.use(bodyParser.json())

//Configuración global de rutas
app.use(require('./routes/index'));





//* Coneccion
mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, (err) => {
    if (err) throw err;

    console.log('Base de datos online');
});




app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto 3000');
})