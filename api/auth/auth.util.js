const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {
  debugError,
} = require('helpers/debugger');

const {
  jwtSecret,
} = require('config/vars');

const SALT_ROUNDS = 10;
const DEFAULT_EXPIRE = 2 * 60 * 60;
const REMEMBER_ME_EXPIRE = 7 * 24 * 60 * 60;

const getSignedToken = (user, remember) =>
  jwt.sign(
    {
      name: user.name,
      username: user.username,
      role: user.role.name,
    },
    jwtSecret,
    {
      expiresIn: remember ?  REMEMBER_ME_EXPIRE : DEFAULT_EXPIRE,
    },
  );

const hashPassword = async (password) => {
  try {
    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    return hash;
  } catch (err) {
    debugError(err);
    throw Error(err);
    return false;
  }
};

const comparePassword = async (password, hash) => {
  try {
    const equal = await bcrypt.compare(password, hash);
    return equal;
  } catch (err) {
    debugError(err);
    throw Error(err);
    return false;
  }
};

module.exports = {
  getSignedToken,
  hashPassword,
  comparePassword,
};

