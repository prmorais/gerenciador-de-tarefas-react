import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import GerenciadorTarefas from './GerenciadorTarefas';
import { GlobalProvider } from './context/GlobalState';

ReactDOM.render(
  <GlobalProvider>
    <GerenciadorTarefas />
  </GlobalProvider>,
  document.getElementById('root'),
);
