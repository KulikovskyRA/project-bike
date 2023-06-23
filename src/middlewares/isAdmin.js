function isAdmin(req, res, next) {
  const user = req.session?.user;
  if (user && user.admin === true) {
    next();
    return;
  }
  res.redirect('/');
}

module.exports = isAdmin;
