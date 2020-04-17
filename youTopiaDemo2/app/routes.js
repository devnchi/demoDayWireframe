module.exports = function(app, passport, db, ObjectId) {


// normal routes ===============================================================

    // show the home page (will also have our login links)
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    // FEED SECTION
    app.get('/feed', function(req, res) {
      // console.log(req.user._id);

      db.collection('posts').find().toArray((err, result) => {
        if (err) return console.log(err)
        res.render('feed.ejs', {
          user : req.user
        })
      })
    });

    // COMRADE SECTION

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

      db.collection('messages').find().toArray((err, result) => {
        if (err) return console.log(err)
        res.render('atlas.ejs', {
          user : req.user
        })
      })
    });

    // BUSINESS & ECON SECTION
    app.get('/business', function(req, res) {
      // console.log(req.user._id);

      db.collection('messages').find().toArray((err, result) => {
        if (err) return console.log(err)
        res.render('business.ejs', {
          user : req.user
        })
      })
    });

    // ART & AESTHETIC SECTION
    app.get('/art', function(req, res) {
      // console.log(req.user._id);

      db.collection('messages').find().toArray((err, result) => {
        if (err) return console.log(err)
        res.render('art.ejs', {
          user : req.user
        })
      })
    });

    // SCIENCE & TECH SECTION
    app.get('/science', function(req, res) {
      // console.log(req.user._id);

      db.collection('messages').find().toArray((err, result) => {
        if (err) return console.log(err)
        res.render('science.ejs', {
          user : req.user
        })
      })
    });

    // EDUCATION & ACADEMIA SECTION
    app.get('/academia', function(req, res) {
      // console.log(req.user._id);

      db.collection('messages').find().toArray((err, result) => {
        if (err) return console.log(err)
        res.render('academia.ejs', {
          user : req.user
        })
      })
    });

    // SPIRITUALITY & GREATER THOUGHT SECTION
    app.get('/spiritual', function(req, res) {
      // console.log(req.user._id);

      db.collection('messages').find().toArray((err, result) => {
        if (err) return console.log(err)
        res.render('spirit.ejs', {
          user : req.user
        })
      })
    });

    // MEDIA & ENTERTAINMENT SECTION
    app.get('/media', function(req, res) {
      // console.log(req.user._id);

      db.collection('messages').find().toArray((err, result) => {
        if (err) return console.log(err)
        res.render('media.ejs', {
          user : req.user
        })
      })
    });

    // GOV'T & POLITICS SECTION
    app.get('/govt', function(req, res) {
      // console.log(req.user._id);

      db.collection('messages').find().toArray((err, result) => {
        if (err) return console.log(err)
        res.render('govt.ejs', {
          user : req.user
        })
      })
    });


    // PROFILE SECTION =========================
    app.get('/profile', isLoggedIn, function(req, res) {
      console.log(req.user._id);
        db.collection('posts').find({userId: req.user._id.toString()} ).toArray((err, result) => {
          console.log(result);
          if (err) return console.log(err)
          res.render('profile.ejs', {
            user : req.user,
            posts: result
          })
        })
    });

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

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

// message board routes ===============================================================

    app.post('/posts', (req, res) => {
      console.log(req.body);
      console.log(req.user);
      db.collection('posts').save({userId: req.user._id.toString(), username: req.body.username, msg: req.body.msg, heartLike: 0}, (err, result) => {
        if (err) return console.log(err)
        console.log('saved to database')
        res.redirect('/profile')
      })
    })

    app.put('/posts', (req, res) => {
      db.collection('posts')
      .findOneAndUpdate({username: req.body.username, msg: req.body.msg, heartLike: 0}, {
        $set: {
          heartLike:req.body.heartLike + 1
        }
      }, {
        sort: {_id: -1},
        upsert: true
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
