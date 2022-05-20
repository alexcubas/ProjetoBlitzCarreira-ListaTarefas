import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ApplicationContext from '../applicationContext';

function ApplicationProvider({ children }) {
  const [tarefas, setTarefas] = useState([]);

  const context = useMemo(() => ({
    tarefas,
    setTarefas,
  }), [tarefas]);

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
