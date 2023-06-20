const React = require('react');
const Layout = require('./Layout');

module.exports = function Cart({ orders, user }) {
  let totalPrice = 0;
  orders.forEach((el) => {
    totalPrice += el[0].Book.price * el[1];
  });

  return (
    <Layout user={user}>
      <div className="ubercont">
        <div className="rounded-2 border border-1 d-flex flex-row mb-3 justify-content-around">
          <h1 className="p-3"> Приветствуем, {user.username}! </h1>
          <div className="p-4">
            <div>Информация:</div>
            <div>id: {user.id}</div>
            <div>email: {user.email}</div>
          </div>
        </div>

        <div className="container">
          <h4>Заказы:</h4>

          {orders.map((el) => (
            <div className="shelfCart d-flex  p-2 border-bottom">
              <img
                className="posterCart"
                src={`https://covers.openlibrary.org/b/id/${el[0].Book.poster}-S.jpg`}
                alt="Book"
              />

              <div
                className="cartRightSide p-3"
                data-bookid={el[0].book_id}
                data-userid={user.id}
                data-amount={el[1]}
                data-price={el[0].Book.price}
              >
                <span>{el[0].Book.title} </span>
                <span className="amount">Количество:{el[1]}</span>
                <span>Цена за 1шт: {el[0].Book.price}руб.</span>
                <span className="shelfPrice">
                  Цена: {el[0].Book.price * el[1]}руб.
                </span>

                <div className="btn-group" role="group" aria-label="minus-plus">
                  <button
                    type="button"
                    className="pop btn btn-outline-danger btn-sm"
                  >
                    -
                  </button>
                  <button
                    type="button"
                    className="add btn btn-outline-success btn-sm"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="deleteShelf btn btn-outline-dark btn-sm"
                  >
                    Удалить {el[0].Book.title}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h4 className="totalPrice" data-total={totalPrice}>
          Всего: {totalPrice} руб.
        </h4>
        <div className="d-flex justify-content-center gap-3">
          <button
            type="button"
            className="deleteAll btn btn-outline-warning"
            data-userid={user.id}
          >
            Удалить все заказы
          </button>
          <button
            type="button"
            className="pay btn btn-outline-info"
            data-userid={user.id}
          >
            Оплатить заказы
          </button>
        </div>
      </div>

      <script defer src="/js/cart.js" />
    </Layout>
  );
};
