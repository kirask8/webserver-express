// require('bootstrap/dist/css/bootstrap.css');
const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers/helpers');

//Puerto personalizado
const port = process.env.port || 3000;
const app = express();
//Use, librerias, etc...
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use(express.static(__dirname + '/public'));

//Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('home.hbs', {
        nombre: 'Ricardo',
        anio: new Date().getFullYear()
    });
})
app.get('/about', function(req, res) {
    res.render('about.hbs', {
        titulo: 'About us',
        anio: new Date().getFullYear()
    });
})
app.listen(port, () => {
    console.log(`Escuchando por el puerto: ${port}`);
});