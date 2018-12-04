const express = require('express');
const app = express();
const clocks = require('./controllers/clocks');
let bodyParser = require('body-parser');
const videogames = require('./controllers/videogames');
const pokemons = require('./controllers/pokemons');
const exphb = require('express-handlebars');

app.use(bodyParser.urlencoded({extended: false}));
app.engine('handlebars', exphb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  // res.locals.barmilyenKulcs = 'Megyunk ma az EPAM-ba !';
  res.render('indexoldal');
});

app.use('/clocks', clocks);
app.use('/videogames', videogames);
app.use('/pokemons', pokemons);

app.listen(process.env.PORT);
