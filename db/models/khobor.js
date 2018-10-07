const mongoose = require('mongoose');


const KhoborSchema = new mongoose.Schema({
  link: String,
  domain: String,
  // datapoints: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Datapoint' }],
});

const Khobor = mongoose.model('Khobor', KhoborSchema);

module.exports = Khobor;


// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   var Khobor = sequelize.define('Khobor', {
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV1,
//       primaryKey: true
//     },
//     link: DataTypes.STRING,
//     domain: DataTypes.STRING
//   }, {});
//   Khobor.associate = function(models) {
//     // associations can be defined here
//     Khobor.belongsTo(models.User);
//   };
//   return Khobor;
// };
