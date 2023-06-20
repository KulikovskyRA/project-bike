const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({
  title,
  user,
  fiveRandomBooks,
  books,
  topFive,
}) {
  return (
    <Layout title={title} user={user}>
      <div className="big">
        <div className="container">
          <h2>Cпециально для вас:</h2>

          <div className="forYou bookshelf">
            {fiveRandomBooks.map((el) => (
              <div className="card">
                <figure className="figure">
                  <a href={`/books/${el.id}`}>
                    <img
                      className="poster figure-img img-fluid rounded"
                      id={el.id}
                      src={`https://covers.openlibrary.org/b/id/${el.poster}-M.jpg`}
                      alt="Book"
                    />
                  </a>
                  <figcaption className="inderPoster figure-caption text-center">
                    {el.title.length < 30
                      ? el.title
                      : el.title.slice(0, 30) + '...'}
                  </figcaption>
                  <figcaption className="price figure-caption text-center">
                    {el.price} руб.
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>

          <h2>Бестселлеры:</h2>

          <div className="topFive bookshelf">
            {topFive.map((el) => (
              <div className="card">
                <figure className="figure">
                  <a href={`/books/${el.id}`}>
                    <img
                      className="poster figure-img img-fluid rounded"
                      id={el.id}
                      src={`https://covers.openlibrary.org/b/id/${el.poster}-M.jpg`}
                      alt="Book"
                    />
                  </a>
                  <figcaption className="inderPoster figure-caption text-center">
                    {el.title.length < 30
                      ? el.title
                      : el.title.slice(0, 30) + '...'}
                  </figcaption>
                  <figcaption className="price figure-caption text-center">
                    {el.price} руб.
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>

          <h2>Полный каталог:</h2>
          <div className="allBooks bookshelf">
            {books
              .sort((a, b) => b.id - a.id)
              .map((el) => (
                <div className="card">
                  <figure className="figure">
                    <a href={`/books/${el.id}`}>
                      <img
                        className="poster figure-img img-fluid rounded"
                        id={el.id}
                        src={`https://covers.openlibrary.org/b/id/${el.poster}-M.jpg`}
                        alt="Book"
                      />
                    </a>
                    <figcaption className="inderPoster figure-caption text-center">
                      {el.title.length < 30
                        ? el.title
                        : el.title.slice(0, 30) + '...'}
                    </figcaption>
                    <figcaption className="price figure-caption text-center">
                      {el.price} руб.
                    </figcaption>
                  </figure>
                </div>
              ))}
          </div>
        </div>
        <div className="chat-popup" id="myForm">
          <h1>Чат:</h1>
          <div className="messages overflow-auto"></div>

          <form action="/action_page.php" className="form-container">
            <input type="text" name="messageText" className="form-control" />

            <button type="submit" className="btn">
              Отправить
            </button>
          </form>
        </div>
      </div>
      <script defer src="/js/main.js" />
    </Layout>
  );
};
