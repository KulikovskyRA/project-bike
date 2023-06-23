const React = require('react');
const Layout = require('./Layout');

function Register() {
  return (
    <Layout>
      {/* <form action="/users/register" method="post" classNameName="logReg">
        <h3>Cоздайте свой аккаунт!</h3>
        <div classNameName="form-floating mb-2">
          <input
            type="text"
            name="username"
            id="username"
            classNameName="form-control"
          />
          <label htmlFor="username">Придумайте псевдоним:</label>
        </div>

        <div classNameName="form-floating mb-2">
          <input
            type="email"
            name="email"
            id="email"
            classNameName="form-control"
          />
          <label htmlFor="email">Введите электронную почту</label>
        </div>

        <div classNameName="form-floating mb-2">
          <input
            type="password"
            name="password"
            id="password"
            classNameName="form-control"
          />
          <label htmlFor="password">Введите пароль</label>
        </div>
        <div classNameName="d-grid gap-2">
          <button
            type="submit"
            classNameName="btn btn-outline-primary col-6 mx-auto"
          >
            Cоздать аккаунт!
          </button>
        </div>
      </form> */}
      <div className="flex w-screen h-screen justify-center">

        <div className="flex min-h-full flex-col w-96 justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Регистрация</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-8 logReg" action="/users/register" method="POST">
              <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Придумайте псевдоним</label>
                <div className="mt-2">
                  <input id="username" name="username" type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

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
                <button type="submit" className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Зарегистрироваться</button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Есть аккаунт?
              <a href="/users/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Войти</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Register;
