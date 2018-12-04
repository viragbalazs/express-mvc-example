const express = require('express');
const pokemons = express();
const models = require('../models');

// index
pokemons.get('/', (req, res) => {
  models.Pokemon.findAll().then(pokemons => {
    res.locals.pokemons = pokemons;
    res.render('pokemons/index.handlebars');
  });
});

//  show
pokemons.get('/:id', (req, res) => {
  models.Pokemon.findById(req.params.id).then(pokemon => {
    /*  if (!pokemon) {
      return res.status(400).send('ID error');
    } */
    res.locals.pokemon = pokemon;
    res.render('pokemons/show.handlebars');
  });
});

//  edit
pokemons.get('/:id/edit', (req, res) => {
  models.Pokemon.findById(req.params.id).then(pokemon => {
    res.locals.pokemon = pokemon;
    res.render('pokemons/edit.handlebars');
  });
});

//  create
pokemons.post('/', (req, res) => {
  models.Pokemon.findOne({
    where: { name: req.params.name }
  }).then(pokemon => {
    if (pokemon) {
      return res.status(400).send('Van már ilyen');
    }
    res.json(pokemon);
  });
});

//  update
pokemons.put('/:id', (req, res) => {
  models.Pokemon.findOne({
    where: { name: req.params.name }
  }).then(pokemon => {
    if (pokemon) {
      return res.status(400).send('Van már ilyen');
    } else if (!pokemon) {
      return res.status(400).send('Nincs ilyen');
    } else {
      models.Pokemon.update(req.body, {
        where: { name: req.params.name }
      }).then(pokemon => {
        res.json(pokemon);
      });
    }
  });
});

//  delete
pokemons.delete('/:name', (req, res) => {
  models.Pokemon.destroy({
    where: { name: req.params.name }
  }).then(pokemon => {
    if (!pokemon) {
      return res.status(400).send('Nincs ilyen ID');
    }
  });
});

module.exports = pokemons;
