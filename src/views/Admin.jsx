const React = require('react');
const Layout = require('./Layout');

module.exports = function Admin({ user, notApproved }) {
  return (
    <Layout user={user}>
      <div className="upper">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 text-center cont">
            {notApproved.map((way) => (
              <div className="card bg-white p-4" id={way.id}>
                <a href={`/description/${way.id}`} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={`/images/${way.picture_data}`}
                      alt={`${way.title}`}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {way.title}
                  </h3>
                  <p className="text-sm text-gray-700">{way.city}</p>
                  <p className="mt-2 text-sm text-gray-700">
                    {way.way_length}км
                  </p>
                  <div>
                    <button
                      type="button"
                      className="adminDel flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2"
                    >
                      Удалить
                    </button>

                    <button
                      type="button"
                      className="adminAppr flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2"
                    >
                      Одобрить
                    </button>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <script defer src="/js/main.js" />
    </Layout>
  );
};
