// import { fireEvent, render } from '@testing-library/react';
// import ReactDOM from 'react-dom';


//describe('Teste do componente de listagem de tarefas', () => {
// const nomeTarefa = 'Tarefa para remover';
// const tarefa = new Tarefa(1, nomeTarefa, false);

// it('Deve renderizar o componente sem erros', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(
//     <RemoverTarefas
//       tarefaProps={tarefa}
//       setTarefas={() => false}
//     />, div,
//   );
//   ReactDOM.unmountComponentAtNode(div);
// });

// it('Deve exibir a modal', () => {
//   const { getByTestId } = render(
//     <RemoverTarefas
//       tarefaProps={tarefa}
//       setTarefas={() => false}
//     />,
//   );
//   fireEvent.click(getByTestId('btn-abrir-modal'));
//   expect(getByTestId('modal')).toHaveTextContent(nomeTarefa);
// });

// it('Deve remover uma tarefa', () => {
//   localStorage['tarefas'] = JSON.stringify([tarefa]);

//   const { getByTestId } = render(
//     <RemoverTarefas
//       tarefaProps={tarefa}
//       setTarefas={() => false}
//     />,
//   );
//   fireEvent.click(getByTestId('btn-abrir-modal'));
//   fireEvent.click(getByTestId('btn-remover-tarefa'));

//   const tarefasDb = JSON.parse(localStorage['tarefas']);
//   expect(tarefasDb.length).toBe(0);
// });
// });
