module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('tarefas', [
      {
        titulo: 'sequelize',
        descricao: 'fazer o sequelize',
        status: 'pendente',
      },
      {
        titulo: 'teste',
        descricao: 'fazer testes E2E',
        status: 'em andamento',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('tarefas', null, {});
  },
};
