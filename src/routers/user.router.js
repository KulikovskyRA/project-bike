const express = require('express');

const bcrypt = require('bcrypt');

const render = require('../render');

const router = express.Router();

const isAuth = require('../middlewares/isAuth');

const Main = require('../views/Main');
const Login = require('../views/Login');
const Register = require('../views/Register');
const ErrorPage = require('../views/ErrorPage');

const { User, Favor, Way, Review } = require('../../db/models');

router.get('/login', (req, res) => {
  render(Login, {}, res);
});

router.get('/register', (req, res) => {
  render(Register, {}, res);
});

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  if (username === '' || email === '' || password === '') {
    res.redirect('/error?what=emptyregister');
    return;
  }

  try {
    const isUserExist = (await User.findOne({ where: { username } })) !== null;
    if (isUserExist) {
      res.redirect('/error?what=useralreadyexists');
      return;
    }

    const isEmailExist = (await User.findOne({ where: { email } })) !== null;
    if (isEmailExist) {
      res.redirect('/error?what=emailalreadyexists');
      return;
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const userData = await User.create({
      username,
      email,
      password: hashPassword,
      verified: false,
      admin: false,
    });
    const user = userData.get({ plain: true });
    req.session.user = user;
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.redirect('/error?what=oi');
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userData = await User.findOne({ where: { email } });
    const user = userData.get({ plain: true });
    const passwordCheck = await bcrypt.compare(password, user.password);
    if (passwordCheck) {
      req.session.user = user;
      res.redirect('/');
    } else {
      // res.status(400).json({ errorMessage: 'wrong login' });
      res.redirect('/error?what=wrongpassword');
    }
  } catch (error) {
    res.redirect('/error?what=wrongpassword');
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
      res.redirect('/');
    } else {
      res.clearCookie('connect.sid');
      res.redirect('/');
    }
  });
});

module.exports = router;
