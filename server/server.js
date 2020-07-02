require('./config/config');

const express = require('express')
const app = express()

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())




app.get('/usuarios', function (req, res) {
    res.json('Get usuarios');
})

app.post('/usuarios', function (req, res) {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mansaje: 'El nombre es necesario',
            err: 'Algo salio mal'
        })
    } else {

        res.json({
            persona: body
        });

    }
})

app.put('/usuarios/:id', function (req, res) {

    let id = req.params.id;
    res.json({
        id: id
    });
})

app.delete('/usuarios', function (req, res) {
    res.json('Delete usuarios');
})


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto 3000');
})