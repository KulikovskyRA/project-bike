function isAuth(req, res, next) {
  const user = req.session?.user;
  if (user) {
    next();
    return;
  }
  res.redirect('/users/login');
}

module.exports = isAuth;
