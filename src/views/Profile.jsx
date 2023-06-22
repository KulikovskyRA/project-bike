const React = require('react');
const Layout = require('./Layout');

module.exports = function Profile({
  user,
  favorCycleRoutes,
  builtCycleRoutes,
}) {
  return (
    <Layout user={user}>
      <div>
        <h1>Привет, {user.username}!</h1>
        {/* ссылка на создание карточки с новым веломаршрутом */}
        <a href="way">Создать маршрут</a>
      </div>
      <div>
        Любимые маршруты
        <div className="containFavor">
          {favorCycleRoutes.map((favorCycleRoute) => (
            <div>
              <a
                key={favorCycleRoute.Way.id}
                href={`/description/${favorCycleRoute.Way.id}`}
              >
                {favorCycleRoute.Way.title}
              </a>
              <br />
              {favorCycleRoute.Way.city}
              <button
                id="deleteButtonFavor"
                data-favorcyclerouteid={favorCycleRoute.id}
                type="button"
                value="delete"
                className="deleteButtonFavor"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        Мои маршруты
        <div className="contain">
          {builtCycleRoutes.map((cycleRoute) => (
            <div>
              <a key={cycleRoute.id} href={`/description/${cycleRoute.id}`}>
                {cycleRoute.title}
              </a>
              {cycleRoute.approved === false ? (
                <div>Ожидается проверка</div>
              ) : (
                <div />
              )}

              <br />
              {cycleRoute.city}

              <button
                id="deleteButtonCycleRoute"
                data-cyclerouteid={cycleRoute.id}
                type="button"
                value="delete"
                className="deleteButtonCycleRoute"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
      <script defer src="/js/delete.js" />
    </Layout>
  );
};
