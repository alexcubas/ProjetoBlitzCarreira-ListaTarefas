import React, { useContext, useEffect } from 'react';

import axios from 'axios';
import ApplicationContext from '../context/applicationContext';

let persons = [];
export default function ListaTarefas() {
  const {
    tarefas, setTarefas, status, setStatus, novaTarefa, setNovaTarefa,
  } = useContext(ApplicationContext);

  function requisição() {
    axios.get('http://localhost:3010/tarefas')
      .then((res) => {
        persons = res.data;
        setTarefas(persons);
      });
  }

  function deletaTarefa(id) {
    axios.delete(`http://localhost:3010/tarefas/${id}`)
      .then(() => {
        const tarefa = tarefas.filter((task) => task.id !== id);
        setTarefas(tarefa);
      });
  }

  function atualizaStatus(id) {
    const newStatus = { status };
    axios.put(`http://localhost:3010/tarefas/status/${id}`, newStatus)
      .then(() => {
        requisição();
      });
  }

  function criaNovaTarefa() {
    const novaTarefinha = novaTarefa;
    axios.post('http://localhost:3010/tarefas', novaTarefinha)
      .then(() => {
        requisição();
      });
  }

  useEffect(() => {
    requisição();
  }, []);

  return (
    <div className="container-fluid">
      <div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Titulo</th>
              <th scope="col">descrição</th>
              <th scope="col">data</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            { tarefas.map((tarefa) => (
              <tr key={tarefa.id}>
                <td>{tarefa.titulo}</td>
                <td>{tarefa.descricao}</td>
                <td>{tarefa.createdAt}</td>
                <td>{tarefa.status}</td>
                <td>
                  <button type="button" className="btn btn-primary" onClick={() => deletaTarefa(tarefa.id)}>
                    excluir
                  </button>
                </td>
                <td>
                  <select value={status} onChange={({ target }) => setStatus(target.value)}>
                    <option value="pendente">pendente</option>
                    <option value="em andamento">em andamento</option>
                    <option value="pronto">pronto</option>
                  </select>
                  <button type="button" className="btn btn-primary" onClick={() => atualizaStatus(tarefa.id)}>
                    atualizar
                  </button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
      <div id="app" className="container">
        <div className="card">
          <div className="card-header">Criar Nova Tarefa</div>
          <div className="card-body">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                onChange={({ target }) => {
                  novaTarefa.titulo = target.value;
                  setNovaTarefa(novaTarefa);
                }}
                placeholder="titulo"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                onChange={({ target }) => {
                  novaTarefa.descricao = target.value;
                  setNovaTarefa(novaTarefa);
                }}
                placeholder="descrição"
              />
            </div>
            <button type="button" className="btn btn-sm btn-primary" onClick={() => criaNovaTarefa()}>Criar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
