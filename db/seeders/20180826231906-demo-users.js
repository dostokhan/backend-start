'use strict';
const users = [{
  username: 'fullstack',
  password: 'fullstack',
  email: 'contact@fullstack',
}];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      users,
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
