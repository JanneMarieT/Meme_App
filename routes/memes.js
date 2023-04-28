var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require("fs")
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


router.get('/:id', function(req, res, next) {
  const memes = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/memes.json")));
  const meme = memes.find(meme => meme.id === req.params.id);
  if (!meme) {
    res.sendStatus(404);
  } else {
    res.render('memes', { memes: meme, user: req.user });
  }
});

module.exports = router;
