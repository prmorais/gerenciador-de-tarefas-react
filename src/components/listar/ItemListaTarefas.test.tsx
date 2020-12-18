import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Tarefa from '../../models/Tarefa.model';
import ItemListaTarefas from './ItemListaTarefas';


describe('Teste do componente que exibe um item da listagem de tarefas', () => {

  const nomeTarefa = 'Tarefa';
  const tarefa = new Tarefa(1, nomeTarefa, false);
  const tarefaConcluida = new Tarefa(1, nomeTarefa, true);

  it('Deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ItemListaTarefas arrayTarefas={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Deve exibir a tarefa', () => {
    const { getByTestId } = render(
      <table>
        <tbody>
          <ItemListaTarefas arrayTarefas={[tarefa]} />
        </tbody>
      </table>,
    );
    expect(getByTestId('nome-tarefa')).toHaveTextContent(nomeTarefa);
  });

  it('Deve exibir uma tarefa concluída', () => {
    const { getByTestId } = render(
      <table>
        <tbody>
          <ItemListaTarefas arrayTarefas={[tarefaConcluida]} />
        </tbody>
      </table>,
    );
    expect(getByTestId('nome-tarefa')).toHaveStyle('text-decoration: line-through');
  });
});
