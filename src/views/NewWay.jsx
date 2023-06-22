const React = require('react');
const Layout = require('./Layout');

module.exports = function NewWay({ user }) {
  return (
    <Layout user={user}>
      <h2>Add route</h2>

      <div id="YMapsID"></div>
      <button className="mapButton">Построить маршрут</button>
      <script defer type="text/javascript" src="/js/maps.js" />
    </Layout>
  );
};
