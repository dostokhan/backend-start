const express = require('express');
const controller = require('./auth.controller');

const router = express.Router();


router
  .route('/signin')
  .get(controller.signin);


// router
//   .route('/signup')
//   .post(controller.signup);

// router
//   .route('/signout')
//   .post(controller.signout);


module.exports = router;
