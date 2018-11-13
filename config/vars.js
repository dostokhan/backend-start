const path = require('path');
const dotenv = require('dotenv');

dotenv.load({ path: path.join(__dirname, '../.env') });


module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  // fbClientId: process.env.FACEBOOK_CLIENTID,
  // fbClientSecret: process.env.FACEBOOK_CLIENTSECRET,
  corsOrigin: process.env.CORS_ORIGIN,
  // debuggers: process.env.DEBUG.split(' '),

  dbUser: process.env.MONGODB_USERNAME,
  dbPass: process.env.MONGODB_PASSWORD,
  dbName: process.env.MONGODB_DATABASE,
};
