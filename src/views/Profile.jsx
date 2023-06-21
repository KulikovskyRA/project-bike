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
        <ul>
          {/* список избранного */}
          {favorCycleRoutes.map((favorCycleRoute) => (
            <>
              <li key={favorCycleRoute.Way.id}>
                {/* должно переводить на страницу с подробной информацией */}
                <a href={`/${favorCycleRoute.Way.id}`}>
                  {favorCycleRoute.Way.title}
                </a>
                <br />
                {favorCycleRoute.Way.city}
              </li>
              <li>
                <button
                  id="deleteButtonFavor"
                  data-favorcyclerouteid={favorCycleRoute.id}
                  type="button"
                  value="delete"
                >
                  X
                </button>
              </li>
            </>
          ))}
        </ul>
      </div>

      <div>
        Мои маршруты
        <ul>
          {/* список маршрутов созданных пользователем*/}
          {builtCycleRoutes.map((cycleRoute) => (
            <>
              <li key={cycleRoute.id}>
                {/* должно переводить на страницу с подробной информацией */}
                <a href={`/${cycleRoute.id}`}>{cycleRoute.title}</a>

                {cycleRoute.approved === false ? (
                  <div>Ожидается проверка</div>
                ) : (
                  <div />
                )}

                <br />
                {cycleRoute.city}
              </li>
              <li>
                <button
                  id="deleteButtonCycleRoute"
                  data-cyclerouteid={cycleRoute.id}
                  type="button"
                  value="delete"
                >
                  X
                </button>
              </li>
            </>
          ))}
        </ul>
      </div>
    </Layout>
  );
};
