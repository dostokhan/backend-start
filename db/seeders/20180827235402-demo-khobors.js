'use strict';
const khobors = [
  {
    domain: 'prothomalo.com',
    link: 'https://www.prothomalo.com/bangladesh/article/1553953/%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A6%BF%E0%A6%B0-%E0%A6%AA%E0%A6%BF%E0%A6%A4%E0%A6%BE-%E0%A6%B9%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%BE-%E0%A6%B7%E0%A7%9C%E0%A6%AF%E0%A6%A8%E0%A7%8D%E0%A6%A4%E0%A7%8D%E0%A6%B0%E0%A7%87-%E0%A6%96%E0%A6%BE%E0%A6%B2%E0%A7%87%E0%A6%A6%E0%A6%BE%E0%A6%93-%E0%A6%9C%E0%A7%9C%E0%A6%BF%E0%A6%A4',
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Khobors',
      khobors,
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Khobors', null, {});
  }
};
