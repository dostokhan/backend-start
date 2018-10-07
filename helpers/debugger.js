// lib/debuggers.js
const debug = require('debug');

const init = debug('app:init');
const db = debug('app:database');


const log = (key, ...items) => {
  console.log(key);
  if(typeof DEBUG !== 'undefined' && DEBUG.includes(key)){
    switch(key) {
      case 'app:init':
        init(...items);
        console.log(items);
        break;
      case 'app:database':
        init(...items);
        break;
      default:
        console.log(...items);
    }
  }
};

const makeLogger = fixedKey => (...items) => log(fixedKey, ...items);

module.exports = makeLogger;

