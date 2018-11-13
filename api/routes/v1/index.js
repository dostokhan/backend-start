const express = require('express');

const authRoutes = require('api/auth/auth.route');
// const userRoutes = require('api/user/user.route');
// const khoborRoutes = require('api/khobor/khobor.route');

const router = express.Router();

router.use('/auth', authRoutes);
// router.use('/user', userRoutes);
// router.use('/khobor', khoborRoutes);


module.exports = router;
