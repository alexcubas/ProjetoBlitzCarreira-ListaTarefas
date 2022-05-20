import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ApplicationContext from '../applicationContext';

function ApplicationProvider({ children }) {
  const [tarefas, setTarefas] = useState([]);
  const [status, setStatus] = useState('em andamento');
  const [novaTarefa, setNovaTarefa] = useState({ titulo: '', descricao: '' });

  const context = useMemo(() => ({
    tarefas,
    setTarefas,
    status,
    setStatus,
    novaTarefa,
    setNovaTarefa,
  }), [tarefas, status, novaTarefa]);

  return (
    <ApplicationContext.Provider value={context}>
      {children}
    </ApplicationContext.Provider>
  );
}

ApplicationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApplicationProvider;
