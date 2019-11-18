import Queries from "../database/queries";

module.exports = function(app, passport) {

    app.get('/', function(req, res) {
        console.log(req.session);
        req.next();
    });

    app.get('/register', function(req, res) {
        req.next();
    });

    app.post('/register', passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/register',
        failureFlash: false,
    }));

    app.get('/login', function(req, res) {
        req.next();
    });

    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: false,
    }));

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/');
};