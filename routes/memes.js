var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require("fs")
var passport = require('passport')
//var bodyParser = require('body-parser')
//var jsonParser = bodyParser.json()


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

router.get('/', function (req, res, next) {
    let data = fs.readFileSync(path.resolve(__dirname, "../data/memes.json"));
    res.render('memes', { memes: JSON.parse(data), user: req.user});
});

/*
router.post('/memes', function(req, res, next) {
  console.log(req.body)
});*/
/*
router.post('/memes', function(req, res, next) {
  const memeData = req.body.meme;
  app.get('/meme' + memeData, (req, res) => {
  res.render('memes', { memes: JSON.parse(memeData)});
});
});*/


module.exports = router;
