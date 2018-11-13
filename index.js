const express = require('express');
const server = express();
const {
  env,
  port,
} = require('config/vars');

// const {
//   debugInit,
// } = require('helpers/debugger');
/**
 * Express configuration.
 */
// const server = require('config/express');


server.listen(port, () => {
  console.log('env' + env);
  console.log('listeningo on ' + port);
  // debugInit('NODE_ENV', env);
  // debugInit('we are ready :)');
  // console.warn('we are ready :)');
});
