const mockTeam = [
	{
		"id": 1,
		"titulo": "sequelize",
		"descricao": "fazer o sequelize",
		"status": "pendente",
		"createdAt": "2022-05-19T02:55:45.000Z",
		"updatedAt": "2022-05-19T02:55:45.000Z"
	},
	{
		"id": 2,
		"titulo": "teste",
		"descricao": "fazer testes E2E",
		"status": "em andamento",
		"createdAt": "2022-05-19T02:55:45.000Z",
		"updatedAt": "2022-05-19T02:55:45.000Z"
	}
]

const mockTeamAtualizado = [
	{
		"id": 1,
		"titulo": "sequelize",
		"descricao": "fazer o sequelize",
		"status": "pendente",
		"createdAt": "2022-05-19T02:55:45.000Z",
		"updatedAt": "2022-05-19T02:55:45.000Z"
	},
	{
		"id": 2,
		"titulo": "teste",
		"descricao": "fazer os testes e depois front",
		"status": "em andamento",
		"createdAt": "2022-05-19T02:55:45.000Z",
		"updatedAt": "2022-05-19T02:55:45.000Z"
	}
]

const mockCreate = {
	"status": "Pendente",
	"id": 3,
	"titulo": "front",
	"descricao": "fazer o front com react",
	"updatedAt": "2022-05-19T16:04:09.026Z",
	"createdAt": "2022-05-19T16:04:09.026Z"
}

const mockDelete = [
	{
		"id": 1,
		"titulo": "sequelize",
		"descricao": "fazer o sequelize",
		"status": "pendente",
		"createdAt": "2022-05-19T15:59:33.000Z",
		"updatedAt": "2022-05-19T15:59:33.000Z"
	}
]

export {
  mockTeam,
	mockTeamAtualizado,
	mockCreate,
	mockDelete
}