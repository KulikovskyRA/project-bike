const React = require('react');
const Layout = require('./Layout');

module.exports = function Profile({
  user,
  favorCycleRoutes,
  builtCycleRoutes,
}) {
  return (
    <Layout user={user}>
      <div className="">
        <div
          className="upper bg-white rounded-lg flex justify-center  w-96"
          style={{ margin: '30px 20% 25px 20%', padding: '15px', gap: '10%' }}
        >
          <h1>Привет, {user.username}!</h1>
          <a href="/way">Создать маршрут</a>
        </div>

        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-2 ">
          <h2 className="text-2xl px-8">Любимые маршруты</h2>
          <div className="containFavor grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 text-center">
            {favorCycleRoutes.map((favorCycleRoute) => (
              <div className="card bg-white p-4">
                <a
                  key={favorCycleRoute.Way.id}
                  className="group"
                  href={`/description/${favorCycleRoute.Way.id}`}
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={`/images/${favorCycleRoute.Way.picture_data}`}
                      alt={favorCycleRoute.Way.title}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {favorCycleRoute.Way.title}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {favorCycleRoute.Way.city}
                  </p>
                </a>
                <button
                  id="deleteButtonFavor"
                  data-favorcyclerouteid={favorCycleRoute.id}
                  type="button"
                  value="delete"
                  className="deleteButtonFavor flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Удалить из избранного
                </button>
              </div>
            ))}
          </div>
        </div>
        <br />
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-2 ">
          <h2 className="text-2xl px-8">Мои маршруты:</h2>
          <br />
          <div className="contain grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 text-center">
            {builtCycleRoutes.map((cycleRoute) => (
              <div className="card bg-white p-4">
                <a
                  href={`/description/${cycleRoute.id}`}
                  className="group"
                  key={cycleRoute.id}
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={`/images/${cycleRoute.picture_data}`}
                      alt={cycleRoute.title}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {cycleRoute.title}
                  </h3>

                  <p className="text-sm text-gray-700">{cycleRoute.city}</p>
                </a>
                <br />
                {cycleRoute.approved === false ? (
                  <div>Ожидается проверка</div>
                ) : (
                  <div />
                )}

                <button
                  id="deleteButtonCycleRoute"
                  data-cyclerouteid={cycleRoute.id}
                  type="button"
                  value="delete"
                  className="deleteButtonCycleRoute flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Удалить
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <script defer src="/js/delete.js" />
    </Layout>
  );
};
