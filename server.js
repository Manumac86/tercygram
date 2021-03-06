// Defino la variable express y con require, busco dentro de node-modules el que se llame "express" 
// y me trae el export del main.js de express
var express = require('express'); 

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index', { title: 'TercyGram' });
})

app.get('/signup', function (req, res) {
    res.render('index', { title: 'TercyGram - SignUp' });
})

app.get('/signin', function (req, res) {
    res.render('index', { title: 'TercyGram - SignIn' });
})




app.listen(3000, function (err) {
    // Verificación de error y lo muestra. process.exit(1), asignando un parametro distinto de cero, 
    // la ejecución del codigo termina y se ejecuta exit. 
    if (err) return console.log('Hubo un error'), process.exit(1); 

    // Si no hay error: 
    console.log('Tercygram escuchando en el puerto 3000');

})