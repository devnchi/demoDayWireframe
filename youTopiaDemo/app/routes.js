module.exports = function(app, passport, db, multer, ObjectId) {

// Image Upload Code =========================================================================
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/avatars')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + ".png")
    }
});
var upload = multer({storage: storage});

// normal routes ===============================================================

    // show the home page (will also have our login links)
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    // PROFILE SECTION =========================
    app.get('/profile', isLoggedIn, function(req, res) {
      var myUserId = ObjectId(req.session.passport.user)
      console.log(req.user._id);
      db.collection('users').findOne({"_id": myUserId}, (err1, result1) => {
        if (err1) return console.log(err1)
        db.collection('posts').find({userId: req.user._id.toString()} ).toArray((err, result) => {
          console.log(result);
          if (err) return console.log(err)
          res.render('profile.ejs', {
            user : result1,
            posts: result
          })
        })
      })
    });

    // PROFILE SETTINGS SECTION =========================
    app.get('/settings', isLoggedIn, function(req, res) {
      var myUserId = ObjectId(req.session.passport.user)
      console.log(req.user._id);
        db.collection('users').findOne({"_id": myUserId}, (err, result) => {
          console.log(result);
          if (err) return console.log(err)
          res.render('settings.ejs', {
            user : result
          })
        })
    });

    app.post('/uploadAvatar', isLoggedIn, upload.single('file-to-upload'), (req, res, next) => {
      var myUserId = ObjectId(req.session.passport.user)
      db.collection('users').findOneAndUpdate({"_id": myUserId}, {
        $set: {
          "local.avatar" : 'images/avatars/' + req.file.filename
        }
      }, (err, result) => {
        if (err) return res.send(err)
        res.redirect('/settings')
      })
    });

    app.put('/updateProfile', (req, res) => {
      var myUserId = ObjectId(req.session.passport.user)
      db.collection('users').findOneAndUpdate({"_id": myUserId}, {
        $set: {
          "local.about" : req.body.about,
          "local.location" : req.body.location
        }
      }, (err, result) => {
        if (err) return res.send(err)
        res.send(result)
      })
    });

    app.put('/posts', (req, res) => {
      var myUserId = ObjectId(req.session.passport.user)
      db.collection('posts')
      .findOneAndUpdate({username: req.body.username, msg: req.body.msg}, {
        $set: {
          heartLike: req.body.heartLike + 1
        }
      }, {
        sort: {_id: -1},
        upsert: false
      }, (err, result) => {
        if (err) return res.send(err)
        res.send(result)
      })
    })

    // FEED SECTION
    app.get('/feed', isLoggedIn, function(req, res) {
      var myUserId = ObjectId(req.session.passport.user)
      var feed = "feed"
      db.collection('users').find({
        "_id": myUserId
      }).toArray((err, user) => {
        db.collection('posts').find({
          "location": feed
        }).toArray((err, posts) => {
          if (err) return console.log(err)
          res.render('feed.ejs', {
            user: user[0],
            posts: posts
          })
        })
      })
    });


    // app.get('/searchUser', function(req, res) {
    //   // console.log(req.user._id);
    //
    //   db.collection('users').find().toArray((err, result) => {
    //     if (err) return console.log(err)
    //     res.render('searchUser.ejs', {
    //       user : req.user
    //     })
    //   })
    // });

    // ATLAS SECTION
    app.get('/atlas', function(req, res) {
      // console.log(req.user._id);

      db.collection('posts').find().toArray((err, result) => {
        if (err) return console.log(err)
        res.render('atlas.ejs', {
          user : req.user
        })
      })
    });

    // BUSINESS & ECON SECTION
    app.get('/atlas/business', isLoggedIn, function(req, res) {
      var myUserId = ObjectId(req.session.passport.user)
      var business = "businessEcon"
      db.collection('users').find({
        "_id": myUserId
      }).toArray((err, user) => {
        db.collection('posts').find({
          "location": business
        }).toArray((err, posts) => {
          if (err) return console.log(err)
          res.render('world.ejs', {
            user: user[0],
            posts: posts
          })
        })
      })
    });

    // ART & AESTHETIC SECTION
    app.get('/atlas/art', isLoggedIn, function(req, res) {
      var myUserId = ObjectId(req.session.passport.user)
      var artString = "artAesthetic"
      db.collection('users').find({
        "_id": myUserId
      }).toArray((err, user) => {
        db.collection('posts').find({
          "location": artString
        }).toArray((err, posts) => {
          if (err) return console.log(err)
          res.render('world.ejs', {
            user: user[0],
            posts: posts
          })
        })
      })
    });

    // SCIENCE & TECH SECTION
    app.get('/atlas/science', isLoggedIn, function(req, res) {
      var myUserId = ObjectId(req.session.passport.user)
      var science = "scienceTech"
      db.collection('users').find({
        "_id": myUserId
      }).toArray((err, user) => {
        db.collection('posts').find({
          "location": science
        }).toArray((err, posts) => {
          if (err) return console.log(err)
          res.render('world.ejs', {
            user: user[0],
            posts: posts
          })
        })
      })
    });

    // EDUCATION & ACADEMIA SECTION
    app.get('/atlas/academia', isLoggedIn, function(req, res) {
      var myUserId = ObjectId(req.session.passport.user)
      var academia = "eduAcad"
      db.collection('users').find({
        "_id": myUserId
      }).toArray((err, user) => {
        db.collection('posts').find({
          "location": academia
        }).toArray((err, posts) => {
          if (err) return console.log(err)
          res.render('world.ejs', {
            user: user[0],
            posts: posts
          })
        })
      })
    });

    // SPIRITUALITY & GREATER THOUGHT SECTION
    app.get('/atlas/spiritual', isLoggedIn, function(req, res) {
      var myUserId = ObjectId(req.session.passport.user)
      var spiritual = "spiritAlt"
      db.collection('users').find({
        "_id": myUserId
      }).toArray((err, user) => {
        db.collection('posts').find({
          "location": spiritual
        }).toArray((err, posts) => {
          if (err) return console.log(err)
          res.render('world.ejs', {
            user: user[0],
            posts: posts
          })
        })
      })
    });

    //  MEDIA & ENTERTAINMENT SECTION
    app.get('/atlas/media', isLoggedIn, function(req, res) {
      var myUserId = ObjectId(req.session.passport.user)
      var media = "mediaEntertainment"
      db.collection('users').find({
        "_id": myUserId
      }).toArray((err, user) => {
        db.collection('posts').find({
          "location": media
        }).toArray((err, posts) => {
          if (err) return console.log(err)
          res.render('world.ejs', {
            user: user[0],
            posts: posts
          })
        })
      })
    });

    // GOV'T & POLITICS SECTION
    app.get('/atlas/govt', isLoggedIn, function(req, res) {
      var myUserId = ObjectId(req.session.passport.user)
      var govt = "govtPolitics"
      db.collection('users').find({
        "_id": myUserId
      }).toArray((err, user) => {
        db.collection('posts').find({
          "location": govt
        }).toArray((err, posts) => {
          if (err) return console.log(err)
          res.render('world.ejs', {
            user: user[0],
            posts: posts
          })
        })
      })
    });


  // ADD COMRADE SECTION
  app.get('/searchUser/:username', (req, res) => {
        var username = req.params.username
        db.collection('users').find({
          "local.username": username
        }).toArray((err, result) => {
          console.log(result);
          if (err) return console.log(err)
          res.render('searchUser.ejs', {
            user: result[0]
          })
        })
      })

    app.put('/addNewCom', (req, res) => {
      var myUserId = ObjectId(req.session.passport.user)
      var userToAdd = req.body.username
      console.log(myUserId)
      console.log(userToAdd)
      db.collection('users')
      .findOneAndUpdate({
      _id: myUserId
      }, {
      $addToSet: {
        "local.myComrades": userToAdd
      }
      }, {
      sort: {
        _id: -1
      },
      upsert: false
    }, (err, result) => {
      if (err) return res.send(err)
      res.send(result)
    })
})

    app.put('/removeCom', (req, res) => {
      var myUserId = ObjectId(req.session.passport.user)
      var userToRemove = req.body.username
      db.collection('users')
      .findOneAndUpdate({
      _id: myUserId
      }, {
      $pull: {
        "local.myComrades": userToRemove
      }
      }, {
      sort: {
        _id: -1
      },
      upsert: false
    }, (err, result) => {
      if (err) return res.send(err)
      res.send(result)
    })
})

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

