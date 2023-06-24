const React = require('react');
const Layout = require('./Layout');

module.exports = function NewWay({ user }) {
  return (
    <Layout user={user}>
      <h2>Add route</h2>

      <div id="YMapsID"></div>
      <div className="buttons_container">
        <button className="mapButton">Построить маршрут</button>
        {/*<input type="text" className="way-title" required/>*/}
      </div>
      <div className="forUploadFile"></div>
      <script defer type="text/javascript" src="/js/maps.js" />
    </Layout>
  );
};
