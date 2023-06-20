const React = require('react');
const Layout = require('./Layout');

function Login() {
  return (
    <Layout>
      <form action="/users/login" method="post" className="logReg">
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
      </form>
    </Layout>
  );
}

module.exports = Login;
