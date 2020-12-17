import ReactDOM from 'react-dom';
import AtualizarTarefas from './AtualizarTarefas';

describe('Teste do componente de atualização de tarefas', () => {

  it('Deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AtualizarTarefas id={1} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
