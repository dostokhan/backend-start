const path = require('path');
const dotenv = require('dotenv');

dotenv.load({ path: path.join(__dirname, '../.env') });


module.exports = {
  root: path.join(__dirname, '../../'),
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  corsOrigin: process.env.CORS_ORIGIN,

  dbHost: process.env.CONTAINER_MONGO,
  dbPort: process.env.MONGODB_PORT_NUMBER,
  dbUser: process.env.MONGODB_USERNAME,
  dbPass: process.env.MONGODB_PASSWORD,
  dbName: process.env.MONGODB_DATABASE,
};
