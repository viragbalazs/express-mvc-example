const express = require('express');
const videogames = express();
const models = require('../models');

//  index
videogames.get('/', (req, res) => {
  models.Videogame.findAll().then(videogames => {
    res.locals.videogames = videogames;
    res.render('videogames/index.handlebars');
  });
});

//  show
videogames.get('/:name', (req, res) => {
  models.Videogame.findOne({
    where: { name: req.params.name }
  }).then(videogame => {
    if (!videogame) {
      return res.videogame(400).send('ID error');
    }
    res.json(videogame);
  });
});

//  edit
videogames.get('/:id/edit', (req, res) => {
  models.Videogame.findById(req.params.id).then(videogame => {
    res.locals.videogame = videogame;
    res.render('videogames/edit.handlebars');
  });
});

//  create
videogames.post('/', (req, res) => {
  models.Videogame.findOne({
    where: { distributor: req.body.distributor }
  }).then(videogame => {
    if (videogame) {
      return res.videogame(400).send('Van már ilyen');
    } else {
      models.Videogame.create(req.body).then(videogame => {
        res.json(videogame);
      });
    }
  });
});
/*  models.Videogame.create({
    distributor: req.body.distributor,
    name: req.body.name,
    type: req.body.type
  }).then(videogame => {
    res.json(videogame);
  });
}); */

// update
videogames.put('/:name', (req, res) => {
  models.Videogame.findOne({
    where: { name: req.params.name }
  }).then(videogame => {
    if (videogame) {
      return res.videogame(400).send('Van már ilyen');
    } else {
      models.Videogame.update(req.body, {
        where: { name: req.params.name }
      }).then(videoteka => {
        res.json(videogame);
      });
    }
  });
});
/*  models.Videogame.update(req.body, {
    where: { id: req.params.id }
  }).then(videogame => {
    res.json(videogame);
  });
}); */

//  delete
videogames.delete('/:id', (req, res) => {
  models.Videogame.destroy({
    where: { id: req.params.id }
  }).then(videogame => {
    if (!videogame) {
      return res.videogame(400).send('Nincs ilyen ID');
    }
    res.json(videogame);
  });
});

module.exports = videogames;
