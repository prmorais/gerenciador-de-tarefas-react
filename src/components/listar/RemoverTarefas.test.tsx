import ReactDOM from 'react-dom';
import RemoverTarefas from './RemoverTarefas';


describe('Teste do componente de listagem de tarefas', () => {

  it('Deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RemoverTarefas />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
