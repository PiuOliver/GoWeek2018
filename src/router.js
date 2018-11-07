const express = require('express');
const routes = express.Router();
const TweetController = require('./controllers/TweetControllers');
const likeController = require('./controllers/likeController');

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store)
routes.post('/likes/:id', likeController.store)

module.exports = routes;