const { hashPasswordSync } = require('api/auth/auth.util');

const users = [{
  username: 'fullstack',
  password: 'fullstack',
  email: 'contact@fullstack',
}];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      users.map(user => ({
        username: user.username,
        password: hashPasswordSync(user.password),
        email: user.email,
      })),
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
