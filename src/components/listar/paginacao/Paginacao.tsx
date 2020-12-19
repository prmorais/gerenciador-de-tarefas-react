import { Pagination } from 'react-bootstrap';

type TPaginacao = {
  totalItems: number,
  itemsPorPagina: number,
  paginaAtual: number,
  mudarPagina: (f: number) => void,
}
const Paginacao: React.FC<TPaginacao> = (props) => {

  const gerarPrimeiroItem = () => {
    return (
      <Pagination.First
        key="pageFirst"
        onClick={() => props.mudarPagina(1)}
        disabled={props.paginaAtual === 1}
      />
    );
  };

  const gerarItemAnterior = () => {
    return (
      <Pagination.Prev
        key="pagePrev"
        onClick={() => props.mudarPagina(props.paginaAtual - 1)}
        disabled={props.paginaAtual === 1}
      />
    );
  };

  const gerarItemNumerico = (pagina: number) => {
    return (
      <Pagination.Item
        key={pagina}
        active={pagina === props.paginaAtual}
        onClick={() => props.mudarPagina(pagina)}
      >
        {pagina}
      </Pagination.Item>
    );
  };

  const gerarProximoItem = (numPaginas: number) => {
    return (
      <Pagination.Next
        key="pageNext"
        onClick={() => props.mudarPagina(props.paginaAtual + 1)}
        disabled={props.paginaAtual === numPaginas}
      />
    );
  };

  const gerarUltimoItem = (numPaginas: number) => {
    return (
      <Pagination.Last
        key="pageLast"
        onClick={() => props.mudarPagina(numPaginas)}
        disabled={props.paginaAtual === numPaginas}
      />
    );
  };

  const obterPaginacao = () => {
    let items: JSX.Element[] = [];
    const numPaginas = Math.ceil(props.totalItems / props.itemsPorPagina);

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
    <Pagination data-testid="paginacao">
      { obterPaginacao()}
    </Pagination>
  );
};

export default Paginacao;
