const React = require('react');
const Layout = require('./Layout');

function Register() {
  return (
    <Layout>
      <form action="/users/register" method="post" className="logReg">
        <h3>Cоздайте свой аккаунт!</h3>
        <div className="form-floating mb-2">
          <input
            type="text"
            name="username"
            id="username"
            className="form-control"
          />
          <label htmlFor="username">Придумайте псевдоним:</label>
        </div>

        <div className="form-floating mb-2">
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
          />
          <label htmlFor="email">Введите электронную почту</label>
        </div>

        <div className="form-floating mb-2">
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
          />
          <label htmlFor="password">Введите пароль</label>
        </div>
        <div className="d-grid gap-2">
          <button
            type="submit"
            className="btn btn-outline-primary col-6 mx-auto"
          >
            Cоздать аккаунт!
          </button>
        </div>
      </form>
    </Layout>
  );
}

module.exports = Register;
