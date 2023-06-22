const React = require('react');
const Layout = require('./Layout');

module.exports = function DescriptionRoute({ user, oneWay, reviews }) {
  return (
    <Layout user={user}>
      <div>{oneWay.title}</div>
      <div>
        Длина маршрута: {oneWay.way_length} Подтягивается из api Значит, должно
        притягиваться из api и отображаться в бд???
        <br />И думаю, что нужно ещё одна таблица для хранения точек назначения
        маршрута
      </div>
      <div>Автор маршрута: {oneWay.User.username}</div>
      <div>Населенный пункт: {oneWay.city} Подтягивается из api</div>
      {/* автора маршрута можно узнать только через where по юзер id */}
      {/* оценка должна быть с помощью img и заполняться (менять цвет) */}
      <div>Оценка </div>
      <input
        type="checkbox"
        defaultChecked="checked"
        id="favorite"
        name="favorite-checkbox"
        value="favorite-button"
      />
      <label htmlFor="favorite" className="container_label">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-heart"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        <div className="action">
          <span className="option-1">Добавить в избранное</span>
          <span className="option-2">Добавлено в избранное</span>
        </div>
      </label>
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
      {/* Должен быть список отзывов */}
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
          {/* список отзывов */}

          {reviews.map((review) => (
            <li key={`review${review.id}`}>
              {review.text_body}
              <p>{review['User.username']}</p>
              <span>{review.createdAt.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* здесь должен отображаться маршрут, который уже построен и его можно просмотреть, приблизившись на карте */}
      <div id="YMapsID"></div>
      <script defer type="text/javascript" src="/js/maps.js" />
    </Layout>
  );
};
