import ReactDOM from 'react-dom';
import ConcluirTarefa from './ConcluirTarefas';

describe('Teste do componente concluir tarefas', () => {

  it('Deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ConcluirTarefa />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
