const router = require('express').Router();
const render = require('../render');

const isAuth = require('../middlewares/isAuth');

const DescriptionRoute = require('../views/DescriptionRoute');

const { User, Favor, Way, Review } = require('../../db/models');

router
  .get('/:id', isAuth, async (req, res) => {
    try {
      const oneWay = await Way.findByPk(
        req.params.id,
        { include: [{ model: User, attributes: ['username'] }] },
        {
          raw: true,
        }
      );
      //console.log(oneWay);

      const reviews = await Review.findAll({
        include: [{ model: User, attributes: ['username'] }],
        order: [['id', 'DESC']],
        raw: true,
      });
      console.log(reviews);
      render(
        DescriptionRoute,
        { user: req.session.user, oneWay, reviews },
        res
      );
    } catch (error) {
      console.log(error);
    }
  })

  .get('/newrev/:id', async (req, res) => {
    const newReview = await Review.findByPk(req.params.id, {
      include: [{ model: User, attributes: ['username'] }],
    });
    res.send(newReview);
    res.end();
  })

  .post('/newrev/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const serch = await Review.findOne({
        where: {
          way_id: id,
          user_id: req.session?.user?.id,
        },
      });

      if (!serch) {
        const newReview = await Review.create(
          {
            way_id: id,
            user_id: req.session?.user?.id,
            score: req.body.score,
            text_body: req.body.text_body,
          },
          {
            returning: true,
            plain: true,
          }
        );
        console.log(newReview);
        res.send(newReview);
        res.status(200);
        res.end();
      }
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;
