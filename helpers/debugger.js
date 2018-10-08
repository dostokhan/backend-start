const debug = require('debug');

const debugInit = debug('app:init');
const debugDb = debug('app:database');
const debugApi = debug('app:api');
const debugError = debug('app:error');
const debugCommon = debug('app:common');


module.exports = {
  debugInit,
  debugDb,
  debugApi,
  debugError,
  debugCommon,
};

// const {
//   debuggers,
// } = require('config/vars');

// const log = (key, ...items) => {
//   if(debuggers.includes(key)){
//     // console.log(items);
//     switch(key) {
//       case 'app:init':
//         init(...items);
//         break;
//       case 'app:database':
//         db(...items);
//         break;
//       case 'app:api':
//         api(...items);
//         break;
//       case 'app:error':
//         error(...items);
//         break;
//       default:
//         common(...items);
//     }
//   }
// };

// const makeLogger = fixedKey => (...items) => log(fixedKey, ...items);

// module.exports = makeLogger;

