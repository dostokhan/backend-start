const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {
  debugError,
} = require('helpers/debugger');

const SALT_ROUNDS = 5;

const {
  jwtSecret,
} = require('config/vars');

const getSignedToken = auth =>
  jwt.sign(
    auth,
    jwtSecret,
    {
      expiresIn: '6h',
    },
  );

const hashPasswordSync = password =>
  bcrypt.hashSync(password, SALT_ROUNDS);

const hashPassword = async password => {
  try {
    var hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    return hashedPassword;
  } catch(error) {
    debugError(error);
    return null;
  }
};

module.exports = {
  getSignedToken,
  hashPasswordSync,
  hashPassword,
};

