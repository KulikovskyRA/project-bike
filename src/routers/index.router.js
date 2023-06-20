const express = require('express');
const render = require('../render');

const router = express.Router();

const isAuth = require('../middlewares/isAuth');

const Main = require('../views/Main');
const Login = require('../views/Login');
const Register = require('../views/Register');
const ErrorPage = require('../views/ErrorPage');

const { User, Favor, Way, Review } = require('../../db/models');

router.get('/', (req, res) => {
  render(Main, { user: req.session.user }, res);
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
