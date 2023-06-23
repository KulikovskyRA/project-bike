const React = require('react');
const Layout = require('./Layout');

module.exports = function DescriptionRoute({ user, oneWay, reviews }) {
  return (
    <Layout user={user}>
      <div>{oneWay.title}</div>
      <div>Длина маршрута: {oneWay.way_length}</div>
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
      <div>
        Оцените приложения
        <br />! выводится список звездочек или колёс при нажатии на них
        предлагается оставить отзыв, если пользователь не хочет оставлять отзыв,
        то можно просто отправить оценку
      </div>

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
