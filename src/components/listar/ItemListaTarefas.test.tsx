import ReactDOM from 'react-dom';
import ItemListaTarefas from './ItemListaTarefas';


describe('Teste do componente item da lista de tarefas', () => {

  it('Deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ItemListaTarefas />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
