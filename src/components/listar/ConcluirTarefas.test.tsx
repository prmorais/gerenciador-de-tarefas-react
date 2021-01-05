import { fireEvent, render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Tarefa from '../../models/Tarefa.model';
import ConcluirTarefa from './ConcluirTarefas';

describe('Teste do componente concluir tarefas', () => {

  // const nomeTarefa = 'Tarefa teste';
  // const tarefa = new Tarefa(1, nomeTarefa, false);

  // it('Deve renderizar o componente sem erros', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(
  //     <ConcluirTarefa
  //       tarefa={tarefa}
  //       dispatch={() => false}
  //     />, div,
  //   );
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  // it('Deve exibir a modal', () => {
  //   const { getByTestId } = render(
  //     <ConcluirTarefa
  //       tarefa={tarefa}
  //       setTarefas={() => false}
  //     />,
  //   );
  //   fireEvent.click(getByTestId('btn-abrir-modal'));
  //   expect(getByTestId('modal')).toHaveTextContent(nomeTarefa);
  // });

  // it('Deve concluir uma tarefa', () => {
  //   localStorage['tarefas'] = JSON.stringify([tarefa]);

  //   const { getByTestId } = render(
  //     <ConcluirTarefa
  //       tarefa={tarefa}
  //       setTarefas={() => false}
  //     />,
  //   );
  //   fireEvent.click(getByTestId('btn-abrir-modal'));
  //   fireEvent.click(getByTestId('btn-concluir-tarefa'));

  //   const tarefasDb = JSON.parse(localStorage['tarefas']);
  //   expect(tarefasDb[0].concluida).toBeTruthy();
  // });
});
