const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ user, approved }) {
  return (
    <Layout user={user}>
      <div className="cont">
        {approved.map((way) => (
          <div className="card" id={way.id}>
            <h5>{way.title}</h5>
            <img src="" alt={`${way.picture_data}`} />
            <div>
              {way.city} {'*'.repeat(Math.round(way.avr))}
              {'0'.repeat(Math.floor(5 - way.avr))}
            </div>
            <div>{way.way_length}</div>
            <div>{way.way_data}</div>
            <a href={`/${way.id}`}>Перейти в {way.id}</a>
            {user?.admin === true ? (
              <button type="button" className="adminDel">
                Админ удаляет
              </button>
            ) : (
              <div />
            )}
          </div>
        ))}
      </div>
      <script defer src="/js/main.js" />
    </Layout>
  );
};
