const express = require('express');
// const validate = require('express-validation');
const controller = require('./khobor.controller');
// const {
//   authorize,
//   // ADMIN,
//   // LOGGED_USER,
// } = require('api/middlewares/auth');
// const {
  // listUsers,
  // createUser,
  // replaceUser,
  // updateUser,
// } = require('../../validations/user.validation');

const router = express.Router();

/**
 * Load user when API with userId route parameter is hit
 */
// router.param('userId', controller.load);

// router
//   .route('/')
//   // .get(authorize(ADMIN), validate(listUsers), controller.list)

//   // .post(authorize(), validate(createUser), controller.create);
//   .post(authorize(), controller.create);

router
  .route('/')
  .get(controller.get);
  // .get(authorize(false), controller.list);

router
  .route('/user/:username')
  .get(controller.getByUser)
//   // .put(authorize(LOGGED_USER), validate(replaceUser), controller.replace)
//   // .patch(authorize(LOGGED_USER), validate(updateUser), controller.update)
//   // .delete(authorize(LOGGED_USER), controller.remove);
//   .patch(authorize(), controller.update)
//   .delete(authorize(), controller.remove);


module.exports = router;
