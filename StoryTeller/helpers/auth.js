//For Authrnticate the User and if it is directly redirect to dashboard of User

module.exports = {
    ensureAuthenticated: function(req, res, next){
      if(req.isAuthenticated()){
        return next();
      }
      res.redirect('/');
    },
    ensureGuest: function(req, res, next){
      if(req.isAuthenticated()){
        res.redirect('/dashboard');
      } else {
        return next();
      }
    }
  }