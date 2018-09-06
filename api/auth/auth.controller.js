const httpStatus = require('http-status');
const passport = require('passport');
const User = require('db/models').User;

const {
  getSignedToken,
} = require('./auth.util');





exports.signin = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(`username: ${username}`);
  console.log(`password: ${password}`);

  User.findOne({
    where: { username },
    attributes: ['id', 'username', 'email', 'password'],
    }).then((user) => {
      if (!user || (user.password != password)) {
        // return done(null, false);
        res.status(httpStatus.NOT_FOUND).send({ msg: 'Failed' });
      }
      const token = getSignedToken({ id: user.id, username: user.username });
      res.status(httpStatus.OK).send({ token });

      // return next(null, user);
    });

  // // res.status(httpStatus.OK).json({ token: 'validtoken' });

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
