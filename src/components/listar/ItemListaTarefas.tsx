import { A } from 'hookrouter';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ConcluirTarefa from './ConcluirTarefas';
import RemoverTarefas from './RemoverTarefas';

type TTarefa = {
  id: number,
  nome: string,
  concluida: boolean,
}

type TItemListaTarefa = {
  arrayTarefas: TTarefa[],
  setTarefas: React.Dispatch<React.SetStateAction<TTarefa[]>>
}

const ItemListaTarefas: React.FC<TItemListaTarefa> = (props) => {
  return (
    <>
      {
        props.arrayTarefas.map(tarefa =>
          <tr key={tarefa.id}>
            <td width="75%"
              style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}
              data-testid="nome-tarefa"
            >
              {tarefa.nome}
            </td>

            <td className="text-right">

              <ConcluirTarefa
                tarefa={tarefa}
                className={tarefa.concluida ? 'hidden' : undefined}
                setTarefas={props.setTarefas}
              />
              &nbsp;
              <A href={`/atualizar/${tarefa.id}`}
                className={tarefa.concluida ? 'hidden' : 'btn btn-warning btn-sem'}
              >
                <FontAwesomeIcon icon={faEdit} />
              </A>
              &nbsp;
              <RemoverTarefas
                tarefaProps={tarefa}
                setTarefas={props.setTarefas}
              />
            </td>
          </tr>,
        )
      }
    </>
  );
};

export default ItemListaTarefas;
