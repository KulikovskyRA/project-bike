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
      <form action="" id="formFeedback">
        {/* добавить оценку от 1 до 5*/}
        <label>Поделитесь своим мнением (необязательно)</label>
        <input
          type="text"
          name="text_body"
          maxLength="200"
          placeholder="Максимум 200 символов"
        />
        <button>Опубликовать</button>
      </form>
      <div>
        Отзывы:
        <ul>
          {/* список отзывов */}

          {reviews.map((review) => (
            <>
              <li key={review.id}>
                {review.text_body}
                <p>{review.User.username}</p>
                <span>{review.createdAt.toString()}</span>
              </li>
              {/* каждый юзер может удалить свой отзыв, а админ удаляет все */}
            </>
          ))}
        </ul>
      </div>
      {/* здесь должен отображаться маршрут, который уже построен и его можно просмотреть, приблизившись на карте */}
      <div id="YMapsID"></div>
      <script defer type="text/javascript" src="/js/maps.js" />
    </Layout>
  );
};
