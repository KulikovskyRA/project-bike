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
          crossorigin="anonymous"
        />

        <link defer rel="stylesheet" href="/css/normalize.css" />
        <link defer rel="stylesheet" href="/css/style.css" />

        <script defer src="/js/layout.js" />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
          crossorigin="anonymous"
        />
      </head>
      <body>
        <nav
          role="banner"
          className="header sticky-top navbar  navbar-expand-lg bg-body-tertiary p-3"
        >
          <div className="container-fluid d-flex justify-content-end">
            <ul>
              <span className="userNameSpan navbar-brand">
                {user?.username ? (
                  user?.username
                ) : (
                  <a className="navbar-brand" href="/users/register">
                    Register
                  </a>
                )}
              </span>

              <span className="navbar-brand"> | </span>

              {user?.username ? (
                <a className="navbar-brand" href="/users/logout">
                  Logout
                </a>
              ) : (
                <a className="navbar-brand" href="/users/login">
                  Login
                </a>
              )}
              <span className="navbar-brand"> | </span>
              <a href="/" className="navbar-brand">
                Home
              </a>

              <span className="navbar-brand"> | </span>
              <a href="/orders" className="navbar-brand">
                Корзина
              </a>
            </ul>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
};
