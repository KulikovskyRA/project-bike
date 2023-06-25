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
      <div className="">
        <div className="py-24 sm:py-32">
          <div className="p-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {oneWay.title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Длина маршрута: {`${oneWay.way_length}м`}
              </p>
              <p className="text-lg leading-8 text-gray-600">
                Населенный пункт: {oneWay.city}
              </p>
              <button
                id="favorite"
                name="favorite-checkbox"
                value="favorite-button"
                data-onewayid={oneWay.id}
                data-userid={user.id}
                type="button"
              >
                Добавить в избранное
              </button>
            </div>
            <ul role="list" className="mt-6">
              <li>
                <div className="items-center gap-x-6">
                  <div id="YMapsID" className="h-80 w-80!" />
                  <div className="mt-6">
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      Оценка:
                      <div>
                        Рейтинг:
                        {'✮'.repeat(Math.round(avrRounded))}
                        {'☆'.repeat(Math.round(5 - avrRounded))}
                      </div>
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      Автор маршрута:
                      {oneWay.User.username}
                    </p>
                  </div>
                  <div className="mt-8">
                    <button
                      id="buttonLeaveFeedback"
                      type="button"
                      className="flex w-full justify-center rounded-md btn-otz px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Оставить отзыв
                      <br />
                      Можно отправить пустой отзыв, но нельзя отправить без
                      оценки
                    </button>
                  </div>
                  <div className="flex mt-8 w-full mx-0 justify-center">
                    <div className="subscribe">
                      <form
                        action={`/description/newrev/${oneWay.id}`}
                        method="POST"
                        id="formFeedback"
                      >
                        <p>
                          <label>Поделитесь своим мнением</label>
                        </p>
                        <p className="cs">(необязательно)</p>
                        <div className="rating">
                          <input
                            className="radioButtonRaiting"
                            type="radio"
                            name="rating"
                            id="rating1"
                            value="1"
                            required
                          />
                          <label htmlFor="rating1">1</label>
                          <input
                            className="radioButtonRaiting"
                            type="radio"
                            name="rating"
                            id="rating2"
                            value="2"
                          />
                          <label htmlFor="rating2">2</label>
                          <input
                            className="radioButtonRaiting"
                            type="radio"
                            name="rating"
                            id="rating3"
                            value="3"
                          />
                          <label htmlFor="rating3">3</label>
                          <input
                            className="radioButtonRaiting"
                            type="radio"
                            name="rating"
                            id="rating4"
                            value="4"
                          />
                          <label htmlFor="rating4">4</label>
                          <input
                            className="radioButtonRaiting"
                            type="radio"
                            name="rating"
                            id="rating5"
                            value="5"
                          />

                          <label htmlFor="rating5">5</label>
                        </div>
                        <textarea
                          type="text"
                          name="text_body"
                          maxLength="200"
                          placeholder="Максимум 200 символов"
                          className="input_clear subscribe-input"
                        />
                        <div className="submit-btn">
                          <button data-onewayid={oneWay.id} type="button">
                            Опубликовать
                          </button>
                        </div>

                        {/* добавить оценку от 1 до 5 */}
                      </form>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      Отзывы:
                    </h2>
                    <ul
                      role="list"
                      className="divide-y mt-6 divide-gray-100 review_all"
                    >
                      {reviews.map((review) => (
                        <li
                          key={`review${review.id}`}
                          className="flex p-4 bg-white justify-between gap-x-6 py-5"
                        >
                          <div className="flex gap-x-4">
                            <div className="min-w-0 flex-auto">
                              <p className="text-sm font-semibold leading-6 text-gray-900">
                                {review['User.username']}
                              </p>
                              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                {review.text_body}
                              </p>
                            </div>
                          </div>
                          <div className="hidden sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-gray-900">
                              Добавлено:
                            </p>
                            <p className="mt-1 text-xs leading-5 text-gray-500">
                              {review.createdAt.toLocaleString()}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div>
        Оцените приложения
        <br />
        ! выводится список звездочек или колёс при нажатии на них
        предлагается оставить отзыв, если пользователь не хочет оставлять отзыв,
        то можно просто отправить оценку
      </div> */}
      <link rel="stylesheet" href="/css/favorites.css" />
      <script defer src="/js/feedback.js" />
      <script defer src="/js/favorites.js" />
      <script defer type="text/javascript" src="/js/getRoadOnMap.js" />
    </Layout>
  );
};
