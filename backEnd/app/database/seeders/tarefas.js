module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('tarefas', [
      {
        titulo: 'sequelize',
        descricao: 'fazer o sequelize',
        status: 'pendente',
      },
      {
        titulo: 'chorar',
        descricao: 'chorar mt',
        status: 'em andamento',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('tarefas', null, {});
  },
};
