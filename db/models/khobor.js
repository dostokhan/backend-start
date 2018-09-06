'use strict';
module.exports = (sequelize, DataTypes) => {
  var Khobor = sequelize.define('Khobor', {
    link: DataTypes.STRING,
    domain: DataTypes.STRING
  }, {});
  Khobor.associate = function(models) {
    // associations can be defined here
    Khobor.belongsTo(models.User);
  };
  return Khobor;
};
