import * as PassportLocal from "passport-local";
import queries from "../database/queries";
import Utils from "../auth/utils";
import INewUser from '../interfaces/INewUser';

const LocalStrategy = PassportLocal.Strategy;

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        done(null, user);
    });

    //LOCAL SIGN UP
    passport.use('local-signup', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true,
    },
        async function(req, username, password, done) {

            let email = req.body.email;

            let newUser = {} as INewUser;

            newUser.username = username;
            newUser.email = email;
            newUser.ip = req.connection.remoteAddress;
            newUser.password = Utils.generateHash(password);

            await queries.insertUser(newUser.username, newUser.email, newUser.ip, newUser.password);

            return done(null, newUser, null);

        }));

    //LOCAL LOGIN
    passport.use('local-login', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true,
    },
        async function(req, username, password, done) {

            let account = await queries.findUser(username);

            return done(null, account);
        }));
};