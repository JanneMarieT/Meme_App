var express = require('express');
var router = express.Router();
var passport = require('passport')
const path = require('path');
const fs = require("fs")


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
  let data = fs.readFileSync(path.resolve(__dirname, "../data/memes.json"));
  res.render('index', { memes: JSON.parse(data), user: req.user});
});

module.exports = router;
