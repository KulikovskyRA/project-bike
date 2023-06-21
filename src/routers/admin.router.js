const express = require('express');

const render = require('../render');

const router = express.Router();

const isAuth = require('../middlewares/isAuth');

const Main = require('../views/Main');
const Login = require('../views/Login');
const Register = require('../views/Register');
const ErrorPage = require('../views/ErrorPage');
const Admin = require('../views/Admin');

const { User, Favor, Way, Review } = require('../../db/models');

router
  .get('/', async (req, res) => {
    const notApproved = await Way.findAll({
      raw: true,
      nest: true,
      where: { approved: false },
    });

    render(Admin, { user: req.session.user, notApproved }, res);
  })

  .delete('/', async (req, res) => {
    const { id } = req.body;

    try {
      const deleteOne = await Way.findByPk(id);
      await deleteOne.destroy();

      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(404);
    }
  })

  .patch('/', async (req, res) => {
    const { id } = req.body;

    try {
      const approveOne = await Way.findByPk(id);
      approveOne.approved = true;
      approveOne.save();

      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(404);
    }
  });

module.exports = router;
