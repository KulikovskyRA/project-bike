const React = require('react');
const Layout = require('./Layout');

function Login() {
  return (
    <Layout>
      {/* <form action="/users/login" method="post" className="logReg">
        <h3>Войдите в свой аккаунт!</h3>
        <div className="form-floating mb-3">
          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
          />
          <label htmlFor="email">Введите свою электронную почту:</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
          />
          <label htmlFor="password">Введите пароль:</label>
        </div>
        <div className="lowerLoginPart">
          <a href="/users/register">
            <div>Создать аккаунт!</div>
          </a>
          <button type="submit" className="btn btn-outline-primary col-6">
            Далее
          </button>
        </div>
      </form> */}
      <div className="flex w-screen h-screen justify-center">

        <div className="flex min-h-full flex-col w-96 justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Вход</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-8 logReg" action="/users/login" method="POST">

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Введите электронную почту</label>
                <div className="mt-2">
                  <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Введите пароль</label>
                </div>
                <div className="mt-2">
                  <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Войти</button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Нет аккаунта?
              <a href="/users/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Зарегистрироваться</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Login;
