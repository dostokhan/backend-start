const httpStatus = require('http-status');
const User = require('db/models/user');
const {
  debugApi,
  debugError
} = require('helpers/debugger');
const {
  getSignedToken,
  comparePassword,
} = require('./auth.util');

exports.signin = async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const remember = Boolean(req.body.remember);
  debugApi('SIGNIN ');
  try {
    const user = await User.findOne({ username }).populate('role');

    if (!user) {
      debugApi('user not found');
      return res.status(httpStatus.NOT_FOUND).send({ msg: 'Failed' });
    }

    const passwordMatch = await comparePassword(password, user.password);
    debugApi(`login: ${user.name}`);
    debugApi(`remember me: ${remember}`);

    if (passwordMatch) {
      const token = getSignedToken(user, remember);
      return res.status(httpStatus.OK).send({ token });
    } else {
      debugError(`passwordMatch: ${passwordMatch}`);
      return res.status(httpStatus.NOT_FOUND).send({ msg: 'Failed' });
    }
  } catch (err) {
    debugError(err);
    return res.status(httpStatus.NOT_FOUND).send({ msg: 'Failed' });
  }
};


exports.signup = (req, res, next) => {

}
