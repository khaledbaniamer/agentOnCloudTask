'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
      firstName: 'khaled',
      lastName: 'bani amer',
      email: 'khaled@mail.com',
      password: '123',
      isLogin: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  
  ]);
  },


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
