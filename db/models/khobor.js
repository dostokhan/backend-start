'use strict';
module.exports = (sequelize, DataTypes) => {
  var Khobor = sequelize.define('Khobor', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    link: DataTypes.STRING,
    domain: DataTypes.STRING
  }, {});
  Khobor.associate = function(models) {
    // associations can be defined here
    Khobor.belongsTo(models.User);
  };
  return Khobor;
};
