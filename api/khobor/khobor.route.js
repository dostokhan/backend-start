const express = require('express');
// const validate = require('express-validation');
const router = express.Router();
const controller = require('./khobor.controller');

// READ OPERATIONS
// Get Product List
router
  .route('/')
  .get(controller.list);

// router
//   .route('/search')
//   .get(controller.search);

// // Get Product List
// router
//   .route('/:id')
//   .get(controller.get);


// // WRITE OPERATIONS
// Create Product
// router
//   .route('/')
//   .post(isAdmin, controller.create);

// // // Update One Product
// router
//   .route('/:id')
//   .patch(isAdmin, controller.update);

// // // Delete One Product
// router
//   .route('/:id')
//   .delete(isAdmin, controller.remove);





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


/**
 * Load user when API with userId route parameter is hit
 */
// router.param('userId', controller.load);

// router
//   .route('/')
//   // .get(authorize(ADMIN), validate(listUsers), controller.list)

//   // .post(authorize(), validate(createUser), controller.create);
//   .post(authorize(), controller.create);

// router
//   .route('/user/:username')
//   .get(controller.getByUser)
//   // .put(authorize(LOGGED_USER), validate(replaceUser), controller.replace)
//   // .patch(authorize(LOGGED_USER), validate(updateUser), controller.update)
//   // .delete(authorize(LOGGED_USER), controller.remove);
//   .patch(authorize(), controller.update)
//   .delete(authorize(), controller.remove);


module.exports = router;
