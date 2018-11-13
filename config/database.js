const mongoose = require('mongoose');

const {
  debugDb,
} = require('helpers/debugger');
const {
  nodeEnv,
  dbHost,
  dbName,
  dbUser,
  dbPass,
  dbPort,
} = require('config/vars');

// const connectionString = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;
const connectionString = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;
const connectionOption = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: true, // Don't build indexes
  reconnectTries: 50, // Number.MAX_VALUE means Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  // bufferMaxEntries: 0, / if not connected, return errors immediately rather than waiting to reconnect
  connectTimeoutMS: 50000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 10000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};
mongoose.useNewUrlParser = true;

const connectWithRetry = () => {
  debugDb(`connecting: ${connectionString}`);
  mongoose.connect(connectionString, connectionOption);
};

connectWithRetry();

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
const database = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
database.on('error', (err) => {
  debugDb('Failed to connect to mongo on startup - retrying in 5 sec');
  setTimeout(connectWithRetry, 5000);
});
database.on('disconnected', () => {
  debugDb('MongoDB disconnected :(');
});

database.on('connected', () => {
  debugDb('MongoDB connected :)');
});


module.exports = database;
