const express = require('express');
const routes = express.Router();

const deliveryController = require('./controllers/delivery');

// Rota usuario
routes.post('/delivery', deliveryController.create);
routes.get('/delivery', deliveryController.read);

module.exports = routes;
