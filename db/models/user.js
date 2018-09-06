'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    timestamps: true,
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Khobor);
  };
  return User;
};
