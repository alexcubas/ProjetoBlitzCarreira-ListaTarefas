import React, { useContext, useEffect } from 'react';

import axios from 'axios';
import ApplicationContext from '../context/applicationContext';

let persons = [];
export default function ListaTarefas() {
  const { tarefas, setTarefas } = useContext(ApplicationContext);

  function requisição() {
    axios.get('http://localhost:3010/tarefas')
      .then((res) => {
        persons = res.data;
        setTarefas(persons);
      });
  }

  function deletaTarefa(id) {
    console.log('ta funfando');
    axios.delete(`http://localhost:3010/tarefas/${id}`)
      .then(() => {
        const tarefa = tarefas.filter((task) => task.id !== id);
        setTarefas(tarefa);
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
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
}
