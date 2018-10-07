const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const { jwtSecret } = require('./vars');
// const User = require('db/models').User;

const jwtOptions = {
  secretOrKey: jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('mj-token'),
};

const jwtVerify = async (payload, done) => {
  try {
    console.log('---------------------');
    console.log('JWT VERIFY');
    console.log('---------------------');
    console.log(payload);
    done(null, payload);
    // const user = await User.findById(payload.sub);
    // if (user) return done(null, user);
    // return done(null, false);
  } catch (error) {
    return done(error, false);
  }
};
exports.jwt = new JwtStrategy(jwtOptions, jwtVerify);

// exports.local = new LocalStrategy(
//   {
//     session: false,
//   },
//   function(username, password, done) {
//     console.log('find user with username' + username);

//     return done(null, username);

//     // User.findOne({
//     //   where: { username },
//     //   attributes: ['id', 'username', 'email'],
//     //   }).then((user) => {
//     //     if (!user) {
//     //       return done(null, false);
//     //     }

//     //     if (user.password != password) {
//     //       return done(null, false);
//     //     }
//     //     return done(null, user);
//     //   });
//   }
// );
// passport.use(new FacebookTokenStrategy({
//   clientID: fbClientId,
//   clientSecret: fbClientSecret,
//   enableProof: true,
// },
// (accessToken, refreshToken, profile, done) => {
//   return done(profile);
// }));

// exports.isAuthorized = (req, res, next) => {
//   const provider = req.path.split('/').slice(-1)[0];
//   const token = req.user.tokens.find(t => t.kind === provider);
//   if (token) {
//     next();
//   } else {
//     res.redirect(`/auth/${provider}`);
//   }
// };

