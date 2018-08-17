module.exports = (sequelize, DataTypes) => {
  const Khobor = sequelize.define('Khobor', {
    link: DataTypes.STRING,
  }, {});
  // Khobor.associate = (models) => {
  //   // associations can be defined here
  // };
  return Khobor;
};
