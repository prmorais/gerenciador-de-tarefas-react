import { useContext } from 'react';
import { Pagination } from 'react-bootstrap';
import { GlobalContext } from '../../../context/GlobalState';

const Paginacao: React.FC = () => {

  const { state, handleMudarPagina } = useContext(GlobalContext);

  const gerarPrimeiroItem = () => {
    return (
      <Pagination.First
        key="pageFirst"
        onClick={() => handleMudarPagina(1)}
        disabled={state.paginaAtual === 1}
      />
    );
  };

  const gerarItemAnterior = () => {
    return (
      <Pagination.Prev
        key="pagePrev"
        onClick={() => handleMudarPagina(state.paginaAtual - 1)}
        disabled={state.paginaAtual === 1}
      />
    );
  };

  const gerarItemNumerico = (pagina: number) => {
    return (
      <Pagination.Item
        key={pagina}
        active={pagina === state.paginaAtual}
        onClick={() => handleMudarPagina(pagina)}
      >
        {pagina}
      </Pagination.Item>
    );
  };

  const gerarProximoItem = (numPaginas: number) => {
    return (
      <Pagination.Next
        key="pageNext"
        onClick={() => handleMudarPagina(state.paginaAtual + 1)}
        disabled={state.paginaAtual === numPaginas}
      />
    );
  };

  const gerarUltimoItem = (numPaginas: number) => {
    return (
      <Pagination.Last
        key="pageLast"
        onClick={() => handleMudarPagina(numPaginas)}
        disabled={state.paginaAtual === numPaginas}
      />
    );
  };

  const obterPaginacao = () => {
    let items: JSX.Element[] = [];
    const numPaginas = Math.ceil(state.totalItens / state.itensPorPagina);

    items.push(gerarPrimeiroItem());
    items.push(gerarItemAnterior());

    for (let pagina = 1; pagina <= numPaginas; pagina++) {
      items.push(gerarItemNumerico(pagina));
    }

    items.push(gerarProximoItem(numPaginas));
    items.push(gerarUltimoItem(numPaginas));

    return items;
  };

  return (
    <Pagination data-testid="paginacao" hidden={state.tarefas.length === 0}>
      { obterPaginacao()}
    </Pagination>
  );
};

export default Paginacao;
