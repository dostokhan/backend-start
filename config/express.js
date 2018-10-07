const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const mongoose = require('mongoose');

const {
   errorHandler,
} = require('api/middlewares/error');
const routes = require('api/routes/v1');
const {
  corsOrigin,
  dbUser,
  dbPass,
  dbName,
} = require('config/vars');


// create express server
const server = express();

// enable authentication with passport
server.use(passport.initialize());
// server.use(passport.session());
// configure passport
// require('./passport');
const strategies = require('./passport');
passport.use(strategies.jwt);
// passport.serializeUser(function(user, cb) {
//   cb(null, user.id);
// });
// passport.deserializeUser(function(id, cb) {
//   User.findById(id, function(err, user) {
//     cb(err, user);
//   });
// });

// request logging. dev: console | production: file
server.use(morgan('combined'));


// parse body params and attache them to req.body
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// cookie par
server.use(cookieParser());

// gzip compression
server.use(compression());


// secure apps by setting various HTTP headers
server.use(helmet());

// enable CORS - Cross Origin Resource Sharing
server.use(
  cors({
    origin(origin, cb) {
      const whitelist = corsOrigin
        ? corsOrigin.split(',')
        : [];
      cb(null, whitelist.includes(origin));
    },
    methods: 'GET, POST, PATCH, DELETE',
    // exposeHeaders: ['mj-token'],
    credentials: true,
  })
);


//Set up default mongoose connection
//mongoose.connect('mongodb://username:password@host:port/database');
const dbURI = `mongodb://${dbUser}:${dbPass}@fullstack-mongo:27017/${dbName}`;
console.log(dbURI);
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  auto_reconnect: true,
});
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



server.use('/v1', routes);

server.use(errorHandler);

module.exports = server;

