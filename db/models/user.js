const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    min: 4,
    max: 20,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,

  },
  // datapoints: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Datapoint' }],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;




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
