const React = require('react');
const Layout = require('./Layout');

function ErrorPage({ errorSMS }) {
  return (
    <Layout>
      <div className="alert alert-danger" role="alert">
        {errorSMS}
      </div>
    </Layout>
  );
}

module.exports = ErrorPage;
