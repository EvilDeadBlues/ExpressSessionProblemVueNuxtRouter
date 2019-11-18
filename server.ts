import Express from "express";
import { Nuxt, Builder } from 'nuxt'
import HTTPS from "https";
import Passport from "passport";
import CookieParser from "cookie-parser";
import BodyParser from "body-parser";
import Session from "express-session";
import Morgan from "morgan";
import fs from 'fs';
const redirectSSL = require('redirect-ssl')
let MySQLStore = require('express-mysql-session')(Session);

require('./config/passport')(Passport);

const config = require('./nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production')
const nuxt = new Nuxt(config);
const { host, port } = nuxt.options.server;
const app: Express.Application = Express();
const server = HTTPS.createServer({
    key: fs.readFileSync('./key.pem', 'utf8'),
    cert: fs.readFileSync('./server.crt', 'utf8')
}, app);

let options = {
    host: 'localhost',
    port: 3306,
    user: 'USER',
    password: 'PASSWORD',
    database: 'session_issue',
    clearExpired: true,
    checkExpirationInterval: 900000,
    expiration: 86400000,
    createDatabaseTable: true,
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    },
};

const sessionStore = new MySQLStore(options);

async function start() {

    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    } else {
        await nuxt.ready()
    }

    app.use(Morgan('dev'));
    app.use(CookieParser());
    let sessionMiddleware = Session({
        secret: 'secret',
        store: sessionStore,
        saveUninitialized: true,
    });
    app.use(sessionMiddleware);
    app.use(BodyParser());
    
    app.use(Passport.initialize());
    app.use(Passport.session());

    require('./app/routes')(app, Passport);

    //app.use(redirectSSL.create({ redirectPort: 1337 }))

    app.use(nuxt.render);

    server.listen(port, host);

    console.log("Listening on port " + port);

}

start();