const express = require('express');

const render = require('../render');

const router = express.Router();

const isAuth = require('../middlewares/isAuth');

const Main = require('../views/Main');
const Login = require('../views/Login');
const Register = require('../views/Register');
const ErrorPage = require('../views/ErrorPage');

const { User, Favor, Way, Review } = require('../../db/models');

router.get('/', async (req, res) => {
  const approved = await Way.findAll({
    raw: true,
    nest: true,
    where: { approved: true },
  });

  const ratings = await Review.findAll({
    raw: true,
    nest: true,
  });

  approved.map((a) => {
    const ratingsA = ratings.filter((el) => el.way_id === a.id);

    let scoreA = 0;
    ratingsA.forEach((rating) => {
      scoreA += rating.score;
    });
    let avrA;
    ratingsA.length ? (avrA = scoreA / ratingsA.length) : (avrA = 0);
    a.avr = avrA;
    return a;
  });

  approved.sort((a, b) => b.avr - a.avr);

  render(Main, { user: req.session.user, approved }, res);
});

router.post('/', async (req, res) => {
  const { textSearch } = req.body;
  // console.log(textSearch);
  try {
    const approved = await Way.findAll({
      raw: true,
      nest: true,
      where: { approved: true },
    });

    const ratings = await Review.findAll({
      raw: true,
      nest: true,
    });

    approved.map((a) => {
      const ratingsA = ratings.filter((el) => el.way_id === a.id);

      let scoreA = 0;
      ratingsA.forEach((rating) => {
        scoreA += rating.score;
      });
      let avrA;
      ratingsA.length ? (avrA = scoreA / ratingsA.length) : (avrA = 0);
      a.avr = avrA;
      return a;
    });

    approved.sort((a, b) => b.avr - a.avr);

    const search = approved.filter((el) =>
      el.title.toLowerCase().includes(textSearch.toLowerCase())
    );
    res.json({ search, admin: req.session.user.admin });
  } catch (err) {
    res.redirect('/error?what=oi');
  }
});

router.get('/error', (req, res) => {
  const { what } = req.query;
  let errorSMS;
  if (what === 'wrongpassword') {
    errorSMS = 'Неверный логин/пароль';
  } else if (what === 'emptyregister') {
    errorSMS = 'При регистрации все поля должны быть заполнены';
  } else if (what === 'useralreadyexists') {
    errorSMS = 'Пользователь с таким псевдонимом уже существует';
  } else if (what === 'emailalreadyexists') {
    errorSMS = 'Пользователь с такой электронной почтой  уже существует';
  } else if (what === 'oi') {
    errorSMS = 'Что-то пошло не так :0';
  } else {
    errorSMS = 'Что-то пошло не так :0';
  }
  // console.log(req.query);
  render(ErrorPage, { errorSMS }, res);
});

module.exports = router;
