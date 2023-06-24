const React = require('react');

module.exports = function Layout({ children, title, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>The bicycle route</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link defer rel="stylesheet" href="/css/styles.css" />

        <link type="text/css" rel="stylesheet" href="/css/map.css" />
        <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=9722eebf-d9d9-4550-9d23-8795e75df5e2" />
      </head>
      <body className="bg-gray-200">
        <nav className="bg-gray-900">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  <svg
                    className="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <a
                      href="/"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      aria-current="page"
                    >
                      Главная
                    </a>

                    {user?.admin === true ? (
                      <a
                        href="/admin"
                        className="text-gray-300 bg-orange-500 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                        aria-current="page"
                      >
                        Проверка маршрутов
                      </a>
                    ) : (
                      <div />
                    )}

                    {user?.username ? (
                      <>
                        <a
                          href="/profile/myway"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                          aria-current="page"
                        >
                          {user.username}
                        </a>
                        <a
                          href="/users/logout"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                        >
                          Выйти
                        </a>
                      </>
                    ) : (
                      <>
                        <a
                          href="/users/register"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                        >
                          Регистрация
                        </a>
                        <a
                          href="/users/login"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                        >
                          Вход
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="relative ml-3" />
              </div>
            </div>
          </div>
        </nav>
        <div className="h-screen">{children}</div>
      </body>
      <footer className="text-center text-white bg-gray-900  px-8">
        <div className="footer-icons">
          <div className="mb-6 flex justify-between">
            <div className="p-2">
              © 2023, Copyright: А. Кургаев, А. Артюхина, Д. Ахметов, Р.
              Куликовский
            </div>

            <div className="mb-6 flex justify-between">
              <div className="p-2"> +7 900 999 99 99</div>
              <a href="https://www.facebook.com" className="px-1">
                <img
                  src="/icons/icons8-facebook-48.png"
                  alt="Facebook"
                  style={{ filter: 'grayscale(100%)' }}
                />
              </a>
              <a href="https://www.vk.com" className="px-1">
                <img
                  src="/icons/icons8-vk-48.png"
                  alt="VK"
                  style={{ filter: 'grayscale(100%)' }}
                />
              </a>
              <a href="https://www.instagram.com" className="px-1">
                <img
                  src="/icons/icons8-instagram-48.png"
                  alt="Instagram"
                  style={{ filter: 'grayscale(100%)' }}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </html>
  );
};
