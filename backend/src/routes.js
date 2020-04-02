const express = require('express');
const Ongs    = require('./controllers/Ongs');
const Casos   = require('./controllers/Casos');
const Perfil  = require('./controllers/Perfil');
const Sessions  = require('./controllers/Sessions');

const routes  = express.Router();

routes.post('/sessions', Sessions.create);

routes.get('/ongs', Ongs.index);
routes.post('/ongs', Ongs.create);

routes.post('/casos', Casos.create);
routes.get('/casos', Casos.index);
routes.delete('/casos/:id', Casos.delete);

//routes.get('/casos/:id', Perfil.index);
routes.get('/perfil', Perfil.index);

module.exports = routes;