const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  // datapoints: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Datapoint' }],
});

const User = mongoose.model('User', UserSchema);

exports.User = User;




// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   var User = sequelize.define('User', {
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV1,
//       primaryKey: true
//     },
//     username: DataTypes.STRING,
//     password: DataTypes.STRING,
//     email: DataTypes.STRING
//   }, {
//     timestamps: true,
//   });
//   User.associate = function(models) {
//     // associations can be defined here
//     User.hasMany(models.Khobor);
//   };
//   return User;
// };
