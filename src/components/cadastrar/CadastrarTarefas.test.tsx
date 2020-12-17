import ReactDOM from 'react-dom';
import CadastrarTarefas from './CadastrarTarefas';

describe('Teste do componente de cadastro de tarefas', () => {

  it('Deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CadastrarTarefas />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
