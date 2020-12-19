import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';
import { render } from '@testing-library/react';
// import { fireEvent, render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Paginacao from './Paginacao';


describe('Teste do componente de paginação', () => {

  it('Deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Paginacao
        totalItems={15}
        itemsPorPagina={3}
        paginaAtual={1}
        mudarPagina={() => false}
      />, div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Deve exibir a paginação contendo 3 páginas', () => {
    const { getByTestId } = render(
      <Paginacao
        totalItems={15}
        itemsPorPagina={5}
        paginaAtual={1}
        mudarPagina={() => false}
      />,
    );
    const paginacao = getByTestId('paginacao');
    expect(paginacao).toHaveTextContent('1');
    expect(paginacao).toHaveTextContent('2');
    expect(paginacao).toHaveTextContent('3');
  });
});
