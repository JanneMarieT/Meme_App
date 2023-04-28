var express = require('express');
var router = express.Router();
const path = require('path');
const axios = require('axios')
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


//gets the url-link from json file
let getUrl = fs.readFileSync("data/env.json");

//gets data from url-link 
axios.get(getUrl)
    .then(response => {
      let newData = response.data.data.memes;
      console.log(JSON.stringify(newData))
      //fs.writeFileSync writes the data to a file, but its not deleted after.
        fs.writeFileSync('data/memes.json', JSON.stringify(response.data.data.memes), function (err) {
            console.log(err);
        });
        
    })
    .catch(err => {
        console.log(err)
});


    //reads the json file created onto the meme page
/*router.get('/', function(req, res, next) {
    var clickedMemeIds = req.session.clickedMemeIds || [];
    let data = fs.readFileSync(path.resolve(__dirname, "../data/memes.json"));
    let memes = JSON.parse(data);
    memes.forEach(function(meme) {
    meme.clicked = clickedMemeIds.indexOf(meme.id) >= 0;
    });
    res.render('meme', { memes: memes, user: req.user});
});*/

router.get('/', function(req, res, next) {
  var clickedMemeIds = req.session.clickedMemeIds || [];
  let data = fs.readFileSync(path.resolve(__dirname, "../data/memes.json"));
  var memes = JSON.parse(data);
  memes.forEach(function(meme) {
    meme.clicked = clickedMemeIds.indexOf(meme.id.toString()) >= 0;
  });
  res.render('meme', { memes: memes, user: req.user });
});

router.post('/clicked', function(req, res, next) {
  var clickedMemeIds = req.session.clickedMemeIds || [];
  var memeId = req.body.memeId;
  if (clickedMemeIds.indexOf(memeId) < 0) {
    clickedMemeIds.push(memeId);
    req.session.clickedMemeIds = clickedMemeIds;
    res.json({success: true});
  } else {
    res.json({success: false});
  }
});
   


module.exports = router;
