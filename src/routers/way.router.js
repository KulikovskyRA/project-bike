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

  // const way_data1 = JSON.parse(way_data);

  // console.log(user_id);
  // console.log(title);
  // console.log(city);
  // console.log(way_length);
  // console.log(way_data);
  // console.log(way_data1);
  // console.log(way_time);
  // console.log(picture_data);

  try {
    const newWay = await Way.create({
      user_id,
      approved: false,
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
