# t

> You have to import the .sql file and edit the database server details in ../config/database.ts and server.ts

The redirects on login/register are disabled so you can see what happens. After registering an account, remove the session manually in the database then try to login.
After logging in, do not navigate away from the page. Check the database session, you will see the cookie there. However, after you navigate away from the page, it will disappear.

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:1337
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```
