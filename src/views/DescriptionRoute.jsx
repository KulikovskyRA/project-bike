const React = require('react');
const Layout = require('./Layout');

module.exports = function DescriptionRoute({ user, oneWay, reviews }) {
  // ☆ ★ ✮ ★ ☆
  let totalScore = 0;
  reviews.forEach((el) => {
    totalScore += el.score;
  });
  const avr = totalScore / reviews.length;
  const avrRounded = Math.round(avr) || 0;

  return (
    <Layout user={user}>
      <link rel="stylesheet" href="/css/favorites.css" />
      <div>{oneWay.title}</div>

      <div>
        <img src={`/images/${oneWay.picture_data}`} alt={oneWay.title} />
      </div>
      <div>Длина маршрута: {oneWay.way_length} км.</div>
      <div>
        Рейтинг:
        {'✮'.repeat(Math.round(avrRounded))}
        {'☆'.repeat(Math.round(5 - avrRounded))}
      </div>
      <div>Автор маршрута: {oneWay.User.username}</div>
      <div>Населенный пункт: {oneWay.city}</div>
      <div>Оценка</div>

      <button
        id="favorite"
        name="favorite-checkbox"
        value="favorite-button"
        data-onewayid={oneWay.id}
        data-userid={user.id}
      >
        Добавить в избранное
      </button>
      {/*<div>*/}
      {/*  Оцените приложения*/}
      {/*  <br/>! выводится список звездочек или колёс при нажатии на них*/}
      {/*  предлагается оставить отзыв, если пользователь не хочет оставлять отзыв,*/}
      {/*  то можно просто отправить оценку*/}
      {/*</div>*/}

      <button id="buttonLeaveFeedback">
        Оставить отзыв
        <br />
        Можно отправить пустой отзыв, но нельзя отправить без оценки
      </button>
      <form
        action={`/description/newrev/${oneWay.id}`}
        method="POST"
        id="formFeedback"
      >
        {/* добавить оценку от 1 до 5*/}

        <div className="rating">
          <input type="radio" name="rating" id="rating1" value="1" required />
          <label htmlFor="rating1">1</label>
          <input type="radio" name="rating" id="rating2" value="2" />
          <label htmlFor="rating2">2</label>
          <input type="radio" name="rating" id="rating3" value="3" />
          <label htmlFor="rating3">3</label>
          <input type="radio" name="rating" id="rating4" value="4" />
          <label htmlFor="rating4">4</label>
          <input type="radio" name="rating" id="rating5" value="5" />
          <label htmlFor="rating5">5</label>
        </div>

        <label>Поделитесь своим мнением (необязательно)</label>
        <input
          type="text"
          name="text_body"
          maxLength="200"
          placeholder="Максимум 200 символов"
          className="input_clear"
        />
        <button data-onewayid={oneWay.id}>Опубликовать</button>
      </form>
      <div>
        Отзывы:
        <ul className="review_all">
          {reviews.map((review) => (
            <li key={`review${review.id}`}>
              {review.text_body}
              <p>{review['User.username']}</p>
              <span>{review.createdAt.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>
      <div id="YMapsID"></div>
      <script defer src="/js/feedback.js" />
      <script defer src="/js/favorites.js" />
      <script defer type="text/javascript" src="/js/getRoadOnMap.js" />
    </Layout>
  );
};
