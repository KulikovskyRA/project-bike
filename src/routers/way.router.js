const express = require('express');
const multer = require('multer');
const render = require('../render');
const NewWay = require('../views/NewWay');

const router = express.Router();

const upload = multer({ dest: 'public/images/' });

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
    res.send(newWay);
    res.end();
    //res.redirect('/');
  } catch (error) {
    console.error(error);
    res.redirect('/error?what=oi');
  }
});

// router.get('/addphoto/:id', (req, res) => {
//   const { id } = req.params;
//   try {
//     //res.status(200);
//     res.redirect(`/description/${id}`);
//   } catch (error) {
//     console.error(error);
//     res.redirect('/error?what=oi');
//   }
//
// });

router.post('/addphoto/:id', upload.single('photo'), async (req, res) => {
  const { id } = req.params;
  const picture_data = req.file?.filename || '0777.jpg';
  console.log(picture_data);
  try {
    await Way.update({ picture_data }, {
      where: {
        id,
      },
    });
    res.redirect(`/description/${id}`);
  } catch (error) {
    console.error(error);
    res.redirect('/error?what=oi');
  }
});

module.exports = router;
