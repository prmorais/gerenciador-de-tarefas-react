import { useContext } from 'react';

import { A } from 'hookrouter';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { GlobalContext } from '../../context/GlobalState';

import ConcluirTarefa from './ConcluirTarefas';
import RemoverTarefas from './RemoverTarefas';

const ItemListaTarefas = () => {
  const { state } = useContext(GlobalContext);
  const { tarefas } = state;

  return (
    <>
      {
        tarefas.map(tarefa =>
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
              />
            </td>
          </tr>,
        )
      }
    </>
  );
};

export default ItemListaTarefas;
