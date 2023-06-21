const React = require('react');

module.exports = function Layout({ children, title, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />

        <link defer rel="stylesheet" href="/css/normalize.css" />
        <link defer rel="stylesheet" href="/css/favorites.css" />
        <link defer rel="stylesheet" href="/css/formFeedback.css" />

        <script defer src="/js/delete.js" />
        <script defer src="/js/feedback.js" />

        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
          crossOrigin="anonymous"
        />
        <link type="text/css" rel="stylesheet" href="/css/map.css" />
        <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=9722eebf-d9d9-4550-9d23-8795e75df5e2"></script>
      </head>
      <body>
        <nav
          role="banner"
          className="header sticky-top navbar  navbar-expand-lg bg-body-tertiary p-3"
        >
          <div className="container-fluid d-flex justify-content-end">
            <ul>
              <a href="/" className="navbar-brand">
                LOGO
              </a>
              <span className="navbar-brand"> | </span>

              <span className="userNameSpan navbar-brand">
                {user?.username ? (
                  <a href="/profile/myway">{user.username}</a>
                ) : (
                  <a className="navbar-brand" href="/users/register">
                    Создать аккаунт!
                  </a>
                )}
              </span>

              <span className="navbar-brand"> | </span>

              {user?.username ? (
                <a className="navbar-brand" href="/users/logout">
                  Выйти из аккаунта
                </a>
              ) : (
                <a className="navbar-brand" href="/users/login">
                  Авторизоваться
                </a>
              )}
            </ul>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
};
