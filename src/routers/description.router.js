const router = require('express').Router();
const render = require('../render');

const isAuth = require('../middlewares/isAuth');

const DescriptionRoute = require('../views/DescriptionRoute');

const { User, Favor, Way, Review } = require('../../db/models');

router
  .get('/:id', async (req, res) => {
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
  
  //отзывы должно создаваться на странице с конкретным id, под которым они оставляются
  // оставлять их могут только зарегистрированные юзеры
  .post('/:id', async (req, res) => {
    try {
      const newReview = await Review.create(
        {
          user_id: req.body.session?.user?.username,
          score: req.body.score,
          text_body: req.body.text_body,
        },
        {
          returning: true,
          plain: true,
        }
      );
      //  res.redirect(`/entries/${newEntry.id}`);
      console.log(newReview);
    } catch (error) {
      console.log(error);
    }
  });

router.get('/route/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const oneWay = await Way.findByPk(id);
    res.send(oneWay);
    res.end();
  } catch (error) {
    res.end(error);
  }
});

module.exports = router;
