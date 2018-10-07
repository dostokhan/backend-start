const makeLogger = require('helpers/debugger');
const {
  env,
  port,
} = require('config/vars');

const debugInit = makeLogger('app:init');
/**
 * Express configuration.
 */
const server = require('config/express');


server.listen(port, () => {
  debugInit(env);
  debugInit('we are ready :)');
  // console.warn('we are ready :)');
});
