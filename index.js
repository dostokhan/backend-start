const {
  env,
  port,
} = require('config/vars');

const {
  debugInit,
} = require('helpers/debugger');
/**
 * Express configuration.
 */
const server = require('config/express');


server.listen(port, () => {
  debugInit('NODE_ENV', env);
  debugInit('we are ready :)');
  console.warn('we are ready :)');
});
