const React = require('react');
const Layout = require('./Layout');

module.exports = function NewWay({ user }) {
  return (
    <Layout user={user}>
      {/*<h2 className="text-2xl px-8">Add route</h2>*/}
      
      <div id="YMapsID" className="mapOnAdd"></div>
      <div className="buttons_container">
        <button
          className="mapButton flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Построить
          маршрут
        </button>
        {/*<input type="text" className="way-title" required/>*/}
      </div>
      <div className="forUploadFile"></div>
      <script defer type="text/javascript" src="/js/maps.js"/>
    </Layout>
  );
};
