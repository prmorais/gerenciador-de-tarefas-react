import { fireEvent, render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import CadastrarTarefas from './CadastrarTarefas';

describe('Teste do componente de cadastro de tarefas', () => {

  it('Deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CadastrarTarefas />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Deve cadastrar uma nova tarefa', () => {
    const { getByTestId } = render(<CadastrarTarefas />);
    fireEvent.change(getByTestId('txt-tarefa'), { target: { value: 'Testar componente' } });
    fireEvent.click(getByTestId('btn-cadastrar'));
    expect(getByTestId('modal')).toHaveTextContent('sucesso');
    expect(getByTestId('modal')).toHaveTextContent('Tarefa adicionada com sucesso!');
  });
});
