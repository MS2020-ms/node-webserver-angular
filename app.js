require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;


//Handlebars Partials
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Xa servir contenido estatico = path estatico (public/old)
//app.use le va a caer siempre al index.html
app.use(express.static('public'));

//Handlebars (busca las vistas en views)
//CONTROLADOR
app.get('/', (req, res) => {
    //le puedo mandar argumentos del Controlador a la Vista -> home.html
    res.render('home', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
});
app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
});
app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
});

// Xa servir sitio web completo:
// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html');
// });

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html');
// });

// Xa servir contenido estatico
// app.get('/hola-mundo', (req, res) => {
//     res.send('Hola Mundo')
// });

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

// app.listen(8080)
app.listen(port, () => {
    console.log(`APP listening at http://localhost:${port}`)
})