const bcrypt = require('bcrypt');
const httpStatus = require('http-status');
const passport = require('passport');
const User = require('db/models/user');

const {
  debugApi,
} = require('helpers/debugger');
const {
  getSignedToken,
  hashPassword
} = require('./auth.util');


exports.signup = async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  debugApi(`signUp user: ${username}`);

  const hashedPassword = await hashPassword(password);
  debugApi('hashed password: %s', hashedPassword);
  const newUser = new User({
    username,
    password: hashedPassword,
  });


  newUser.save()
    .then((user) => {
      const token = getSignedToken({ id: user.id, username: user.username });
      res.status(httpStatus.OK).send({ token });
    })
    .catch((err) => {
      debugApi('Failed', err);
      next('Something went wrong');
      // res.status(httpStatus.NOT_FOUND).send({ msg: 'Failed' });
    });
};



exports.signin = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  debugApi(`signIn user: ${username}`);

  // User.findById("5bba6def895ae10123f586be")
  User.findOne({ username })
    .then((user) => {
      if (!user) {
        debugApi('NO USER');
        next(null, false);
      } else {

        bcrypt.compare(password, user.password, (err, check) => {
          if (err) {
            debugApi('PASSWORD WRONG');
            next(null, false);
          } else if (check) {
            const token = getSignedToken({ id: user.id, username: user.username });
            res.status(httpStatus.OK).send({ token });
          } else {
            debugApi('HASH FAILED');
            next(null, false);
          }
        });
      }

      // return next(null, user);
    });

  // res.status(httpStatus.OK).json({ token: 'validtoken' });

  // passport.authenticate('jwt', { session: false }, (req, res) => {
  //   console.log(re);

  //   //   res.status(httpStatus.BAD_REQUEST, 'User Not Authenticated').end();
  //   // } else {
  //   const token = getSignedToken({ id: user.id });
  //   res.status(httpStatus.OK).json({ token });
  //   // }

  // });
};

// const {
//   fbUserId,
// } = require('../../config/vars');

/**
 * Authenticate User
 * @public
 */

// exports.authenticate = async (req, res, next) => {
//   console.log(`access_token: ${req.body.access_token}`);

//   passport.authenticate('facebook-token', { session: false }, (user) => {
//     console.log(user);

//     const userIds = fbUserId
//       ? fbUserId.split(',')
//       : [];
//     console.log('valid fb users');
//     console.log(userIds);
//     console.log(`authorize this fb user: ${user.id}`);

//     if (!user || !userIds.includes(user.id)) {
//       res.status(httpStatus.BAD_REQUEST, 'User Not Authenticated').end();
//     } else {
//       const token = getSignedToken({ id: user.id });
//       res.status(httpStatus.OK).json({ token });
//     }
//   })(req, res, next);
// };
