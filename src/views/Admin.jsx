const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ user, notApproved }) {
  return (
    <Layout user={user}>
      <div className="cont">
        {notApproved.map((way) => (
          <div className="card" id={way.id}>
            <h5>{way.title}</h5>
            <img src="" alt={`${way.picture_data}`} />
            <div>
              {way.city} {'*'.repeat(Math.round(way.avr))}
              {'0'.repeat(Math.floor(5 - way.avr))}
            </div>
            <div>{way.way_length}</div>
            <div>{way.way_data}</div>
            <a href={`/description/${way.id}`}>Перейти в {way.id}</a>
            <div>
              <button type="button" className="adminDel">
                Удалить
              </button>
              <button type="button" className="adminAppr">
                Одобрить
              </button>
            </div>
          </div>
        ))}
      </div>
      <script defer src="/js/main.js" />
    </Layout>
  );
};
