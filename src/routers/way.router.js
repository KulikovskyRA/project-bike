const express = require('express');
const render = require('../render');
const NewWay = require('../views/NewWay');

const router = express.Router();

const { User, Favor, Way, Review } = require('../../db/models');

router.get('/', (req, res) => {
  const user = req.session?.user;
  render(NewWay, { user }, res);
});

router.post('/add', async (req, res) => {
  const user_id = req.session.user.id;
  let { title, city, way_length, way_data, way_time, picture_data } = req.body;
  way_length = parseInt(way_length);
  way_data = JSON.stringify(way_data);

  let approved;
  if (req.session.user.admin === true) {
    approved = true;
  } else {
    approved = false;
  }

  try {
    const newWay = await Way.create({
      user_id,
      approved,
      title,
      city,
      way_length,
      way_data,
      way_time,
      picture_data,
    });

    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.redirect('/error?what=oi');
  }
});

module.exports = router;
