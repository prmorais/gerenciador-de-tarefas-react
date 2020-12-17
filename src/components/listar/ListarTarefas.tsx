import { A } from 'hookrouter';

const ListarTarefas: React.FC = () => {
  return (
    <A href="/cadastrar"
      className="btn btn-success btn-sm"
    >
      Nova tarefa
    </A>
  );
};

export default ListarTarefas;
