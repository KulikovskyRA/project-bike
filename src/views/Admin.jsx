const React = require('react');
const Layout = require('./Layout');

module.exports = function Admin({ user, notApproved }) {
  return (
    <Layout user={user}>
      <div className="cont">
        {notApproved.map((way) => (
          <div className="card" id={way.id}>
            <a href={`/description/${way.id}`}>
              <h5>{way.title}</h5>
              <img src={`/images/${way.picture_data}`} alt={`${way.title}`} />
            </a>
            <div>
              {way.city} {'✮'.repeat(Math.round(way.avr))}
              {'☆'.repeat(Math.floor(5 - way.avr))}
            </div>
            <div>
              {way.way_length}
              <span> км</span>
            </div>
            {/* <div>{way.way_data}</div> */}
            <a href={`/description/${way.id}`}>Следуй за мной</a>
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
