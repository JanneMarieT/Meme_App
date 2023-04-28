var express = require('express');
var router = express.Router();
var passport = require('passport')


passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {user: req.user});
});


module.exports = router;
