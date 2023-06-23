const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ user, approved }) {
  return (
    <Layout user={user}>
      <div className="upper">
        <input id="search" type="text" name="search" className="searchInput"/>
        <button type="button" className="confirmSearch">
          Найти по названию
        </button>
        <button type="button" className="refreshSearch">
          Очистить поиск
        </button>
        <a href="way">Создать маршрут</a>
      </div>
      <div className="cont">
        {approved.map((way) => (
          <div className="card" id={way.id}>
            <h5>{way.title}</h5>
            <a href={`/description/${way.id}`}>
              <img src={`/images/${way.picture_data}`} alt={`${way.title}`}/>
            </a>
            <div>
              {way.city} {'*'.repeat(Math.round(way.avr))}
              {'0'.repeat(Math.floor(5 - way.avr))}
            </div>
            <div>{way.way_length}<span> км</span></div>
            {/*<div>{way.way_data}</div>*/}
            <a href={`/description/${way.id}`}>Перейти в {way.id} маршрут</a>
            {user?.admin === true ? (
              <button type="button" className="adminDel">
                Админ удаляет
              </button>
            ) : (
              <div/>
            )}
          </div>
        ))}
      </div>
      <script defer src="/js/main.js"/>
    </Layout>
  );
};
