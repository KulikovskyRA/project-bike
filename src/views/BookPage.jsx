const React = require('react');
const Layout = require('./Layout');

module.exports = function BookPage({ book, user }) {
  return (
    <Layout user={user}>
      <div className="totalBookInfo">
        <img
          className="bigPoster"
          id={book.id}
          src={`https://covers.openlibrary.org/b/id/${book.poster}-L.jpg`}
          alt="Grapefruit slice atop a pile of other slices"
        />

        <div className="rightSide border-end border-start">
          <h1 id={book.api}>{book.title}</h1>
          <div className="description">Описание</div>
          <div className="author">Автор</div>
          <div className="lowerBookPart">
            <div className="price">{book.price} руб.</div>
            <button
              type="button"
              className="buy btn btn-outline-success"
              data-bookid={book.id}
              data-userid={user.id}
            >
              В корзину (0)
            </button>
          </div>
        </div>
      </div>
      <script defer src="/js/book.js" />
    </Layout>
  );
};
