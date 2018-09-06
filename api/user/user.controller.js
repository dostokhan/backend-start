const httpStatus = require('http-status');
// const { omit } = require('lodash');
const User = require('db/models').User;
const Khobor = require('db/models').Khobor;


/**
 * Get user
 * @public
 */

// exports.get = async (req, res) => {
exports.get = (req, res) => {
  const username = req.params.username;
  User.findOne({
    where: { username },
    attributes: ['id', 'username', 'email'],
    include: [{ model: Khobor, required: true }],
  })
  .then((user) => {
    res.status(httpStatus.OK).json({ user });
  })
  .catch((err) => {
    console.log(err);
    res.status(httpStatus.NOT_FOUND).end();
  });
};


/**
 * Create new note
 * @private
 */
// exports.create = async (req, res, next) => {
//   try {
//     const { note } = req.body;
//     console.info('CREATE NOTE');
//     // console.log(note);
//     const noteObj = await Note.create(note);
//     // console.log('noteObj');
//     // console.log(noteObj);
//     if (noteObj) {
//       console.log(noteObj);
//       res.status(httpStatus.CREATED).json(noteObj);
//     }
//   } catch (error) {
//     // res.status(httpStatus.BAD_REQUEST).end(error);
//     next(error);
//   }
// };

/**
 * Update existing note
 * @public
 */
// exports.update = (req, res, next) => {
//   const note = req.body.note;
//   note.id = req.params.id;

//   console.log(note);
//   console.log(`note: ${note.id}`);

//   Note.update(note)
//     .then((updatedNote) => {
//       console.log('UPDATED');
//       console.log(updatedNote);
//       res.json(updatedNote);
//     })
//     .catch(e => next(e));
// };

/**
 * Get list
 * @public
 */
exports.list = async (req, res) => {
  return User.findAll()
    .then(users => res.status(200).send(users))
    .catch(error => res.status(400).send(error));
};

// exports.list = async (req, res) => {
//   try {
//     console.log('LIST ALL KHOBORS');
//     const khoborList = await User.findAll();
//     console.log('ran query');
//     console.log(KhoborList);

//     res.status(httpStatus.OK).send(khoborList);

//     // const notes = await Note.list(req.auth);
//     // const transformedUsers = users.map(user => user.transform());
//     // res.json({ hola: 'amigo'});
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

/**
 * Delete user
 * @public
 */
// exports.remove = (req, res, next) => {
//   console.log(`Delete Note: ${req.params.id}`);

//   Note.remove(req.params.id, req.body.title)
//     .then(() => res.status(httpStatus.OK).end())
//     .catch(e => next(e));

//   res.status(httpStatus.NO_CONTENT).end();
// };
