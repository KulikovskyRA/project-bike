const router = require('express').Router();
const render = require('../render');

const isAuth = require('../middlewares/isAuth');

const DescriptionRoute = require('../views/DescriptionRoute');

const { User, Favor, Way, Review } = require('../../db/models');

router
  .get('/', (req, res) => {
    render(DescriptionRoute, { user: req.session.user }, res);
  })

  .post('/', (req, res) => {});
module.exports = router;
