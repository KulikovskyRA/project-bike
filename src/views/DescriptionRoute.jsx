const React = require('react');
const Layout = require('./Layout');

module.exports = function DescriptionRoute({ user }) {
  return (
    <Layout user={user}>
      <div>Описание</div>
    </Layout>
  );
};