// message board routes ===============================================================

    app.post('/posts', (req, res) => {
      console.log(req.body);
      console.log(req.user);
      db.collection('posts').save({userId: req.user._id.toString(), username: req.body.username, msg: req.body.msg, heartLike: 0, location: req.body.location}, (err, result) => {
        if (err) return console.log(err)
        console.log('saved to database')
        res.redirect("/profile")
      })
    })

    app.put('/posts', (req, res) => {
      db.collection('posts')
      .findOneAndUpdate({username: req.body.username, msg: req.body.msg}, {
        $set: {
          heartLike: req.body.heartLike + 1
        }
      }, {
        sort: {_id: -1},
        upsert: false
      }, (err, result) => {
        if (err) return res.send(err)
        res.send(result)
      })
    })

    // app.put('/thumbDown', (req, res) => {
    //   db.collection('messages')
    //   .findOneAndUpdate({name: req.body.name, msg: req.body.msg}, {
    //     $set: {
    //       thumbUp:req.body.thumbUp - 1
    //     }
    //   }, {
    //     sort: {_id: -1},
    //     upsert: true
    //   }, (err, result) => {
    //     if (err) return res.send(err)
    //     res.send(result)
    //   })
    // })

    app.delete('/posts', (req, res) => {
      db.collection('posts').findOneAndDelete({name: req.body.name, msg: req.body.msg}, (err, result) => {
        if (err) return res.send(500, err)
        res.send('Message deleted!')
      })
    })

// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

    // locally --------------------------------
        // LOGIN ===============================
        // show the login form
        app.get('/login', function(req, res) {
            res.render('login.ejs', { message: req.flash('loginMessage') });
        });

        // process the login form
        app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

        // SIGNUP =================================
        // show the signup form
        app.get('/signup', function(req, res) {
            res.render('signup.ejs', { message: req.flash('signupMessage') });
        });

        // process the signup form
        app.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/signup', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

// =============================================================================
// UNLINK ACCOUNTS =============================================================
// =============================================================================
// used to unlink accounts. for social accounts, just remove the token
// for local account, remove email and password
// user account will stay active in case they want to reconnect in the future

    // local -----------------------------------
    app.get('/unlink/local', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.local.email    = undefined;
        user.local.password = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
