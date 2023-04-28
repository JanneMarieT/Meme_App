var express = require('express');
var router = express.Router();
const fs = require("fs")
const path = require("path")
var passport = require('passport')
var LocalStrategy = require('passport-local');


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

passport.use(new LocalStrategy(function verify(username, password, cb) {
  let usersArray = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/users.json")));
  let filteredArray = usersArray.filter(x => x.username == username);
 if (filteredArray.length > 0){
    switch(true) {
        case (filteredArray[0].password == password && filteredArray[0].username == username ): { 
                let usersData = filteredArray[0]
                return cb(null, usersData);
            } 
        case (filteredArray[1].password == password && filteredArray[1].username == username ): {
                let usersData = filteredArray[1]
                return cb(null, usersData);
            } 
        case (filteredArray[2].password == password && filteredArray[2].username == username ): {
                let usersData = filteredArray[2]
                return cb(null, usersData);
            } 
        default:
            return cb(null, false);
    }
}
else {
  return cb(null, false);
}
}));
      

router.post('/password', passport.authenticate('local', {
  successReturnToOrRedirect: '/meme', //redirect to meme Overview page
  failureRedirect: '/login'
}));

router.post('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/login');
    });
  });

router.get('/', function(req, res, next) {
    if(!req.user) {
      res.render('login', {user: null});
    }
    else {
      res.render('login', {user: req.user});
    }
  });


module.exports = router