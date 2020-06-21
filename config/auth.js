module.export = {
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated) {
      return next();
    }
    req.flash("error_msg", "Please log in to view this recource");
    res.redirect("/users/login");
  },
};
