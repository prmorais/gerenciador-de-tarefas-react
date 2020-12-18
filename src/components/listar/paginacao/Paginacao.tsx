type TPaginacao = {
  totalItems: number,
  itemsPorPagina: number,
  paginaAtual: number,
  mudarPagina: () => void,
}
const Paginacao: React.FC<TPaginacao> = (props) => {


  return (
    <h1>Paginacao</h1>
  );
};

export default Paginacao;
