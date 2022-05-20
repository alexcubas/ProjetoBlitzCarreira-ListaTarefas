import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tarefas from './pages/tarefas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tarefas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
