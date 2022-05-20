import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { mockCreate, mockDelete, mockTeam, mockTeamAtualizado } from './mock/mockTarefas';

import { app } from '../app';

import { Response } from 'superagent';
import Tarefas from '../database/models/tarefas';

chai.use(chaiHttp);

const { expect } = chai;

describe('testa a camada de getTarefas', () => {
  const response = mockTeam
  let chaiHttpResponse: Response;
  
  before(async () => {
    sinon
      .stub(Tarefas, "findAll")
      .resolves(response as unknown as Tarefas[]);
  });

  after(()=>{
    (Tarefas.findAll as sinon.SinonStub).restore();
  })

  it('testa se retorna todas as tarefas', async () => {
    chaiHttpResponse = await chai.request(app).get('/tarefas')

    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.deep.equal(response);
  });
});

describe('testa a camada Update Tarefas', () => {
  const response = mockTeamAtualizado
  let chaiHttpResponse: Response;
  let chaiHttpResponseUpdate: Response;

  before(async () => {
    sinon
      .stub(Tarefas, "update")
      .resolves();

    sinon
      .stub(Tarefas, "findAll")
      .resolves(response as unknown as Tarefas[]);
  });

  after(()=>{
    (Tarefas.update as sinon.SinonStub).restore();
    (Tarefas.findAll as sinon.SinonStub).restore();
  })

  it('testa se retorna atualiza a tarefa especifica', async () => {
    chaiHttpResponseUpdate = await chai.request(app).put('/tarefas/2').send({
      "descricao": "fazer os testes e depois front"
    })

    chaiHttpResponse = await chai.request(app).get('/tarefas')

    expect(chaiHttpResponseUpdate).to.have.status(200);
    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.deep.equal(response);
  });
});

describe('testa a camada de Create Tarefa', () => {
  const response = mockCreate
  let chaiHttpResponseCreate: Response;
  
  before(async () => {
    sinon
      .stub(Tarefas, "create")
      .resolves(response as unknown as Tarefas);
      sinon
      .stub(Tarefas, "findAll")
      .resolves(response as unknown as Tarefas[]);
  });

  after(()=>{
    (Tarefas.create as sinon.SinonStub).restore();
  })

  it('testa se cria uma nova tarefa', async () => {
    chaiHttpResponseCreate = await chai.request(app).post('/tarefas').send(
      {
        "titulo": "front",
        "descricao": "fazer o front com react"
      })

    expect(chaiHttpResponseCreate).to.have.status(201);
    expect(chaiHttpResponseCreate.body).to.deep.equal(response);
  });
});

describe('testa a camada de delete Tarefa', () => {
  const response = mockDelete
  const responseSeq = 1
  let chaiHttpResponseDelete: Response;

  before(async () => {
    sinon
      .stub(Tarefas, "destroy")
      .resolves(responseSeq as number);
  });

  after(()=>{
    (Tarefas.destroy as sinon.SinonStub).restore();
  })

  it('testa se deleta uma tarefa', async () => {
    chaiHttpResponseDelete = await chai.request(app).delete('/tarefas/2')
    
    expect(chaiHttpResponseDelete).to.have.status(204);
  });
});