const router = require('express').Router();
const render = require('../render');

const isAuth = require('../middlewares/isAuth');

const Profile = require('../views/Profile');

const { User, Favor, Way, Review } = require('../../db/models');

router
  .get('/myway', isAuth, async (req, res) => {
    //console.log(req.session);
    try {
      const favorCycleRoutes = await Favor.findAll({
        where: {
          user_id: req.session.user.id,
        },
        include: Way,
        order: [['id', 'DESC']],
        raw: true,
        nest: true,
      });

      // console.log('====>', favorCycleRoutes);

      const builtCycleRoutes = await Way.findAll({
        where: {
          user_id: req.session.user.id,
        },
        order: [['id', 'DESC']],
      });

      //console.log(builtCycleRoutes);
      render(
        Profile,
        { user: req.session.user, favorCycleRoutes, builtCycleRoutes },
        res
      );
    } catch (error) {
      console.log(error);
    }
  })

  .delete('/myway/favor/:id', async (req, res) => {
    try {
      const a = await Favor.destroy({
        where: { id: req.params.id },
      });
      console.log(a);
      res.json({ isDeleteSussesful: true });
    } catch (error) {
      // console.log(error);
      res.json({
        isDeleteSuccessful: false,
        errorMessage: 'Не удалось удалить запись из базы данных.',
      });
    }
  })

  .delete('/myway/:id', async (req, res) => {
    try {
      await Way.destroy({ where: { id: req.params.id } });
      res.json({ isDeleteSussesful: true });
    } catch (error) {
      // console.log(error);
      res.json({
        isDeleteSuccessful: false,
        errorMessage: 'Не удалось удалить запись из базы данных.',
      });
    }
  });

module.exports = router;
